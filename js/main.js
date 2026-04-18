/* =====================================================
   Pine Creek Nature Preschool — main.js
   ===================================================== */

(function () {
  'use strict';

  // ---- Sticky nav ----
  const header = document.getElementById('site-header');

  function updateNav() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run once on load


  // ---- Mobile menu toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function openMenu() {
    navLinks.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when any nav link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu if user clicks outside
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });


  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const observerOptions = {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(function (a) {
          const href = a.getAttribute('href');
          if (href === '#' + id) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });


  // ---- Nav logo reveal when hero logo scrolls out ----
  const heroLogo = document.querySelector('.hero-logo');
  if (heroLogo && header) {
    const heroLogoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            header.classList.remove('hero-logo-hidden');
          } else {
            header.classList.add('hero-logo-hidden');
          }
        });
      },
      { threshold: 0 }
    );
    heroLogoObserver.observe(heroLogo);
  }


  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  // ---- Daily Rhythm tabs ----
  const rhythmTabs = document.querySelectorAll('.rhythm-tab');
  const rhythmPanels = document.querySelectorAll('.rhythm-panel');

  rhythmTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetId = tab.getAttribute('aria-controls');

      rhythmTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      rhythmPanels.forEach(function (p) {
        p.classList.remove('active');
        p.hidden = true;
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(targetId);
      if (panel) {
        panel.classList.add('active');
        panel.hidden = false;
      }
    });
  });


  // ---- Reveal on scroll (simple fade-in) ----
  const revealEls = document.querySelectorAll(
    '.pillar, .program-card, .testimonial, .enrollment-step, .gallery-item, .family-link-card'
  );

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  );

  // Add base styles via JS (keeps CSS clean, no layout shift)
  revealEls.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition =
      'opacity 0.5s ease ' + (i % 4) * 0.1 + 's, transform 0.5s ease ' + (i % 4) * 0.1 + 's';
    revealObserver.observe(el);
  });

  // Apply revealed state
  document.addEventListener('DOMContentLoaded', function () {
    // Inject the .revealed style rule
    const style = document.createElement('style');
    style.textContent = '.revealed { opacity: 1 !important; transform: none !important; }';
    document.head.appendChild(style);
  });

  // Also trigger revealed immediately if element is already in view on load
  setTimeout(function () {
    revealEls.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed');
      }
    });
  }, 100);

  // ---- Contact form (Web3Forms) ----
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const formSubmit = document.getElementById('form-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      formSubmit.disabled = true;
      formSubmit.textContent = 'Sending…';
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      const data = new FormData(contactForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            formStatus.className = 'form-status form-status--success';
            formStatus.textContent = 'Thank you! We’ll be in touch soon.';
            contactForm.reset();
          } else {
            throw new Error(json.message || 'Submission failed.');
          }
        })
        .catch(function (err) {
          formStatus.className = 'form-status form-status--error';
          formStatus.textContent = 'Something went wrong. Please email us directly at pinecreeknatureschool@gmail.com.';
        })
        .finally(function () {
          formSubmit.disabled = false;
          formSubmit.textContent = 'Send Message';
        });
    });
  }

})();

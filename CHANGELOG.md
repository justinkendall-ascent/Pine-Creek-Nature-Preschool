# Changelog

Content and design changes to [www.pinecreeknatureschool.com](https://www.pinecreeknatureschool.com).

Entries are grouped by the date the work was done and, where the change came
from a request by the school, cite the originating email so the source of
truth is traceable. Newest first.

---

## 2026-08-17

### Changed

- **Site address** — the physical/site address is now **42782 Old Souls Drive,
  Baker City, OR**, replacing 42692 Pocahontas Road. Updated in the "Where We
  Meet" paragraph and in the footer `Site:` line. The mailing address (43680
  Pocahontas Rd) is unchanged.
- **Where We Meet map** — the embed now pins by latitude/longitude
  (`44.813448, -117.9689928`) instead of by address query. "42782 Old Souls
  Drive" does not geocode — both Google and OpenStreetMap fail to resolve it —
  so an address-based embed would drop the pin in the wrong place or not at all.
  The coordinates are the farm's own, taken from the map link published on
  oldsoulsfarm.co, and reverse-geocode to Pocahontas Road in Baker City. The
  visible pin location is unchanged from before. A comment in `index.html`
  records this so the query isn't "helpfully" switched back to an address later.

## 2026-07-31

Source: "MORE website changes" (Emily Denne, Jul 31, 2026).

### Changed

- **Where We Meet** — the two heated yurts are now described as planned rather
  than existing: the outdoor classroom "is amidst a grove of willow, cottonwood,
  and alder trees, and will soon include the addition of two heated yurts."
- **Chickadees and Bluebirds** — added the add-on price to the optional-Monday
  note on both program cards: "The cost for each add-on Monday is $30."
- **Daily Rhythm** — Chickadees and Bluebirds subtitles now show Monday in
  parentheses to mark it as optional: `(Mon) / Tues / Wed / Thurs`. Steller's
  Jays is unchanged, as Monday is part of its standard week.
- **Parent Handbook** — replaced with the revised 2026–2027 edition (8 → 7
  pages). Overwritten in place at the same filename so the published link and
  any bookmarks keep working.

## 2026-07-28

Source: "NEW changes to the PCNS website : #1-8" (Jul 26, 2026), superseding the
Jul 17 and Jul 24 requests.

### Added

- Monday to the Chickadees and Bluebirds day lists, with a note that Mondays are
  an optional add-on.
- Oregon State Lottery funding acknowledgement, below the Anthony Lakes
  supporters text.

### Changed

- For Families calendar card now points at the PCNS 2026–27 parent calendar PDF
  instead of the Baker 5J district calendar.
- Chickadees hours: 8:00 am – 11:00 am. Daily rhythm replaced, now Mon–Thurs.
- Bluebirds hours: 1:00 pm – 4:00 pm. Daily rhythm replaced, now Mon–Thurs.
- Our Team reduced to names only, dropping role labels.

## 2026-04-28

### Removed

- Per-class age labels ("Age 3/4/5") from the program cards, daily rhythm
  subtitles, and tuition table. The "Ages 3 – 5" band at the top of the page
  stays; the child-age form placeholder became a generic prompt.
- The "We are a group of dedicated and passionate professionals…" sentence under
  Our Team.

## 2026-04-26

Source: Emily review, April 2026. Merged via PR #1.

### Added

- ALORA supporters banner with logo at the page bottom.
- Testimonial from Tara Phillips; last names added to the Willison, Vaughan, and
  Thayn attributions.
- `.gitignore` to suppress `.DS_Store`.

### Changed

- Mission statement wording.
- Age ranges collapsed to single ages (3, 4, 5) throughout; "6 year olds" removed.
- Team titles updated, class assignments removed.
- Parent Handbook PDF updated to the 2026–2027 edition.
- Testimonial layout fixed to a 2-column grid, avoiding an uneven 3+1 break;
  quote text pinned so attributions align at the card bottom.

### Removed

- Potty-trained language from the About section.
- Unused `newimages/`, `testomonies/`, and `pcns-qr-code*.png` files.

## 2026-04-18

### Added

- Full-width mission banner (logo + quote) between the info band and About.
- Four-image photo strip between About and Programs: nature mandala, hiking, mud
  kitchen, donkeys.
- Testimonials section with quotes from Angela, Allison, and Ericka.
- Tour invite prompt in For Families.
- Low child-to-teacher-ratio line in the Programs lead text.

### Changed

- Hero title set to "Pine Creek Nature School"; Enroll button moved to the
  bottom-left of the hero image.
- Where We Meet restored to the full address.
- Navigation shows the school name alongside the logo on scroll, in dark green
  for legibility against the light nav background.
- About photo swapped to `IMG_3187.jpg`, with `kids-tree.jpg` moved below the
  enrollment leaves photo.

### Removed

- Unused image `IMG_8919.webp`.

---

Earlier commits cover the initial build of the site and are not itemized here.

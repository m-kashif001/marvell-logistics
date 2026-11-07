# Testing checklist

## Static checks

- [ ] Run `node --check js/config.js` and `node --check js/main.js`.
- [ ] Check every relative link and anchor after adding or renaming files.
- [ ] Confirm every content image has descriptive alt text and width/height attributes.
- [ ] Confirm placeholder image files are replaced and credits are recorded.
- [ ] Validate HTML with an HTML validator.
- [ ] Check body text/background pairs for WCAG AA contrast.

## Manual browser checks

Test at 360, 390, 768, 1024 and 1440px widths:

- [ ] No horizontal scrolling.
- [ ] Mobile menu opens, closes, and can be used by keyboard.
- [ ] Skip link and visible focus styles work.
- [ ] FAQ buttons open and close with `aria-expanded` updates.
- [ ] Required form errors are visible and focus moves to the first invalid field.
- [ ] Unconnected form shows the honest setup message and does not claim success.
- [ ] Real form endpoint receives a test submission after setup.
- [ ] Links to privacy, terms, thank-you and 404 pages work.
- [ ] Lighthouse mobile checks are reviewed before launch.

This project has no analytics, cookies, chat widgets or trackers by default.

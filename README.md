# Marvell Logistics website

Plain HTML, CSS and vanilla JavaScript for a GitHub Pages project site. The current working branch is `marvell-website`.

## Edit on Android

1. Open a file in GitHub and tap the pencil icon.
2. Edit only the text or value you need.
3. Tap **Commit changes**.

The most common setup values are in `js/config.js`: official contact details and `FORM_ENDPOINT`. Replace the placeholder form endpoint with a Formspree or Web3Forms endpoint only after creating and testing that service. The form must not be described as connected until a real test submission is received.

## Edit on a laptop

Clone the repository, open it in VS Code, and use Live Server. A simple alternative is `python -m http.server 8000`, then open `http://localhost:8000`.

## GitHub Pages publishing

1. Merge `marvell-website` into `main` after review.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait about 1–2 minutes and open the Pages URL.

This is a project site, so its path includes `/marvell-logistics/` unless a custom domain is configured.

## Custom domain later

Buy or configure the domain with your registrar, add the required DNS records shown by GitHub Pages, then add the domain in **Settings → Pages**. Add a `CNAME` file only when the domain is final. Update the canonical URL, Open Graph URLs, sitemap and robots file at the same time.

## Before you go live

- [ ] Real email, phone, WhatsApp added (or removed)
- [ ] Form service connected and a test submission received
- [ ] Real photos uploaded and credited
- [ ] Transportation attorney reviewed dispatch model, FMCSA broker/agent analysis, contract, fees and website copy
- [ ] Trademark and business-name check done; business entity, insurance and any required state registrations in place
- [ ] Privacy Policy and Terms written by a professional (placeholders replaced)
- [ ] Canonical URL, sitemap and Open Graph URLs updated to the real domain
- [ ] Lighthouse and manual device tests passed

Before accepting clients, have a transportation attorney review the real operating model, fee structure and contract. This is not legal advice. Search USPTO trademark records and state business records before launch because similar names, including “Marvell” in other industries, may cause conflict.

## Important content guardrails

Marvell Logistics is presented as dispatch support for carriers, not as a freight broker, motor carrier or shipper. The site says carriers keep full control of which loads they accept. Do not add claims about guaranteed loads, rates, income, authority, bonding, licenses, owned trucks, employed drivers, carrier networks or shipper-facing freight quotes.

The site has no analytics, cookies, chat widgets or trackers by default. If any are added later, update the privacy policy and review whether a consent notice is required.

See `TESTING.md` for static and manual checks. See `assets/img/CREDITS.md` for image replacement and credit instructions.

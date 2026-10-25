# Free Learning Resources

A styled, accessible, and easy-to-share directory of free learning from official university sources. It is designed for free hosting on GitHub Pages and distinguishes genuinely free materials from courses where learning is free but certificates or graded features may cost extra.

## Run locally

You need Node.js 20 or later.

```bash
pnpm install
pnpm dev
```

Create a production build with `pnpm build`. The generated site is written to `dist/`.

## Maintain the catalog

All listings live in `src/catalog.json`. Add or edit an object there; the subject dropdown is generated automatically from the `subjects` arrays.

Each listing should:

- link directly to an official university source;
- describe free access precisely (`Completely free`, `Free learning`, `Free to audit`, or a clearly labeled mixed catalog);
- state separately whether a certificate is available or costs extra;
- use `kind: "portal"` for university-wide catalogs and `kind: "course"` for individual courses.

Check links and access terms periodically because course platforms change their pricing and enrollment rules.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its default branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. The included workflow will build and deploy the site after each push to `main`. It can also be run manually from the Actions tab.

Vite uses a relative production base, so the site works for both user/organization pages and repository pages without hard-coding the repository name.

## Accessibility

The site uses semantic landmarks, keyboard-visible focus styles, a skip link, labeled controls, live result counts, mobile navigation, and reduced-motion support. Please preserve these behaviors when changing the design.

## License

Directory code and original copy may be reused under the MIT License. University names and course materials belong to their respective institutions.

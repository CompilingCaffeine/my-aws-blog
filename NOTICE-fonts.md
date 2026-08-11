# Third-party fonts

The site self-hosts the Geist type family instead of loading it from a font CDN.

| File | Source | Version | License |
|---|---|---|---|
| `static/fonts/Geist-Variable.woff2` | `Geist/webfonts/Geist[wght].woff2` from the official [`vercel/geist-font`](https://github.com/vercel/geist-font) release | v1.7.2 | SIL Open Font License 1.1 |
| `static/fonts/GeistMono-Variable.woff2` | `GeistMono/webfonts/GeistMono[wght].woff2` from the same release | v1.7.2 | SIL Open Font License 1.1 |

The full license text ships alongside the fonts at `static/fonts/OFL.txt`, which
is published at `/fonts/OFL.txt`, satisfying the OFL requirement that the
licence accompany the font software.

Both files are the upstream variable (`wght` axis) roman webfonts, unsubsetted:
subsetting would add a Python/`fonttools` dependency that neither the Vercel
`build.sh` nor the GitHub Actions job installs. Italic faces are not shipped;
italic text is synthesised by the browser from the variable roman face.

Declared in `assets/css/blog.css` with `font-display: swap`; the sans face is
preloaded from `layouts/_partials/head.html`.

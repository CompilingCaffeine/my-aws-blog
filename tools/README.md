# tools/

Not part of the Hugo build. Kept so checked-in assets can be regenerated.

## `og-default.source.html`

Source for `static/og-default.png`, the 1200×630 default social card. It uses
the light theme's warm paper, the graph grid, one outlined panel, the coloured
window dots, the `LH` mark, `lazare.exe / blog`, the blog description and
`blog.herzi.ai` — no extra illustration or marketing copy.

Regenerate with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 \
  --screenshot="static/og-default.png" \
  "file://$PWD/tools/og-default.source.html"
```

Post-specific images can override it later via front matter; nothing here
depends on that.

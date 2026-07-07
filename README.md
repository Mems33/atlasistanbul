# ATLAS — Istanbul

Concept site for a private members' club in Istanbul. Static, no build step,
no backend — the two forms (membership application, nomination) are visual-only.

## Structure

```
index.html          Markup only (bilingual EN/TR via data-i18n attributes)
css/
  styles.css        Base styles: layout, sections, tiers, overlays, forms
  lux.css           "Lux layer": preloader, scroll progress, grain, cursor, tilt
js/                 Plain scripts, loaded in order (order matters — later
                    files wrap functions defined in earlier ones)
  i18n.js           Language state + EN/TR dictionary + setLang()
  nav.js            Sticky nav state, mobile menu, scroll-reveal observer
  map.js            Interactive SVG constellation map + ambient rotation
  journey.js        Goal tabs, season spines, track bars
  dossier.js        Count-up counters, dossier rails, founding-member bar
  forms.js          Application overlay (5 steps), nomination, dashboard preview
  init.js           First render + setLang wrapping
  lux.js            Delegated click actions, hero split-text, preloader,
                    parallax, marquee lean, custom cursor, magnetic buttons,
                    card spotlight, dossier tilt
```

The JS files are sequential slices of what was one inline script. They share
top-level scope, so load order in `index.html` must not change.

## Run locally

Any static server works:

```
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy to Vercel

One-time setup, then a single command per deploy:

```
npm i -g vercel      # or use npx vercel
vercel               # first run: log in, accept defaults → preview URL
vercel --prod        # production URL
```

Or connect the GitHub repo at https://vercel.com/new for automatic deploys
on every push. There is no build step — Vercel serves the files as-is
(`vercel.json` pins `framework: null`).

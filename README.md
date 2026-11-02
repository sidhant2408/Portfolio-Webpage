# Sidhant Singh – Portfolio

Static site: plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run locally
Option 1: double-click `index.html`.
Option 2 (recommended): serve the folder
- Python: `python -m http.server 8000` then open http://localhost:8000
- Node: `npx serve .`
- VS Code: "Live Server" extension

## Structure
- `index.html` – content (edit text, links, projects here)
- `css/style.css` – design tokens (colours at top in `:root`), layout, animations
- `js/script.js` – theme toggle, typing effect, particles, carousel, tabs
- `assets/images/` – put your photo/screenshots here

## Customise
- Colours: change `--a` and `--b` in `css/style.css`
- Typing roles: `roles` array in `js/script.js`
- Add a résumé button: put `resume.pdf` in the folder and add
  `<a class="btn s" href="resume.pdf" download>Download résumé</a>` in the hero

## Deploy free
GitHub Pages, Netlify or Vercel: upload the folder as-is.

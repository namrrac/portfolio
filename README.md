# Jason Carr — Portfolio

A four-page static portfolio built for **GitHub Pages**. No build step, no dependencies,
no framework. Edit the HTML and CSS directly and push.

```
index.html      Home — hero, selected work, what I do
projects.html   Work — full project grid
about.html      About — bio, tools, facts
contact.html    Contact — email, availability
404.html        Not-found page (GitHub Pages serves this automatically)
css/style.css   All styling. Start with the :root tokens.
js/main.js      Theme toggle, mobile menu, active nav, scroll reveal
.nojekyll       Tells GitHub Pages to serve files as-is (no Jekyll processing)
```

## 1. Make it yours

The live site is already personalised for **Jason Carr** — these are the values in place:

| Value | Where |
|---|---|
| `Jason Carr` | Every page, `<title>`, brand, footer |
| `namrrac@gmail.com` | Footers, contact page |
| `https://github.com/namrrac` | Footers, about, contact |
| `https://x.com/norcalhiker` | Footers, about, contact |
| `Humboldt County` | `about.html` |

Still worth replacing: the **project cards** in `index.html` and `projects.html` (titles,
descriptions, tags, and the `#anchor` links), plus the "Available for select projects" /
"from January" availability copy.

Other nice-to-haves:

- Add a real social preview image (`og-image.png`, 1200×630) and point `og:image` at it.
- Swap the CSS-gradient card covers for screenshots: `<img src="assets/atlas.jpg" alt="">` inside `.cover`.
- Change the accent colour: edit `--accent` in `css/style.css` (`#b8451f` is the warm terracotta).

Preview locally by opening `index.html` in a browser — everything works over `file://`.

## 2. Publish to GitHub Pages

**Already done:** repo is `github.com/namrrac/portfolio`, remote `origin` is set, and `main`
is pushed. The one remaining step is turning Pages on:

1. Repo → **Settings** → **Pages**
2. Under *Build and deployment* → *Source*, choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → **Save**

Your site will be at **https://namrrac.github.io/portfolio/**. Every later `git push` to
`main` republishes automatically.

If you ever need to re-point the remote:

```powershell
git remote set-url origin https://github.com/namrrac/portfolio.git
```

## 3. After it's live

- **Custom domain:** Settings → Pages → *Custom domain*. Add a `CNAME` file with your
  domain, then point a `CNAME` DNS record at `<your-username>.github.io`.
- **Contact form:** Pages is static, so there's no server. Use a form endpoint from
  Formspree or Netlify Forms and `action` it from a `<form>`, or just keep the `mailto:` link.
- **Before sharing:** update the `og:` tags per page so link previews look right.

## Notes

- `.nojekyll` matters: without it, Jekyll ignores files and folders starting with `_`,
  and can slow builds. It's already here.
- HTTPS is automatic on `*.github.io`.
- Sites are public. Private Pages requires a paid plan.

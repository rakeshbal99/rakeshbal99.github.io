# AGENTS.md

Context for AI coding agents (Claude Code or otherwise) working in this repository. Written to
let an agent understand the repo quickly without exploring the whole tree first.

Personal Jekyll site for Rakesh Bal, hosted on GitHub Pages. Content types: blog posts, poems,
a photo gallery, CV/resume, research projects.

**Tech stack:** Jekyll 3.10+, Markdown + Liquid templates, CSS3 with custom properties, vanilla
JS (theme switcher only), Atom feed via `jekyll-feed`. GitHub Pages builds with the
`github-pages` gem, which only allows a small whitelist of plugins (`jekyll-feed`,
`jekyll-seo-tag` here) — no custom build-time plugins, no server-side image processing.

## Directory layout

```
/
├── _config.yml           # Jekyll configuration (collections, plugins)
├── _layouts/             # Page templates
│   ├── default.html      # Base layout (head, header, footer, theme-switcher script)
│   ├── home.html         # Homepage
│   ├── page.html         # Static pages (About, CV, Research, Photos, etc.)
│   ├── post.html         # Blog posts
│   └── poem.html         # Poems (adds a drop-cap on the first letter)
├── _includes/
│   ├── head.html         # Meta tags, Google Fonts, SEO
│   ├── header.html       # Nav bar, loops over _data/navigation.yml
│   ├── footer.html       # Contact info, social links, dark-mode toggle
│   └── social-icons.html # Inline SVG icons, selected by `icon` name
├── _data/
│   ├── navigation.yml    # Nav menu items ({title, url})
│   ├── social.yml        # Social profiles ({name, username, url, icon})
│   └── photos.yml        # Photo gallery entries (see below)
├── _posts/                # Blog posts, YYYY-MM-DD-title.md
├── _poems/                # Poems collection, YYYY-MM-DD-title.md
├── assets/
│   ├── css/main.css      # All styles, incl. CSS custom properties for light/dark theme
│   ├── js/theme-switcher.js
│   ├── images/gallery/
│   │   ├── full/          # ~2200px web-viewing copies, one per gallery photo
│   │   └── thumbs/        # ~500px grid thumbnails, one per gallery photo
│   ├── cv_short.pdf       # Current CV (+ cv_enhanced.tex, cv_long.pdf)
│   └── previous_cvs/      # CV archive
├── index.html             # Homepage
├── archive.html           # Blog listing
├── poems.html             # Poems listing
├── photos.md              # Photo gallery page (loops over _data/photos.yml)
├── about.md               # Bio page
├── cv.md                  # CV page
├── research.md            # Research projects
└── ai-blogs.md             # AI resource links
```

## Key files

| File | Purpose |
|------|---------|
| `_config.yml` | Jekyll settings, collections, plugins |
| `_data/navigation.yml` | Nav menu structure |
| `_data/social.yml` | Social profiles (GitHub, LinkedIn, Letterboxd, Scholar, Instagram) |
| `_data/photos.yml` | Photo gallery entries, grouped/rendered by `trip` field |
| `assets/css/main.css` (top of file) | CSS custom properties for light/dark themes |
| `assets/js/theme-switcher.js` | Theme toggle + localStorage persistence |

## Commands

```bash
bundle install           # install dependencies (one-time)
bundle exec jekyll serve # serve locally with live reload at localhost:4000
bundle exec jekyll build # build static files into _site/

# Deploy: GitHub Pages auto-builds on push to master
git add . && git commit -m "..." && git push origin master
```

## Content conventions

- **Blog post:** `_posts/YYYY-MM-DD-title.md`, front matter `layout: post`, `title`, `date`.
- **Poem:** `_poems/YYYY-MM-DD-title.md`, front matter `layout: poem`, `title`, `date`,
  `description`. Use trailing double-space (hard line break) between verse lines within a
  stanza, blank line between stanzas — kramdown otherwise merges lines into one paragraph.
- **Photo gallery:** see the "Adding a photo to the gallery" workflow below.
- **Standalone pages** (`about.md`, `cv.md`, `research.md`, `photos.md`): front matter
  `layout: page`, `title`, usually an explicit `permalink`. Raw HTML can be embedded directly
  in these Markdown files (e.g. `photos.md`'s `<div class="photo-grid">` loop, `cv.md`'s
  `.cv-links` row) since kramdown passes untouched HTML blocks through — but every line of a
  mixed HTML/Liquid block must start at column 0, since 4-space indentation makes kramdown
  treat it as a literal code block instead of executing it.
- **Nav:** add an entry to `_data/navigation.yml` ({title, url}); `_includes/header.html`
  renders it automatically.

### Adding a photo to the gallery

1. Pick a source photo, generate both a full-size and thumbnail copy locally with `sips`
   (GitHub Pages has no build-time image processing, so this must happen before committing):
   ```bash
   sips -Z 2200 -s formatOptions 88 <source.jpg> --out assets/images/gallery/full/NNN-slug.jpg
   sips -Z 500  -s formatOptions 80 <source.jpg> --out assets/images/gallery/thumbs/NNN-slug.jpg
   sips -g pixelWidth -g pixelHeight assets/images/gallery/thumbs/NNN-slug.jpg
   ```
2. Add an entry to `_data/photos.yml`:
   ```yaml
   - thumb: /assets/images/gallery/thumbs/NNN-slug.jpg
     full: /assets/images/gallery/full/NNN-slug.jpg
     alt: "Description of the photo"
     trip: "Trip Name"   # photos are grouped into a <h2> section per distinct trip value
     width: 400            # thumbnail pixel width (for layout-shift prevention)
     height: 500           # thumbnail pixel height
     focus: top             # optional, maps to CSS object-position; default "center"
   ```
3. The photo appears automatically on `/photos`, grouped under its `trip` heading, in the
   order entries appear in the file (entries with the same `trip` value must be kept
   contiguous, or the same trip name will render as two separate sections).

Never commit raw camera originals directly — a Sony A6700 JPEG is ~12-15MB; at dozens of
photos that adds up fast. The `-Z 2200` full copy keeps each photo ~500KB-1.5MB.

## Theming

Light/dark themes via CSS custom properties: `:root` for light, `[data-theme="dark"]` for
dark, both near the top of `assets/css/main.css`. Default is dark mode for new visitors.
Toggle lives in the footer, persists via `localStorage` (`assets/js/theme-switcher.js`).
When adding new colors, prefer a literal hex value only when something must look the same
regardless of theme (e.g. the photo gallery's white frame, meant to look like a physical
print); otherwise add a new CSS variable to both theme blocks.

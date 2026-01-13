# CLAUDE.md - rakeshbal99.github.io

## Project Overview

Personal portfolio and blog for Rakesh Bal (MLOps Engineer). Static site hosted on GitHub Pages at `https://rakeshbal99.github.io/`.

**Content types:** Blog posts, poems, CV/resume, research projects

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (hand-authored) |
| Styling | CSS3 with custom properties |
| JavaScript | Vanilla JS (theme switcher only) |
| Static Gen | Jekyll 3.7.4 (optional, for local preview) |
| Hosting | GitHub Pages |
| Feed | RSS 2.0 |

## Directory Structure

```
/
├── index.html          # Homepage
├── about.html          # Bio page
├── archive.html        # Blog listing
├── poems.html          # Poetry collection
├── cv.html             # CV page with PDF links
├── research.html       # Research projects
├── ai-blogs.html       # AI resource links
├── feed.xml            # RSS feed
├── index.js            # Theme switcher (23 lines)
├── css/
│   └── main.css        # All styles (750 lines)
├── assets/
│   ├── profile.jpg     # Current profile image
│   ├── cv_short.pdf    # Current CV
│   └── previous_cvs/   # CV archive
└── YYYY/MM/DD/         # Blog posts by date
    └── Post-Title.html
```

## Key Files

| File | Purpose |
|------|---------|
| `css/main.css:1-60` | CSS variables for light/dark themes |
| `css/main.css:70-120` | Base layout and typography |
| `index.js:1-23` | Theme toggle + localStorage persistence |
| `feed.xml` | RSS feed configuration |

## Commands

### Local Development (optional)

```bash
# Install Jekyll (one-time)
gem install jekyll bundler

# Serve locally
jekyll serve

# Build static files
jekyll build
```

### Deployment

```bash
# Direct push to deploy (GitHub Pages auto-builds)
git add .
git commit -m "Description"
git push origin master
```

No build step required - GitHub Pages serves HTML directly.

## Content Management

### Adding a Blog Post

1. Create file at `YYYY/MM/DD/Post-Title.html`
2. Copy structure from existing post (e.g., `2025/02/21/Memoirs-Of-A-Callous-Coward.html`)
3. Update `archive.html` with link to new post
4. Add to `feed.xml` if desired

### Adding a Poem

1. Create file at `YYYY/MM/DD/Poem-Title.html`
2. Add entry to `poems.html` under appropriate year section

### Updating CV

1. Replace `assets/cv_short.pdf` with new version
2. Move old version to `assets/previous_cvs/` with version number

## Theming

Site supports light/dark modes via CSS custom properties.

- **Light theme:** `:root` variables in `css/main.css:1-30`
- **Dark theme:** `[data-theme="dark"]` in `css/main.css:31-60`
- **Toggle logic:** `index.js` (reads OS preference, persists to localStorage)

## Navigation Structure

All pages share header navigation defined inline:
- About (`about.html`)
- Blog (`archive.html`)
- Poems (`poems.html`)
- CV (`cv.html`)
- Research (`research.html`)

Mobile: Hamburger menu at `<600px` breakpoint.

## Important Conventions

1. **No frameworks** - Vanilla HTML/CSS/JS only
2. **Date-based URLs** - Blog posts use `/YYYY/MM/DD/Title.html` format
3. **Kebab-case filenames** - `Post-Title.html`
4. **Relative paths** - All internal links use relative paths
5. **SEO metadata** - Jekyll SEO tags in every page head

## Additional Documentation

Consult these files for specialized topics:

| Topic | File |
|-------|------|
| Architectural patterns | `.claude/docs/architectural_patterns.md` |

### When to Reference

- **architectural_patterns.md** - When modifying page structure, theming, responsive design, or understanding site conventions

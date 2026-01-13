# Architectural Patterns

This document describes the design patterns and conventions used throughout rakeshbal99.github.io.

## Page Structure Pattern

All HTML pages follow a consistent structure:

```
doctype → html → head (SEO metadata) → body → header → nav → main content → footer
```

**Reference:** See `index.html:1-50` for the canonical header/nav pattern, replicated across all pages.

### Components
- **Header:** Site title linking to index.html + navigation menu
- **Navigation:** 5 main pages (About, Blog, Poems, CV, Research)
- **Footer:** Contact emails + GitHub link
- **Wrapper:** `.wrapper` class constrains content width

## CSS Theming Pattern

Uses CSS custom properties (variables) for light/dark theme support.

**Reference:** `css/main.css:1-30` (light theme variables), `css/main.css:31-60` (dark theme overrides)

### Implementation
1. `:root` defines default (light) theme variables
2. `[data-theme="dark"]` selector overrides for dark mode
3. All color values reference variables (e.g., `var(--bg-color)`)

### Key Variables
- `--bg-color` - Page background
- `--font-color` - Primary text
- `--anchor-color` - Links
- `--site-title-color` - Header title
- `--post-title-color` - Post/page titles

## Theme Switching Pattern

JavaScript-based theme toggle with localStorage persistence.

**Reference:** `index.js:1-23`

### Flow
1. On page load: Check `localStorage.getItem('theme')` and OS preference
2. Apply theme via `document.documentElement.setAttribute('data-theme', theme)`
3. On toggle: Update attribute + persist to localStorage

## Responsive Design Pattern

Mobile-first CSS with breakpoints for progressive enhancement.

**Reference:** `css/main.css:70-120` (base layout), `css/main.css:600-700` (media queries)

### Breakpoints
- `800px` - Content max-width constraint
- `600px` - Mobile navigation (hamburger menu), reduced font sizes

### Techniques
- CSS `calc()` for fluid padding: `calc((100% - 800px) / 2)`
- Percentage-based widths with max-width constraints
- Font-size scaling for headings on mobile

## Blog Content Organization

Date-based directory hierarchy for blog posts and poems.

### Structure
```
/YYYY/MM/DD/Post-Title.html
```

**Example:** `2025/02/21/Memoirs-Of-A-Callous-Coward.html`

### Listing Patterns
- `archive.html` - Chronological blog listing
- `poems.html` - Poetry collection grouped by year
- `feed.xml` - RSS 2.0 feed with recent items

## SEO Metadata Pattern

Jekyll SEO tag generates consistent metadata across all pages.

**Reference:** Any page head section (e.g., `index.html:10-40`)

### Includes
- OpenGraph tags (`og:title`, `og:type`, etc.)
- JSON-LD structured data (`@type: WebSite`)
- Canonical URL
- RSS feed reference
- Favicon link

## Syntax Highlighting Pattern

Pygments-based code highlighting with extensive CSS classes.

**Reference:** `css/main.css:500-590` (`.highlight` styles)

### Supported Elements
- Comments (`.c`, `.cm`, `.c1`)
- Keywords (`.k`, `.kd`, `.kn`)
- Strings (`.s`, `.s1`, `.s2`)
- Numbers (`.m`, `.mi`, `.mf`)
- Functions (`.nf`, `.nc`)

## Asset Organization

Static assets organized by type in `/assets/`.

### Structure
- Root: Current profile images, CVs, favicon
- `previous_cvs/` - Archived CV versions
- `other_photos/` - Additional images

### Naming Conventions
- CVs: `cv_short.pdf` (current), `cv_shortN.pdf` (archived versions)
- Images: Descriptive kebab-case names

## No-Framework Philosophy

This site deliberately avoids JavaScript frameworks and build tools.

### Rationale
- Minimal dependencies = easier maintenance
- Fast page loads (no JS bundle)
- GitHub Pages compatible (no build step required)
- Content-focused (HTML is the source of truth)

### Exceptions
- `index.js` - 23-line theme switcher (only JS on site)
- Jekyll - Optional local preview (not required for deployment)

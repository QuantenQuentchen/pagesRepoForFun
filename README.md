## Overview
This is a self-contained HTML-based archive system designed for storytelling and roleplay purposes. It features a collapsible sidebar navigation, futuristic sci-fi governmental aesthetic, and a consistent template system for easy content creation.

## File Structure
```
stellar-archives/
├── index.html              # Main landing page
├── styles.css              # All styling (futuristic theme)
├── navigation.js           # Sidebar collapse/expand logic
├── page-template.html      # Template for creating new pages
├── pages/                  # Directory for content pages
│   ├── mission.html        # Example page (Mission & Charter)
│   └── early-revolution.html  # Example page (Historical content)
└── README.md              # This file
```

## Features
- **Collapsible Sidebar**: Icons-only when collapsed, expands on hover to show full text
- **Category Organization**: Hierarchical navigation with collapsible sections
- **Consistent Styling**: Professional governmental archive aesthetic
- **Responsive Design**: Works on different screen sizes
- **No Backend Required**: Pure HTML/CSS/JS, runs locally

## How to Use

### 1. Opening the Archive
Simply open `index.html` in any modern web browser. All files work locally without a server.

### 2. Creating New Pages
1. Copy `page-template.html`
2. Rename it (e.g., `new-document.html`)
3. Place it in the `pages/` directory
4. Edit the content:
   - Update `<title>` tag
   - Update `.document-title`
   - Update `.document-meta` (classification, dates, etc.)
   - Replace content in `.document-content` section
5. Add a link to your new page in the sidebar navigation

### 3. Adding Navigation Links
To add your new page to the sidebar, edit both:
- `index.html` (main page sidebar)
- All existing pages in `pages/` directory (to keep navigation consistent)

Find the appropriate category in the sidebar and add:
```html
<a href="pages/your-page.html" class="nav-item nav-child">
    <span class="nav-text">Your Page Title</span>
</a>
```

### 4. Creating New Categories
To add a new sidebar category:
```html
<div class="nav-category" data-category="unique-id">
    <div class="nav-item nav-parent">
        <svg class="nav-icon" width="20" height="20" viewBox="0 0 20 20">
            <!-- SVG icon here -->
        </svg>
        <span class="nav-text">Category Name</span>
        <svg class="nav-arrow" width="12" height="12" viewBox="0 0 12 12">
            <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
    </div>
    <div class="nav-children">
        <a href="pages/page1.html" class="nav-item nav-child">
            <span class="nav-text">Subcategory 1</span>
        </a>
        <!-- Add more subcategories -->
    </div>
</div>
```

## Content Formatting

### Available HTML Elements
- `<h2>` - Main section headings
- `<h3>` - Subsection headings
- `<p>` - Regular paragraphs
- `<strong>` - Bold/emphasis
- `<em>` - Italics/technical terms (renders in accent color)
- `<code>` - Inline code/technical identifiers
- `<blockquote>` - Highlighted quotes
- `<ul>` / `<ol>` - Lists (bullet and numbered)

### Classification Tags
```html
<span class="classification classification-public">PUBLIC</span>
<span class="classification classification-restricted">RESTRICTED</span>
<span class="classification classification-classified">CLASSIFIED</span>
```

### Data Tables
```html
<table class="data-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
    </tbody>
</table>
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-bg: #0a0e1a;      /* Main background */
    --primary-accent: #4a9eff;   /* Accent color (blue) */
    --text-primary: #e8edf5;     /* Main text color */
    /* ... etc */
}
```

### Typography
The system uses:
- **Orbitron**: Display font (headings)
- **Barlow**: Body text
- **Share Tech Mono**: Monospace (metadata, codes)

To change fonts, update the `@import` statement and CSS variables in `styles.css`.

### Sidebar Behavior
Edit in `styles.css`:
```css
--sidebar-collapsed: 72px;   /* Width when collapsed */
--sidebar-expanded: 280px;   /* Width when expanded */
```

## Distribution
To share with other players:
1. Zip the entire `stellar-archives/` folder
2. Share the zip file
3. Recipients unzip and open `index.html` in their browser

All files are self-contained with no external dependencies (except Google Fonts, which are optional).

## Technical Notes
- **Browser Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- **No Installation Required**: Just unzip and open
- **No Internet Required**: Works completely offline (except for fonts)
- **File Paths**: Uses relative paths, so the folder structure must be maintained

## Tips for Content Creation
1. Start with the template - don't build pages from scratch
2. Keep the sidebar navigation identical across all pages for consistency
3. Use the classification tags appropriately for your lore
4. Fill in metadata (dates, document IDs) to maintain the archive aesthetic
5. Use tables for structured data (timelines, comparisons, statistics)
6. Keep paragraphs relatively short for readability on screens

## Need Help?
- Check `page-template.html` for structure reference
- Look at example pages (`mission.html`, `early-revolution.html`) for formatting examples
- All styling is in `styles.css` - search for class names to understand what styles apply

---

**Archive Version**: 1.0  
**Last Updated**: 2429.01.27  
**Maintained by**: Stellar Archives Division

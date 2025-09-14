# Canvas Integration Documentation

## Overview

This document describes how Obsidian Canvas files have been integrated into this Quartz site, allowing interactive visual knowledge maps to be viewed alongside traditional markdown content.

## Files and Structure

### Source Files (in `content/`)
- `1a.ultrainsync.html` - Exported Canvas HTML file from Obsidian
- `site-lib/` - Supporting assets for the Canvas
  - `styles/` - CSS files for Canvas styling
  - `scripts/` - JavaScript files for Canvas interactivity  
  - `fonts/` - Font files used by Canvas
  - `media/` - Images and icons
- `canvas-ultrainsync.md` - Markdown page that links to and describes the Canvas

### Built Files (in `public/`)
- `1a.ultrainsync` - Canvas HTML (Quartz removes .html extension)
- `site-lib/` - All supporting assets (copied by Assets plugin)
- `canvas-ultrainsync.html` - Generated HTML for the descriptor page

## How It Works

1. **Assets Plugin**: Quartz's Assets plugin automatically processes HTML files in the content directory and copies them to the public directory along with their dependencies.

2. **Clean URLs**: Quartz removes the `.html` extension from HTML files for clean URLs (e.g., `1a.ultrainsync.html` becomes `1a.ultrainsync`).

3. **Relative Paths**: The Canvas HTML uses `<base href=".">` so all asset references work correctly when both the HTML file and `site-lib/` are in the same directory.

4. **Interactive Features**: All Canvas functionality is preserved - zooming, panning, node interactions, etc.

## Access Points

- **Direct Link**: Visit `/1a.ultrainsync` to view the Canvas directly
- **Descriptor Page**: Visit `/canvas-ultrainsync` for information and a link to the Canvas
- **From Index**: The Canvas can be linked from other pages using standard markdown links

## Integration Process

1. Export Canvas from Obsidian using a Canvas-to-HTML plugin
2. Place the exported HTML file and `site-lib/` assets in the `content/` directory
3. Create a markdown page that links to and describes the Canvas
4. Build the site with `npx quartz build` - Quartz handles the rest automatically

## Benefits

- **Seamless Integration**: Canvas appears as part of the knowledge base
- **Preserved Functionality**: All interactive features work
- **No Code Required**: Uses Quartz's built-in asset processing
- **Clean URLs**: Canvas integrates with Quartz's URL structure
- **Mobile Friendly**: Canvas scales appropriately for different devices

## Future Improvements

- Add more Canvas files by repeating the process
- Create a dedicated Canvas index page linking to multiple Canvases
- Add Canvas thumbnails to the descriptor pages
- Integrate Canvas content into the site's search functionality
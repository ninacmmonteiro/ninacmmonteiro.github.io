# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages static website for Nina Monteiro, a certified full-spectrum doula. The site is built as a single-page application using vanilla HTML, CSS, and JavaScript with no build process or dependencies.

## Architecture

- **Single File Structure**: The entire website is contained in `index.html` with embedded CSS and JavaScript
- **Static Hosting**: Designed for GitHub Pages deployment at `ninacmmonteiro.github.io`
- **No Build Process**: Pure HTML/CSS/JS with no compilation, bundling, or package management
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Interactive Elements**: JavaScript-powered carousel, form handling, and scroll animations

## Key Features

- **Services Carousel**: Auto-advancing slide show for doula services
- **Contact Form**: Client-side form with submission simulation (no backend)
- **Scroll Animations**: Intersection Observer API for fade-in effects
- **Moon Phase Animation**: CSS animations for thematic lunar cycles
- **Glass Morphism Design**: Backdrop blur effects and gradient styling

## Development Workflow

- **Branching**: Work on feature branches and merge to main, not directly on main
- **Deployment**: Automatic via GitHub Pages when pushing to main branch

## Development Commands

Since this is a static site with no build process:

- **Local Development**: `python3 -m http.server` or `live-server .` for local server
- **No Testing Framework**: No automated tests configured
- **No Linting**: No linting tools configured

## Design Direction

The site is currently a POC that is being revamped with an updated look and feel. The design inspiration is based on `design-inspiration.png` which features:
- Dark/earthy color palette with cream/beige accents
- Elegant typography with serif fonts
- Moon phase imagery and celestial themes
- Minimalist illustrations of pregnancy/motherhood
- Professional yet warm aesthetic

## File Structure

```
/
├── README.md                # Basic project description
├── index.html              # Complete website (HTML + CSS + JS)
├── design-inspiration.png  # Design reference image
└── CLAUDE.md              # This file
```

## Code Style Notes

- Uses semantic HTML5 elements
- CSS follows BEM-like methodology for class naming
- JavaScript uses modern ES6+ features (arrow functions, const/let)
- Embedded SVG for pregnancy silhouette icon
- Lorem ipsum placeholder content throughout
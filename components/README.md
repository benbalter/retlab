# React Components

This directory contains the React components that make up the Retlab theme.

## Components

### Layout Components

- **Layout.tsx** - Main layout wrapper that includes navigation and footer
- **Nav.tsx** - Navigation bar with responsive mobile menu
- **Footer.tsx** - Footer with links and RSS feed icon

### Content Components

- **PostLayout.tsx** - Layout for blog posts with metadata, reading time, and edit button
- **MiniBio.tsx** - Author bio section with avatar and description
- **ReadingTime.tsx** - Calculates and displays estimated reading time

### Client Components

- **ClientScripts.tsx** - Client-side functionality including:
  - FontAwesome icon initialization
  - AnchorJS for heading anchors
  - Bootstrap tooltip initialization
  - 404 page suggestions using Levenshtein distance

## Usage

These components are used by the Next.js pages in the `app/` directory. The site is built as a static export using Next.js's Static Site Generation (SSG).

## Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
```

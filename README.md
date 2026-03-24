# Gatsby Tutorial Tour

A travel tour browsing application built with Gatsby and React. Users can explore a catalog of tours sourced from Contentful CMS, view tour details including pricing, location, duration, and daily schedules, and browse an image gallery with optimized loading. The project was originally created as a hands-on learning exercise to explore core Gatsby concepts like GraphQL data fetching, dynamic page generation, image optimization, and different CSS approaches in a single codebase.

## Tech Stack

- **Framework:** Gatsby 2 (React 16)
- **CMS:** Contentful (headless)
- **Data Layer:** GraphQL
- **Styling:** Bootstrap, CSS Modules, styled-components, SCSS
- **Image Handling:** gatsby-image with Sharp
- **Icons:** react-icons (Font Awesome)

## Features

- Contentful CMS as data source for tours
- Dynamic page generation from CMS content
- Image optimization with gatsby-image
- GraphQL data querying (page queries, static queries, useStaticQuery hook)
- Multiple styling: Bootstrap, CSS Modules, styled-components, SCSS
- Responsive grid layouts

## Getting Started

1. **Install dependencies**

   ```shell
   npm install
   ```

2. **Set up environment variables**

   Create a `.env.development` file with your Contentful credentials:

   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

3. **Start developing**

   ```shell
   npm start
   ```

   The site runs at `http://localhost:8000`.

## Project Structure

```
src/
  pages/        - Route pages (home, blog, tours, images, etc.)
  components/   - Reusable components (Layout, Navbar, Tours)
  templates/    - Dynamic page templates (tour detail)
  css/          - CSS Module stylesheets
  sass/         - SCSS stylesheets
static/         - Static assets (images, favicon)
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Production build
- `npm run serve` - Serve production build locally
- `npm run clean` - Clear Gatsby cache
- `npm run format` - Format code with Prettier

## License

0BSD

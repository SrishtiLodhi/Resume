# Srishti Lodhi, portfolio

React 18, TypeScript and Vite. One page, light and dark themes, no runtime dependencies beyond React.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then writes dist/
npm run preview  # serves the production build locally
```

## Edit the content

Everything shown on the site lives in `src/data.ts`, typed by `src/types.ts`. Change a string, add an item to
`engagements` or `projects`, and the page updates. To add a project filter, add the tag to the `Tag` type in
`src/types.ts` and to `projectTags` in `src/data.ts`.

## Structure

```
src/
  data.ts            all content
  types.ts           shared types
  App.tsx            page composition
  components/        Header, Hero, Overview, Experience, Projects, Skills, Education, Contact, Section
  hooks/useTheme.ts  light/dark toggle, remembers the choice
  styles.css         design tokens and layout
```

## Deploy

`npm run build` produces a static `dist/` folder with relative asset paths, so it works on any static host.

- **Vercel or Netlify:** import the repository. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** push the contents of `dist/` to a `gh-pages` branch, or publish it with a GitHub Actions workflow.

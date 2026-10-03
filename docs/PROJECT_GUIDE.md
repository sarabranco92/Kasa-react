# Kasa-react — project guide

React rental-listing frontend with local JSON data, listing cards, image carousels, ratings, collapsible sections and an error page.

## Scope and source

This guide describes the default branch `main` reviewed on 3 October 2026. Commands were checked against committed manifests and configuration; applications and external integrations were not executed as part of this documentation update.

## Repository map

- `src/App.jsx`
- `src/data/logement.json`
- `src/data/about.json`
- `src/pages/logement/fiche_log.jsx`
- `src/components/carousel/carousel.jsx`
- `src/styles/App.scss`

## Prerequisites and local use

Clone the repository and enter its root directory:

```sh
git clone https://github.com/sarabranco92/Kasa-react.git
cd Kasa-react
```

Install Node.js and npm compatible with the committed dependencies. A fresh install/build has not established an exact supported Node version for this repository. Keep the committed lockfile and do not mix npm and Yarn lockfile updates unintentionally.

```sh
npm install
npm start
```

The React development server normally opens http://localhost:3000. See the configuration notes below before trying integrations.

## Available npm scripts

From the repository root unless a directory is explicitly specified. These are existing commands, not evidence of a successful run.

| Command | Committed behavior |
| --- | --- |
| `npm start` | `react-scripts start` |
| `npm run build` | `react-scripts build` |
| `npm test` | `react-scripts test` |

`eject` is intentionally omitted from setup: it permanently exposes the Create React App configuration and is unnecessary for normal use.

## Configuration and implementation notes

Listings are loaded from committed JSON, not a rental-management API. Routes are `/`, `/about`, `/fiche_log/:id` and a fallback. BrowserRouter requires the production host to serve `index.html` for client routes. A test command is configured, but no dedicated test files were found in the source tree.

## Verification checklist

Browse the home page, open a listing, navigate its carousel, toggle collapsible content, open `/about`, and visit an invalid listing and unknown URL.

No dedicated automated test/spec files were found in the reviewed application tree. Where a test script exists, its presence alone does not establish test coverage.

## Maintenance

Keep this guide in sync when routes, commands, environment variables or hosting paths change. Use development databases/accounts for integration checks. Keep private credentials in server-side environment configuration and out of documentation. No new license or ownership terms are introduced by this guide; retain existing repository notices.

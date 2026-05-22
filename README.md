# Sodiq Onawale — Frontend Developer Portfolio

A responsive portfolio built with **React**, **TypeScript**, and **Material UI**, using a custom dark theme with orange accents, Framer Motion for motion, and **Vite** as the dev/build toolchain.

## Features

- **Layout & UX**: Sticky navigation, smooth section scrolling, mobile drawer, and a readable single-page flow (hero, about, projects, contact).
- **Theming**: Central MUI theme (typography, palette, component overrides) plus global CSS for scrollbars and selection.
- **Showcase**: Project cards with live and GitHub links, tech chips, and a featured slot for the primary project.
- **Contact**: Message form powered by Formspree (see env setup below), plus email/location/social links.

## Tech stack

| Layer | Choice |
|--------|--------|
| UI | React 18, Material UI 5, Emotion |
| Language | TypeScript |
| Motion | Framer Motion |
| Bundler | Vite |

## Getting started

```bash
npm/yarn install      #install packages
npm/yarn run dev      # dev server (default Vite URL in the terminal)
npm/yarn run build    # production build
npm/yarn run preview  # preview production build locally
```

### Contact form (Formspree)

Submissions use [Formspree](https://formspree.io). Create a form, copy your endpoint (`https://formspree.io/f/…`), then:

1. Create an `.env` in the repo root (`.env` is gitignored).
2. Set `VITE_FORMSPREE_URL` to that full URL.
3. Restart `npm run dev`.

For production (e.g. Vercel), add the same variable in the host’s environment UI as **`VITE_FORMSPREE_URL`**, then redeploy.

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx / Navbar.css   # Site nav + scroll behavior
│   ├── Hero.tsx                  # Introduction
│   ├── About.tsx                 # Skills & highlights
│   ├── Projects.tsx              # Project list and links
│   ├── Contact.tsx               # Contact form
│   └── Footer.tsx
├── theme/
│   └── theme.ts                 # MUI theme
├── App.tsx / App.css
├── main.tsx
└── index.css
```

## Design notes

- **Typography**: Playfair Display (headings), Outfit (body).
- **Palette**: Deep navy background (`#0D1B2A`), orange primary (`#FF6B35`), teal secondary (`#1B998B`).
- **Chrome**: Grid backdrop, gradient orbs, elevated cards with hover polish.

## Projects highlighted in this repo

The site links out to these builds (sources live in their own repositories):

| Project | Live | Repository |
|--------|------|------------|
| **Bloganity** (featured) | [Demo](https://bloganity-r4kpblf1g-olamide-cybers-projects.vercel.app/) | [GitHub](https://github.com/sodiqOnawale/Bloganity) |
| **Task Manager Pro** | [Demo](https://task-manager-pro-jet.vercel.app/) | [GitHub](https://github.com/sodiqOnawale/Task-Manager-Pro) |
| **Weather Now** | [Demo](https://weather-app-nine-beta-55.vercel.app/) | [GitHub](https://github.com/sodiqOnawale/Weather-App) |
| **E-Commerce UI** | [Demo](https://ecommerce-ui-three-eosin.vercel.app/) | [GitHub](https://github.com/sodiqOnawale/Ecommerce-ui) |
| **Spotlight Talks** | [Demo](https://talks-kappa.vercel.app/) | [GitHub](https://github.com/sodiqOnawale/talks) |

## Contact

- **Email**: [sodiqonawale@gmail.com](mailto:sodiqonawale@gmail.com)
- **GitHub**: [github.com/sodiqOnawale](https://github.com/sodiqOnawale)

---

Built by Sodiq Onawale.

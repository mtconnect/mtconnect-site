# MTConnect Homepage — React + Tailwind CSS

A production-ready React implementation of the MTConnect marketing homepage,
styled with Tailwind CSS v3.

---

## Project Structure

```
mtconnect-website/
├── public/
│   └── index.html
├── src/
│   ├── assets/                    # Static assets (images, SVGs)
│   ├── components/                # Reusable UI primitives
│   │   ├── Button.jsx             - Multi-variant button/anchor
│   │   ├── CodePanelImage.jsx     - Docker commands SVG image (Hero)
│   │   └── SectionLabel.jsx       - Uppercase section eyebrow label
│   ├── data/                      # All site content & link constants
│   │   ├── links.js               - Central URL registry (edit once)
│   │   └── siteData.js            - Stats, cards, nav, footer data
│   ├── sections/                  # Full-width page sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Quickstart.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── StatsBar.jsx
│   │   ├── WhyMTConnect.jsx
│   │   ├── ExploreTools.jsx
│   │   ├── VideoSection.jsx
│   │   ├── CTABanner.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                    # Root - composes all sections
│   ├── index.js                   # React entry point
│   └── index.css                  # Tailwind directives + Google Fonts
├── tailwind.config.js             # Brand colors, fonts
├── postcss.config.js
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Install & run
```bash
npm install
npm start
```
Opens at http://localhost:3000

### Production build
```bash
npm run build
```

---

## Customisation

| What to change        | Where                                      |
|-----------------------|--------------------------------------------|
| External URLs/links   | src/data/links.js                          |
| Stats numbers         | src/data/siteData.js -> STATS              |
| Nav links             | src/data/siteData.js -> NAV_LINKS          |
| Tool cards            | src/data/siteData.js -> TOOL_CARDS         |
| Brand colors          | tailwind.config.js -> theme.extend.colors  |
| YouTube embed         | src/data/links.js -> youtube               |
| Docker code panel     | src/components/CodePanelImage.jsx          |

---

## Tech Stack

| Layer     | Choice                              |
|-----------|-------------------------------------|
| Framework | React 18                            |
| Styling   | Tailwind CSS v3                     |
| Fonts     | Inter + JetBrains Mono (Google Fonts)|
| Bundler   | Create React App (Webpack)          |

# Personal Portfolio & Blog

Personal portfolio website and blog built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- **Responsive & Mobile-First Navigation:**
  - Desktop: floating pill header with section links, language switcher, and theme toggle.
  - Mobile: compact top bar (logo, segmented language control, theme switch) and thumb-friendly floating bottom navigation bar.
- **Multilingual Support (i18n):** English (`en`) and Russian (`ru`) with instant switching.
- **Dark & Light Mode:** System-aware theme toggle with smooth transitions.
- **Content & Data Architecture:**
  - **YAML Data Sources:** Structured content for About, Projects, Skills, Uses, and Now (`portfolio_data.*.yml`).
  - **Markdown Articles:** Multilingual Markdown blog posts with frontmatter parsing (`articles/`).
- **Code Quality:** Fully typed with TypeScript, styled with Tailwind CSS, formatted with Prettier, and linted with ESLint.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa6`, `react-icons/si`)
- **Markdown & Frontmatter:** `marked`, `gray-matter`, `js-yaml`

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/IllusionOfControl/personal-page.git

# Navigate to the project folder
cd personal-page

# Install dependencies
yarn install
```

### Development

```bash
# Start local development server
yarn dev
```

Visit `http://localhost:3000` to view the website.

### Available Scripts

- `yarn dev` — Start the development server.
- `yarn build` — Build the production bundle.
- `yarn start` — Start the production server.
- `yarn type-check` — Verify TypeScript types without emitting files.
- `yarn lint` — Run ESLint check.
- `yarn format` — Format source code with Prettier.

## 📁 Project Structure

```text
├── articles/                # Multilingual Markdown blog posts (.ru.md / .en.md)
├── public/                  # Static assets (images, icons, SVG patterns)
├── src/
│   ├── components/          # Reusable UI components (Navbar, Footer, Hero, Skills, etc.)
│   ├── context/             # ThemeContext (Dark/Light mode)
│   ├── locales/             # Dictionary strings (en, ru)
│   ├── pages/               # Next.js routes (index, projects, articles, uses, now)
│   ├── styles/              # Global CSS & Tailwind configuration
│   ├── types/               # TypeScript interfaces & types
│   └── utils/               # YAML & Markdown loaders
├── portfolio_data.en.yml    # Portfolio content (English)
├── portfolio_data.ru.yml    # Portfolio content (Russian)
└── package.json
```

## 📝 Customization

- **Profile & Sections:** Update `portfolio_data.en.yml` and `portfolio_data.ru.yml`.
- **Blog Articles:** Add new Markdown files in `articles/` following the `YYYY-MM-DD-title.{lang}.md` format.
- **Translations:** Adjust UI labels in `src/locales/`.

# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/github/license/Trapar-waves/react-tanstack)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-tanstack/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](./readme/README-CN.md) | [日本語](./readme/README-JP.md) | [Русский язык](./readme/README-RU.md)

> A production-ready React template optimized for building modern web applications with the TanStack ecosystem. Provides a complete foundation including state management, routing, data fetching, and build optimization out of the box.

## ✨ Features

- **Modern React Architecture:** Built with React 19.x for component-driven development.
- **Comprehensive State Management:** Server state via [@tanstack/react-query](https://tanstack.com/query) for caching, background updates, and data synchronization.
- **Advanced Routing:** [@tanstack/react-router](https://tanstack.com/router) for type-safe client-side navigation with nested route support.
- **Optimized Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling with minimal configuration.
- **Type Safety:** Full TypeScript integration throughout the codebase.
- **Performance Optimization:** Built-in code splitting and lazy loading; optimized bundle size with Rsbuild.
- **Developer Experience:** Fast refresh during development.
- **CI/CD Ready:** GitHub Actions workflow for automated testing and releases.
- **Internationalization:** Structure for multi-language support.
- **Production-Ready:** Optimized build process and best practices implementation.

## GitHub Pages

Pushing a version tag matching `v*` runs [`.github/workflows/pages.yml`](./.github/workflows/pages.yml), which builds with `BASE_PATH=/<repository-name>/`, copies `dist/index.html` to `dist/404.html` for SPA routing, and deploys to GitHub Pages. In the repository **Settings → Pages**, set **Source** to **GitHub Actions** once.

```bash
BASE_PATH=/react-tanstack/ pnpm run build && pnpm preview
```

PowerShell:

```powershell
$env:BASE_PATH="/react-tanstack/"; pnpm run build; pnpm preview
```

## 💻 Tech Stack

- **Framework:** React 19.x
- **Type System:** TypeScript 5.x
- **State Management:** `@tanstack/react-query`
- **Routing:** `@tanstack/react-router`
- **Styling:** Tailwind CSS
- **Build Tool:** Rsbuild
- **Linting:** ESLint with `@antfu/eslint-config`
- **Package Manager:** pnpm

See the [package.json](./package.json) for a full list of dependencies.

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18.x recommended)
- Package manager (npm, yarn, or pnpm)

### Installation

1. Create a new project using the template:

   ```bash
   pnpm create trapar-waves
   ```

2. Navigate to your project directory and install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

## 📁 Project Structure

```
├── public/             # Static assets
├── src/                # Source code
│   ├── routes/         # File-based route definitions
│   │   └── __root.tsx  # Root layout component
│   ├── global.css      # Global styles and Tailwind imports
│   ├── index.tsx       # Entry point
│   ├── router.ts       # Router configuration
│   ├── routeTree.gen.ts # Auto-generated route tree
│   └── env.d.ts        # Environment type declarations
├── rsbuild.config.ts   # Rsbuild configuration
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License © 2025 Trapar Waves

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
- **Issues:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

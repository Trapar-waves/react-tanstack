# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)

A production-ready React template optimized for building modern web applications with TanStack ecosystem tools. This template provides a complete foundation including state management, routing, data fetching, and build optimization out of the box.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [🛠️ Usage](#-usage)
- [📁 Project Structure](#-project-structure)
- [💻 Tech Stack](#-tech-stack)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Author](#-author)
- [🔗 Links](#-links)

## ✨ Features

* **Modern React Architecture:** Built with React 19.x for component-driven development
* **Comprehensive State Management:**
  * Server state: [@tanstack/react-query](https://tanstack.com/query) for caching, background updates, and data synchronization
  * Client state: Ready for integration with state management libraries
* **Advanced Routing:** [@tanstack/react-router](https://tanstack.com/router) for type-safe client-side navigation with nested routes support
* **Optimized Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling with minimal configuration
* **Type Safety:** Full TypeScript integration throughout the codebase
* **Performance Optimization:**
  * Built-in code splitting and lazy loading
  * Optimized bundle size with Rsbuild
* **Developer Experience:**
  * Fast refresh during development
  * Integrated debugging tools ([React Query Devtools](https://tanstack.com/query/devtools), [Router Devtools](https://tanstack.com/router/devtools))
  * ESLint configuration with TanStack plugins
* **CI/CD Ready:** GitHub Actions workflow for automated testing and releases
* **Internationalization:** Structure for multi-language support
* **Production-Ready:** Optimized build process and best practices implementation

## 🚀 Getting Started

Follow these instructions to get the project running locally or integrate it into your existing workflow.

### Prerequisites

* Node.js (v18.x or higher)
* npm, yarn, or pnpm package manager
* Git

Verify your environment:
```bash
node -v  # Should output v18.x or higher
npm -v   # or yarn -v or pnpm -v
```

## 🛠️ Usage

### Development Workflow

```bash
# Start development server with hot reloading
npm run dev
# Server will be available at http://localhost:8080

# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Starts development server with hot module replacement |
| `build` | Creates optimized production build in `dist` directory |
| `preview` | Previews production build locally |
| `lint` | Runs ESLint to check for code quality issues |
| `format` | Formats code using Prettier (if configured) |

### Basic Project Usage

#### Creating Pages

Add new routes by creating files in the `src/routes` directory:

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage
});

function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">This is the about page</p>
    </div>
  );
}
```

#### Data Fetching with React Query

```tsx
import { useQuery } from "@tanstack/react-query";
// src/routes/users.tsx
import { createFileRoute } from "@tanstack/react-router";

async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok)
    throw new Error("Failed to fetch users");
  return response.json();
}

export const Route = createFileRoute("/users")({
  component: UsersPage
});

function UsersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });

  if (isLoading)
    return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error:
        {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Users</h1>
      <ul className="mt-4">
        {data.map(user => (
          <li key={user.id} className="border-b py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 📁 Project Structure

```
├── .github/workflows/      # CI/CD workflows
├── public/                 # Static assets
├── src/                    # Source code
│   ├── routes/             # Route definitions
│   │   └── __root.tsx      # Root route
│   ├── env.d.ts            # Environment type definitions
│   ├── global.css          # Global styles
│   ├── index.tsx           # Entry point
│   └── router.ts           # Router configuration
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── rsbuild.config.ts       # Build configuration
└── tsconfig.json           # TypeScript configuration
```

## 💻 Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | v19.x |
| Routing | @tanstack/react-router | latest |
| State Management | @tanstack/react-query | latest |
| Styling | Tailwind CSS | latest |
| Build Tool | Rsbuild | latest |
| Language | TypeScript | v5.x |
| Linting | ESLint | latest |

See the [package.json](package.json) for the full list of dependencies and their specific versions.

## 🤝 Contributing

Contributions are welcome and appreciated! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

* Follow the existing code style and conventions
* Add tests for new features or bug fixes
* Update documentation as needed
* Ensure your changes work with the current tech stack
* Create issues for major changes before implementing

### Code of Conduct

Please be respectful and considerate of others when contributing to this project.

## 📄 License

Distributed under the **MIT** License. See `LICENSE` file for more information.

## 👤 Author

* **Rikka** ([GitHub Profile](https://github.com/Muromi-Rikka))
* **Contact Email:** admin@rikka.cc

## 🔗 Links

* **Repository:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **Homepage:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **Issues:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

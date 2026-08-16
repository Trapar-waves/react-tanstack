# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/github/license/Trapar-waves/react-tanstack)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-tanstack/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 一个面向生产环境的 React 模板，针对使用 TanStack 生态系统工具构建现代化 Web 应用进行了优化。提供完整的基础架构，包括状态管理、路由、数据获取和构建优化等开箱即用的功能。

![react-tanstack hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **现代 React 架构：** 基于 React 19.x 构建，支持组件驱动开发。
- **全面的状态管理：** 通过 [@tanstack/react-query](https://tanstack.com/query) 实现服务端状态管理，支持缓存、后台更新和数据同步。
- **高级路由功能：** [@tanstack/react-router](https://tanstack.com/router) 提供类型安全的客户端导航，支持嵌套路由。
- **优化的样式方案：** [Tailwind CSS](https://tailwindcss.com/) 实现工具优先的样式开发，配置简洁。
- **类型安全：** 全代码库集成 TypeScript。
- **性能优化：** 内置代码分割和懒加载；使用 Rsbuild 优化包体积。
- **开发体验：** 开发过程中支持快速刷新。
- **CI/CD 就绪：** GitHub Actions 工作流支持自动化测试和发布。
- **国际化：** 多语言支持架构。
- **生产就绪：** 优化的构建流程和最佳实践实现。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **框架：** React 19.x
- **类型系统：** TypeScript 5.x
- **状态管理：** `@tanstack/react-query`
- **路由：** `@tanstack/react-router`
- **样式：** Tailwind CSS
- **构建工具：** Rsbuild
- **代码检查：** ESLint 配合 `@antfu/eslint-config`
- **包管理器：** pnpm

完整依赖列表参见 [package.json](../package.json)。

![Getting Started](../assets/readme/headers/getting-started.svg)

## 前置条件

- Node.js（推荐 >= 18.x）
- 包管理器（npm、yarn 或 pnpm）

### 安装

1. 使用模板创建新项目：

   ```bash
   pnpm create trapar-waves
   ```

2. 导航到项目目录并安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── routes/         # 基于文件的路由定义
│   │   └── __root.tsx  # 根布局组件
│   ├── global.css      # 全局样式和 Tailwind 导入
│   ├── index.tsx       # 入口点
│   ├── router.ts       # 路由配置
│   ├── routeTree.gen.ts # 自动生成的路由树
│   └── env.d.ts        # 环境类型声明
├── rsbuild.config.ts   # Rsbuild 配置
├── tsconfig.json       # TypeScript 配置
├── eslint.config.js    # ESLint 配置
└── package.json        # 项目依赖和脚本
```

![Contributing](../assets/readme/headers/contributing.svg)

欢迎贡献，非常感谢！请按照以下步骤贡献：

1. Fork 仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
- **Issues：** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

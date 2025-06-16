# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/github/license/Trapar-waves/react-tanstack)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-tanstack/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> 一个面向生产环境的React模板，针对使用TanStack生态系统工具构建现代化Web应用进行了优化。该模板提供了完整的基础架构，包括状态管理、路由、数据获取和构建优化等开箱即用的功能。

## ✨ 特性

- **现代React架构:** 基于React 19.x构建，支持组件驱动开发。
- **全面的状态管理:** 服务端状态：使用[@tanstack/react-query](https://tanstack.com/query)进行缓存、后台更新和数据同步。
- **高级路由功能:** [@tanstack/react-router](https://tanstack.com/router)提供类型安全的客户端导航，支持嵌套路由。
- **优化的样式方案:** [Tailwind CSS](https://tailwindcss.com/)实现工具优先的样式开发，配置简洁。
- **类型安全:** 全代码库集成TypeScript，确保类型安全。
- **性能优化:** 内置代码分割和懒加载；使用Rsbuild优化包体积。
- **开发体验:** 开发过程中支持快速刷新。
- **CI/CD就绪:** GitHub Actions工作流支持自动化测试和发布。
- **国际化:** 多语言支持架构。
- **生产就绪:** 优化的构建流程和最佳实践实现。

## 💻 技术栈

- **框架:** React 19.x
- **类型系统:** TypeScript 5.x
- **状态管理:** `@tanstack/react-query`
- **路由:** `@tanstack/react-router`
- **样式:** Tailwind CSS
- **构建工具:** Rsbuild
- **代码检查:** ESLint配合`@antfu/eslint-config`
- **包管理器:** pnpm

完整依赖列表参见[package.json](package.json)。

## 🚀 开始使用

按照以下说明在本地运行项目。

### 前提条件

确保已安装以下软件：

- Node.js (推荐 >= 18.x 版本)
- 包管理器 (npm, yarn 或 pnpm)

```bash
node -v
npm -v
```

### 安装步骤

运行脚本

```bash
pnpm create trapar-waves
```

安装依赖

```bash
npm install
yarn install
pnpm install
```

## 🤝 贡献指南

欢迎贡献，非常感谢您的支持！请按照以下步骤进行贡献：

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **仓库:** [https://github.com/react-tanstack/Trapar-waves](https://github.com/react-tanstack/Trapar-waves)
- **主页:** [https://github.com/react-tanstack/Trapar-waves](https://github.com/react-tanstack/Trapar-waves)
- **问题:** [https://github.com/react-tanstack/Trapar-waves/issues](https://github.com/react-tanstack/Trapar-waves/issues)

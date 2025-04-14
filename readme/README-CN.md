# @trapar-waves/react-tanstack

![npm 版本](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm 每月下载次数](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![许可协议](https://img.shields.io/badge/license-MIT-green)
![GitHub 最近提交时间](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)

> 一个基于 React 的项目，利用 TanStack 的工具实现状态管理、路由和异步数据处理。

## ✨ 核心特性

* **现代化的 UI 框架：** 基于 React（v19.x）构建，采用组件化的界面设计。
* **高效的状态管理：** 使用 [@tanstack/react-query](https://tanstack.com/query) 管理服务器端状态，支持缓存、后台更新和数据获取。
* **客户端路由：** 借助 [@tanstack/react-router](https://tanstack.com/router) 实现客户端路由，提供流畅的单页应用（SPA）导航体验。
* **灵活的样式系统：** 使用 [Tailwind CSS](https://tailwindcss.com/) 实现以工具为中心的样式设计，几乎无需额外配置。
* **类型安全保障：** 通过 TypeScript 提升代码的可靠性，减少运行时错误。
* **高效的开发流程：** 使用 [Rsbuild](https://rsbuild.dev/) 优化构建流程，显著提升开发服务器启动速度。
* **开发者工具支持：** 内置 [@tanstack/react-query-devtools](https://tanstack.com/query/devtools) 和 [@tanstack/react-router-devtools](https://tanstack.com/router/devtools)，方便调试状态和路由问题。
* **严格的代码规范：** 配置 ESLint，并结合 [@tanstack/eslint-plugin-query](https://tanstack.com/query/eslint) 和 [@tanstack/eslint-plugin-router](https://tanstack.com/router/eslint) 插件，确保遵循最佳实践。

## 🚀 快速开始

按照以下步骤在本地运行该项目。

### 环境要求

* 请确保已安装以下工具：
    * Node.js（建议版本 >= 18.x）
    * 包管理工具（npm、yarn 或 pnpm）
    ```bash
    node -v
    npm -v # 或 yarn -v 或 pnpm -v
    ```

### 安装步骤

1. 克隆代码仓库：
    ```bash
    git clone https://github.com/Trapar-waves/react-tanstack.git
    cd react-tanstack
    ```
2. 安装依赖项：
    ```bash
    # 使用你喜欢的包管理工具
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用指南

### 可用脚本

通过 `npm run <脚本>`、`yarn <脚本>` 或 `pnpm <脚本>` 运行常用脚本：

* `dev`：启动开发服务器，并自动打开浏览器（`rsbuild dev --open`）。
* `build`：生成生产环境的构建版本（`rsbuild build`）。
* `preview`：在本地预览生产环境的构建结果（`rsbuild preview`）。

示例：
```bash
# 启动开发服务器
npm run dev 

# 生成生产环境构建
npm run build 
```

## 💻 技术选型

本项目使用的主要技术包括：

* **框架/库：** React（v19.x）
* **样式工具：** Tailwind CSS
* **状态管理：** [@tanstack/react-query](https://tanstack.com/query)
* **路由：** [@tanstack/react-router](https://tanstack.com/router)
* **构建工具：** Rsbuild
* **编程语言：** TypeScript

完整的依赖列表请查看 [package.json](package.json)。

## 🤝 参与贡献

欢迎任何贡献！如果你有兴趣，请查看我们的贡献指南。

## 📄 许可协议

本项目基于 **MIT** 许可协议分发。更多详情请查看 `LICENSE` 文件。

## 👤 作者

* **Rikka**（[GitHub 主页](https://github.com/Muromi-Rikka)）
* **联系邮箱：** admin@rikka.cc

## 🔗 相关链接

* **代码仓库：** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **问题反馈：** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

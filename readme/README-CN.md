# @trapar-waves/react-tanstack

![npm 版本](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm 每月下载次数](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![许可协议](https://img.shields.io/badge/license-MIT-green)
![GitHub 最近提交时间](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)

一个生产级别的 React 模板，专为使用 TanStack 生态系统工具构建现代 Web 应用而优化。此模板提供完整的基础架构，包括状态管理、路由、数据获取和构建优化。

## 📋 目录

- [✨ 核心特性](#-核心特性)
- [🚀 快速开始](#-快速开始)
- [🛠️ 使用指南](#-使用指南)
- [📁 项目结构](#-项目结构)
- [💻 技术栈](#-技术栈)
- [🤝 参与贡献](#-参与贡献)
- [📄 许可协议](#-许可协议)
- [👤 作者](#-作者)
- [🔗 相关链接](#-相关链接)

## ✨ 核心特性

* **现代化 React 架构：** 基于 React 19.x 构建，支持组件驱动开发
* **全面的状态管理：**
  * 服务器状态：使用 [@tanstack/react-query](https://tanstack.com/query) 进行缓存、后台更新和数据同步
  * 客户端状态：已准备好集成状态管理库
* **高级路由功能：** [@tanstack/react-router](https://tanstack.com/router) 提供类型安全的客户端导航，支持嵌套路由
* **优化的样式方案：** [Tailwind CSS](https://tailwindcss.com/) 实现实用优先的样式设计，配置简单
* **类型安全保障：** 全项目 TypeScript 集成
* **性能优化：**
  * 内置代码分割和懒加载
  * 使用 Rsbuild 优化打包体积
* **开发体验：**
  * 开发过程中快速刷新
  * 集成调试工具（[React Query Devtools](https://tanstack.com/query/devtools)、[Router Devtools](https://tanstack.com/router/devtools)）
  * ESLint 配置与 TanStack 插件
* **CI/CD 就绪：** GitHub Actions 工作流用于自动化测试和发布
* **国际化支持：** 多语言支持结构
* **生产就绪：** 优化的构建流程和最佳实践实现

## 🚀 快速开始

按照以下说明在本地运行项目或将其集成到现有工作流中。

### 环境要求

* Node.js（v18.x 或更高版本）
* npm、yarn 或 pnpm 包管理器
* Git

验证环境：
```bash
node -v  # 应输出 v18.x 或更高版本
npm -v   # 或 yarn -v 或 pnpm -v
```

### 安装选项

#### 选项 1：克隆仓库

```bash
# 克隆代码仓库
git clone https://github.com/Trapar-waves/react-tanstack.git
cd react-tanstack

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

## 🛠️ 使用指南

### 开发工作流

```bash
# 启动带热重载的开发服务器
npm run dev
# 服务器将在 http://localhost:8080 可用

# 创建生产构建
npm run build

# 在本地预览生产构建
npm run preview
```

### 可用脚本

| 脚本 | 描述 |
|------|------|
| `dev` | 启动带热模块替换的开发服务器 |
| `build` | 在 `dist` 目录中创建优化的生产构建 |
| `preview` | 在本地预览生产构建 |
| `lint` | 运行 ESLint 检查代码质量问题 |
| `format` | 使用 Prettier 格式化代码（如果已配置） |

### 基本项目使用

#### 创建页面

通过在 `src/routes` 目录中创建文件来添加新路由：

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage
});

function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">关于我们</h1>
      <p className="mt-4">这是关于页面</p>
    </div>
  );
}
```

#### 使用 React Query 获取数据

```tsx
import { useQuery } from "@tanstack/react-query";
// src/routes/users.tsx
import { createFileRoute } from "@tanstack/react-router";

async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok)
    throw new Error("获取用户失败");
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
    return <div>加载中...</div>;
  if (error) {
    return (
      <div>
        错误：
        {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">用户</h1>
      <ul className="mt-4">
        {data.map(user => (
          <li key={user.id} className="border-b py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 📁 项目结构

```
├── .github/workflows/      # CI/CD 工作流
├── public/                 # 静态资源
├── src/                    # 源代码
│   ├── routes/             # 路由定义
│   │   └── __root.tsx      # 根路由
│   ├── env.d.ts            # 环境类型定义
│   ├── global.css          # 全局样式
│   ├── index.tsx           # 入口文件
│   └── router.ts           # 路由配置
├── .gitignore              # Git 忽略规则
├── eslint.config.js        # ESLint 配置
├── package.json            # 依赖和脚本
├── rsbuild.config.ts       # 构建配置
└── tsconfig.json           # TypeScript 配置
```

## 💻 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | React | v19.x |
| 路由 | @tanstack/react-router | latest |
| 状态管理 | @tanstack/react-query | latest |
| 样式 | Tailwind CSS | latest |
| 构建工具 | Rsbuild | latest |
| 语言 | TypeScript | v5.x |
| 代码检查 | ESLint | latest |

完整的依赖列表及其特定版本请参见 [package.json](package.json)。

## 🤝 参与贡献

欢迎并感谢您的贡献！请按照以下步骤操作：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

### 贡献指南

* 遵循现有的代码风格和约定
* 为新功能或错误修复添加测试
* 根据需要更新文档
* 确保您的更改与当前技术栈兼容
* 在实施重大更改之前创建 issue

### 行为准则

在为本项目做出贡献时，请尊重他人并考虑他人。

## 📄 许可协议

基于 **MIT** 许可协议分发。有关更多信息，请参见 `LICENSE` 文件。

## 👤 作者

* **Rikka**（[GitHub 个人资料](https://github.com/Muromi-Rikka)）
* **联系邮箱：** admin@rikka.cc

## 🔗 相关链接

* **仓库：** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **主页：** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **问题：** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

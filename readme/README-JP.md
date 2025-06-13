# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![CI Status](https://github.com/Trapar-waves/react-tanstack/actions/workflows/release.yml/badge.svg)

TanStackエコシステムツールを使用して現代的なWebアプリケーションを構築するために最適化された本番環境対応のReactテンプレートです。このテンプレートは、状態管理、ルーティング、データフェッチ、ビルド最適化を含む完全な基盤を提供します。

## 📋 目次

- [✨ 主な特徴](#-主な特徴)
- [🚀 開始方法](#-開始方法)
- [🛠️ 使用方法](#-使用方法)
- [📁 プロジェクト構造](#-プロジェクト構造)
- [💻 技術スタック](#-技術スタック)
- [🤝 貢献方法](#-貢献方法)
- [📄 ライセンス](#-ライセンス)
- [👤 著者](#-著者)
- [🔗 リンク](#-リンク)

## ✨ 主な特徴

* **最新のReactアーキテクチャ:** React 19.xを使用したコンポーネント駆動開発
* **包括的な状態管理:**
  * サーバー状態: [@tanstack/react-query](https://tanstack.com/query)によるキャッシュ、バックグラウンド更新、データ同期
  * クライアント状態: 状態管理ライブラリとの統合が容易に準備されています
* **高度なルーティング:** [@tanstack/react-router](https://tanstack.com/router)による型安全なクライアントサイドナビゲーションとネストされたルートのサポート
* **最適化されたスタイリング:** [Tailwind CSS](https://tailwindcss.com/)によるユーティリティファーストのスタイリングで最小限の設定で柔軟なデザインが可能
* **型安全性:** コードベース全体におけるTypeScriptの完全統合
* **パフォーマンス最適化:**
  * 組み込みのコード分割と遅延読み込み
  * Rsbuildによる最適化されたバンドルサイズ
* **開発者エクスペリエンス:**
  * 開発中の高速リフレッシュ
  * 統合デバッグツール（[React Query Devtools](https://tanstack.com/query/devtools)、[Router Devtools](https://tanstack.com/router/devtools)）
  * TanStackプラグインを含むESLint設定
* **CI/CD準備済み:** 自動テストとリリースのためのGitHub Actionsワークフロー
* **国際化対応:** 多言語サポートのための構造
* **本番環境対応:** 最適化されたビルドプロセスとベストプラクティスの実装

## 🚀 開始方法

プロジェクトをローカルで実行するか、既存のワークフローに統合する手順に従ってください。

### 前提条件

* Node.js（v18.x以上）
* npm、yarn、またはpnpmパッケージマネージャ
* Git

環境の確認：
```bash
node -v  # v18.x以上を出力する必要があります
npm -v   # または yarn -v または pnpm -v
```

### インストールオプション

#### オプション1: リポジトリをクローンする

```bash
# リポジトリをクローン
git clone https://github.com/Trapar-waves/react-tanstack.git
cd react-tanstack

# 依存関係をインストール
npm install
# または
yarn install
# または
pnpm install
```

## 🛠️ 使用方法

### 開発ワークフロー

```bash
# ホットリロード付きの開発サーバーを起動
npm run dev
# サーバーは http://localhost:8080 で利用可能になります

# 本番ビルドを作成
npm run build

# ローカルで本番ビルドをプレビュー
npm run preview
```

### 利用可能なスクリプト

| スクリプト | 説明 |
|------------|------|
| `dev` | ホットモジュール置換機能付きの開発サーバーを起動します |
| `build` | `dist`ディレクトリに最適化された本番ビルドを作成します |
| `preview` | ローカルで本番ビルドをプレビューします |
| `lint` | ESLintを実行してコード品質の問題をチェックします |
| `format` | Prettierを使用してコードをフォーマットします（設定されている場合） |

### 基本的なプロジェクトの使用方法

#### ページの作成

`src/routes`ディレクトリにファイルを作成することで新しいルートを追加します：

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage
});

function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">About Us（私たちについて）</h1>
      <p className="mt-4">これはAboutページです</p>
    </div>
  );
}
```

#### React Queryを使用したデータフェッチング

```tsx
import { useQuery } from "@tanstack/react-query";
// src/routes/users.tsx
import { createFileRoute } from "@tanstack/react-router";

async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok)
    throw new Error("ユーザーの取得に失敗しました");
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
    return <div>読み込み中...</div>;
  if (error) {
    return (
      <div>
        エラー：
        {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">ユーザー</h1>
      <ul className="mt-4">
        {data.map(user => (
          <li key={user.id} className="border-b py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 📁 プロジェクト構造

```
├── .github/workflows/      # CI/CDワークフロー
├── public/                 # 静的アセット
├── src/                    # ソースコード
│   ├── routes/             # ルート定義
│   │   └── __root.tsx      # ルートルート
│   ├── env.d.ts            # 環境型定義
│   ├── global.css          # グローバルスタイル
│   ├── index.tsx           # エントリーポイント
│   └── router.ts           # ルーター設定
├── .gitignore              # Git無視ルール
├── eslint.config.js        # ESLint設定
├── package.json            # 依存関係とスクリプト
├── rsbuild.config.ts       # ビルド設定
└── tsconfig.json           # TypeScript設定
```

## 💻 技術スタック

| カテゴリ | 技術 | バージョン |
|----------|------|------------|
| フレームワーク | React | v19.x |
| ルーティング | @tanstack/react-router | latest |
| 状態管理 | @tanstack/react-query | latest |
| スタイリング | Tailwind CSS | latest |
| ビルドツール | Rsbuild | latest |
| 言語 | TypeScript | v5.x |
| リンティング | ESLint | latest |

依存関係の完全なリストとその特定のバージョンについては[package.json](package.json)を参照してください。

## 🤝 貢献方法

貢献を歓迎し感謝します！以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する (`git checkout -b feature/amazing-feature`)
3. 変更をコミットする (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュする (`git push origin feature/amazing-feature`)
5. Pull Requestを開く

### 貢献ガイドライン

* 既存のコードスタイルと規約に従ってください
* 新機能やバグ修正にはテストを追加してください
* 必要に応じてドキュメントを更新してください
* あなたの変更が現在の技術スタックで動作することを確認してください
* 大きな変更を実装する前にissueを作成してください

### 行動規範

このプロジェクトへの貢献にあたっては、他人を尊重し思いやりを持って行動してください。

## 📄 ライセンス

**MIT**ライセンスの下で配布されています。詳細については`LICENSE`ファイルを参照してください。

## 👤 著者

* **Rikka** ([GitHubプロフィール](https://github.com/Muromi-Rikka))
* **連絡先メール:** admin@rikka.cc

## 🔗 リンク

* **リポジトリ:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **ホームページ:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **issue:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

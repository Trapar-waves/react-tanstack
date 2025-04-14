# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)

> TanStackのツールを活用した、Reactベースのプロジェクトで状態管理、ルーティング、非同期データ処理を効率的に行います。

## ✨ 主な特徴

* **最新のUIフレームワーク:** React（v19.x）を使用して、コンポーネント駆動のインターフェースを実現。
* **高性能な状態管理:** [@tanstack/react-query](https://tanstack.com/query) を採用し、サーバーサイドの状態管理、キャッシュ、バックグラウンド更新、データ取得を効果的に処理。
* **シームレスなクライアントサイドナビゲーション:** [@tanstack/react-router](https://tanstack.com/router) を使用して、シングルページアプリケーション（SPA）のナビゲーションをスムーズに実現。
* **柔軟なスタイリング:** [Tailwind CSS](https://tailwindcss.com/) を採用し、最小限の設定で効果的なユーティリティファーストのスタイリングを提供。
* **型安全性:** TypeScriptを使用して、Reactコンポーネントやアプリケーションロジックの品質を向上させ、実行時エラーを最小限に抑える。
* **高速な開発ワークフロー:** [Rsbuild](https://rsbuild.dev/) を活用し、最適化されたビルドと迅速な開発サーバーの起動を実現。
* **開発者ツールの統合:** 開発中の状態やルーティングの問題をデバッグするため、[@tanstack/react-query-devtools](https://tanstack.com/query/devtools) と [@tanstack/react-router-devtools](https://tanstack.com/router/devtools) を導入。
* **コード品質の向上:** [@tanstack/eslint-plugin-query](https://tanstack.com/query/eslint) や [@tanstack/eslint-plugin-router](https://tanstack.com/router/eslint) などのプラグインを含む ESLint を設定し、クエリやルーターの使用に関するベストプラクティスを推奨。

## 🚀 開始方法

プロジェクトをローカルで実行する手順を以下に説明します。

### 前提条件

以下のソフトウェアがインストールされていることを確認してください：
* Node.js（>= 18.x 推奨）
* パッケージマネージャ（npm、yarn、またはpnpm）
```bash
node -v
npm -v # または yarn -v または pnpm -v
```

### インストール

1. リポジトリをクローン：
    ```bash
    git clone https://github.com/Trapar-waves/react-tanstack.git
    cd react-tanstack
    ```
2. 依存関係をインストール：
    ```bash
    # 好みのパッケージマネージャを使用
    npm install
    # または
    yarn install
    # または
    pnpm install
    ```

## 🛠️ 使用方法

### 利用可能なスクリプト

`npm run <スクリプト名>`、`yarn <スクリプト名>`、または`pnpm <スクリプト名>`で使用可能な一般的なスクリプト：

* `dev`: 開発サーバーを起動し、ブラウザを自動起動（`rsbuild dev --open`）。
* `build`: 本番環境向けのビルドを作成（`rsbuild build`）。
* `preview`: ローカルで本番ビルドをプレビュー（`rsbuild preview`）。

例：
```bash
# 開発サーバーを起動
npm run dev 

# 本番環境向けビルドを作成
npm run build 
```

## 💻 使用技術

このプロジェクトで使用されている主要な技術：

* **フレームワーク/ライブラリ:** React (v19.x)
* **UIツールキット/スタイリング:** Tailwind CSS
* **状態管理:** [@tanstack/react-query](https://tanstack.com/query)
* **ルーティング:** [@tanstack/react-router](https://tanstack.com/router)
* **ビルドツール:** Rsbuild
* **言語:** TypeScript

依存関係の完全なリストは[package.json](package.json)をご覧ください。

## 🤝 貢献

貢献を歓迎します！

## 📄 ライセンス

**MIT**ライセンスのもとで配布されています。詳細は`LICENSE`ファイルをご覧ください。

## 👤 著者

* **Rikka** ([GitHubプロフィール](https://github.com/Muromi-Rikka))
* **連絡先メールアドレス:** admin@rikka.cc

## 🔗 リンク

* **リポジトリ:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **ホームページ:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **問題点:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

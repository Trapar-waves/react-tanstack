# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/github/license/Trapar-waves/react-tanstack)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-tanstack/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [Русский язык](/readme/README-RU.md)

> TanStackエコシステムツールを使用した現代的なWebアプリケーション構築のために最適化された本番環境対応のReactテンプレートです。このテンプレートは、状態管理、ルーティング、データフェッチング、ビルド最適化などを含む完全な基盤をオールインワンで提供します。

## ✨ 特徴

- **モダンReactアーキテクチャ:** React 19.xを使用して構築され、コンポーネント駆動開発をサポートします。
- **包括的な状態管理:** サーバー状態：キャッシュ、バックグラウンド更新、データ同期のための[@tanstack/react-query](https://tanstack.com/query)
- **高度なルーティング:** ネストされたルートをサポートする型安全なクライアントサイドナビゲーションのための[@tanstack/react-router](https://tanstack.com/router)
- **最適化されたスタイリング:** 最小限の設定でユーティリティファーストのスタイリングを実現する[Tailwind CSS](https://tailwindcss.com/)
- **型安全性:** コードベース全体にわたる完全なTypeScript統合
- **パフォーマンス最適化:** 組み込みのコード分割と遅延読み込み；Rsbuildによる最適化されたバンドルサイズ
- **開発者エクスペリエンス:** 開発中の高速リフレッシュ
- **CI/CD準備済み:** 自動テストとリリースのためのGitHub Actionsワークフロー
- **国際化:** 多言語サポートのための構造
- **本番環境対応:** 最適化されたビルドプロセスとベストプラクティスの実装

## 💻 技術スタック

- **フレームワーク:** React 19.x
- **型システム:** TypeScript 5.x
- **状態管理:** `@tanstack/react-query`
- **ルーティング:** `@tanstack/react-router`
- **スタイリング:** Tailwind CSS
- **ビルドツール:** Rsbuild
- **リンティング:** `@antfu/eslint-config`を備えたESLint
- **パッケージマネージャー:** pnpm

依存関係の完全なリストについては[package.json](package.json)を参照してください。

## 🚀 始め方

以下の手順に従ってプロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください：

- Node.js (推奨バージョン >= 18.x)
- パッケージマネージャー (npm, yarn または pnpm)

```bash
node -v
npm -v
```

### インストール

スクリプトの実行

```bash
pnpm create trapar-waves
```

依存関係のインストール

```bash
npm install
yarn install
pnpm install
```

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **リポジトリ:** [https://github.com/react-tanstack/Trapar-waves](https://github.com/react-tanstack/Trapar-waves)
- **ホームページ:** [https://github.com/react-tanstack/Trapar-waves](https://github.com/react-tanstack/Trapar-waves)
- **イシュー:** [https://github.com/react-tanstack/Trapar-waves/issues](https://github.com/react-tanstack/Trapar-waves/issues)

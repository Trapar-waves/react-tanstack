# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/github/license/Trapar-waves/react-tanstack)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-tanstack/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md)

> Готовый к производству шаблон React, оптимизированный для создания современных веб-приложений с использованием инструментов экосистемы TanStack. Этот шаблон предоставляет полную основу, включая управление состоянием, маршрутизацию, получение данных и оптимизацию сборки из коробки.

## ✨ Особенности

- **Современная архитектура React:** Строится на React 19.x для компонентно-ориентированной разработки
- **Полное управление состоянием:** Состояние сервера: [@tanstack/react-query](https://tanstack.com/query) для кэширования, фоновых обновлений и синхронизации данных
- **Расширенная маршрутизация:** [@tanstack/react-router](https://tanstack.com/router) для безопасной по типам навигации на клиенте с поддержкой вложенных маршрутов
- **Оптимизированная стилизация:** [Tailwind CSS](https://tailwindcss.com/) для утилитарной стилизации с минимальной конфигурацией
- **Безопасность типов:** Полная интеграция TypeScript по всему кодовому базису
- **Оптимизация производительности:** Встроенное разделение кода и ленивая загрузка; Оптимизированный размер бандла с Rsbuild
- **Опыт разработчика:** Быстрое обновление во время разработки
- **Готовность к CI/CD:** Рабочий процесс GitHub Actions для автоматического тестирования и выпусков
- **Интернационализация:** Структура для поддержки нескольких языков
- **Готовность к производству:** Оптимизированный процесс сборки и имплементация лучших практик

## 💻 Технологический стек

- **Фреймворк:** React 19.x
- **Система типов:** TypeScript 5.x
- **Управление состоянием:** `@tanstack/react-query`
- **Маршрутизация:** `@tanstack/react-router`
- **Стилизация:** Tailwind CSS
- **Инструмент сборки:** Rsbuild
- **Линтинг:** ESLint с `@antfu/eslint-config`
- **Пакетный менеджер:** pnpm

Полный список зависимостей см. в [package.json](package.json).

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

Убедитесь, что у вас установлены следующие компоненты:

- Node.js (рекомендуется версия >= 18.x)
- Пакетный менеджер (npm, yarn или pnpm)

```bash
node -v
npm -v
```

### Установка

Запустить скрипт

```bash
pnpm create trapar-waves
```

Установить зависимости

```bash
npm install
yarn install
pnpm install
```

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Репозиторий:** [https://github.com/react-tanstack/Trapar-waves](https://github.com/react-tanstack/Trapar-waves)
- **Домашняя страница:** [https://github.com/react-tanstack/Trapar-waves](https://github.com/react-tanstack/Trapar-waves)
- **Проблемы:** [https://github.com/react-tanstack/Trapar-waves/issues](https://github.com/react-tanstack/Trapar-waves/issues)

# @trapar-waves/react-tanstack

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![License](https://img.shields.io/github/license/Trapar-waves/react-tanstack)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-tanstack/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Готовый к производству шаблон React, оптимизированный для создания современных веб-приложений с использованием экосистемы TanStack. Предоставляет полную основу, включая управление состоянием, маршрутизацию, получение данных и оптимизацию сборки из коробки.

## ✨ Особенности

- **Современная архитектура React:** Построен на React 19.x для компонентно-ориентированной разработки.
- **Полное управление состоянием:** Управление серверным состоянием через [@tanstack/react-query](https://tanstack.com/query) с кэшированием, фоновыми обновлениями и синхронизацией данных.
- **Расширенная маршрутизация:** [@tanstack/react-router](https://tanstack.com/router) для типобезопасной клиентской навигации с поддержкой вложенных маршрутов.
- **Оптимизированная стилизация:** [Tailwind CSS](https://tailwindcss.com/) для утилитарной стилизации с минимальной конфигурацией.
- **Безопасность типов:** Полная интеграция TypeScript по всей кодовой базе.
- **Оптимизация производительности:** Встроенное разделение кода и ленивая загрузка; оптимизированный размер бандла с Rsbuild.
- **Опыт разработчика:** Быстрое обновление во время разработки.
- **Готовность к CI/CD:** Рабочий процесс GitHub Actions для автоматического тестирования и выпусков.
- **Интернационализация:** Структура для поддержки нескольких языков.
- **Готовность к производству:** Оптимизированный процесс сборки и реализация лучших практик.

## 💻 Технологический стек

- **Фреймворк:** React 19.x
- **Система типов:** TypeScript 5.x
- **Управление состоянием:** `@tanstack/react-query`
- **Маршрутизация:** `@tanstack/react-router`
- **Стилизация:** Tailwind CSS
- **Инструмент сборки:** Rsbuild
- **Линтинг:** ESLint с `@antfu/eslint-config`
- **Пакетный менеджер:** pnpm

Полный список зависимостей смотрите в [package.json](../package.json).

## 🚀 Начало работы

### Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

### Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

## 📁 Структура проекта

```
├── public/             # Статические ресурсы
├── src/                # Исходный код
│   ├── routes/         # Определения маршрутов на основе файлов
│   │   └── __root.tsx  # Корневой компонент макета
│   ├── global.css      # Глобальные стили и импорты Tailwind
│   ├── index.tsx       # Точка входа
│   ├── router.ts       # Конфигурация маршрутизатора
│   ├── routeTree.gen.ts # Автоматически сгенерированное дерево маршрутов
│   └── env.d.ts        # Объявления типов окружения
├── rsbuild.config.ts   # Конфигурация Rsbuild
├── tsconfig.json       # Конфигурация TypeScript
├── eslint.config.js    # Конфигурация ESLint
└── package.json        # Зависимости и скрипты проекта
```

## 🤝 Участие в разработке

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
- **Issues:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

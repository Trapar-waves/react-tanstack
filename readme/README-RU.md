# @trapar-waves/react-tanstack

![Версия npm](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![Скачивания npm в месяц](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![Лицензия](https://img.shields.io/badge/license-MIT-green)
![Последний коммит на GitHub](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)

> Проект на базе React, использующий инструменты TanStack для управления состоянием, маршрутизации и обработки асинхронных данных.

## ✨ Особенности

* **Современный UI-фреймворк:** Разработан с использованием React (v19.x) для создания компонентного интерфейса.
* **Эффективное управление состоянием:** Использует [@tanstack/react-query](https://tanstack.com/query) для управления состоянием сервера, включая кэширование, фоновые обновления и получение данных.
* **Клиентская навигация:** Реализует клиентскую маршрутизацию через [@tanstack/react-router](https://tanstack.com/router), обеспечивая плавную навигацию в рамках одностраничного приложения (SPA).
* **Стилизация на основе утилит:** Применяет [Tailwind CSS](https://tailwindcss.com/) для гибкой и удобной стилизации с минимальной настройкой.
* **Типобезопасность:** Использует TypeScript для улучшения качества кода и снижения количества ошибок времени выполнения в компонентах React и логике приложения.
* **Быстрый рабочий процесс разработки:** Использует [Rsbuild](https://rsbuild.dev/) для оптимизированных сборок и быстрого запуска сервера разработки.
* **Интеграция инструментов разработчика:** Включает [@tanstack/react-query-devtools](https://tanstack.com/query/devtools) и [@tanstack/react-router-devtools](https://tanstack.com/router/devtools) для отладки состояния и маршрутизации в процессе разработки.
* **Акцент на качестве кода:** Настроен ESLint с плагинами, такими как [@tanstack/eslint-plugin-query](https://tanstack.com/query/eslint) и [@tanstack/eslint-plugin-router](https://tanstack.com/router/eslint), для соблюдения лучших практик использования query и маршрутизации.

## 🚀 Начало работы

Чтобы запустить проект локально, выполните следующие шаги.

### Требования

Для работы необходимы следующие инструменты:
* Node.js (рекомендуется версия >= 18.x)
* Менеджер пакетов (npm, yarn или pnpm)

Проверьте установленные версии:
```bash
node -v
npm -v # или yarn -v или pnpm -v
```

### Установка

1. Склонируйте репозиторий:
    ```bash
    git clone https://github.com/Trapar-waves/react-tanstack.git
    cd react-tanstack
    ```
2. Установите зависимости:
    ```bash
    # Используйте предпочитаемый менеджер пакетов
    npm install
    # или
    yarn install
    # или
    pnpm install
    ```

## 🛠️ Использование

### Доступные команды

Для запуска команд используйте `npm run <команда>`, `yarn <команда>` или `pnpm <команда>`:

* `dev`: Запускает сервер разработки с автоматическим открытием браузера (`rsbuild dev --open`).
* `build`: Создает сборку для продакшена (`rsbuild build`).
* `preview`: Позволяет локально просмотреть продакшен-сборку (`rsbuild preview`).

Пример:
```bash
# Запуск сервера разработки
npm run dev 

# Создание продакшен-сборки
npm run build 
```

## 💻 Технологический стек

Основные технологии проекта:

* **Фреймворк:** React (v19.x)
* **Стилизация:** Tailwind CSS
* **Управление состоянием:** [@tanstack/react-query](https://tanstack.com/query)
* **Маршрутизация:** [@tanstack/react-router](https://tanstack.com/router)
* **Инструмент сборки:** Rsbuild
* **Язык:** TypeScript

Полный список зависимостей см. в [package.json](package.json).

## 🤝 Вклад

Вклад в проект приветствуется!

## 📄 Лицензия

Проект распространяется по лицензии **MIT**. Дополнительную информацию см. в файле `LICENSE`.

## 👤 Автор

* **Рикка** ([Профиль GitHub](https://github.com/Muromi-Rikka))
* **Контактный email:** admin@rikka.cc

## 🔗 Ссылки

* **Репозиторий:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **Домашняя страница:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **Проблемы:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

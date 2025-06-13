# @trapar-waves/react-tanstack

![Версия npm](https://img.shields.io/npm/v/@trapar-waves/react-tanstack)
![Скачивания npm в месяц](https://img.shields.io/npm/dm/@trapar-waves/react-tanstack)
![Лицензия](https://img.shields.io/badge/license-MIT-green)
![Последний коммит на GitHub](https://img.shields.io/github/last-commit/Trapar-waves/react-tanstack)
![Статус CI](https://github.com/Trapar-waves/react-tanstack/actions/workflows/release.yml/badge.svg)

Готовый к производству шаблон React, оптимизированный для разработки современных веб-приложений с использованием инструментов экосистемы TanStack. Этот шаблон предоставляет полную основу, включая управление состоянием, маршрутизацию, получение данных и оптимизацию сборки из коробки.

## 📋 Оглавление

- [✨ Особенности](#-особенности)
- [🚀 Начало работы](#-начало-работы)
- [🛠️ Использование](#-использование)
- [📁 Структура проекта](#-структура-проекта)
- [💻 Технологический стек](#-технологический-стек)
- [🤝 Вклад в проект](#-вклад-в-проект)
- [📄 Лицензия](#-лицензия)
- [👤 Автор](#-автор)
- [🔗 Ссылки](#-ссылки)

## ✨ Особенности

* **Современная архитектура React:** Построен на React 19.x для компонентно-ориентированной разработки
* **Полное управление состоянием:**
  * Состояние сервера: [@tanstack/react-query](https://tanstack.com/query) для кэширования, фоновых обновлений и синхронизации данных
  * Состояние клиента: Готова к интеграции с библиотеками управления состоянием
* **Расширенная маршрутизация:** [@tanstack/react-router](https://tanstack.com/router) для типобезопасной клиентской навигации с поддержкой вложенных маршрутов
* **Оптимизированная стилизация:** [Tailwind CSS](https://tailwindcss.com/) для утилитарной стилизации с минимальной конфигурацией
* **Типобезопасность:** Полная интеграция TypeScript во весь кодовый база
* **Оптимизация производительности:**
  * Встроенное разделение кода и ленивая загрузка
  * Оптимизированный размер бандла с Rsbuild
* **Опыт разработчика:**
  * Быстрое обновление во время разработки
  * Интегрированные инструменты отладки ([React Query Devtools](https://tanstack.com/query/devtools), [Router Devtools](https://tanstack.com/router/devtools))
  * Конфигурация ESLint с плагинами TanStack
* **Готовность к CI/CD:** Рабочий процесс GitHub Actions для автоматического тестирования и выпуска
* **Интернационализация:** Структура для поддержки нескольких языков
* **Готовность к производству:** Оптимизированный процесс сборки и имплементация лучших практик

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально или интегрировать его в существующий рабочий процесс.

### Предварительные требования

* Node.js (v18.x или выше)
* Менеджер пакетов npm, yarn или pnpm
* Git

Проверка вашей среды:
```bash
node -v  # Должен выводить v18.x или выше
npm -v   # или yarn -v или pnpm -v
```

### Опции установки

#### Опция 1: Клонирование репозитория

```bash
# Клонирование репозитория
git clone https://github.com/Trapar-waves/react-tanstack.git
cd react-tanstack

# Установка зависимостей
npm install
# или
yarn install
# или
pnpm install
```

## 🛠️ Использование

### Рабочий процесс разработки

```bash
# Запуск сервера разработки с горячей перезагрузкой
npm run dev
# Сервер будет доступен по адресу http://localhost:8080

# Создание производственной сборки
npm run build

# Предварительный просмотр производственной сборки локально
npm run preview
```

### Доступные скрипты

| Скрипт | Описание |
|--------|----------|
| `dev` | Запускает сервер разработки с горячей заменой модулей |
| `build` | Создает оптимизированную производственную сборку в каталоге `dist` |
| `preview` | Предварительно просматривает производственную сборку локально |
| `lint` | Запускает ESLint для проверки проблем с качеством кода |
| `format` | Форматирует код с использованием Prettier (если настроено) |

### Базовое использование проекта

#### Создание страниц

Добавляйте новые маршруты, создавая файлы в каталоге `src/routes`:

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage
});

function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">О нас</h1>
      <p className="mt-4">Это страница "О нас"</p>
    </div>
  );
}
```

#### Получение данных с использованием React Query

```tsx
import { useQuery } from "@tanstack/react-query";
// src/routes/users.tsx
import { createFileRoute } from "@tanstack/react-router";

async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok)
    throw new Error("Не удалось получить пользователей");
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
    return <div>Загрузка...</div>;
  if (error) {
    return (
      <div>
        Ошибка:
        {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Пользователи</h1>
      <ul className="mt-4">
        {data.map(user => (
          <li key={user.id} className="border-b py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 📁 Структура проекта

```
├── .github/workflows/      # Рабочие процессы CI/CD
├── public/                 # Статические ресурсы
├── src/                    # Исходный код
│   ├── routes/             # Определения маршрутов
│   │   └── __root.tsx      # Корневой маршрут
│   ├── env.d.ts            # Определения типов окружения
│   ├── global.css          # Глобальные стили
│   ├── index.tsx           # Точка входа
│   └── router.ts           # Конфигурация маршрутизатора
├── .gitignore              # Правила игнорирования Git
├── eslint.config.js        # Конфигурация ESLint
├── package.json            # Зависимости и скрипты
├── rsbuild.config.ts       # Конфигурация сборки
└── tsconfig.json           # Конфигурация TypeScript
```

## 💻 Технологический стек

| Категория | Технология | Версия |
|----------|------------|--------|
| Фреймворк | React | v19.x |
| Маршрутизация | @tanstack/react-router | latest |
| Управление состоянием | @tanstack/react-query | latest |
| Стилизация | Tailwind CSS | latest |
| Инструмент сборки | Rsbuild | latest |
| Язык | TypeScript | v5.x |
| Линтинг | ESLint | latest |

Полный список зависимостей и их конкретных версий см. в [package.json](package.json).

## 🤝 Вклад в проект

Вклады в проект приветствуются и ценимся! Пожалуйста, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку для вашей функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте ваши изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте ветку в репозиторий (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Руководelines по вкладу

* Следуйте существующему стилю кода и соглашениям
* Добавляйте тесты для новых функций или исправлений ошибок
* Обновляйте документацию при необходимости
* Убедитесь, что ваши изменения работают с текущим стеком технологий
* Создавайте issues для крупных изменений перед их реализацией

### Кодекс поведения

Пожалуйста, будьте уважительны и доброжелательны к другим при внесении вклада в этот проект.

## 📄 Лицензия

Распространяется под лицензией **MIT**. Дополнительную информацию см. в файле `LICENSE`.

## 👤 Автор

* **Рикка** ([Профиль на GitHub](https://github.com/Muromi-Rikka))
* **Контактный email:** admin@rikka.cc

## 🔗 Ссылки

* **Репозиторий:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **Домашняя страница:** [https://github.com/Trapar-waves/react-tanstack](https://github.com/Trapar-waves/react-tanstack)
* **Issues:** [https://github.com/Trapar-waves/react-tanstack/issues](https://github.com/Trapar-waves/react-tanstack/issues)

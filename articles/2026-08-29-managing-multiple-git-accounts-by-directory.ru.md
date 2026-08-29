---
title: "Удобное разделение нескольких Git-аккаунтов по структуре папок"
date: "2026-08-29"
description: "Как настроить автоматическое переключение профилей Git, рабочей почты и SSH-ключей в зависимости от пути к репозиторию в Linux, macOS и Windows."
tags: ["Git", "DevOps", "Productivity", "Workflow", "Linux", "Windows"]
---

## Проблема: Коммиты не с того аккаунта

Когда вы одновременно работаете над личными пет-проектами, open-source библиотеками и коммерческими задачами разных заказчиков, важно строго разделять авторские данные коммитов и SSH-ключи. Прописывать `git config user.email` вручную в каждом новом клоне неудобно и ненадежно — рано или поздно рабочий коммит уйдёт с личной почты.

Лучшее решение — один раз выстроить дерево каталогов и доверить переключение профилей механизму **Conditional Includes (`includeIf`)** в Git.

---

## 1. Иерархия папок для проектов

Структура, к которой я пришёл, логично группирует все репозитории:

```text
git/
├── personal/                # Персональные проекты и личный GitHub
├── work/                    # Рабочие проекты
│   ├── microsoft/           # Проекты компании / клиента A
│   └── google/              # Проекты компании / клиента B
└── other/                   # Временные клоны, форки и быстрый аудит кода
```

Эта структура универсальна и одинаково отлично работает на **Ubuntu / Linux**, **macOS** и **Windows**.

---

## 2. Умная настройка через `includeIf`

Директива `includeIf` позволяет Git автоматически подгружать дополнительный конфигурационный файл в зависимости от того, в какой папке находится репозиторий.

### Шаг 1: Создаем отдельные конфиг-файлы

Создадим настройки для каждого окружения:

**`~/.gitconfig-personal`** (Личные проекты):

```ini
[user]
    name = Sergey Skorokhod
    email = sergeyskorokhod2@gmail.com
```

**`~/.gitconfig-work-ms`** (Рабочие проекты Microsoft):

```ini
[user]
    name = Sergey Skorokhod
    email = sergey@microsoft-partner.com
```

**`~/.gitconfig-work-google`** (Рабочие проекты Google):

```ini
[user]
    name = Sergey Skorokhod
    email = sergey@google-contractor.com
```

---

### Шаг 2: Настраиваем глобальный `~/.gitconfig`

В основном файле конфигурации (`~/.gitconfig` в Linux/macOS или `%USERPROFILE%\.gitconfig` в Windows) прописываем правила переключения:

```ini
# Настройки по умолчанию
[user]
    name = Sergey Skorokhod
    email = sergeyskorokhod2@gmail.com

[core]
    autocrlf = input
    editor = code --wait

# Если репозиторий в ~/git/personal/ — применяем личный конфиг
[includeIf "gitdir:~/git/personal/"]
    path = ~/.gitconfig-personal

# Если репозиторий в ~/git/work/microsoft/ — применяем рабочий конфиг MS
[includeIf "gitdir:~/git/work/microsoft/"]
    path = ~/.gitconfig-work-ms

# Если репозиторий в ~/git/work/google/ — применяем рабочий конфиг Google
[includeIf "gitdir:~/git/work/google/"]
    path = ~/.gitconfig-work-google
```

> **Совет для Windows:** В путях `gitdir:` всегда используйте прямые слеши `/`. Для нечувствительного к регистру сопоставления на дисках NTFS используйте префикс `gitdir/i:`:
>
> ```ini
> [includeIf "gitdir/i:C:/Users/sergey/git/work/"]
>     path = C:/Users/sergey/.gitconfig-work
> ```

---

## 3. Раздельные SSH-ключи (`~/.ssh/config`)

Если для разных аккаунтов на GitHub/GitLab используются разные приватные ключи, настройте файл `~/.ssh/config`:

```text
# Личный аккаунт GitHub
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

# Рабочий аккаунт GitHub
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

При клонировании используйте настроенный алиас:

```bash
# Клонирование рабочего проекта
git clone git@github.com-work:company-org/project.git

# Клонирование личного проекта
git clone git@github.com-personal:IllusionOfControl/personal-portfolio.git
```

---

## 4. Проверка активной конфигурации

Чтобы узнать, какой email Git подтянул в текущей директории:

```bash
git config user.email
```

А чтобы увидеть, из какого именно файла загрузилась настройка:

```bash
git config --show-origin user.email
```

Пример вывода:

```text
file:/home/sergey/.gitconfig-work-ms    sergey@microsoft-partner.com
```

---

## Резюме

- **Настройка один раз:** Иерархия каталогов и правила `includeIf` конфигурируются единожды.
- **Полная автоматизация:** Любой новый проект в папке `work/` или `personal/` мгновенно получает правильный email и профиль без ручных манипуляций.
- **Кроссплатформенность:** Работает одинаково надёжно в Linux, macOS и Windows.

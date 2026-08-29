---
title: "Managing Multiple Git Accounts Seamlessly by Directory Structure"
date: "2026-08-29"
description: "How to automatically switch Git identities, emails, and SSH keys based on repository folder paths across Linux, macOS, and Windows."
tags: ["Git", "DevOps", "Productivity", "Workflow", "Linux", "Windows"]
---

## The Problem: Commits with the Wrong Identity

When juggling personal pet projects, open-source contributions, and commercial client work across multiple companies, keeping commit emails and SSH credentials separated is crucial. Manually running `git config user.email` in every cloned repository is fragile — sooner or later, a work commit ends up with a personal identity, or vice versa.

The cleanest solution is organizing your repositories into a dedicated directory tree and letting Git automatically load the correct credentials using **Conditional Includes (`includeIf`)**.

---

## 1. Organizing the Directory Structure

The structure I settled on groups all repositories by purpose and organization:

```text
git/
├── personal/                # Personal projects & open source (Personal GitHub)
├── work/                    # Commercial & client repositories
│   ├── microsoft/           # Company A / Client projects
│   └── google/              # Company B / Client projects
└── other/                   # Temporary clones, forks, and read-only audits
```

Whether you are on **Ubuntu / Linux**, **macOS**, or **Windows**, this clear hierarchy allows Git to automatically detect which identity to apply based on your current path.

---

## 2. Smart Configuration with Git `includeIf`

Git's `includeIf` directive allows conditionally loading dedicated configuration files based on the folder path of the active repository.

### Step 1: Create dedicated profile configs

Create specific configurations for each context:

**`~/.gitconfig-personal`** (Personal projects):

```ini
[user]
    name = Sergey Skorokhod
    email = sergeyskorokhod2@gmail.com
```

**`~/.gitconfig-work-ms`** (Work - Microsoft):

```ini
[user]
    name = Sergey Skorokhod
    email = sergey@microsoft-partner.com
```

**`~/.gitconfig-work-google`** (Work - Google):

```ini
[user]
    name = Sergey Skorokhod
    email = sergey@google-contractor.com
```

---

### Step 2: Configure the Global `~/.gitconfig`

Now edit your global Git config file (`~/.gitconfig` or `%USERPROFILE%\.gitconfig` on Windows) and add the conditional routing rules:

```ini
# Default fallback credentials
[user]
    name = Sergey Skorokhod
    email = sergeyskorokhod2@gmail.com

[core]
    autocrlf = input
    editor = code --wait

# Load personal config for anything inside ~/git/personal/
[includeIf "gitdir:~/git/personal/"]
    path = ~/.gitconfig-personal

# Load specific work configs based on company subfolders
[includeIf "gitdir:~/git/work/microsoft/"]
    path = ~/.gitconfig-work-ms

[includeIf "gitdir:~/git/work/google/"]
    path = ~/.gitconfig-work-google
```

> **Windows Tip:** On Windows, always use forward slashes `/` in `gitdir:`. For case-insensitive path matching on NTFS, use `gitdir/i:`:
>
> ```ini
> [includeIf "gitdir/i:C:/Users/sergey/git/work/"]
>     path = C:/Users/sergey/.gitconfig-work
> ```

---

## 3. Pairing with Separate SSH Keys

If your accounts also require separate SSH keys for authentication to GitHub, GitLab, or Bitbucket, configure your `~/.ssh/config`:

```text
# Personal GitHub Account
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

# Work GitHub / Enterprise Account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

When cloning a repository, simply use the corresponding host alias:

```bash
# Clone with work SSH key
git clone git@github.com-work:company-org/project.git

# Clone with personal SSH key
git clone git@github.com-personal:IllusionOfControl/personal-portfolio.git
```

---

## 4. Verifying Which Config is Active

To quickly verify which email is applied in your current repository folder:

```bash
git config user.email
```

To see the exact origin file where the setting was loaded from:

```bash
git config --show-origin user.email
```

Output example:

```text
file:/home/sergey/.gitconfig-work-ms    sergey@microsoft-partner.com
```

---

## Summary

- **Single Global Setup:** Configure your folder hierarchy and `includeIf` blocks once.
- **Zero Friction:** Every new repository cloned into `work/` or `personal/` automatically adopts the right identity and author email without manual steps.
- **Cross-Platform:** Works identically across Linux, macOS, and Windows.

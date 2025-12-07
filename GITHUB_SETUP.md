# How to Push Your Project to GitHub

## Step 1: Install Git

1. Download Git for Windows: https://git-scm.com/download/win
2. Run the installer and follow the setup wizard
3. **Important**: Choose "Git from the command line and also from 3rd-party software" when prompted
4. After installation, **restart your terminal/PowerShell**

## Step 2: Verify Git Installation

Open a **new** PowerShell or Command Prompt and run:
```bash
git --version
```
You should see a version number (like `git version 2.x.x`)

## Step 3: Configure Git (First Time Only)

Set your name and email:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 4: Navigate to Your Project

```bash
cd "D:\Cursor AI Project"
```

## Step 5: Initialize Git Repository

```bash
git init
```

## Step 6: Add All Files

```bash
git add .
```

This will add all files except those in `.gitignore` (node_modules, build, etc.)

## Step 7: Create Initial Commit

```bash
git commit -m "Initial commit: React login dashboard app"
```

## Step 8: Create GitHub Repository

1. Go to https://github.com
2. Sign in (or create an account if you don't have one)
3. Click the **"+"** icon in the top right → **"New repository"**
4. Repository name: `login-dashboard-app` (or any name you like)
5. Choose **Public** or **Private**
6. **DO NOT** check "Initialize this repository with a README"
7. Click **"Create repository"**

## Step 9: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

## Step 10: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

You'll be prompted to enter your GitHub username and password (or personal access token).

---

## Quick Commands Summary

After the initial setup, to push changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

---

## Troubleshooting

### If you get "Authentication failed":
- Use a **Personal Access Token** instead of password:
  1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Generate new token with `repo` permissions
  3. Use the token as your password when pushing

### If port 3000 is still in use:
- Run `npm stop` first
- Or kill Node processes: `Get-Process node | Stop-Process -Force`

### If you want to update .gitignore:
- We already have a good `.gitignore` file that excludes `node_modules`, `build`, etc.



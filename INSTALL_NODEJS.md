# How to Install Node.js and Run the React App

## Step-by-Step Installation Guide

### Step 1: Download Node.js
1. Open your web browser
2. Go to: **https://nodejs.org/**
3. Click the green **"LTS"** button (recommended for most users)
   - This will download the Windows Installer (.msi file)

### Step 2: Install Node.js
1. Run the downloaded installer file
2. Click "Next" through the installation wizard
3. **IMPORTANT**: Make sure "Add to PATH" is checked (it should be by default)
4. Click "Install" (you may need administrator privileges)
5. Wait for installation to complete
6. Click "Finish"

### Step 3: Verify Installation
1. **Close your current PowerShell/terminal window completely**
2. Open a **NEW** PowerShell or Command Prompt window
3. Run these commands to verify:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (like v18.x.x and 9.x.x)

### Step 4: Navigate to Your Project
```bash
cd "D:\Cursor AI Project"
```

### Step 5: Install Dependencies
```bash
npm install
```
This will take 2-5 minutes to download all React packages.

### Step 6: Start the Application
```bash
npm start
```
The app will automatically open in your browser at `http://localhost:3000`

---

## ⚠️ Important Notes

- **You MUST close and reopen your terminal** after installing Node.js for it to work
- If you still get "npm is not recognized" after installing, restart your computer
- The first `npm install` may take several minutes - be patient!

---

## 🚀 Quick Alternative: Use HTML Version Now

While you're installing Node.js, you can use the HTML version immediately:

1. Navigate to: `D:\Cursor AI Project`
2. Double-click `login_dashboard.html`
3. It will open in your browser and work right away!

The HTML version has the same features but doesn't require any installation.



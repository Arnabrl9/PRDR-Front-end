# Quick Start Guide

## Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the **LTS (Long Term Support)** version for Windows
3. Run the installer and follow the installation wizard
4. Make sure to check "Add to PATH" during installation
5. Restart your terminal/command prompt after installation

## Step 2: Verify Installation

Open a new terminal/PowerShell and run:
```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Step 3: Navigate to Project Directory

Open terminal/PowerShell in the project folder:
```bash
cd "D:\Cursor AI Project"
```

## Step 4: Install Dependencies

```bash
npm install
```

This will install React and all required packages (may take a few minutes).

## Step 5: Start the Application

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

## Troubleshooting

- If `node` command is not recognized, restart your terminal after installing Node.js
- If port 3000 is already in use, React will ask to use a different port
- Make sure you're in the correct directory before running `npm install`

## Alternative: Using the HTML Version

If you want to quickly view the application without installing Node.js, you can open the HTML file directly:
- Open `login_dashboard.html` in your web browser
- This version works without any installation but doesn't have React features




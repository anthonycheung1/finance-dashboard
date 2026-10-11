# Personal Finance Dashboard — Complete Reproduction Guide

This document is a self-contained build record for reproducing the final version of the **Personal Finance Dashboard** portfolio project.

It is intended for a self-taught aspiring junior frontend developer who wants to build the project incrementally while learning React + TypeScript.

> **Important:** This document records the source-code version and the intended Git milestone history. It does not fabricate development dates or claim that work was completed independently if it was not. For an authentic learning history, create each milestone, understand it, test it, and commit it before moving to the next milestone.

> **Important for the current rebuild already in progress:** Do not reset or rewrite existing Git history, and do not repeat commits for work already committed. The existing checkpoint includes `Define finance models and sample data` and the follow-up `Fix Vite CSS import type checking`. Continue with the next unfinished feature, and make sure every feature commit includes `src/App.tsx` whenever that file was genuinely updated to integrate or preview the feature. The day-by-day sequence below is a from-scratch reference plan; adapt it to your actual current Git state.

---

> **CSS convention for this project:** use pixel values (`px`) for dimensions, spacing, font sizes, and breakpoints. Do not use `rem`, `vh`, `svh`, or `dvh` units in the project CSS.

# 1. Project overview

## Project name

**Personal Finance Dashboard**

## Repository

```text
personal-finance-dashboard
```

## Intended GitHub repository

[View the live website](https://anthonycheung1.github.io/personal-finance-dashboard)

## Intended GitHub Pages URL

[View the source code](https://github.com/anthonycheung1/personal-finance-dashboard)

## Technology stack

- React
- TypeScript
- Vite
- React Router
- Recharts
- CSS
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Browser `localStorage`

## Main features

- Financial overview dashboard
- ETF portfolio tracking
- Search ETFs
- Add ETFs
- Edit ETFs
- Delete ETFs
- ETF gain/loss calculations
- Property portfolio summary
- Property equity and LVR calculations
- Property rental income
- Property cash-flow calculations
- Mortgage repayment calculator
- Mortgage amortisation schedule
- Mortgage balance chart
- Net-worth chart
- Asset-allocation chart
- Investment projection calculator
- Browser persistence for ETF data
- Light/dark theme
- Responsive layout
- GitHub Pages deployment

The financial data is **illustrative sample data**, not live financial-account data.

---

# 2. Recommended development timeline

With:

- 3 hours Monday–Friday
- 10 hours Saturday
- 10 hours Sunday

this project can reasonably take approximately **6 weeks / 200 hours** while learning, debugging and testing rather than simply typing out the final code.

A particularly important change from the earlier version of this guide is that the project should be developed **incrementally in the browser**. A person building this application from scratch would normally keep Vite running, make a small change, refresh the browser, inspect the result, fix TypeScript/React errors, and then move on. Consequently, `src/main.tsx` and especially `src/App.tsx` should appear in the development history several times as the application is gradually assembled.

The code sections describe the intended file contents at each stage. The `App.tsx` checkpoint snippets are deliberately temporary integration snapshots: replace `App.tsx` with the snapshot for that milestone, preview the feature, and then move to the next snapshot as more features are added. The day-by-day plan explains when each file should be created or materially changed, what should be visible in the browser, and what should be committed. This produces a much more believable development history than writing every file first and then manufacturing a sequence of unrelated commits.

## 2.1 Day-by-day development plan

| Day | Main work | Files created/changed that day | Browser checkpoint | Commit |
|---:|---|---|---|---|
| 1 | Create Vite/React/TypeScript project and confirm the toolchain | `package.json`, lockfile, Vite/TypeScript/ESLint config, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css` | Vite's React app renders | `Initialise Vite React TypeScript project` |
| 2 | Replace boilerplate with the first personal-finance-dashboard shell | `src/main.tsx`, `src/App.tsx`, `src/index.css`, `index.html` | “Personal Finance Dashboard” heading renders | `Create initial finance dashboard shell` |
| 3 | Define domain models and sample financial data | `src/types/finance.ts`, `src/data/financialData.ts`; small `src/App.tsx` update to inspect sample data | App displays a simple sample-data summary | `Define finance models and sample data` |
| 4 | Add calculations and formatting helpers | `src/utils/calculations.ts`, `src/utils/formatters.ts`; `src/App.tsx` updated to display calculated ETF/property figures | Calculated values appear instead of hard-coded values | `Add financial calculation and formatting utilities` |
| 5 | Build reusable layout primitives | `StatCard.tsx`, `PageLayout.tsx`; `src/App.tsx` updated to use them | Dashboard shell becomes component-based | `Build reusable dashboard UI components` |
| 6 | Add the first navigation structure | `Navigation.tsx`, `src/App.tsx`; `src/main.tsx` remains the stable React entry point | Navigation/header appears | `Add dashboard navigation` |
| 7 | Add net-worth and asset-allocation charts | chart components; `src/App.tsx` updated to render them | Charts appear beside/under the financial metrics | `Add portfolio charts` |
| 8 | Add mortgage chart component and connect sample schedule data | `MortgageChart.tsx`; `src/App.tsx` updated to preview it | Mortgage chart can be inspected before the full mortgage page exists | `Add mortgage chart visualisation` |
| 9 | Build the ETF table structure and form | `ETFTable.tsx`; `src/App.tsx` updated to render the table | ETF holdings table and form render | `Build ETF portfolio table` |
| 10 | Add ETF search, validation and CRUD state | `ETFTable.tsx`, `src/App.tsx` | Add/edit/delete/search can be tested | `Implement ETF portfolio management` |
| 11 | Build the property table | `PropertyTable.tsx`; `src/App.tsx` updated to preview it | Property values, mortgage, equity and cash flow render | `Add property portfolio table` |
| 12 | Build the dashboard page from the components already tested | `Dashboard.tsx`; `src/App.tsx` updated to render `Dashboard` | Finished dashboard page renders from real components | `Build dashboard page` |
| 13 | Build Investments and Properties pages | `Investments.tsx`, `Properties.tsx`; `src/App.tsx` updated to preview the pages | Portfolio pages render | `Build investment and property pages` |
| 14 | Build the mortgage calculator UI | `MortgageCalculator.tsx`; `src/App.tsx` updated to preview mortgage functionality | Mortgage inputs and validation work | `Build mortgage calculator` |
| 15 | Build the mortgage page and connect amortisation/chart output | `Mortgage.tsx`, `src/App.tsx` | Full mortgage calculation page works | `Add mortgage calculation page` |
| 16 | Build the investment projection page | `Projections.tsx`; `src/App.tsx` updated to preview it | Projection assumptions update the results | `Add investment projection calculator` |
| 17 | Introduce React Router and replace preview rendering with real routes | `src/App.tsx`, small `src/main.tsx`/CSS adjustments only if needed | Dashboard, Investments, Properties, Mortgage and Projections have separate URLs | `Add application routing` |
| 18 | Lift ETF state into `App.tsx` and pass it through routes/components | `src/App.tsx`, `Dashboard.tsx`, `Investments.tsx`, `Projections.tsx` | Editing an ETF updates dashboard/projection values | `Connect shared ETF state across pages` |
| 19 | Add browser persistence | `src/App.tsx` | ETF changes survive refresh | `Add ETF browser persistence` |
| 20 | Add dark-mode state and persistence | `src/App.tsx`, `Navigation.tsx`, CSS | Theme toggles and survives refresh | `Add persistent dark mode` |
| 21 | Consolidate final dashboard routing and fallback page | `src/App.tsx` | All routes and “Page not found” behaviour work | `Complete application routing` |
| 22 | Apply final global styling | `src/index.css` | Typography, colours, focus states and page background are consistent | `Style global application foundation` |
| 23 | Apply final component/page styling | `src/App.css` | Cards, tables, forms, navigation and charts have the final visual design | `Style dashboard components` |
| 24 | Add responsive layouts | `src/App.css`, `src/index.css` | Desktop/tablet/mobile layouts are usable | `Add responsive layouts` |
| 25 | Full functional testing and bug fixing | Any affected `src/*.tsx`, especially `App.tsx` if integration bugs appear | All pages and interactions work together | `Fix integration issues across dashboard` |
| 26 | Accessibility and form/error-state pass | `ETFTable.tsx`, `MortgageCalculator.tsx`, page/components as required | Keyboard/focus/error messaging behaves correctly | `Improve form accessibility and validation` |
| 27 | Final TypeScript/lint/build cleanup | Any files exposed by `npm run lint` or `npm run build` | Clean build and lint | `Clean up TypeScript and lint issues` |
| 28 | Add GitHub Pages workflow | `.github/workflows/deploy.yaml`, `vite.config.ts` if repository base needs confirmation | Production build can be deployed | `Configure GitHub Pages deployment` |
| 29 | Write documentation and deployment instructions | `README.md` | Repository is understandable to another developer | `Add project documentation` |
| 30 | Final regression test and portfolio cleanup | `README.md`, affected source files only if genuine fixes are found | Complete end-to-end test | `Finalise finance dashboard portfolio project` |

### Important interpretation of the table

The table deliberately includes `src/App.tsx` repeatedly, and the milestone sections below now provide actual code/integration instructions for doing so. This is not unnecessary churn: `App.tsx` is the natural place to compose and preview the application while individual components and pages are being developed. Each checkpoint is a temporary working state; later checkpoints replace or extend it.

`src/main.tsx`, on the other hand, normally changes much less often. It is the application's entry point and usually remains stable after the initial Vite setup. A realistic history therefore **should not artificially modify `main.tsx` every day** just to make the history look busy. It should be committed when it genuinely changes, especially on Days 1–2.

Likewise, it is normal for `App.tsx` to undergo several meaningful changes:

1. initial placeholder application;
2. sample financial data preview;
3. calculated financial metrics;
4. component composition;
5. chart/table previews;
6. shared ETF state;
7. routing;
8. persistence/theme state;
9. final integration and bug fixes.

That is a much more credible history for a self-taught React developer than a history in which `App.tsx` appears only once at the beginning and once at the end.

## 2.1.1 Exact Git staging guidance for the daily history

If you want the Git history to follow the table above, use the following staging pattern. The commands are intentionally grouped by **actual feature work**, and `src/App.tsx` is included whenever it is used to integrate or preview that feature.

**Required commit habit:** for Days 3–21, inspect `git status` and `git diff src/App.tsx` before committing. If the feature was integrated or previewed through `App.tsx`, stage it with the feature files and commit them together. Do not create a feature commit that leaves a real, completed `App.tsx` integration change unstaged. Do not edit `App.tsx` artificially if that feature is correctly encapsulated elsewhere; commits must represent genuine work.

```powershell
# Day 1
git add package.json package-lock.json index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json eslint.config.js .gitignore src/main.tsx src/App.tsx src/index.css src/vite-env.d.ts
git commit -m "Initialise Vite React TypeScript project"
git push

# Day 2
git add src/main.tsx src/App.tsx src/index.css index.html
git commit -m "Create initial finance dashboard shell"
git push

# Day 3
git add src/types/finance.ts src/data/financialData.ts src/App.tsx
git commit -m "Define finance models and sample data"
git push

# Day 4
git add src/utils/calculations.ts src/utils/formatters.ts src/App.tsx
git commit -m "Add financial calculation and formatting utilities"
git push

# Day 5
git add src/components/UI/StatCard.tsx src/components/Layout/PageLayout.tsx src/App.tsx
git commit -m "Build reusable dashboard UI components"
git push

# Day 6
git add src/components/UI/Navigation.tsx src/App.tsx
git commit -m "Add dashboard navigation"
git push

# Day 7
git add src/components/Charts/NetWorthChart.tsx src/components/Charts/AssetAllocationChart.tsx src/App.tsx
git commit -m "Add portfolio charts"
git push

# Day 8
git add src/components/Charts/MortgageChart.tsx src/App.tsx
git commit -m "Add mortgage chart visualisation"
git push

# Day 9
 src/components/UI/ETFTable.tsx src/App.tsx
git commit -m "Build ETF portfolio table"
git push

# Day 10
 src/components/UI/ETFTable.tsx src/App.tsx
git commit -m "Implement ETF portfolio management"
git push

# Day 11
 src/components/UI/PropertyTable.tsx src/App.tsx
git commit -m "Add property portfolio table"
git push

# Day 12
 src/pages/Dashboard.tsx src/App.tsx
git commit -m "Build dashboard page"
git push

# Day 13
 src/pages/Investments.tsx src/pages/Properties.tsx src/App.tsx
git commit -m "Build investment and property pages"
git push

# Day 14
 src/components/UI/MortgageCalculator.tsx src/App.tsx
git commit -m "Build mortgage calculator"
git push

# Day 15
 src/pages/Mortgage.tsx src/App.tsx
git commit -m "Add mortgage calculation page"
git push

# Day 16
 src/pages/Projections.tsx src/App.tsx
git commit -m "Add investment projection calculator"
git push

# Day 17
 src/App.tsx
git commit -m "Add application routing"
git push

# Day 18
 src/App.tsx src/pages/Dashboard.tsx src/pages/Investments.tsx src/pages/Projections.tsx
git commit -m "Connect shared ETF state across pages"
git push

# Day 19
 src/App.tsx
git commit -m "Add ETF browser persistence"
git push

# Day 20
 src/App.tsx src/components/UI/Navigation.tsx
git commit -m "Add persistent dark mode"
git push

# Day 21
 src/App.tsx
git commit -m "Complete application routing"
git push

# Day 22
 src/index.css
git commit -m "Style global application foundation"
git push

# Day 23
 src/App.css
git commit -m "Style dashboard components"
git push

# Day 24
 src/App.css src/index.css
git commit -m "Add responsive layouts"
git push

# Day 25
 <only-the-files-with-real-integration-fixes>
git commit -m "Fix integration issues across dashboard"
git push

# Day 26
 <only-the-files-with-real-accessibility-or-validation-fixes>
git commit -m "Improve form accessibility and validation"
git push

# Day 27
 <only-the-files-with-real-build-or-lint-fixes>
git commit -m "Clean up TypeScript and lint issues"
git push

# Day 28
 .github/workflows/deploy.yaml vite.config.ts
git commit -m "Configure GitHub Pages deployment"
git push

# Day 29
 README.md
git commit -m "Add project documentation"
git push

# Day 30
 <only-the-files-with-real-final-fixes>
git commit -m "Finalise finance dashboard portfolio project"
git push
```

The angle-bracket placeholders on Days 25–27 and 30 are deliberate. Do **not** stage arbitrary files merely to reproduce a planned history. Stage the files that actually changed during your testing and debugging.

## 2.2 The intended visual-development progression

At the end of each meaningful development session, the normal workflow should be:

```text
Edit a small set of files
        ↓
Run Vite with npm run dev
        ↓
Open/refresh the browser
        ↓
Check the new feature visually
        ↓
Fix TypeScript/React/CSS problems
        ↓
Run npm run lint
        ↓
Run npm run build
        ↓
Run npm run dev
        ↓
Commit the completed feature
```

For example, after adding the financial calculations on Day 4, it is perfectly reasonable for `App.tsx` temporarily to contain a small development view such as:

```tsx
import { etfHoldings } from './data/financialData';

import {
  getTotalETFValue,
  getTotalETFCost
} from './utils/calculations';

import { formatCurrency } from './utils/formatters';

function App() {
  return (
    <main>
      <h1>Personal Finance Dashboard</h1>

      <p>
        Current ETF value:{' '}
        {formatCurrency(
          getTotalETFValue(etfHoldings)
        )}
      </p>

      <p>
        Total ETF cost:{' '}
        {formatCurrency(
          getTotalETFCost(etfHoldings)
        )}
      </p>
    </main>
  );
}

export default App;
```

That code is intentionally an **intermediate development state**, not an additional final component that needs to survive into the finished application. Once the relevant page/component exists, `App.tsx` evolves again.

Similarly, after the chart components are created, `App.tsx` can temporarily render them directly so that the developer can verify the Recharts configuration before the final Dashboard page is assembled. This is exactly the sort of incremental integration that creates a credible development history.

## 2.3 Commit history principle

Do not create all the final files first and then manufacture thirty commits. Instead, create the project in the sequence above and commit after each meaningful feature is working.

It is completely normal for several commits to modify the same file:

```text
App.tsx
App.tsx
App.tsx
App.tsx
App.tsx
...
```

That does **not** make the history suspicious. In a React application, `App.tsx` is an integration point, so repeated changes are expected.

The same principle applies to `Dashboard.tsx`, `Investments.tsx`, CSS files and shared components: later commits should modify existing files when new functionality is integrated rather than pretending that every file was written once in isolation.

The commit messages should describe the actual feature introduced by the commit. Do not fabricate dates, authorship or a false claim of independent development.

---

# 3. Final directory structure

The final project should look approximately like this:

```text
personal-finance-dashboard/
│
├── .github/
│   └── workflows/
│       └── deploy.yaml
│
├── src/
│   ├── components/
│   │   ├── Charts/
│   │   │   ├── AssetAllocationChart.tsx
│   │   │   ├── MortgageChart.tsx
│   │   │   └── NetWorthChart.tsx
│   │   │
│   │   ├── Layout/
│   │   │   └── PageLayout.tsx
│   │   │
│   │   └── UI/
│   │       ├── ETFTable.tsx
│   │       ├── MortgageCalculator.tsx
│   │       ├── Navigation.tsx
│   │       ├── PropertyTable.tsx
│   │       └── StatCard.tsx
│   │
│   ├── data/
│   │   └── financialData.ts
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Investments.tsx
│   │   ├── Mortgage.tsx
│   │   ├── Projections.tsx
│   │   └── Properties.tsx
│   │
│   ├── types/
│   │   └── finance.ts
│   │
│   ├── utils/
│   │   ├── calculations.ts
│   │   └── formatters.ts
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

# 4. Milestone 1 — Initialise the Vite project

## 4.1 Create the project

PowerShell:

```powershell
cd "C:\Users\ache2535\OneDrive - The University of Sydney (Staff)\Documents\My_Files\FrontEndWebDevelopmentProjects\WIP"

npm create vite@latest personal-finance-dashboard -- --template react-ts

cd personal-finance-dashboard

npm install

npm install react-router-dom recharts
```

Create directories:

```powershell
New-Item -ItemType Directory -Force -Path `
  src/components/Charts, `
  src/components/UI, `
  src/components/Layout, `
  src/data, `
  src/pages, `
  src/types, `
  src/utils, `
  .github/workflows
```

---

## 4.2 `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal-finance-dashboard/',
});
```

---

## 4.2.1 `package.json`

The Vite-generated project uses the following scripts and dependencies. The exact `package-lock.json` is regenerated by `npm install` from this manifest; do not hand-edit the lockfile.

```json
{
  "name": "personal-finance-dashboard",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.9.5",
    "recharts": "^3.2.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@vitejs/plugin-react": "^6.0.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^8.2.2"
  }
}
```

> **Note:** `package-lock.json` is intentionally not pasted into this guide because it is a generated dependency-resolution file. Running `npm install` from the `package.json` above creates the lockfile. Commit that generated `package-lock.json` with the first milestone.

---

## 4.2.2 `eslint.config.js`

```js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);
```

---

## 4.2.3 `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

---

## 4.2.4 `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

---

## 4.2.5 `src/vite-env.d.ts`

Ensure this Vite-generated TypeScript declaration file exists. It allows TypeScript to understand Vite client types and asset imports such as `import './index.css'`.

```ts
/// <reference types="vite/client" />
```

If the file is missing, create it at exactly `src/vite-env.d.ts`. Keep the `noUncheckedSideEffectImports` setting in `tsconfig.app.json` as shown above; do not work around a missing declaration by removing the CSS import from `src/main.tsx`.

---

## 4.2.6 `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

---

## 4.3 `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta
      name="description"
      content="A personal finance dashboard for tracking investments, property, mortgages and net worth."
    />

    <title>Personal Finance Dashboard</title>
  </head>

  <body>
    <div id="root"></div>

    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 4.4 `src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## 4.5 Initial `src/App.tsx`

```tsx
function App() {
  return (
    <main>
      <h1>Personal Finance Dashboard</h1>
      <p>Project foundation is ready.</p>
    </main>
  );
}

export default App;
```

---

## 4.6 Initial `src/index.css`

```css
:root {
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  background: #f5f7fa;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100%;
  margin: 0;
  background: #f5f7fa;
  color: #222222;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}
```

---

## 4.7 Initial `.github/workflows/deploy.yaml` — for GitHub Pages deployment

```yaml
# Deploy the Vite application to GitHub Pages.
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Set up Node.js
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Set up GitHub Pages
        uses: actions/configure-pages@v6
        with:
          enablement: true

      - name: Upload build files
        uses: actions/upload-pages-artifact@v4
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

# 19. Connect the GitHub repository

Create an empty GitHub repository named:

```text
personal-finance-dashboard
```

Then:

```powershell
git remote add origin https://github.com/anthonycheung1/personal-finance-dashboard.git
```

Check:

```powershell
git remote -v
```

Push:

```powershell
git push -u origin main
```

If `origin` already exists but points to the wrong repository:

```powershell
git remote set-url origin https://github.com/anthonycheung1/personal-finance-dashboard.git
```

Then:

```powershell
git push -u origin main
```

---

## 4.8 Test

```powershell
npm run dev
```

Check the page in the browser.

Stop Vite:

```text
Ctrl+C
```

Then:

```powershell
npm run build
npm run lint
npm run dev
```

---

## 4.8 Git commit

```powershell
git init
git branch -M main

git config --global user.name "anthonycheung1"
git config --global user.email "anthonykkcheung426@gmail.com"

 .
git commit -m "Initialise Vite React TypeScript project"
```

Check:

```powershell
git log --oneline
```

---

# 5. Milestone 2 — Finance models and sample data

## 5.1 `src/types/finance.ts`

```ts
export type ETF = {
  id: number;
  ticker: string;
  name: string;
  units: number;
  currentPrice: number;
  averagePurchasePrice: number;
};

export type Property = {
  id: number;
  name: string;
  suburb: string;
  currentValue: number;
  mortgageBalance: number;
  interestRate: number;
  offsetBalance: number;
  weeklyRentalIncome: number;
  annualExpenses: number;
};

export type NetWorthHistory = {
  date: Date;
  netWorth: number;
};

export type CashAccount = {
  id: number;
  accountName: string;
  balance: number;
};

export type SuperAccount = {
  id: number;
  fundName: string;
  investmentOption: string;
  balance: number;
};

export type MortgagePayment = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};
```

---

## 5.2 `src/data/financialData.ts`

```ts
import type {
  ETF,
  Property,
  CashAccount,
  SuperAccount,
  NetWorthHistory
} from '../types/finance';

export const etfHoldings: ETF[] = [
  {
    id: 1,
    ticker: 'VDHG',
    name: 'Vanguard Diversified High Growth Index ETF',
    units: 421,
    currentPrice: 77.15,
    averagePurchasePrice: 47.28
  },
  {
    id: 2,
    ticker: 'VDAL',
    name: 'Vanguard Australian Shares High Yield ETF',
    units: 40,
    currentPrice: 58.46,
    averagePurchasePrice: 57.30
  },
  {
    id: 3,
    ticker: 'V500',
    name: 'Vanguard US Total Market Shares Index ETF',
    units: 29,
    currentPrice: 55.13,
    averagePurchasePrice: 55.45
  },
  {
    id: 4,
    ticker: 'NDQ',
    name: 'BetaShares NASDAQ 100 ETF',
    units: 18,
    currentPrice: 57.80,
    averagePurchasePrice: 51.20
  }
];

export const properties: Property[] = [
  {
    id: 1,
    name: 'Sydney Residence',
    suburb: 'Mascot',
    currentValue: 1650000,
    mortgageBalance: 720000,
    interestRate: 6.09,
    offsetBalance: 185000,
    weeklyRentalIncome: 0,
    annualExpenses: 8500
  },
  {
    id: 2,
    name: 'Parramatta Investment Property',
    suburb: 'Parramatta',
    currentValue: 850000,
    mortgageBalance: 610000,
    interestRate: 6.39,
    offsetBalance: 0,
    weeklyRentalIncome: 720,
    annualExpenses: 12500
  }
];

export const cashAccounts: CashAccount[] = [
  {
    id: 1,
    accountName: 'Everyday Account',
    balance: 8500
  },
  {
    id: 2,
    accountName: 'Emergency Savings',
    balance: 32000
  }
];

export const superAccounts: SuperAccount[] = [
  {
    id: 1,
    fundName: 'AustralianSuper',
    investmentOption: 'Balanced',
    balance: 185000
  },
  {
    id: 2,
    fundName: 'Hostplus',
    investmentOption: 'Indexed High Growth',
    balance: 72000
  }
];

export const netWorthHistory: NetWorthHistory[] = [
  { date: new Date('2025-10-01'), netWorth: 720000 },
  { date: new Date('2025-11-01'), netWorth: 735000 },
  { date: new Date('2025-12-01'), netWorth: 748000 },
  { date: new Date('2026-01-01'), netWorth: 755000 },
  { date: new Date('2026-02-01'), netWorth: 771000 },
  { date: new Date('2026-03-01'), netWorth: 786000 },
  { date: new Date('2026-04-01'), netWorth: 798000 },
  { date: new Date('2026-05-01'), netWorth: 815000 },
  { date: new Date('2026-06-01'), netWorth: 829000 },
  { date: new Date('2026-07-01'), netWorth: 842000 },
  { date: new Date('2026-08-01'), netWorth: 858000 },
  { date: new Date('2026-09-01'), netWorth: 875000 }
];
```

---

### 5.3.1 Update `src/App.tsx` to preview the sample data

Do this now, before moving on to calculation utilities. `App.tsx` is the live preview surface; do not leave the data files unconnected until the routing milestone.

Replace `src/App.tsx` with:

```tsx
import {
  etfHoldings,
  properties,
  cashAccounts,
  superAccounts
} from './data/financialData';

function App() {
  return (
    <main>
      <h1>Personal Finance Dashboard</h1>

      <section>
        <h2>Sample portfolio data</h2>
        <p>ETF holdings: {etfHoldings.length}</p>
        <p>Properties: {properties.length}</p>
        <p>Cash accounts: {cashAccounts.length}</p>
        <p>Super accounts: {superAccounts.length}</p>
      </section>

      <section>
        <h2>ETF holdings</h2>
        {etfHoldings.map((etf) => (
          <p key={etf.id}>
            {etf.ticker} — {etf.units} units
          </p>
        ))}
      </section>
    </main>
  );
}

export default App;
```

Run `npm run dev` and confirm the sample counts and ETF tickers appear. Keep the browser open as you work.

## 5.3 Test

```powershell
npm run build
npm run lint
npm run dev
```

---

## 5.4 Git commit

```powershell
git add src/types/finance.ts src/data/financialData.ts src/App.tsx
git commit -m "Define finance models and sample data"
git push
```

---

# 6. Milestone 3 — Financial calculations and formatters

## 6.1 `src/utils/formatters.ts`

```ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 2
  }).format(amount);
}

export function formatPercentage(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount / 100);
}

export function formatNumber(amount: number): string {
  return new Intl.NumberFormat('en-AU').format(amount);
}
```

---

## 6.2 `src/utils/calculations.ts`

```ts
import type {
  ETF,
  Property,
  CashAccount,
  SuperAccount,
  MortgagePayment
} from '../types/finance';

export function getETFCurrentValue(etf: ETF): number {
  return etf.units * etf.currentPrice;
}

export function getETFTotalCost(etf: ETF): number {
  return etf.units * etf.averagePurchasePrice;
}

export function getETFDollarGainLoss(etf: ETF): number {
  return getETFCurrentValue(etf) - getETFTotalCost(etf);
}

export function getETFPercentageGainLoss(etf: ETF): number {
  const totalCost = getETFTotalCost(etf);

  if (totalCost === 0) {
    return 0;
  }

  return (getETFDollarGainLoss(etf) / totalCost) * 100;
}

export function getTotalETFValue(etfs: ETF[]): number {
  return etfs.reduce(
    (total, etf) => total + getETFCurrentValue(etf),
    0
  );
}

export function getTotalETFCost(etfs: ETF[]): number {
  return etfs.reduce(
    (total, etf) => total + getETFTotalCost(etf),
    0
  );
}

export function getPropertyEquity(property: Property): number {
  return (
    property.currentValue -
    property.mortgageBalance +
    property.offsetBalance
  );
}

export function getPropertyLVR(property: Property): number {
  if (property.currentValue <= 0) {
    return 0;
  }

  return (
    property.mortgageBalance /
    property.currentValue *
    100
  );
}

export function getPropertyAnnualRentalIncome(
  property: Property
): number {
  return property.weeklyRentalIncome * 52;
}

export function getPropertyAnnualInterest(
  property: Property
): number {
  const interestBearingBalance = Math.max(
    0,
    property.mortgageBalance - property.offsetBalance
  );

  return interestBearingBalance * (property.interestRate / 100);
}

export function getPropertyCashFlow(
  property: Property
): number {
  return (
    getPropertyAnnualRentalIncome(property) -
    getPropertyAnnualInterest(property) -
    property.annualExpenses
  );
}

export function getTotalPropertyEquity(
  properties: Property[]
): number {
  return properties.reduce(
    (total, property) => total + getPropertyEquity(property),
    0
  );
}

export function getTotalPropertyMortgage(
  properties: Property[]
): number {
  return properties.reduce(
    (total, property) => total + property.mortgageBalance,
    0
  );
}

export function getTotalPropertyAnnualRentalIncome(
  properties: Property[]
): number {
  return properties.reduce(
    (total, property) =>
      total + getPropertyAnnualRentalIncome(property),
    0
  );
}

export function getTotalPropertyAnnualInterest(
  properties: Property[]
): number {
  return properties.reduce(
    (total, property) =>
      total + getPropertyAnnualInterest(property),
    0
  );
}

export function getTotalPropertyCashFlow(
  properties: Property[]
): number {
  return properties.reduce(
    (total, property) => total + getPropertyCashFlow(property),
    0
  );
}

export function getTotalCash(
  cashAccounts: CashAccount[]
): number {
  return cashAccounts.reduce(
    (total, account) => total + account.balance,
    0
  );
}

export function getTotalSuperannuationBalance(
  superAccounts: SuperAccount[]
): number {
  return superAccounts.reduce(
    (total, account) => total + account.balance,
    0
  );
}

export function getNetWorth(
  etfs: ETF[],
  properties: Property[],
  superAccounts: SuperAccount[],
  cashAccounts: CashAccount[]
): number {
  return (
    getTotalETFValue(etfs) +
    getTotalPropertyEquity(properties) +
    getTotalSuperannuationBalance(superAccounts) +
    getTotalCash(cashAccounts)
  );
}

export function getMonthlyMortgagePayment(
  principal: number,
  annualInterestRate: number,
  termYears: number
): number {
  if (principal <= 0 || termYears <= 0) {
    return 0;
  }

  const numberOfPayments = termYears * 12;
  const monthlyInterestRate =
    annualInterestRate / 100 / 12;

  if (monthlyInterestRate === 0) {
    return principal / numberOfPayments;
  }

  const rateFactor = Math.pow(
    1 + monthlyInterestRate,
    numberOfPayments
  );

  return (
    principal *
    (
      monthlyInterestRate * rateFactor
    ) /
    (rateFactor - 1)
  );
}

export function getMortgageAmortisationSchedule(
  principal: number,
  annualInterestRate: number,
  termYears: number
): MortgagePayment[] {
  if (
    principal <= 0 ||
    annualInterestRate < 0 ||
    termYears <= 0 ||
    !Number.isInteger(termYears)
  ) {
    return [];
  }

  const monthlyPayment = getMonthlyMortgagePayment(
    principal,
    annualInterestRate,
    termYears
  );

  const monthlyInterestRate =
    annualInterestRate / 100 / 12;

  const numberOfPayments = termYears * 12;

  const schedule: MortgagePayment[] = [];

  let balance = principal;

  for (let month = 1; month <= numberOfPayments; month++) {
    const interest = balance * monthlyInterestRate;

    const principalPaid = Math.min(
      balance,
      monthlyPayment - interest
    );

    balance = Math.max(
      0,
      balance - principalPaid
    );

    schedule.push({
      month,
      payment: principalPaid + interest,
      principal: principalPaid,
      interest,
      balance
    });
  }

  return schedule;
}
```

---

### 6.3.1 Update `src/App.tsx` to preview calculated values

Now replace the sample-data-only preview with this calculated summary. This is an intentional, meaningful `App.tsx` change and belongs in this milestone's commit.

```tsx
import {
  etfHoldings,
  properties,
  cashAccounts,
  superAccounts
} from './data/financialData';

import {
  getTotalETFValue,
  getTotalETFCost,
  getTotalPropertyEquity,
  getTotalPropertyCashFlow,
  getTotalCash,
  getTotalSuperannuationBalance,
  getNetWorth
} from './utils/calculations';

import {
  formatCurrency,
  formatNumber
} from './utils/formatters';

function App() {
  const totalETFValue = getTotalETFValue(etfHoldings);
  const totalETFCost = getTotalETFCost(etfHoldings);
  const totalPropertyEquity = getTotalPropertyEquity(properties);
  const totalPropertyCashFlow = getTotalPropertyCashFlow(properties);
  const totalCash = getTotalCash(cashAccounts);
  const totalSuper = getTotalSuperannuationBalance(superAccounts);
  const netWorth = getNetWorth(
    etfHoldings,
    properties,
    superAccounts,
    cashAccounts
  );

  return (
    <main>
      <h1>Personal Finance Dashboard</h1>
      <section>
        <h2>Portfolio summary</h2>
        <p>ETF value: {formatCurrency(totalETFValue)}</p>
        <p>ETF cost: {formatCurrency(totalETFCost)}</p>
        <p>Property equity: {formatCurrency(totalPropertyEquity)}</p>
        <p>Property cash flow: {formatCurrency(totalPropertyCashFlow)}</p>
        <p>Cash: {formatCurrency(totalCash)}</p>
        <p>Superannuation: {formatCurrency(totalSuper)}</p>
        <p>Net worth: {formatCurrency(netWorth)}</p>
        <p>ETF holdings: {formatNumber(etfHoldings.length)}</p>
      </section>
    </main>
  );
}

export default App;
```

Run `npm run dev` and check the numbers. Confirm the calculation helpers are imported and used rather than hard-coding the displayed totals.

## 6.3 Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/utils/calculations.ts src/utils/formatters.ts src/App.tsx
git commit -m "Add financial calculation and formatting utilities"
git push
```

---

# 7. Milestone 4 — Shared UI

## 7.1 `src/components/UI/StatCard.tsx`

```tsx
type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  className?: string;
};

function StatCard(props: StatCardProps) {
  return (
    <article className={`stat-card ${props.className ?? ''}`}>
      <h3>{props.title}</h3>

      <p className="stat-card-value">
        {props.value}
      </p>

      {props.subtitle && (
        <p className="stat-card-subtitle">
          {props.subtitle}
        </p>
      )}
    </article>
  );
}

export default StatCard;
```

## 7.2 `src/components/Layout/PageLayout.tsx`

```tsx
import type { ReactNode } from 'react';

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

function PageLayout(props: PageLayoutProps) {
  return (
    <main className="page-content">
      <h1>{props.title}</h1>

      {props.children}
    </main>
  );
}

export default PageLayout;
```

## 7.3 `src/components/UI/Navigation.tsx`

```tsx
import { NavLink } from 'react-router-dom';

type NavigationProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

function Navigation(props: NavigationProps) {
  return (
    <header className="site-header">
      <nav
        className="main-navigation"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          end
          className="site-title"
        >
          Finance Dashboard
        </NavLink>

        <ul className="navigation-links">
          <li>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/investments">
              Investments
            </NavLink>
          </li>

          <li>
            <NavLink to="/properties">
              Properties
            </NavLink>
          </li>

          <li>
            <NavLink to="/mortgage">
              Mortgage
            </NavLink>
          </li>

          <li>
            <NavLink to="/projections">
              Projections
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="theme-toggle"
          onClick={props.onToggleDarkMode}
          aria-label={
            props.isDarkMode
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          }
        >
          {props.isDarkMode
            ? '☀ Light Mode'
            : '☾ Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
```

---

### 7.4.1 Update `src/App.tsx` to use the shared UI

After creating `StatCard.tsx` and `PageLayout.tsx`, integrate them immediately. Do not wait until the dashboard page milestone to see these components in use. Leave `Navigation.tsx` unrendered for now because its `NavLink` elements require a router; routing is introduced later.

Replace `src/App.tsx` with:

```tsx
import {
  etfHoldings,
  properties,
  cashAccounts,
  superAccounts
} from './data/financialData';

import {
  getTotalETFValue,
  getTotalPropertyEquity,
  getTotalCash,
  getTotalSuperannuationBalance,
  getNetWorth
} from './utils/calculations';

import { formatCurrency } from './utils/formatters';
import PageLayout from './components/Layout/PageLayout';
import StatCard from './components/UI/StatCard';

function App() {
  const netWorth = getNetWorth(etfHoldings, properties, superAccounts, cashAccounts);

  return (
    <PageLayout title="Personal Finance Dashboard">
      <section className="dashboard-section">
        <h2>Financial overview</h2>
        <div className="top-level-metrics-grid">
          <StatCard title="Net worth" value={formatCurrency(netWorth)} />
          <StatCard title="ETF value" value={formatCurrency(getTotalETFValue(etfHoldings))} />
          <StatCard title="Property equity" value={formatCurrency(getTotalPropertyEquity(properties))} />
          <StatCard title="Cash" value={formatCurrency(getTotalCash(cashAccounts))} />
          <StatCard title="Superannuation" value={formatCurrency(getTotalSuperannuationBalance(superAccounts))} />
        </div>
      </section>
    </PageLayout>
  );
}

export default App;
```

Run the development server and verify that the metrics render as reusable cards. The CSS can be basic at this stage; the purpose is to verify component composition.

## 7.4 Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/components/UI/StatCard.tsx src/components/Layout/PageLayout.tsx src/App.tsx
git commit -m "Build reusable dashboard UI components"
git push
```

---

# 8. Milestone 5 — Charts

## 8.1 `src/components/Charts/NetWorthChart.tsx`

```tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import type { NetWorthHistory } from '../../types/finance';

import { formatCurrency } from '../../utils/formatters';

type NetWorthChartProps = {
  history: NetWorthHistory[];
};

function NetWorthChart(props: NetWorthChartProps) {
  const chartData = props.history.map((entry) => ({
    date: entry.date.toISOString(),
    netWorth: entry.netWorth
  }));

  return (
    <div className="chart-container">
      <ResponsiveContainer
        width="100%"
        height={360}
      >
        <LineChart
          data={chartData}
          margin={{
            top: 12,
            right: 20,
            bottom: 20,
            left: 12
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border-color)"
          />

          <XAxis
            dataKey="date"
            stroke="var(--secondary-text-color)"
            tickFormatter={(value) =>
              new Date(
                String(value)
              ).toLocaleDateString('en-AU', {
                month: 'short',
                year: 'numeric'
              })
            }
          />

          <YAxis
            stroke="var(--secondary-text-color)"
            tickFormatter={(value) =>
              `$${(
                Number(value) / 1000
              ).toFixed(0)}k`
            }
            width={75}
          />

          <Tooltip
            labelFormatter={(value) =>
              new Date(
                String(value)
              ).toLocaleDateString('en-AU', {
                month: 'long',
                year: 'numeric'
              })
            }
            formatter={(value) => [
              formatCurrency(Number(value)),
              'Net worth'
            ]}
          />

          <Line
            type="monotone"
            dataKey="netWorth"
            name="Net worth"
            stroke="var(--primary-color)"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NetWorthChart;
```

---

## 8.2 `src/components/Charts/AssetAllocationChart.tsx`

```tsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import type {
  ETF,
  Property,
  CashAccount,
  SuperAccount
} from '../../types/finance';

import {
  getTotalETFValue,
  getTotalPropertyEquity,
  getTotalCash,
  getTotalSuperannuationBalance
} from '../../utils/calculations';

import { formatCurrency } from '../../utils/formatters';

type AssetAllocationChartProps = {
  etfs: ETF[];
  properties: Property[];
  superAccounts: SuperAccount[];
  cashAccounts: CashAccount[];
};

const chartColours = [
  '#1f4e79',
  '#4f81bd',
  '#70ad47',
  '#ed7d31'
];

function AssetAllocationChart(
  props: AssetAllocationChartProps
) {
  const data = [
    {
      name: 'ETFs',
      value: getTotalETFValue(props.etfs)
    },
    {
      name: 'Property equity',
      value: getTotalPropertyEquity(
        props.properties
      )
    },
    {
      name: 'Cash',
      value: getTotalCash(
        props.cashAccounts
      )
    },
    {
      name: 'Superannuation',
      value: getTotalSuperannuationBalance(
        props.superAccounts
      )
    }
  ].filter((item) => item.value > 0);

  return (
    <div className="chart-container">
      {data.length === 0 ? (
        <p className="empty-state">
          No asset data is available to display.
        </p>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={360}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={115}
              label={({ name, percent }) =>
                `${name}: ${(
                  percent * 100
                ).toFixed(1)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={
                    chartColours[
                      index % chartColours.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [
                formatCurrency(
                  Number(value)
                ),
                'Value'
              ]}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default AssetAllocationChart;
```

---

## 8.3 `src/components/Charts/MortgageChart.tsx`

```tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import type { MortgagePayment } from '../../types/finance';

import { formatCurrency } from '../../utils/formatters';

type MortgageChartProps = {
  schedule: MortgagePayment[];
};

function MortgageChart(
  props: MortgageChartProps
) {
  if (props.schedule.length === 0) {
    return (
      <p className="empty-state">
        Calculate a mortgage to view the
        balance chart.
      </p>
    );
  }

  const chartData =
    props.schedule.filter(
      (payment) =>
        payment.month === 1 ||
        payment.month % 12 === 0 ||
        payment.month ===
          props.schedule.length
    );

  return (
    <div className="chart-container">
      <ResponsiveContainer
        width="100%"
        height={360}
      >
        <LineChart
          data={chartData}
          margin={{
            top: 12,
            right: 20,
            bottom: 20,
            left: 12
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border-color)"
          />

          <XAxis
            dataKey="month"
            stroke="var(--secondary-text-color)"
            tickFormatter={(value) =>
              `Year ${Math.ceil(
                Number(value) / 12
              )}`
            }
          />

          <YAxis
            stroke="var(--secondary-text-color)"
            tickFormatter={(value) =>
              `$${(
                Number(value) / 1000
              ).toFixed(0)}k`
            }
            width={75}
          />

          <Tooltip
            labelFormatter={(value) =>
              `Month ${String(value)}`
            }
            formatter={(value) => [
              formatCurrency(
                Number(value)
              ),
              'Remaining balance'
            ]}
          />

          <Line
            type="monotone"
            dataKey="balance"
            name="Mortgage balance"
            stroke="var(--primary-color)"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MortgageChart;
```

---

### 8.4.1 Update `src/App.tsx` to preview the charts

Integrate each chart as soon as it exists. Use the supplied sample data so you can inspect the charts before building the full pages.

Replace `src/App.tsx` with:

```tsx
import {
  etfHoldings,
  properties,
  cashAccounts,
  superAccounts,
  netWorthHistory
} from './data/financialData';

import { getMortgageAmortisationSchedule } from './utils/calculations';
import PageLayout from './components/Layout/PageLayout';
import NetWorthChart from './components/Charts/NetWorthChart';
import AssetAllocationChart from './components/Charts/AssetAllocationChart';
import MortgageChart from './components/Charts/MortgageChart';

function App() {
  const mortgagePreview = getMortgageAmortisationSchedule(500000, 6, 30);

  return (
    <PageLayout title="Personal Finance Dashboard">
      <section className="dashboard-section">
        <h2>Net worth over time</h2>
        <NetWorthChart history={netWorthHistory} />
      </section>
      <section className="dashboard-section">
        <h2>Asset allocation</h2>
        <AssetAllocationChart
          etfs={etfHoldings}
          properties={properties}
          superAccounts={superAccounts}
          cashAccounts={cashAccounts}
        />
      </section>
      <section className="dashboard-section">
        <h2>Mortgage balance preview</h2>
        <MortgageChart schedule={mortgagePreview} />
      </section>
    </PageLayout>
  );
}

export default App;
```

Run `npm run dev`. Check that all three chart areas render. The mortgage chart uses an illustrative schedule only for this preview; the mortgage page will later use user-entered values.

## 8.4 Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/components/Charts/NetWorthChart.tsx src/components/Charts/AssetAllocationChart.tsx src/components/Charts/MortgageChart.tsx src/App.tsx
git commit -m "Add portfolio and mortgage charts"
git push
```

---

# 9. Milestone 6 — ETF portfolio management

## `src/components/UI/ETFTable.tsx`

```tsx
import type { ETF } from '../../types/finance';

import {
  getETFCurrentValue,
  getETFTotalCost,
  getETFDollarGainLoss,
  getETFPercentageGainLoss
} from '../../utils/calculations';

import {
  formatCurrency,
  formatPercentage,
  formatNumber
} from '../../utils/formatters';

import { useState } from 'react';

type ETFTableProps = {
  etfs: ETF[];
  onAddETF: (newETF: ETF) => void;
  onUpdateETF: (ETFtoEdit: ETF) => void;
  onDeleteETF: (ETFtoDeleteId: number) => void;
};

function getNewETFid(props: ETFTableProps): number {
  let highestETFid = 0;

  for (const etf of props.etfs) {
    highestETFid = Math.max(highestETFid, etf.id);
  }

  return highestETFid + 1;
}

function ETFTable(props: ETFTableProps) {
  const [searchText, setSearchText] = useState('');

  const filteredETFs = props.etfs.filter((etf) => {
    return (
      etf.ticker
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      etf.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  });

  const [newETFticker, setNewETFticker] = useState('');
  const [newETFname, setNewETFname] = useState('');
  const [newETFunits, setNewETFunits] =
    useState<number | ''>('');
  const [newETFcurrentPrice, setNewETFcurrentPrice] =
    useState<number | ''>('');
  const [
    newETFaveragePurchasePrice,
    setNewETFaveragePurchasePrice
  ] = useState<number | ''>('');

  const [editingETFid, setEditingETFid] =
    useState<number | null>(null);

  const editingETF = props.etfs.find(
    (etf) => etf.id === editingETFid
  );

  const [etfTickerError, setEtfTickerError] =
    useState<string | null>(null);
  const [etfNameError, setEtfNameError] =
    useState<string | null>(null);
  const [etfUnitsError, setEtfUnitsError] =
    useState<string | null>(null);
  const [etfCurrentPriceError, setEtfCurrentPriceError] =
    useState<string | null>(null);
  const [
    etfAveragePurchasePriceError,
    setEtfAveragePurchasePriceError
  ] = useState<string | null>(null);

  return (
    <section>
      <h2>ETF Portfolio</h2>

      <div className="etf-search">
        <label htmlFor="etf-search">
          Search ETFs
        </label>

        <input
          id="etf-search"
          type="text"
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
          placeholder="ETF ticker or name"
        />
      </div>

      {props.etfs.length === 0 ? (
        <p>
          The ETF portfolio is empty.
        </p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th scope="col">Ticker</th>
                <th scope="col">Name</th>
                <th scope="col">Units</th>
                <th scope="col">Current Price</th>
                <th scope="col">
                  Average Purchase Price
                </th>
                <th scope="col">Total Cost</th>
                <th scope="col">Current Value</th>
                <th scope="col">Gain/Loss</th>
                <th scope="col">Gain/Loss %</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredETFs.map((etf) => (
                <tr key={etf.id}>
                  <td>{etf.ticker}</td>
                  <td>{etf.name}</td>
                  <td>{formatNumber(etf.units)}</td>
                  <td>
                    {formatCurrency(
                      etf.currentPrice
                    )}
                  </td>
                  <td>
                    {formatCurrency(
                      etf.averagePurchasePrice
                    )}
                  </td>
                  <td>
                    {formatCurrency(
                      getETFTotalCost(etf)
                    )}
                  </td>
                  <td>
                    {formatCurrency(
                      getETFCurrentValue(etf)
                    )}
                  </td>
                  <td>
                    {formatCurrency(
                      getETFDollarGainLoss(etf)
                    )}
                  </td>
                  <td>
                    {formatPercentage(
                      getETFPercentageGainLoss(etf)
                    )}
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingETFid(etf.id);
                          setNewETFticker(etf.ticker);
                          setNewETFname(etf.name);
                          setNewETFunits(etf.units);
                          setNewETFcurrentPrice(
                            etf.currentPrice
                          );
                          setNewETFaveragePurchasePrice(
                            etf.averagePurchasePrice
                          );
                        }}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          props.onDeleteETF(etf.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h3>
        {editingETFid !== null
          ? 'Edit an ETF'
          : 'Add an ETF'}
      </h3>

      <form
        id="etf-form"
        className="etf-form"
        onSubmit={(event) => {
          event.preventDefault();

          let hasErrors = false;

          setEtfTickerError(null);
          setEtfNameError(null);
          setEtfUnitsError(null);
          setEtfCurrentPriceError(null);
          setEtfAveragePurchasePriceError(null);

          if (newETFticker.trim() === '') {
            setEtfTickerError(
              'ETF ticker must not be blank.'
            );
            hasErrors = true;
          }

          if (newETFname.trim() === '') {
            setEtfNameError(
              'ETF name must not be blank.'
            );
            hasErrors = true;
          }

          if (
            newETFunits === '' ||
            newETFunits <= 0 ||
            !Number.isInteger(newETFunits)
          ) {
            setEtfUnitsError(
              'Number of ETF units must be a whole number greater than zero.'
            );
            hasErrors = true;
          }

          if (
            newETFcurrentPrice === '' ||
            newETFcurrentPrice <= 0
          ) {
            setEtfCurrentPriceError(
              'Current price must be greater than zero.'
            );
            hasErrors = true;
          }

          if (
            newETFaveragePurchasePrice === '' ||
            newETFaveragePurchasePrice <= 0
          ) {
            setEtfAveragePurchasePriceError(
              'Average purchase price must be greater than zero.'
            );
            hasErrors = true;
          }

          if (hasErrors) {
            return;
          }

          if (
            newETFunits === '' ||
            newETFcurrentPrice === '' ||
            newETFaveragePurchasePrice === ''
          ) {
            return;
          }

          if (
            editingETFid !== null &&
            editingETF !== undefined
          ) {
            const newETF: ETF = {
              id: editingETF.id,
              ticker: newETFticker
                .trim()
                .toUpperCase(),
              name: newETFname.trim(),
              units: newETFunits,
              currentPrice: newETFcurrentPrice,
              averagePurchasePrice:
                newETFaveragePurchasePrice
            };

            props.onUpdateETF(newETF);
            setEditingETFid(null);
          } else {
            const newETF: ETF = {
              id: getNewETFid(props),
              ticker: newETFticker
                .trim()
                .toUpperCase(),
              name: newETFname.trim(),
              units: newETFunits,
              currentPrice: newETFcurrentPrice,
              averagePurchasePrice:
                newETFaveragePurchasePrice
            };

            props.onAddETF(newETF);
          }

          setNewETFticker('');
          setNewETFname('');
          setNewETFunits('');
          setNewETFcurrentPrice('');
          setNewETFaveragePurchasePrice('');
        }}
      >
        <div className="form-field">
          <label htmlFor="etf-ticker">
            Ticker
          </label>

          <input
            id="etf-ticker"
            type="text"
            value={newETFticker}
            onChange={(event) => {
              const value = event.target.value;

              setNewETFticker(value);

              if (value.trim() !== '') {
                setEtfTickerError(null);
              }
            }}
            placeholder="ETF ticker"
            required
            aria-invalid={
              etfTickerError !== null
            }
            aria-describedby="etf-ticker-error"
          />

          {etfTickerError !== null && (
            <p
              id="etf-ticker-error"
              className="form-error"
            >
              {etfTickerError}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="etf-name">
            Name
          </label>

          <input
            id="etf-name"
            type="text"
            value={newETFname}
            onChange={(event) => {
              const value = event.target.value;

              setNewETFname(value);

              if (value.trim() !== '') {
                setEtfNameError(null);
              }
            }}
            placeholder="ETF name"
            required
            aria-invalid={
              etfNameError !== null
            }
            aria-describedby="etf-name-error"
          />

          {etfNameError !== null && (
            <p
              id="etf-name-error"
              className="form-error"
            >
              {etfNameError}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="etf-units">
            Number of Units
          </label>

          <input
            id="etf-units"
            type="number"
            value={newETFunits}
            onChange={(event) => {
              const value = event.target.value;

              const units =
                value === ''
                  ? ''
                  : Number(value);

              setNewETFunits(units);

              if (
                units !== '' &&
                units > 0 &&
                Number.isInteger(units)
              ) {
                setEtfUnitsError(null);
              }
            }}
            placeholder="0"
            required
            min="1"
            step="1"
            aria-invalid={
              etfUnitsError !== null
            }
            aria-describedby="etf-units-error"
          />

          {etfUnitsError !== null && (
            <p
              id="etf-units-error"
              className="form-error"
            >
              {etfUnitsError}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="etf-current-price">
            Current Price
          </label>

          <input
            id="etf-current-price"
            type="number"
            value={newETFcurrentPrice}
            onChange={(event) => {
              const value = event.target.value;

              const currentPrice =
                value === ''
                  ? ''
                  : Number(value);

              setNewETFcurrentPrice(
                currentPrice
              );

              if (
                currentPrice !== '' &&
                currentPrice > 0
              ) {
                setEtfCurrentPriceError(null);
              }
            }}
            placeholder="0"
            required
            min="0.01"
            step="0.01"
            aria-invalid={
              etfCurrentPriceError !== null
            }
            aria-describedby="etf-current-price-error"
          />

          {etfCurrentPriceError !== null && (
            <p
              id="etf-current-price-error"
              className="form-error"
            >
              {etfCurrentPriceError}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="etf-average-purchase-price">
            Average Purchase Price
          </label>

          <input
            id="etf-average-purchase-price"
            type="number"
            value={newETFaveragePurchasePrice}
            onChange={(event) => {
              const value = event.target.value;

              const averagePurchasePrice =
                value === ''
                  ? ''
                  : Number(value);

              setNewETFaveragePurchasePrice(
                averagePurchasePrice
              );

              if (
                averagePurchasePrice !== '' &&
                averagePurchasePrice > 0
              ) {
                setEtfAveragePurchasePriceError(
                  null
                );
              }
            }}
            placeholder="0"
            required
            min="0.01"
            step="0.01"
            aria-invalid={
              etfAveragePurchasePriceError !== null
            }
            aria-describedby="etf-average-purchase-price-error"
          />

          {etfAveragePurchasePriceError !== null && (
            <p
              id="etf-average-purchase-price-error"
              className="form-error"
            >
              {etfAveragePurchasePriceError}
            </p>
          )}
        </div>

        <div className="form-actions">
          <button type="submit">
            {editingETFid !== null
              ? 'Update ETF'
              : 'Add ETF'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ETFTable;
```

---

### 9.1.1 Update `src/App.tsx` to test ETF management

The table is interactive only when `App.tsx` owns the ETF array and supplies the callbacks. Use component state now; browser persistence is a later milestone.

Replace `src/App.tsx` with:

```tsx
import { useState } from 'react';
import type { ETF } from './types/finance';
import { etfHoldings } from './data/financialData';
import PageLayout from './components/Layout/PageLayout';
import ETFTable from './components/UI/ETFTable';

function App() {
  const [etfs, setEtfs] = useState<ETF[]>(etfHoldings);

  function handleAddETF(newETF: ETF) {
    setEtfs((currentETFs) => [...currentETFs, newETF]);
  }

  function handleUpdateETF(updatedETF: ETF) {
    setEtfs((currentETFs) =>
      currentETFs.map((etf) => etf.id === updatedETF.id ? updatedETF : etf)
    );
  }

  function handleDeleteETF(id: number) {
    setEtfs((currentETFs) => currentETFs.filter((etf) => etf.id !== id));
  }

  return (
    <PageLayout title="ETF portfolio">
      <ETFTable
        etfs={etfs}
        onAddETF={handleAddETF}
        onUpdateETF={handleUpdateETF}
        onDeleteETF={handleDeleteETF}
      />
    </PageLayout>
  );
}

export default App;
```

Run the app and test adding, editing, deleting and searching ETF holdings. Changes will reset on refresh for now; persistence comes later.

## Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/components/UI/ETFTable.tsx src/App.tsx
git commit -m "Build ETF portfolio management table"
git push
```

---

# 10. Milestone 7 — Property table

## `src/components/UI/PropertyTable.tsx`

```tsx
import type { Property } from '../../types/finance';

import {
  getPropertyEquity,
  getPropertyLVR,
  getPropertyAnnualRentalIncome,
  getPropertyAnnualInterest,
  getPropertyCashFlow
} from '../../utils/calculations';

import {
  formatCurrency,
  formatPercentage
} from '../../utils/formatters';

type PropertyTableProps = {
  properties: Property[];
};

function PropertyTable(
  props: PropertyTableProps
) {
  if (props.properties.length === 0) {
    return (
      <p className="empty-state">
        No properties have been added yet.
      </p>
    );
  }

  return (
    <div className="table-container">
      <table>
        <caption>
          Property portfolio
        </caption>

        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Suburb</th>
            <th scope="col">Value</th>
            <th scope="col">Mortgage</th>
            <th scope="col">Offset</th>
            <th scope="col">LVR</th>
            <th scope="col">Equity</th>
            <th scope="col">
              Annual rental income
            </th>
            <th scope="col">
              Annual interest
            </th>
            <th scope="col">
              Annual cash flow
            </th>
          </tr>
        </thead>

        <tbody>
          {props.properties.map(
            (property) => {
              const cashFlow =
                getPropertyCashFlow(
                  property
                );

              return (
                <tr key={property.id}>
                  <td>{property.name}</td>

                  <td>
                    {property.suburb}
                  </td>

                  <td>
                    {formatCurrency(
                      property.currentValue
                    )}
                  </td>

                  <td>
                    {formatCurrency(
                      property.mortgageBalance
                    )}
                  </td>

                  <td>
                    {formatCurrency(
                      property.offsetBalance
                    )}
                  </td>

                  <td>
                    {formatPercentage(
                      getPropertyLVR(
                        property
                      )
                    )}
                  </td>

                  <td>
                    {formatCurrency(
                      getPropertyEquity(
                        property
                      )
                    )}
                  </td>

                  <td>
                    {formatCurrency(
                      getPropertyAnnualRentalIncome(
                        property
                      )
                    )}
                  </td>

                  <td>
                    {formatCurrency(
                      getPropertyAnnualInterest(
                        property
                      )
                    )}
                  </td>

                  <td
                    className={
                      cashFlow >= 0
                        ? 'positive'
                        : 'negative'
                    }
                  >
                    {formatCurrency(
                      cashFlow
                    )}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTable;
```

---

### 10.1.1 Update `src/App.tsx` to preview the property table

Keep the ETF preview working and add the property table beneath it. This makes the application visibly grow with each milestone.

Replace `src/App.tsx` with:

```tsx
import { useState } from 'react';
import type { ETF } from './types/finance';
import { etfHoldings, properties } from './data/financialData';
import PageLayout from './components/Layout/PageLayout';
import ETFTable from './components/UI/ETFTable';
import PropertyTable from './components/UI/PropertyTable';

function App() {
  const [etfs, setEtfs] = useState<ETF[]>(etfHoldings);

  function handleAddETF(newETF: ETF) {
    setEtfs((items) => [...items, newETF]);
  }

  function handleUpdateETF(updatedETF: ETF) {
    setEtfs((items) => items.map((etf) => etf.id === updatedETF.id ? updatedETF : etf));
  }

  function handleDeleteETF(id: number) {
    setEtfs((items) => items.filter((etf) => etf.id !== id));
  }

  return (
    <PageLayout title="Personal Finance Dashboard">
      <section className="dashboard-section">
        <h2>ETF portfolio</h2>
        <ETFTable etfs={etfs} onAddETF={handleAddETF} onUpdateETF={handleUpdateETF} onDeleteETF={handleDeleteETF} />
      </section>
      <section className="dashboard-section">
        <h2>Property portfolio</h2>
        <PropertyTable properties={properties} />
      </section>
    </PageLayout>
  );
}

export default App;
```

Run the app and verify both portfolio sections render. Confirm the ETF interactions still work after adding the property table.

## Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/components/UI/PropertyTable.tsx src/App.tsx
git commit -m "Add property portfolio table"
git push
```

---

# 11. Milestone 8 — Dashboard and portfolio pages

## 11.1 `src/pages/Dashboard.tsx`

```tsx
import type { ETF } from '../types/finance';

import {
  properties,
  cashAccounts,
  superAccounts,
  netWorthHistory
} from '../data/financialData';

import {
  getTotalETFValue,
  getNetWorth,
  getTotalPropertyEquity,
  getTotalPropertyMortgage,
  getTotalCash,
  getTotalSuperannuationBalance,
  getTotalPropertyCashFlow
} from '../utils/calculations';

import { formatCurrency } from '../utils/formatters';

import StatCard from '../components/UI/StatCard';
import NetWorthChart from '../components/Charts/NetWorthChart';
import AssetAllocationChart from '../components/Charts/AssetAllocationChart';
import PageLayout from '../components/Layout/PageLayout';

type DashboardProps = {
  etfs: ETF[];
};

function Dashboard(
  props: DashboardProps
) {
  return (
    <PageLayout title="Personal Finance Dashboard">
      <section
        className="dashboard-section"
        aria-labelledby="overview-title"
      >
        <h2 id="overview-title">
          Financial overview
        </h2>

        <div className="top-level-metrics-grid">
          <StatCard
            title="Total net worth"
            value={formatCurrency(
              getNetWorth(
                props.etfs,
                properties,
                superAccounts,
                cashAccounts
              )
            )}
            subtitle="Investments, property equity, cash and super"
          />

          <StatCard
            title="Cash"
            value={formatCurrency(
              getTotalCash(
                cashAccounts
              )
            )}
          />

          <StatCard
            title="ETF portfolio"
            value={formatCurrency(
              getTotalETFValue(
                props.etfs
              )
            )}
          />

          <StatCard
            title="Superannuation"
            value={formatCurrency(
              getTotalSuperannuationBalance(
                superAccounts
              )
            )}
          />

          <StatCard
            title="Property equity"
            value={formatCurrency(
              getTotalPropertyEquity(
                properties
              )
            )}
          />

          <StatCard
            title="Mortgage balances"
            value={formatCurrency(
              getTotalPropertyMortgage(
                properties
              )
            )}
          />

          <StatCard
            title="Annual property cash flow"
            value={formatCurrency(
              getTotalPropertyCashFlow(
                properties
              )
            )}
            subtitle="Before tax"
          />
        </div>
      </section>

      <section className="dashboard-charts">
        <article className="dashboard-chart-card">
          <h2>
            Net worth history
          </h2>

          <NetWorthChart
            history={netWorthHistory}
          />
        </article>

        <article className="dashboard-chart-card">
          <h2>
            Asset allocation
          </h2>

          <AssetAllocationChart
            etfs={props.etfs}
            properties={properties}
            superAccounts={
              superAccounts
            }
            cashAccounts={
              cashAccounts
            }
          />
        </article>
      </section>
    </PageLayout>
  );
}

export default Dashboard;
```

---

## 11.2 `src/pages/Investments.tsx`

```tsx
import type { ETF } from '../types/finance';

import ETFTable from '../components/UI/ETFTable';
import PageLayout from '../components/Layout/PageLayout';

type InvestmentsProps = {
  etfs: ETF[];
  onAddETF: (etf: ETF) => void;
  onUpdateETF: (etf: ETF) => void;
  onDeleteETF: (id: number) => void;
};

function Investments(
  props: InvestmentsProps
) {
  return (
    <PageLayout title="Investments">
      <p className="page-intro">
        Track your ETF holdings, market
        values and investment returns.
        The displayed prices are sample
        values and are not live market data.
      </p>

      <ETFTable
        etfs={props.etfs}
        onAddETF={props.onAddETF}
        onUpdateETF={
          props.onUpdateETF
        }
        onDeleteETF={
          props.onDeleteETF
        }
      />
    </PageLayout>
  );
}

export default Investments;
```

---

## 11.3 `src/pages/Properties.tsx`

```tsx
import { properties } from '../data/financialData';

import {
  getTotalPropertyEquity,
  getTotalPropertyMortgage,
  getTotalPropertyAnnualRentalIncome,
  getTotalPropertyAnnualInterest,
  getTotalPropertyCashFlow
} from '../utils/calculations';

import { formatCurrency } from '../utils/formatters';

import StatCard from '../components/UI/StatCard';
import PropertyTable from '../components/UI/PropertyTable';
import PageLayout from '../components/Layout/PageLayout';

function Properties() {
  return (
    <PageLayout title="Property Portfolio">
      <p className="page-intro">
        Review property values, mortgage
        balances, equity, rental income and
        estimated annual cash flow.
      </p>

      <section className="dashboard-section">
        <h2>
          Portfolio summary
        </h2>

        <div className="top-level-metrics-grid">
          <StatCard
            title="Property equity"
            value={formatCurrency(
              getTotalPropertyEquity(
                properties
              )
            )}
          />

          <StatCard
            title="Mortgage balances"
            value={formatCurrency(
              getTotalPropertyMortgage(
                properties
              )
            )}
          />

          <StatCard
            title="Annual rental income"
            value={formatCurrency(
              getTotalPropertyAnnualRentalIncome(
                properties
              )
            )}
          />

          <StatCard
            title="Annual interest"
            value={formatCurrency(
              getTotalPropertyAnnualInterest(
                properties
              )
            )}
          />

          <StatCard
            title="Annual cash flow"
            value={formatCurrency(
              getTotalPropertyCashFlow(
                properties
              )
            )}
            subtitle="Before tax"
          />
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Properties</h2>

        <PropertyTable
          properties={properties}
        />
      </section>
    </PageLayout>
  );
}

export default Properties;
```

---

### 11.4.1 Update `src/App.tsx` to preview the finished dashboard page

Once `Dashboard.tsx`, `Investments.tsx` and `Properties.tsx` exist, compose them in `App.tsx` without adding routing yet. This is a temporary preview host: it lets you inspect the page components before the router milestone.

Replace `src/App.tsx` with:

```tsx
import { useState } from 'react';
import type { ETF } from './types/finance';
import { etfHoldings } from './data/financialData';
import Dashboard from './pages/Dashboard';
import PageLayout from './components/Layout/PageLayout';
import ETFTable from './components/UI/ETFTable';
import PropertyTable from './components/UI/PropertyTable';
import { properties } from './data/financialData';

function App() {
  const [etfs, setEtfs] = useState<ETF[]>(etfHoldings);

  function handleAddETF(newETF: ETF) { setEtfs((items) => [...items, newETF]); }
  function handleUpdateETF(updatedETF: ETF) {
    setEtfs((items) => items.map((etf) => etf.id === updatedETF.id ? updatedETF : etf));
  }
  function handleDeleteETF(id: number) { setEtfs((items) => items.filter((etf) => etf.id !== id)); }

  return (
    <>
      <Dashboard etfs={etfs} />
      <PageLayout title="Investments preview">
        <ETFTable etfs={etfs} onAddETF={handleAddETF} onUpdateETF={handleUpdateETF} onDeleteETF={handleDeleteETF} />
      </PageLayout>
      <PageLayout title="Property table preview">
        <PropertyTable properties={properties} />
      </PageLayout>
    </>
  );
}

export default App;
```

This temporary preview renders the dashboard page and the ETF/property tables together. The dedicated Investments and Properties pages are now available in the source tree; the routing milestone will give each page its own URL. Run the app and inspect the composition before introducing routing.

## Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/pages/Dashboard.tsx src/pages/Investments.tsx src/pages/Properties.tsx src/App.tsx
git commit -m "Implement dashboard and portfolio pages"
git push
```

---

# 12. Milestone 9 — Mortgage calculator

## 12.1 `src/components/UI/MortgageCalculator.tsx`

```tsx
type MortgageCalculatorProps = {
  principal: number | '';
  interestRate: number | '';
  termYears: number | '';
  principalError: string | null;
  interestRateError: string | null;
  termYearsError: string | null;
  onPrincipalChange: (
    value: number | ''
  ) => void;
  onInterestRateChange: (
    value: number | ''
  ) => void;
  onTermYearsChange: (
    value: number | ''
  ) => void;
  onCalculate: () => void;
};

function MortgageCalculator(
  props: MortgageCalculatorProps
) {
  return (
    <form
      className="form-card data-form"
      onSubmit={(event) => {
        event.preventDefault();
        props.onCalculate();
      }}
    >
      <div className="form-grid">
        <label>
          Loan amount (AUD)

          <input
            type="number"
            min="0"
            step="any"
            value={props.principal}
            onChange={(event) =>
              props.onPrincipalChange(
                event.target.value === ''
                  ? ''
                  : Number(
                      event.target.value
                    )
              )
            }
            aria-invalid={Boolean(
              props.principalError
            )}
          />

          {props.principalError && (
            <span
              className="form-error"
              role="alert"
            >
              {props.principalError}
            </span>
          )}
        </label>

        <label>
          Annual interest rate (%)

          <input
            type="number"
            min="0"
            step="any"
            value={props.interestRate}
            onChange={(event) =>
              props.onInterestRateChange(
                event.target.value === ''
                  ? ''
                  : Number(
                      event.target.value
                    )
              )
            }
            aria-invalid={Boolean(
              props.interestRateError
            )}
          />

          {props.interestRateError && (
            <span
              className="form-error"
              role="alert"
            >
              {props.interestRateError}
            </span>
          )}
        </label>

        <label>
          Loan term (years)

          <input
            type="number"
            min="1"
            step="1"
            value={props.termYears}
            onChange={(event) =>
              props.onTermYearsChange(
                event.target.value === ''
                  ? ''
                  : Number(
                      event.target.value
                    )
              )
            }
            aria-invalid={Boolean(
              props.termYearsError
            )}
          />

          {props.termYearsError && (
            <span
              className="form-error"
              role="alert"
            >
              {props.termYearsError}
            </span>
          )}
        </label>
      </div>

      <button
        type="submit"
        className="button button-primary"
      >
        Calculate repayments
      </button>
    </form>
  );
}

export default MortgageCalculator;
```

---

## 12.2 `src/pages/Mortgage.tsx`

```tsx
import { useState } from 'react';

import MortgageCalculator from '../components/UI/MortgageCalculator';
import MortgageChart from '../components/Charts/MortgageChart';
import StatCard from '../components/UI/StatCard';
import PageLayout from '../components/Layout/PageLayout';

import {
  getMonthlyMortgagePayment,
  getMortgageAmortisationSchedule
} from '../utils/calculations';

import { formatCurrency } from '../utils/formatters';

function Mortgage() {
  const [
    principal,
    setPrincipal
  ] = useState<number | ''>(700000);

  const [
    interestRate,
    setInterestRate
  ] = useState<number | ''>(6.09);

  const [
    termYears,
    setTermYears
  ] = useState<number | ''>(30);

  const [
    principalError,
    setPrincipalError
  ] = useState<string | null>(null);

  const [
    interestRateError,
    setInterestRateError
  ] = useState<string | null>(null);

  const [
    termYearsError,
    setTermYearsError
  ] = useState<string | null>(null);

  const [
    hasCalculated,
    setHasCalculated
  ] = useState(false);

  function handleCalculate() {
    const validPrincipal =
      principal !== '' &&
      principal > 0;

    const validRate =
      interestRate !== '' &&
      interestRate >= 0;

    const validTerm =
      termYears !== '' &&
      termYears > 0 &&
      Number.isInteger(termYears);

    setPrincipalError(
      validPrincipal
        ? null
        : 'Loan amount must be greater than zero.'
    );

    setInterestRateError(
      validRate
        ? null
        : 'Interest rate cannot be negative.'
    );

    setTermYearsError(
      validTerm
        ? null
        : 'Loan term must be a whole number greater than zero.'
    );

    setHasCalculated(
      validPrincipal &&
        validRate &&
        validTerm
    );
  }

  const isInputValid =
    principal !== '' &&
    principal > 0 &&
    interestRate !== '' &&
    interestRate >= 0 &&
    termYears !== '' &&
    termYears > 0 &&
    Number.isInteger(termYears);

  const schedule =
    hasCalculated &&
    isInputValid
      ? getMortgageAmortisationSchedule(
          principal,
          interestRate,
          termYears
        )
      : [];

  const monthlyPayment =
    hasCalculated &&
    isInputValid
      ? getMonthlyMortgagePayment(
          principal,
          interestRate,
          termYears
        )
      : null;

  const totalInterest =
    schedule.reduce(
      (total, payment) =>
        total + payment.interest,
      0
    );

  const totalRepayment =
    schedule.reduce(
      (total, payment) =>
        total + payment.payment,
      0
    );

  return (
    <PageLayout title="Mortgage Calculator">
      <section className="dashboard-section">
        <h2>
          Mortgage details
        </h2>

        <MortgageCalculator
          principal={principal}
          interestRate={interestRate}
          termYears={termYears}
          principalError={
            principalError
          }
          interestRateError={
            interestRateError
          }
          termYearsError={
            termYearsError
          }
          onPrincipalChange={
            (value) => {
              setPrincipal(value);
              setHasCalculated(false);
            }
          }
          onInterestRateChange={
            (value) => {
              setInterestRate(value);
              setHasCalculated(false);
            }
          }
          onTermYearsChange={
            (value) => {
              setTermYears(value);
              setHasCalculated(false);
            }
          }
          onCalculate={
            handleCalculate
          }
        />
      </section>

      {monthlyPayment !== null && (
        <>
          <section className="dashboard-section">
            <h2>
              Repayment summary
            </h2>

            <div className="top-level-metrics-grid">
              <StatCard
                title="Monthly repayment"
                value={formatCurrency(
                  monthlyPayment
                )}
              />

              <StatCard
                title="Total interest"
                value={formatCurrency(
                  totalInterest
                )}
              />

              <StatCard
                title="Total repayment"
                value={formatCurrency(
                  totalRepayment
                )}
              />
            </div>
          </section>

          <section className="dashboard-section">
            <h2>
              Mortgage balance over time
            </h2>

            <MortgageChart
              schedule={schedule}
            />
          </section>

          <section className="dashboard-section">
            <h2>
              Amortisation schedule
            </h2>

            <div className="table-container">
              <table>
                <caption>
                  Monthly mortgage repayments
                  and remaining balance
                </caption>

                <thead>
                  <tr>
                    <th scope="col">
                      Month
                    </th>
                    <th scope="col">
                      Payment
                    </th>
                    <th scope="col">
                      Principal
                    </th>
                    <th scope="col">
                      Interest
                    </th>
                    <th scope="col">
                      Remaining balance
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {schedule.map(
                    (payment) => (
                      <tr
                        key={
                          payment.month
                        }
                      >
                        <td>
                          {payment.month}
                        </td>

                        <td>
                          {formatCurrency(
                            payment.payment
                          )}
                        </td>

                        <td>
                          {formatCurrency(
                            payment.principal
                          )}
                        </td>

                        <td>
                          {formatCurrency(
                            payment.interest
                          )}
                        </td>

                        <td>
                          {formatCurrency(
                            payment.balance
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
}

export default Mortgage;
```

---

### 12.3.1 Update `src/App.tsx` to preview the mortgage page

Add the mortgage page to the temporary preview composition so it can be tested immediately. Preserve the existing ETF state and portfolio previews from the previous milestone.

Add this import to `src/App.tsx`:

```tsx
import Mortgage from './pages/Mortgage';
```

Then add `<Mortgage />` in the returned JSX after the portfolio sections. Run `npm run dev`, enter a principal, interest rate and term, and verify the monthly repayment and amortisation chart update. This is a genuine `App.tsx` integration change; include `src/App.tsx` in the commit.

## Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/components/UI/MortgageCalculator.tsx src/pages/Mortgage.tsx src/App.tsx
git commit -m "Add mortgage calculator and amortisation schedule"
git push
```

---

# 13. Milestone 10 — Investment projections

## `src/pages/Projections.tsx`

```tsx

import { useState } from 'react';

import type { ETF } from '../types/finance';

import {
  getTotalETFValue
} from '../utils/calculations';

import {
  formatCurrency,
  formatPercentage
} from '../utils/formatters';

import PageLayout from '../components/Layout/PageLayout';
import StatCard from '../components/UI/StatCard';

type ProjectionsProps = {
  etfs: ETF[];
};

// Use the ETF holdings passed down from App so projections reflect the current portfolio.
function Projections(props: ProjectionsProps) {
  const [
    monthlyContribution,
    setMonthlyContribution
  ] = useState(1000);

  const [
    annualReturn,
    setAnnualReturn
  ] = useState(7);

  const [
    years,
    setYears
  ] = useState(10);

  const currentPortfolioValue =
    getTotalETFValue(props.etfs);

  const monthlyRate =
    Math.pow(
      1 + annualReturn / 100,
      1 / 12
    ) - 1;

  let balance = currentPortfolioValue;

  const projection = [];

  for (
    let year = 1;
    year <= years;
    year++
  ) {
    for (
      let month = 0;
      month < 12;
      month++
    ) {
      balance =
        balance * (1 + monthlyRate) +
        monthlyContribution;
    }

    projection.push({
      year,
      balance
    });
  }

  const projectedValue =
    projection.length > 0
      ? projection[
          projection.length - 1
        ].balance
      : currentPortfolioValue;

  const totalContributions =
    monthlyContribution *
    years *
    12;

  const estimatedGrowth =
    projectedValue -
    currentPortfolioValue -
    totalContributions;

  return (
    <PageLayout title="Financial Projections">
      <p className="page-intro">
        Explore how different contribution
        and return assumptions affect a
        hypothetical ETF portfolio over time.
      </p>

      <section className="dashboard-section">
        <h2>
          Projection assumptions
        </h2>

        <div className="form-card data-form">
          <div className="form-grid">
            <label>
              Monthly contribution (AUD)

              <input
                type="number"
                min="0"
                step="50"
                value={monthlyContribution}
                onChange={(event) =>
                  setMonthlyContribution(
                    Math.max(
                      0,
                      Number(event.target.value)
                    )
                  )
                }
              />
            </label>

            <label>
              Assumed annual return (%)

              <input
                type="number"
                min="-99"
                max="100"
                step="0.5"
                value={annualReturn}
                onChange={(event) =>
                  setAnnualReturn(
                    Number(event.target.value)
                  )
                }
              />
            </label>

            <label>
              Projection period (years)

              <input
                type="number"
                min="1"
                max="50"
                step="1"
                value={years}
                onChange={(event) =>
                  setYears(
                    Math.min(
                      50,
                      Math.max(
                        1,
                        Math.floor(
                          Number(event.target.value)
                        )
                      )
                    )
                  )
                }
              />
            </label>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>
          Illustrative outcome
        </h2>

        <div className="top-level-metrics-grid">
          <StatCard
            title="Current ETF value"
            value={formatCurrency(
              currentPortfolioValue
            )}
          />

          <StatCard
            title="Projected portfolio value"
            value={formatCurrency(
              projectedValue
            )}
          />

          <StatCard
            title="Total new contributions"
            value={formatCurrency(
              totalContributions
            )}
          />

          <StatCard
            title="Estimated investment growth"
            value={formatCurrency(
              estimatedGrowth
            )}
            subtitle={`Assumed annual return: ${formatPercentage(
              annualReturn
            )}`}
          />
        </div>
      </section>

      <section className="dashboard-section">
        <h2>
          Year-by-year projection
        </h2>

        <div className="table-container">
          <table>
            <caption>
              Illustrative end-of-year
              portfolio values
            </caption>

            <thead>
              <tr>
                <th scope="col">
                  Year
                </th>

                <th scope="col">
                  Projected value
                </th>
              </tr>
            </thead>

            <tbody>
              {projection.map((entry) => (
                <tr key={entry.year}>
                  <td>
                    {entry.year}
                  </td>

                  <td>
                    {formatCurrency(
                      entry.balance
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="disclaimer">
          These figures are illustrative
          calculations based on the assumptions
          entered. They do not account for tax,
          fees, inflation, market volatility or
          changes in contributions.
        </p>
      </section>
    </PageLayout>
  );
}

export default Projections;
```

---

### 13.1.1 Update `src/App.tsx` to preview investment projections

Add the projection page to the preview composition. `Projections` receives the current ETF array as a prop, so it uses the same state as the ETF table.

Add this import:

```tsx
import Projections from './pages/Projections';
```

Then add `<Projections etfs={etfs} />` to the returned JSX. Run the app, change ETF holdings in the table, and verify the projection page reflects the updated portfolio value. Include `src/App.tsx` in this milestone's commit.

## Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/pages/Projections.tsx src/App.tsx
git commit -m "Add investment projection calculator"
git push
```

---

# 14. Milestone 11 — Routing and localStorage

Replace `src/App.tsx` with:

```tsx
import { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

import type { ETF } from './types/finance';

import { etfHoldings } from './data/financialData';

import Navigation from './components/UI/Navigation';

import Dashboard from './pages/Dashboard';
import Investments from './pages/Investments';
import Properties from './pages/Properties';
import Mortgage from './pages/Mortgage';
import Projections from './pages/Projections';

const etfStorageKey =
  'personal-finance-dashboard-etfs';

const themeStorageKey =
  'personal-finance-dashboard-theme';

function readSavedETFs(): ETF[] {
  try {
    const savedData =
      localStorage.getItem(
        etfStorageKey
      );

    if (!savedData) {
      return etfHoldings;
    }

    const parsedData: unknown =
      JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      return etfHoldings;
    }

    return parsedData as ETF[];
  } catch {
    return etfHoldings;
  }
}

function readSavedTheme(): boolean {
  try {
    return (
      localStorage.getItem(
        themeStorageKey
      ) === 'dark'
    );
  } catch {
    return false;
  }
}

function App() {
  const [etfs, setEtfs] =
    useState<ETF[]>(readSavedETFs);

  const [
    isDarkMode,
    setIsDarkMode
  ] = useState(readSavedTheme);

  useEffect(() => {
    try {
      localStorage.setItem(
        etfStorageKey,
        JSON.stringify(etfs)
      );
    } catch (error) {
      console.error(
        'Unable to save ETF data:',
        error
      );
    }
  }, [etfs]);

  useEffect(() => {
    try {
      localStorage.setItem(
        themeStorageKey,
        isDarkMode
          ? 'dark'
          : 'light'
      );
    } catch (error) {
      console.error(
        'Unable to save theme preference:',
        error
      );
    }

    document.body.classList.toggle(
      'dark-mode',
      isDarkMode
    );
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(
      (previousMode) =>
        !previousMode
    );
  }

  function addETF(newETF: ETF) {
    setEtfs(
      (previousETFs) => [
        ...previousETFs,
        newETF
      ]
    );
  }

  function updateETF(
    updatedETF: ETF
  ) {
    setEtfs(
      (previousETFs) =>
        previousETFs.map(
          (etf) =>
            etf.id === updatedETF.id
              ? updatedETF
              : etf
        )
    );
  }

  function deleteETF(id: number) {
    setEtfs(
      (previousETFs) =>
        previousETFs.filter(
          (etf) => etf.id !== id
        )
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation
          isDarkMode={isDarkMode}
          onToggleDarkMode={
            toggleDarkMode
          }
        />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                etfs={etfs}
              />
            }
          />

          <Route
            path="/investments"
            element={
              <Investments
                etfs={etfs}
                onAddETF={addETF}
                onUpdateETF={
                  updateETF
                }
                onDeleteETF={
                  deleteETF
                }
              />
            }
          />

          <Route
            path="/properties"
            element={
              <Properties />
            }
          />

          <Route
            path="/mortgage"
            element={
              <Mortgage />
            }
          />

          <Route
            path="/projections"
            element={
              <Projections etfs={etfs} />
            }
          />

          <Route
            path="*"
            element={
              <main className="page-content">
                <h1>
                  Page not found
                </h1>

                <p>
                  The page you requested
                  does not exist.
                </p>
              </main>
            }
          />
        </Routes>

        <footer className="site-footer">
          <p>
            Personal Finance Dashboard ·
            Illustrative data for
            demonstration purposes
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

## Test

```powershell
npm run build
npm run lint
npm run dev
```

Manually test:

- Dashboard
- Investments
- Properties
- Mortgage
- Projections
- Dark mode
- Add ETF
- Edit ETF
- Delete ETF
- Refresh after editing ETF data

Stop Vite with `Ctrl+C`.

---

## Git commit

```powershell
git add src/App.tsx
git commit -m "Add application routing and browser persistence"
git push
```

---

# 15. Milestone 12 — Final CSS

## `src/index.css`

```css
:root {
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  background: #f5f7fa;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  --background-color: #f5f7fa;
  --surface-color: #ffffff;
  --text-color: #222222;
  --secondary-text-color: #666666;
  --border-color: #d9d9d9;
  --hover-color: #f0f2f5;
  --primary-color: #1f4e79;
  --primary-hover-color: #163a5c;
  --input-background-color: #ffffff;
  --positive-color: #248044;
  --negative-color: #c0392b;
}

body.dark-mode {
  --background-color: #121820;
  --surface-color: #1c2733;
  --text-color: #f2f4f7;
  --secondary-text-color: #b8c0c9;
  --border-color: #3a4652;
  --hover-color: #273441;
  --primary-color: #6fa8dc;
  --primary-hover-color: #8bbce8;
  --input-background-color: #17212b;
  --positive-color: #6fce8b;
  --negative-color: #ff8176;
}

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
}

body {
  min-width: 320px;
  min-height: 100%;
  margin: 0;
  background: var(--background-color);
  color: var(--text-color);
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: var(--primary-color);
}

:focus-visible {
  outline: 3px solid var(--primary-color);
  outline-offset: 2px;
}
```

---

## `src/App.css`

```css
#root {
  min-height: 100%;
}

.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  color: var(--text-color);
}

.site-header {
  background: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
}

.main-navigation {
  max-width: 1440px;
  min-height: 68px;
  margin: 0 auto;
  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
}

.site-title {
  color: var(--text-color);
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}

.navigation-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  list-style: none;
}

.navigation-links a {
  display: block;

  padding: 10px 12px;

  border-radius: 6px;

  color: var(--text-color);
  text-decoration: none;
}

.navigation-links a:hover,
.navigation-links a.active {
  background: var(--hover-color);
  color: var(--primary-color);
}

.theme-toggle {
  border: 1px solid var(--border-color);
  border-radius: 8px;

  padding: 10px 14px;

  background: var(--surface-color);
  color: var(--text-color);

  font-weight: 600;
}

.theme-toggle:hover {
  background: var(--hover-color);
}

.page-content {
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 32px 24px 48px;

  flex: 1;
}

.page-content > h1 {
  margin: 0 0 24px;

  font-size: 30px;
  line-height: 1.25;
}

.page-intro {
  max-width: 900px;

  margin: -8px 0 24px;

  color: var(--secondary-text-color);

  line-height: 1.6;
}

.dashboard-section {
  margin: 0 0 32px;
}

.dashboard-section > h2,
.dashboard-chart-card > h2 {
  margin: 0 0 18px;

  font-size: 20px;
}

.top-level-metrics-grid {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 16px;
}

.stat-card {
  min-width: 0;

  padding: 20px;

  border: 1px solid var(--border-color);
  border-radius: 12px;

  background: var(--surface-color);

  box-shadow:
    0 2px 8px rgb(0 0 0 / 4%);
}

.stat-card h3 {
  margin: 0 0 12px;

  color: var(--secondary-text-color);

  font-size: 14px;
  font-weight: 600;
}

.stat-card-value {
  margin: 0;

  overflow-wrap: anywhere;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
}

.stat-card-subtitle {
  margin: 10px 0 0;

  color: var(--secondary-text-color);

  font-size: 13px;
  line-height: 1.5;
}

.dashboard-charts {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 20px;

  margin-bottom: 32px;
}

.dashboard-chart-card {
  min-width: 0;

  padding: 20px;

  border: 1px solid var(--border-color);
  border-radius: 12px;

  background: var(--surface-color);

  box-shadow:
    0 2px 8px rgb(0 0 0 / 4%);
}

.chart-container {
  width: 100%;
  min-width: 0;
}

.table-container {
  width: 100%;

  overflow-x: auto;

  border: 1px solid var(--border-color);
  border-radius: 10px;

  background: var(--surface-color);
}

table {
  width: 100%;

  border-collapse: collapse;

  text-align: left;
}

caption {
  padding: 12px 16px;

  color: var(--secondary-text-color);

  text-align: left;

  font-size: 13px;
}

th,
td {
  padding: 13px 14px;

  border-bottom: 1px solid var(--border-color);

  vertical-align: middle;
}

th {
  background: var(--hover-color);

  color: var(--text-color);

  font-size: 13px;
  font-weight: 700;

  white-space: nowrap;
}

td {
  font-size: 14px;
}

tbody tr:last-child td {
  border-bottom: 0;
}

tbody tr:hover {
  background: var(--hover-color);
}

.table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.form-card {
  padding: 20px;

  border: 1px solid var(--border-color);
  border-radius: 12px;

  background: var(--surface-color);
}

.form-card h2 {
  margin: 0 0 18px;

  font-size: 19px;
}

.data-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
}

.form-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 18px;

  width: 100%;
}

.form-grid label,
.search-field {
  display: flex;
  flex-direction: column;

  gap: 7px;

  color: var(--text-color);

  font-size: 14px;
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;

  min-height: 42px;

  padding: 9px 11px;

  border: 1px solid var(--border-color);
  border-radius: 7px;

  background: var(--input-background-color);
  color: var(--text-color);
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--primary-color);

  outline: 2px solid var(--primary-color);
  outline-offset: 1px;
}

.search-field {
  width: min(100%, 340px);
}

.form-error {
  margin: 0;

  color: var(--negative-color);

  font-size: 13px;
  font-weight: 500;
}

.empty-state {
  padding: 20px;

  border: 1px dashed var(--border-color);
  border-radius: 8px;

  color: var(--secondary-text-color);

  line-height: 1.6;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 38px;

  padding: 8px 13px;

  border: 1px solid transparent;
  border-radius: 7px;

  font-size: 13px;
  font-weight: 600;
}

.button-primary {
  background: var(--primary-color);
  color: #ffffff;
}

.button-primary:hover {
  background: var(--primary-hover-color);
}

.button-secondary {
  border-color: var(--border-color);

  background: var(--surface-color);
  color: var(--text-color);
}

.button-secondary:hover {
  background: var(--hover-color);
}

.button-danger {
  border-color: var(--negative-color);

  background: transparent;
  color: var(--negative-color);
}

.button-danger:hover {
  background: var(--hover-color);
}

.positive {
  color: var(--positive-color);
  font-weight: 600;
}

.negative {
  color: var(--negative-color);
  font-weight: 600;
}

.disclaimer {
  margin-top: 18px;

  color: var(--secondary-text-color);

  font-size: 13px;
  line-height: 1.6;
}

.site-footer {
  padding: 18px 24px;

  border-top: 1px solid var(--border-color);

  color: var(--secondary-text-color);

  text-align: center;

  font-size: 13px;
}

.site-footer p {
  margin: 0;
}

@media (max-width: 1100px) {
  .top-level-metrics-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .main-navigation {
    flex-wrap: wrap;
  }
}

@media (max-width: 800px) {
  .dashboard-charts {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .main-navigation {
    align-items: flex-start;
  }

  .navigation-links {
    order: 3;
    width: 100%;
  }
}

@media (max-width: 560px) {
  .page-content {
    padding: 24px 14px 36px;
  }

  .page-content > h1 {
    font-size: 25px;
  }

  .top-level-metrics-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .main-navigation {
    padding: 12px 14px;
  }

  .navigation-links {
    gap: 3px;
  }

  .navigation-links a {
    padding: 9px;

    font-size: 13px;
  }

  .stat-card {
    padding: 17px;
  }

  .stat-card-value {
    font-size: 22px;
  }

  .dashboard-chart-card {
    padding: 14px;
  }

  th,
  td {
    padding: 10px;
  }
}
```

---

## Test and commit

```powershell
npm run build
npm run lint
npm run dev

git add src/index.css src/App.css
git commit -m "Style dashboard and add responsive layouts"
git push
```

---

# 17. Final README

## `README.md`

```markdown
# Personal Finance Dashboard

A responsive personal finance and property investment dashboard built
with React, TypeScript and Vite.

## Features

- Financial overview dashboard
- ETF portfolio tracking
- Add, edit, delete and search ETF holdings
- Investment gain and loss calculations
- Property portfolio summaries
- Property equity and LVR calculations
- Property cash-flow calculations
- Mortgage repayment calculator
- Mortgage amortisation schedule
- Mortgage balance chart
- Net worth history chart
- Asset allocation chart
- Investment projections
- Browser local storage
- Light and dark themes
- Responsive layout

## Technologies

- React
- TypeScript
- Vite
- React Router
- Recharts
- CSS
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Running locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Data

The project uses illustrative sample financial data.

It does not connect to live financial accounts or provide live market
prices.

Financial projections are illustrative calculations rather than
financial advice.

## Deployment

The application is configured for deployment to GitHub Pages through
GitHub Actions.

Pushing to the `main` branch triggers the deployment workflow.

## Author

Anthony Cheung

Mathematics educator transitioning into frontend development.
```

---

# 18. Final deployment checks

Run:

```powershell
npm run build
npm run lint
npm run dev
git status
```

If everything is correct:

```powershell
git add .github/workflows/deploy.yaml README.md
git commit -m "Configure GitHub Pages deployment and documentation"
git push
```

---

# 18. Final Git history

Run:

```powershell
git log --oneline --reverse
```

A realistic completed history can contain repeated changes to `src/App.tsx` because the application was integrated incrementally. It does not need to have exactly one commit per day, and it should reflect the actual work that was performed.

A representative final history is:

```text
Initialise Vite React TypeScript project
Create initial finance dashboard shell
Define finance models and sample data
Add financial calculation and formatting utilities
Build reusable dashboard UI components
Add dashboard navigation
Add portfolio charts
Add mortgage chart visualisation
Build ETF portfolio table
Implement ETF portfolio management
Add property portfolio table
Build dashboard page
Build investment and property pages
Build mortgage calculator
Add mortgage calculation page
Add investment projection calculator
Add application routing
Connect shared ETF state across pages
Add ETF browser persistence
Add persistent dark mode
Complete application routing
Style global application foundation
Style dashboard components
Add responsive layouts
Fix integration issues across dashboard
Improve form accessibility and validation
Clean up TypeScript and lint issues
Configure GitHub Pages deployment
Add project documentation
Finalise finance dashboard portfolio project
```

Useful commands:

```powershell
git log --oneline --graph --decorate --all
git log --stat
git show --stat <commit>
```

When a commit genuinely changes `src/App.tsx`, it should be staged in that commit. For example:

```powershell
git add src/App.tsx src/components/Charts/NetWorthChart.tsx

git commit -m "Add portfolio charts"
git push
```

If a later integration changes `App.tsx` and a page component together, stage both:

```powershell
git add src/App.tsx src/pages/Dashboard.tsx

git commit -m "Build dashboard page"
git push
```

There is no reason to avoid repeated `App.tsx` changes merely to make the history look cleaner. The history should document the actual evolution of the application.


# 21. Final manual testing checklist

## Dashboard

```text
[ ] Dashboard loads
[ ] Net worth appears
[ ] ETF value appears
[ ] Property equity appears
[ ] Cash appears
[ ] Superannuation appears
[ ] Mortgage balances appear
[ ] Property cash flow appears
[ ] Net-worth chart renders
[ ] Asset-allocation chart renders
```

## Investments

```text
[ ] Investments page loads
[ ] ETF table renders
[ ] Search works
[ ] Add ETF works
[ ] Edit ETF works
[ ] Delete ETF works
[ ] Invalid ticker is rejected
[ ] Invalid name is rejected
[ ] Invalid units are rejected
[ ] Invalid current price is rejected
[ ] Invalid average purchase price is rejected
[ ] Gain/loss updates correctly
```

## Properties

```text
[ ] Property table renders
[ ] Equity values appear
[ ] LVR values appear
[ ] Rental income appears
[ ] Interest appears
[ ] Cash flow appears
```

## Mortgage

```text
[ ] Mortgage page loads
[ ] Default example calculates
[ ] Monthly repayment appears
[ ] Total interest appears
[ ] Total repayment appears
[ ] Amortisation table renders
[ ] Mortgage chart renders
[ ] Blank/invalid loan is rejected
[ ] Negative interest is rejected
[ ] Invalid term is rejected
[ ] Zero-interest mortgage works
```

## Projections

```text
[ ] Projection page loads
[ ] Monthly contribution can be changed
[ ] Annual return can be changed
[ ] Projection period can be changed
[ ] Projected value changes
[ ] Contributions change correctly
[ ] Growth changes correctly
[ ] Year-by-year table renders
```

## Theme

```text
[ ] Dark mode works
[ ] Light mode works
[ ] Theme survives refresh
```

## Persistence

```text
[ ] Add an ETF
[ ] Refresh browser
[ ] ETF remains
[ ] Edit ETF
[ ] Refresh browser
[ ] Edited ETF remains
[ ] Delete ETF
[ ] Refresh browser
[ ] Deleted ETF remains deleted
```

## Responsive design

Test at:

```text
[ ] Desktop
[ ] Tablet
[ ] Mobile
```

Check:

```text
[ ] Navigation
[ ] Cards
[ ] Tables
[ ] Forms
[ ] Charts
[ ] Buttons
```

---

# 22. Important development rule

Do not create all the final files and then manufacture a sequence of commits afterward.

For a genuine incremental development history, use this cycle:

```text
Understand the next feature
    ↓
Change the smallest sensible set of files
    ↓
Run the application in the browser
    ↓
Inspect the visual result
    ↓
Debug TypeScript/React/CSS problems
    ↓
Run npm run lint
    ↓
Run npm run build
    ↓
Run npm run dev
    ↓
Commit the completed feature
    ↓
Move to the next feature
```

### In particular, use `App.tsx` as an integration point

During development, it is reasonable to update `src/App.tsx` whenever a newly created component needs to be visualised. Examples include:

- importing the sample data after `financialData.ts` is created;
- displaying calculated values after `calculations.ts` is created;
- rendering `StatCard` and `PageLayout` after those components are built;
- rendering charts after the chart components are created;
- rendering `ETFTable` while ETF CRUD behaviour is being developed;
- previewing the property table;
- previewing the mortgage calculator and projection page;
- replacing temporary previews with the final React Router structure;
- lifting ETF state into `App.tsx`;
- adding localStorage and theme state;
- fixing final integration issues.

This means a genuine history might contain many commits that touch `src/App.tsx`. That is expected.

### `main.tsx` should change less frequently

`src/main.tsx` is normally the stable application entry point. It should be committed when it is first created and when it genuinely needs a change, but there is no reason to edit it every day merely to create activity in the Git history.

### Example daily workflow

```powershell
npm run dev
```

Make and inspect the change in the browser. When the feature is ready:

```powershell
npm run lint
npm run build
git status
git add <files-that-actually-changed>
git commit -m "Describe the completed feature"
git push
```

Then continue to the next development task.

Small bug-fix commits are also completely normal and useful. Examples include:

```text
Fix mortgage zero-interest calculation
Fix ETF form validation
Fix ETF persistence after refresh
Improve responsive table layout
Fix property cash-flow calculation
Improve chart labels
Fix dark-mode persistence
```

Do not fabricate commit dates, authorship or a development history. The strongest portfolio is one where you can actually explain every important part of the application.


# 23. What this project demonstrates

This project should demonstrate that you can:

- Build a React application from an empty Vite project
- Use TypeScript interfaces/types
- Design component boundaries
- Pass props between components
- Manage React state
- Lift state into a parent component
- Use `useState`
- Use `useEffect`
- Use `useMemo`
- Work with arrays using `map`, `filter` and `reduce`
- Validate form input
- Build reusable UI components
- Use React Router
- Persist data using localStorage
- Transform financial data
- Create charts with Recharts
- Build responsive layouts with CSS
- Create accessible forms and tables
- Handle empty states
- Handle invalid input
- Use Git
- Maintain a feature-based commit history
- Deploy a React application using GitHub Actions and GitHub Pages

---

# 24. Portfolio description

A suitable portfolio description is:

> **Personal Finance Dashboard** — A responsive React and TypeScript application for exploring personal investment, property, mortgage and net-worth data. The application includes ETF portfolio management, property cash-flow calculations, mortgage amortisation, investment projections, interactive charts, browser persistence, dark mode and responsive design.

Technologies:

```text
React · TypeScript · Vite · React Router · Recharts · CSS
```

---

# 25. Important note about reproduction

This guide intentionally contains both the **final source code** and a **development-order plan**. The final source snippets describe the finished application; the day-by-day section describes the order in which a developer should build and preview those features. Intermediate `App.tsx` states are not intended to be copied into the final project simultaneously. They are checkpoints showing how the application can be composed incrementally while developing.



The source code above reproduces the intended final source implementation.

The exact generated contents of:

```text
package-lock.json
```

and some Vite-generated configuration files can vary depending on the versions installed by npm.

For the most faithful reproduction, create the project using the same Node/npm/Vite environment used during the original build and commit the resulting `package-lock.json`.

The application source itself should follow the files and code in this document.


# First-Day-Playwrite
# Playwright E2E Testing Project

This project contains end-to-end (E2E) tests built using **Playwright Test** to validate the functionality and UI behavior of a web application.

## 🔗 Application Under Test
Base URL:`https://nishant-manocha.vercel.app/`

## Prerequisites
- Node.js + npm installed

## Setup
Install dependencies:
```bash
npm install
```

Install Playwright browsers (required once per machine, or after clearing cache):
```bash
npx playwright install
```

## Useful Commands
Run all tests:
```bash
npx playwright test
```

Run a single test file:
```bash
npx playwright test tests/home.spec.ts
```

Run on a specific browser project:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests with the browser UI visible:
```bash
npx playwright test --headed
```

Debug step-by-step (inspector):
```bash
npx playwright test --debug
```

Run a single test by name:
```bash
npx playwright test -g "has title"
```

Run sequentially (easier output / debugging):
```bash
npx playwright test --workers=1
```

Show the last HTML report:
```bash
npx playwright show-report
```

## Tests in `home.spec.ts`
File: [home.spec.ts](file:///c:/Users/hp/Desktop/KnowledgeGate-Internship-Work/First-Day-Playwrite/tests/home.spec.ts)

All tests are grouped under:
- `test.describe('Testing assertions', ...)`

Hooks used:
- `beforeAll`: creates a `runId`
- `afterAll`: asserts `runId` matches `run-<timestamp>`
- `beforeEach`: `page.goto('/')`
- `afterEach`: asserts URL contains `vercel.app` and title is not a 404/not found

Test cases:
- `has title`
- `has url`
- `checking element using css`
- `checking element using getbytext`
- `checking element using getbyrole`
- `view projects button is enabled and focusable`
- `page has viewport meta tag`
- `page has at least one button`
- `welcome text appears once`
- `h1 contains a name`
- `document is fully loaded`

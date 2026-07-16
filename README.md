# Playwright TS Automation

This project contains automated end-to-end tests for HRM Labs application using Playwright with TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Running Tests](#running-tests)
- [Viewing Test Reports](#viewing-test-reports)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version` and `npm --version`
- **Git** (for cloning and version control)
  - Download from [git-scm.com](https://git-scm.com/)

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd agents-setup-and-usage-guide
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This installs:

- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript definitions for Node.js
- `dotenv` - Environment variable management

### 3. Configure Environment Variables

Create a `.env` file in the project root by copying the example file:

```bash
cp .env.example .env
```

Then, edit the `.env` file and add your credentials:

```env
DOMAIN=your_domain_here
USERNAMETEST=your_username_here
PASSWORD=your_password_here
```

**Note:** Never commit the `.env` file to version control. It's already in `.gitignore`.

## Running Tests

### Run All Tests

Execute all test cases:

```bash
npx playwright test
```

### Run Tests in Specific Mode

#### Headed Mode (see browser)

```bash
npx playwright test --headed
```

#### Debug Mode (step through tests)

```bash
npx playwright test --debug
```

#### Run Specific Test File

```bash
npx playwright test tests/TestCases.spec.ts
```

#### Run With 1 Worker and 1 Browser

```bash
npx playwright test --project=firefox --workers=1
```

#### Run Tests in Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Test Configuration

The `playwright.config.ts` file controls test behavior:

- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled by default
- **Browsers:** Chromium, Firefox, and WebKit
- **Retries:** Automatic retry on CI only
- **Trace Recording:** Enabled on first retry for debugging

## Viewing Test Reports

### Generate and View HTML Report

After running tests, Playwright automatically generates an HTML report. To view it:

```bash
npx playwright show-report
```

This will open the test report in your default browser, showing:

- **Test Summary:** Overall pass/fail statistics
- **Test Details:** Individual test results with timing
- **Screenshots:** Visual captures of test failures
- **Traces:** Step-by-step execution traces (if available)
- **Logs:** Detailed logs from each test

### Report Location

The HTML report is stored in: `./playwright-report/`

### Customizing Report Output

The report format is configured in `playwright.config.ts`:

```typescript
reporter: "html";
```

You can also generate reports in other formats:

```bash
npx playwright test --reporter=json  // JSON format
npx playwright test --reporter=list  // Console output
```

## Project Structure

```
.
├── tests/
│   └── TestCases.spec.ts          # Test cases
├── playwright.config.ts            # Playwright configuration
├── .env.example                    # Environment variables template
├── .env                            # Environment variables (local only)
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## Troubleshooting

### Tests Not Running

- Ensure all dependencies are installed: `npm install`
- Check that `.env` file exists and has correct credentials
- Verify Node.js version: `node --version`

### Credentials Not Loading

- Verify `.env` file is in the root directory
- Ensure variables match exactly: `DOMAIN`, `USERNAMETEST`, `PASSWORD`
- Restart your terminal after creating/modifying `.env`

### Report Not Displaying

- Check that tests have completed
- Ensure `playwright-report` directory exists
- Try clearing report: `rm -rf playwright-report` (or `rmdir /s playwright-report` on Windows)

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Testing Guide](https://playwright.dev/docs/intro)
- [Playwright Reporters](https://playwright.dev/docs/test-reporters)

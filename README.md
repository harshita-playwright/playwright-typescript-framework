# Playwright Automation Framework (TypeScript)

## 👋 About Me
I am a **QA Engineer** with a strong manual testing background and hands-on experience building automation frameworks using **TypeScript + Playwright**.  
This repository demonstrates how I design **scalable, maintainable, and real-world automation frameworks**, not just basic test scripts.

I focus on:
- Clean architecture
- Non-flaky test design
- Real-world structure

---

## 🎯 Framework Goals
- Reduce test flakiness through stable selectors and proper waits
- Enforce clean separation between test logic and UI logic
- Improve maintainability with reusable page objects and fixtures
- Designed following production-grade automation principles
  
---

## 🧪 Tech Stack
- **Language:** TypeScript  
- **Automation Tool:** Playwright  
- **Test Runner:** Playwright Test  
- **Design Pattern:** Page Object Model (POM) is used to separate UI logic from test logic, improving maintainability, reducing duplication, and keeping tests readable. 
- **Assertions:** Playwright built-in `expect`  
- **Reports:** HTML Report  
- **Version Control:** Git & GitHub  

---

## 📁 Framework Structure
```text
├── src
│   ├── pages        # Page classes (NO assertions)
│   ├── tests        # Test specs (NO locators)
│   ├── fixtures     # Custom fixtures & test setup
│   ├── utils        # Helpers, data, config logic
│
├── playwright.config.ts
├── package.json
└── README.md
```
---

## 🧩 Configuration & Architecture Decisions

### 🔧 Environment Configuration
- Centralized configuration handled via `playwright.config.ts`
- `baseURL` configured for environment flexibility
- Headless/headed mode controlled via config
- Browser projects defined for cross-browser execution

### 🔁 Retry Strategy
- Retries configured at framework level for CI stability
- Failures automatically capture screenshots and traces

### 🏷 Test Tagging
- Tests can be grouped and filtered using tags
- Enables selective execution (e.g., smoke, regression)

Example:
```bash
npx playwright test --grep @smoke
```

---

## 🚀 What This Project Covers
- End-to-end UI automation
- Page Object Model implementation
- Custom fixtures usage
- Parallel execution
- Cross-browser testing (Chromium / Firefox)
- HTML reporting with screenshots
- Trace debugging

---

## 🔒 Design Rules I Follow
- No locators inside test files
- No assertions inside page classes
- Reusable fixtures for setup
- Clean test naming conventions
- Minimal hard waits
- Stable selectors (no fragile XPath abuse)

---

## ▶️ How to Run the Tests

### 1️⃣ Install Dependencies

```bash
npm install
npx playwright install
```

### 2️⃣ Run all tests

```bash
npx playwright test
```

### 3️⃣ Run a specific test

```bash
npx playwright test src/tests/login.spec.ts
```

### 4️⃣ Open UI mode

```bash
npx playwright test --ui
```

### 5️⃣ View HTML report

```bash
npx playwright show-report
```

---

## 📊 Reporting & Debugging
- HTML reports generated after execution
- Screenshots captured on failure
- Trace files enabled for deep debugging

---

## ⚙️ CI Integration
This framework is structured to support CI/CD execution.

- Headless execution supported
- HTML reports generated after pipeline runs
- Trace files enabled for failure debugging
- Easily integratable with GitHub Actions or other CI tools
  
---

## 💡 Why This Framework Matters
This project reflects how I approach automation in real environments — focusing on maintainability, stability, and scalable architecture rather than quick script creation.

---

## 📬 Contact
- LinkedIn: https://www.linkedin.com/in/harshita-kamble-56214418a/ 
- Email: harshitakamble00@gmail.com
- GitHub: https://github.com/harshita-playwright/ 

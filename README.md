# Next.js Testing with Jest & React Testing Library

A beginner-friendly Next.js project that demonstrates how to set up and write unit tests for React components using **Jest** and **React Testing Library**. The project tests the default Next.js home page to verify that key UI elements are rendered correctly.

---

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sherif-altiby/test-nextJs-intro.git
cd test-nextJs-intro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Setting Up Testing

### 1. Install testing dependencies

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom ts-node
```

### 2. Create `jest.config.ts`

```ts
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterFramework: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
```

### 3. Create `jest.setup.ts`

```ts
import "@testing-library/jest-dom";
```

### 4. Add test script to `package.json`

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

---

## Running Tests

Run all tests once:

```bash
npm test
```

Run tests in watch mode (re-runs on file change):

```bash
npm run test:watch
```

---

## Project Structure

```
├── __tests__/
│   └── page.test.tsx       # Tests for the home page
├── app/
│   └── page.tsx            # Home page component
├── jest.config.ts          # Jest configuration
├── jest.setup.ts           # Jest setup file
└── package.json
```

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

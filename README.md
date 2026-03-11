# 🎭 Playwright E2E Automation Project

[![GitHub Actions Status](https://github.com/SvetlanaSukhoivan/playwright-ts-project/actions/workflows/playwright.yml/badge.svg)](https://github.com/SvetlanaSukhoivan/playwright-ts-project/actions)
[![GitLab CI Status](https://gitlab.com/SvetlanaSukhoivan/playwrigth-ts-project/badges/main/pipeline.svg)](https://gitlab.com/SvetlanaSukhoivan/playwrigth-ts-project/-/commits/main)

This project is a modern End-to-End (E2E) testing framework built with **Playwright** and **TypeScript**. 

It is designed with industry best practices in mind, featuring the Page Object Model (POM) pattern, strict typing, a robust pre-commit code quality pipeline, and full integration with dual CI/CD pipelines (GitLab CI and GitHub Actions).

## ✨ Key Features

* **Framework:** Playwright + TypeScript.
* **Architecture:** Utilizes the **Page Object Model (POM)** pattern for highly maintainable and scalable test code.
* **Strict TypeScript Typing:** Uses custom interfaces for data models and strict compilation rules to catch errors before execution.
* **Code Quality & Git Hooks:** Integrated with **ESLint**, **Prettier**, **Husky**, and **lint-staged**. Commits are automatically blocked if the code contains linting errors, Playwright rule violations (like `page.waitForTimeout`), or poor formatting.
* **Authentication Optimization:** Implements a Global Setup to handle authentication and save the storage state. Tests do not waste time logging in repeatedly — auth is performed just once before the test suite runs.
* **Dual CI/CD Pipelines:** Fully configured and synchronized pipelines running on both **GitLab CI** and **GitHub Actions**.
* **Dockerized CI:** Uses the official Microsoft Playwright Docker image (`mcr.microsoft.com/playwright:v1.56.1-jammy`) in the CI/CD pipelines to skip lengthy browser installations and ensure a stable, isolated execution environment.
* **Artifact Management:** Automatically saves HTML reports (`playwright-report`) and raw assets of failed tests (videos, screenshots, traces in the `test-results/` folder) for easy debugging.
* **Scheduled Runs & Notifications:** Configured with Cron for daily test runs and integrated email alerts for failed pipeline executions.

## 📁 Project Structure

```text
├── .github/workflows/   # CI/CD configuration for GitHub Actions
├── .gitlab-ci.yml       # CI/CD configuration for GitLab
├── .husky/              # Git pre-commit hooks (Husky)
├── pages/               # Page Object classes (locators and methods)
├── tests/               # E2E test files (*.spec.ts)
├── helpers/             # Helper functions, interfaces, and test data
├── .eslintrc.json       # ESLint configuration with Playwright rules
├── .prettierrc          # Prettier code formatting rules
├── tsconfig.json        # Strict TypeScript compiler options
├── playwright.config.ts # Main Playwright configuration file
├── global-setup.ts      # Global setup script for initial authentication
└── package.json         # Project dependencies, lint-staged config, and npm scripts
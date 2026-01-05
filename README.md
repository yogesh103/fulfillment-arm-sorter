# Fulfillment Arm Sorter

This repository contains a small TypeScript library that models a fulfillment-arm package sorter.

The project provides concise domain types and services to determine how packages should be routed into different stacks and to dispatch packages into stacks

---

## Rules / Business Logic

Packages are classified using two boolean attributes:

- Bulky
  - A package is bulky when its volume (width × height × length) is >= 1,000,000 cm³ OR when any single dimension (width, height, length) is >= 150 cm.
- Heavy
  - A package is heavy when its mass is >= 20 kg.

Dispatch rules:

- REJECTED — package is both bulky and heavy
- SPECIAL — package is bulky OR heavy (but not both)
- STANDARD — package is neither bulky nor heavy

These rules are implemented in `src/models/PackageItem.ts` and `src/services/PackageSorter.ts`.

---

## Key modules

- `src/models/PackageItem.ts`
  - Encapsulates the package dimensions and mass.
  - Exposes `getVolume()`, `isBulky()` and `isHeavy()`.
  - Thresholds are defined as static constants inside the class.

- `src/models/Stack.ts`
  - String enum with three values: `STANDARD`, `SPECIAL`, `REJECTED`.

- `src/services/PackageSorter.ts`
  - Pure utility that applies the business rules and returns the `Stack` a package should go to.

- `src/services/PackageDispatcher.ts`
  - Maintains three stacks (one per `Stack` enum value) and routes incoming packages into the correct stack using `PackageSorter`.

---


## Running tests

This project uses Jest with `ts-jest` to run TypeScript tests. Tests live under `tests/`.

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

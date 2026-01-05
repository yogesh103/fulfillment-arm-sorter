# Fulfillment Arm Sorter

A basic Node.js TypeScript starter template.

## Features

- ✅ TypeScript support with strict type checking
- ✅ Modern ES2020+ syntax
- ✅ Development mode with hot reload using Nodemon
- ✅ Build scripts for production
- ✅ Clean project structure

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Usage

### Development Mode

Run the application in development mode with hot reload:

```bash
npm run dev
```

Or use watch mode:

```bash
npm run watch
```

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Production

Build and run the compiled application:

```bash
npm run build
npm start
```

## Project Structure

```
fulfillment-arm-sorter/
├── src/
│   └── index.ts          # Main application entry point
├── dist/                 # Compiled JavaScript output (generated)
├── node_modules/         # Dependencies (generated)
├── .gitignore           # Git ignore rules
├── nodemon.json         # Nodemon configuration
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Run in development mode with ts-node
- `npm run watch` - Run in watch mode with auto-reload
- `npm run clean` - Remove compiled output
- `npm run rebuild` - Clean and rebuild the project

## Development

This is a starter template. You can extend it by:

1. Adding more source files in the `src/` directory
2. Installing additional dependencies as needed
3. Configuring ESLint and Prettier for code quality
4. Adding test frameworks (Jest, Mocha, etc.)
5. Setting up CI/CD pipelines

## License

ISC

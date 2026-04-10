# Development Guide

This page explains how to set up the project locally and the standards to follow when making changes.

## Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open the browser**:
   Navigate to `http://localhost:5173`

## Available Scripts
- `npm run dev`: Starts the Vite dev server with Hot Module Replacement (HMR).
- `npm run build`: Compiles TypeScript and builds the production-ready assets in `dist/`.
- `npm run lint`: Runs ESLint to check for code style and potential errors.
- `npm run preview`: Locally previews the production build.

## Contribution Standards
- **Surgical Changes**: Avoid refactoring code that isn't directly related to your task.
- **Type Safety**: Maintain strict TypeScript typing for all new components and data structures.
- **Multilingual Support**: When adding new text, update both the `en` and `pl` keys in the `translations` object in `App.tsx`.
- **CSS Variables**: Use the predefined color variables in `index.css` instead of hardcoding hex values.
- **Testing**: Verify responsiveness and "Antigravity" effects on both desktop and mobile viewports before committing.

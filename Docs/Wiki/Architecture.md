# Architecture & Tech Stack

The portfolio is built as a lightweight, performant Single Page Application (SPA) using modern web technologies.

## Technical Stack
- **Framework**: [React 19](https://react.dev/) (TypeScript)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Custom properties & Utility classes)
- **Deployment**: [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

## Project Structure
```text
/
├── .github/workflows/    # CI/CD pipeline definitions
├── Docs/                 # Project documentation (including this Wiki)
├── public/               # Static assets (CV PDF, icons)
├── src/
│   ├── assets/           # Images and SVGs
│   ├── App.tsx           # Main application logic & Content (Multilingual)
│   ├── App.css           # Component-specific styles
│   ├── index.css         # Global variables and base styles
│   └── main.tsx          # React entry point
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Multilingual System
The application uses a state-based translation object within `App.tsx`. 
- **State**: `lang` ('en' | 'pl') managed by `useState`.
- **Content**: A `translations` constant containing all text fragments for both languages.
- **Implementation**: The UI dynamically switches content based on the selected language, ensuring a seamless user experience without page reloads.

## Performance Optimization
- **GPU-Accelerated Animations**: Transitions use `transform: translateY()` to ensure smooth 60FPS animations.
- **Minimal Dependencies**: The project maintains a tiny bundle size by avoiding heavy UI libraries and focusing on native CSS/JS.

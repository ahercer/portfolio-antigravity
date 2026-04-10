# Portfolio Implementation Plan: "The Data Cosmos"

## Objective
Create a modern, interactive professional portfolio for a Strategic Lead BI Engineer. The design will follow "The Data Cosmos" aesthetic (Dark Mode), utilize Microsoft Data Stack colours (Azure Blue, Fabric Purple, Power BI Yellow), and feature subtle "Antigravity" hover effects on interactive elements.

## Key Files & Context
- **Framework:** React + TypeScript (scaffolded via Vite).
- **Styling:** Vanilla CSS (or CSS Modules) focusing on clean architecture and performant animations.
- **Location:** `C:\Learning AI\Portfolio with Antigravity` (currently empty).

## Implementation Steps

0.  **Save Plan:** Save a copy of this `portfolio-plan.md` file to the root directory (`C:\Learning AI\Portfolio with Antigravity\portfolio-plan.md`).
1.  **Project Scaffolding:**
    *   Initialize a new Vite + React + TypeScript project in the target directory.
    *   Clean up default Vite boilerplate.
2.  **Global Styles & Variables (`index.css`):**
    *   Set up CSS variables for colors: Deep dark background (`#0A0E17`), Fabric Blue (`#0078D4`), Azure Purple (`#5C2D91`), Power BI Yellow (`#F2C811`).
    *   Define typography (professional, clean sans-serif like Inter or Segoe UI).
    *   Create utility classes for the "Antigravity" effect: smooth transitions, `transform: translateY(-5px)` on hover, and soft, glowing box-shadows.
3.  **Component Architecture:**
    *   **`App.tsx`**: Main container and layout structure.
    *   **`Hero.tsx`**: High-impact introduction ("Strategic Lead BI Engineer", DP-600 badge/mention).
    *   **`Summary.tsx`**: Professional summary section.
    *   **`Competencies.tsx`**: Technical skills displayed as floating tags or small cards.
    *   **`ExperienceTimeline.tsx`**: Chronological display of roles (Acora, Elastacloud) using antigravity cards.
4.  **Content Integration:**
    *   Populate the components with the provided CV text.
    *   Format bullet points for readability.
5.  **Refinement & Responsiveness:**
    *   Ensure the layout scales gracefully to mobile and tablet devices using CSS Flexbox/Grid and media queries.
    *   Test hover animations to ensure they feel fluid and not jarring.

## Verification & Testing
- Run `npm run dev` to verify the application loads without errors.
- Inspect the visual hierarchy and color contrast.
- Test the "Antigravity" hover states on interactive elements.
- Verify responsive design across different viewport sizes.
- Ensure no sensitive information is exposed.

# Design System: "The Data Cosmos"

The design follows a "Cosmos" theme, utilizing the official Microsoft Data Stack color palette set against a deep space background.

## Color Palette
The colors are defined as CSS variables in `index.css`:

| Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Background** | `#0A0E17` | Main page background |
| **Fabric Blue** | `#0078D4` | Primary accents, Headings, Buttons |
| **Azure Purple** | `#5C2D91` | Decorative borders, Secondary accents |
| **Power BI Yellow** | `#F2C811` | Skill highlights, Accent borders |
| **Card Background** | `rgba(255, 255, 255, 0.03)` | Semi-transparent card overlays |

## The "Antigravity" Effect
The core interactive element is the `.antigravity-hover` utility class.

### Behavior:
1. **Vertical Lift**: On hover, the element lifts by `-5px` using `transform`.
2. **Glow Effect**: A soft box-shadow with the accent color is applied.
3. **Transition**: A `0.3s cubic-bezier` curve ensures the movement feels natural and "weightless."

```css
.antigravity-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 120, 212, 0.2);
}
```

## Typography
- **Primary Font**: 'Segoe UI', system-ui, -apple-system.
- **Philosophy**: Clean, professional, and highly readable, mimicking the interface of modern data tools like Power BI and Fabric.

## Layout Principles
- **Responsive Grid**: Uses CSS Grid and Flexbox to adapt from 1-column mobile views to multi-column desktop layouts.
- **Visual Hierarchy**: Heavy use of whitespace to separate experience milestones and technical competencies.

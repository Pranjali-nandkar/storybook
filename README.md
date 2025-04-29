# Design System Assignment

Tech Stack: React + TypeScript + TailwindCSS + Storybook

## Folder Structure
- `src/components/Accordion`
- `src/components/Badge`
- `src/components/Navbar`
- `src/components/Pagination`
- `src/theme/colors.ts`

## Features
- WCAG-compliant colors
- Accessible components (ARIA roles, focus management)
- Fully responsive (mobile, tablet, desktop)
- Deployed Storybook (Chromatic or Vercel)

## Scripts
```bash
npm install
npm run dev  # Vite local server
npm run storybook  # Run Storybook

# Design System Assignment

## Focus: Color + Data Display + Navigation Components

### Tech Stack:
- **React**
- **TypeScript**
- **TailwindCSS** (or styled-components)
- **Storybook**

---

## What You Need to Do:
Build the components listed below using React + TypeScript, and document them in Storybook. Structure your project as a scalable, reusable design system suitable for enterprise applications.

For each component:
- Create a dedicated folder/module.
- Use TypeScript for defining props/interfaces.
- Add a Storybook entry with:
  - All types, states, and variants.
  - Documentation and usage notes.
  - Accessibility checklist.
- Push your project to a public or private GitHub repo.

---

## Objective:
Assess your ability to:
- Build and implement color tokens.
- Develop reusable data display and navigation components.
- Handle interaction states and behaviors.
- Ensure accessibility and responsiveness.
- Document usage with Storybook clearly and concisely.

---

## Foundational Element: Color System

Create a token-based color system supporting B2B enterprise UI needs:
- **Primary, Secondary, Tertiary Colors**.
- **Neutral Colors**: greys, whites, backgrounds, borders.
- **Semantic Colors**: Success, Info, Warning, Error.
- **Surface & Background Layers**.
- **Light & Dark Theme Support**.

### Requirements:
- WCAG-compliant contrast ratios.
- CSS variables or theme support.
- Storybook documentation: usage examples, naming conventions, accessibility notes.

---

## Choose 1 or 2 Data Display Components to Build:

Pick from:
- **Accordion**
- **Tag / Badge / Pill**
- **Tooltip**
- **Timeline**
- **Progress Bar / Spinner**
- **Tree View**
- **Table** (with optional sorting/filtering)

### Support:
- All relevant states (default, hover, focus, disabled).
- Variants (size, color, type).
- Keyboard navigation and ARIA roles.
- Responsiveness and theming.

---

## Choose 1 or 2 Navigation Components to Build:

Pick from:
- **Top Navigation Bar**
- **Sidebar Navigation** (with collapse/expand)
- **Tabs**
- **Breadcrumbs**
- **Pagination**

### Support:
- All relevant states (selected, hover, focus, disabled).
- Variants (orientation, sizes, icon support).
- Responsive behavior (mobile/tablet/desktop).
- ARIA roles and keyboard navigation.

---

## Documentation Checklist (via Storybook):
Please include the following for each component:
- ✅ **Component Name + Description**
- ✅ **Props / API**
- ✅ **Use Cases**
- ✅ **Anatomy / Structure**
- ✅ **States & Variants**
- ✅ **Interaction Behavior**
- ✅ **Accessibility Notes** (ARIA, Focus Management)
- ✅ **Theming / Responsiveness Support**

---

## Notes:
- Ensure your components are well-documented, with examples of usage, possible states, and accessibility features.
- Follow best practices for accessibility (ARIA roles, focus management, keyboard navigation).
- Ensure responsiveness for different screen sizes (mobile, tablet, desktop).
- Provide clear and concise documentation to support the usage of each component in different contexts.

---

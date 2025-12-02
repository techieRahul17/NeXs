![NEXUS Banner](/public/banner.png)

# NEXUS

> **DESIGN. BUILD. DELIVER.**

NEXUS is a high-performance agency website template engineered for speed and visual impact. Built with a neo-brutalist aesthetic, it combines aggressive typography, kinetic animations, and a stark color palette to create a memorable digital experience.

---

## Overview

This project is a single-page React application designed to showcase agency services, portfolios, and processes. It prioritizes performance and user engagement through:

*   **Kinetic Typography:** Continuous scrolling marquees for dynamic visual interest.
*   **Parallax Depth:** Layered animations that respond to user scroll.
*   **Interactive Elements:** High-contrast hover states and micro-interactions.
*   **Responsive Layout:** Fluid design that adapts seamlessly to any device.

## Technology Stack

*   **React:** Component-based UI architecture.
*   **Tailwind CSS:** Utility-first styling for rapid development.
*   **Framer Motion:** Production-ready animation library.
*   **Vite:** Next-generation frontend tooling.

---

## Installation

### Prerequisites

Ensure Node.js is installed on your system.

### Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/techieRahul17/NeXs.git
    cd NeXs
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

---

## Project Structure

*   **src/components/**: Contains all functional UI components (Navbar, Hero, Services, etc.).
*   **src/App.jsx**: Main application entry point and routing configuration.
*   **src/index.css**: Global styles, including custom glitch effects and Tailwind directives.
*   **tailwind.config.js**: Design system configuration (colors, fonts, animations).

## Customization

### Branding

To modify the primary color scheme, navigate to `tailwind.config.js` and update the `colors` object:

```javascript
colors: {
  primary: '#FF2E2E', // Update this value
  dark: '#050505',
},
```

### Content

All text content is directly editable within the component files located in `src/components/`.

---

## License

This project is open source and available under the MIT License.

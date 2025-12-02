# NEXUS - The Ultimate Agency Website

![NEXUS Banner](https://placehold.co/1200x400/050505/FF2E2E?text=NEXUS+AGENCY)

> **Design.Build.Deliver**

Welcome to **NEXUS**! This is a high-energy, neo-brutalist agency website template designed to turn heads and convert visitors. Built with modern web technologies, it's fast, responsive, and packed with "funky" animations.

---

## Features

*   **Blazing Fast:** Powered by **Vite** for instant server start.
*   **Neo-Brutalist Design:** Bold **Red (#FF2E2E)** & **Black** aesthetic.
*   **Kinetic Typography:** Infinite scrolling marquees that scream energy.
*   **Parallax Effects:** Smooth background animations using **Framer Motion**.
*   **Glitch Text:** Custom CSS animations for that cyberpunk feel.
*   **Fully Responsive:** Looks amazing on your phone, tablet, and desktop.
*   **Component-Based:** Clean, modular code that is easy to customize.

---

## Tech Stack

We used the best tools in the game:

*   [React](https://react.dev/) - The library for web and native user interfaces.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
*   [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in your React projects.
*   [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.

---

## Getting Started (Beginner Friendly)

Follow these simple steps to get NEXUS running on your machine!

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the Repository
Open your terminal (Command Prompt, PowerShell, or Terminal) and run:
```bash
git clone https://github.com/techieRahul17/NeXs.git
cd NeXs
```

### 2. Install Dependencies
Install all the magic libraries we used:
```bash
npm install
```

### 3. Start the Development Server
Launch the site locally!
```bash
npm run dev
```
You should see a link like `http://localhost:5173`. Click it to view your site! 🎉

---

## Project Structure

Here is a quick map of the files so you don't get lost:

```
src/
├── components/       # All the building blocks
│   ├── Navbar.jsx    # Top navigation
│   ├── Hero.jsx      # The big main section with the "X"
│   ├── HypeStrip.jsx # The scrolling text
│   ├── Services.jsx  # Bento grid of services
│   ├── Portfolio.jsx # Your work showcase
│   ├── WhyUs.jsx     # Team section
│   ├── Process.jsx   # Timeline animation
│   └── Footer.jsx    # Contact info
├── App.jsx           # The main container
├── index.css         # Global styles & Glitch effects
└── main.jsx          # Entry point
```

---

## Customization

Want to make it yours? It's easy!

### Changing Colors
Open `tailwind.config.js` and change the `primary` color:
```javascript
colors: {
  primary: '#FF2E2E', // Change this hex code to your brand color!
  dark: '#050505',
},
```

### Changing Text
Just open any file in `src/components/` and edit the text inside the HTML tags. For example, to change the Hero text, open `src/components/Hero.jsx`.

---

##  Contributing

Got a cool idea? Fork the repo and submit a Pull Request!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Regards 
Team NeXus

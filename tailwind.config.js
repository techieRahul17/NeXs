/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF2E2E',
                dark: '#050505',
                'dark-lighter': '#0a0a0a',
                'glass': 'rgba(255, 46, 46, 0.05)',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Clash Display', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
                'spin-slow': 'spin 15s linear infinite',
                'pulse-glow': 'pulse-glow 3s infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 46, 46, 0.2)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 46, 46, 0.6)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'red-gradient': 'linear-gradient(to right bottom, #FF2E2E, #990000)',
                'dark-gradient': 'linear-gradient(to bottom, #050505, #111111)',
            },
        },
    },
    plugins: [],
}

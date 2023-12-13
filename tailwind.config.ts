import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'notosans': ['Noto Sans', 'sans-serif'],
                'novasquare': ['Nova Square', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
                'robotocon': ['Roboto Condensed', 'sans-serif']
            }
        },
        screens: {
            'sm': { 'min': '320px', 'max': '480px' },
            'md': { 'min': '481px', 'max': '768px' },
            'lg': { 'min': '769px', 'max': '1024px' },
            'xl': { 'min': '1025px', 'max': '1200px' },
            '2xl': { 'max': '1201px' },
        },
    },
    daisyui: {
        themes: [
            {
                'rosepine': {
                    "primary": "#c4a7e7",
                    "secondary": "#ebbcba",
                    "accent": "#f6c177",
                    "neutral": "#191724",
                    "base-100": "#1f1d2e",
                    "info": "#31748f",
                    "success": "#9ccfd8",
                    "warning": "#f6c177",
                    "error": "#eb6f92",
                },
                'rosepine-moon': {
                    "primary": "#c4a7e7",
                    "secondary": "#ea9a97",
                    "accent": "#c4a7e7",
                    "neutral": "#2a273f",
                    "base-100": "#232136",
                    "info": "#3e8fb0",
                    "success": "#9ccfd8",
                    "warning": "#f6c177",
                    "error": "#eb6f92",
                },
                'rosepine-dawn': {
                    "primary": "#907aa9",
                    "secondary": "#d7827e",
                    "accent": "#907aa9",
                    "neutral": "#faf4ed",
                    "base-100": "#fffaf3",
                    "info": "#286983",
                    "success": "#56949f",
                    "warning": "#ea9d34",
                    "error": "#b4637a",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
export default config

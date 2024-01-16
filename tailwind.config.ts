import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        minWidth: {
            '1/2': '50%'
        },
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'audiowide': ['Audiowide', 'sans-serif'],
            },
            backgroundImage: {
                'profile': "url('/image.png')",
                'transparent': "url('/transparent.png')",
                'art1': "url('/art.jpg')"
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
                'white': {
                    "primary": "#265cfc",
                    "base-100": "#ffffff",
                    "base-200": "#dcdcdc",
                    "base-300": "#c8c8c8",
                    "base-content": "#000000",
                },
                'dark': {
                    "primary": "#B895E2",
                    "base-100": "#000000",
                    "base-200": "#111111",
                    "base-300": "#222222",
                    "base-content": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
export default config

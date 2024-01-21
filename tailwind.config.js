/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            'inter': ['Inter'],
            'noto': ['Noto Sans'],
            'encode-sans': ['Encode Sans Condensed'],
            'syne': ['Syne']
        },
        screens: {
            'sm': { 'min': '300px', 'max': '767px' },
            'md': { 'min': '768px', 'max': '991px' },
            'lg': { 'min': '992px', 'max': '1199px' },
            'xl': { 'min': '1200px' },
        }
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            prefix: "ctp",
            defaultFlavour: "mocha",
        }),
    ],
}


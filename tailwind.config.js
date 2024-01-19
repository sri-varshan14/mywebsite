/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            'inter': ['Inter'],
            'noto': ['Noto Sans'],
            'encode-sans': ['Encode Sans Condensed'],
            'syne': ['Syne']
        }
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            prefix: "ctp",
            defaultFlavour: "mocha",
        }),
    ],
}


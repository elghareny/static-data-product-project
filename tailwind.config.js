/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: "2rem",
                lg: "3rem",
                xl: "1rem",
                '2xl': "5rem",
            },
        },
        extend: {},
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                'orange-good':'rgb(246, 131, 26)',
                'light':'rgb(246, 246, 246)',
            }
        },
        
    },
    plugins: [],
}

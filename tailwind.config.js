/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                10: '10px',
            },
            colors: {
                dark: {
                    100: '#48465C',
                    200: '#F8F7FA',
                },
            },
        },
    },
    plugins: [],
}

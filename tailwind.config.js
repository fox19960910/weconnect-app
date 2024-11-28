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
                    300: '#DBDADE',
                },
                primary: {
                    100: '#246AA3',
                    500: '#246AA314',
                    600: '#246AA329',
                },
            },
            boxShadow: {
                paper: '0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
            },
        },
    },
    plugins: [],
}

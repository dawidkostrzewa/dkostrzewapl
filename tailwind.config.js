/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: 'rgb(29, 29, 29)',
            white: 'rgb(255, 255, 255)',
            lightBlack: '#292929'
        },
        fontFamily: {
            sans: ['"Roboto"', 'sans-serif']
        },
        extend: {
            scale: {
                102: '1.02'
            }
        }
    },
    plugins: []
};

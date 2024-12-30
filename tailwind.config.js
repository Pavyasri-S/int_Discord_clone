/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
    theme: {
        extend: {
        colors: {
            primary: '#172554 ', 
            darkBg: '#36393f', 
            discordSidebar: '#2f3136', 
            discordCard: '#40444b',
            darkHover: '#202225',
            backgroundcolor: '#161CBB',
            gray: {
                50: "#ECEDEE",
                100: "#DCDDDE",
                200: "#B9BBBE",
                300: "#8E9297",
                400: "#72767D",
                500: "#5C6067",
                600: "#464950",
                700: "#36393F",
                800: "#2F3136",
                900: "#202225"
        },
        },
    fontFamily: {
        sans: ['Nunito', 'sans-serif']
    },
    },
},
plugins: [],
}


import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-orange": "#f26639",
                "primary-purple": "#510d6d",
                "primary-cyan": "#0497af",
                "secondary-green": "#009b78",
                "secondary-purple": "#8574B3",
                "secondary-yellow": "#D9E6B3",
                "secondary-pink": "#E996C0",
            },
            fontFamily: {
                "montserrat": "\"Montserrat\", sans-serif",
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;

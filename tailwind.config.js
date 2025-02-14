module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
        "./index.html",
    ],
    darkMode: "class",
    theme: {
        screens: {
            md: { max: "1050px" },
            sm: { max: "550px" },
        },
        extend: {
            colors: {
                black: {
                    600: "var(--black_600)",
                    900: "var(--black_900)",
                    "900_01": "var(--black_900_01)",
                    "900_02": "var(--black_900_02)",
                    "900_3f": "var(--black_900_3f)",
                },
                blue: {
                    50: "var(--blue_50)",
                    200: "var(--blue_200)",
                    700: "var(--blue_700)",
                    800: "var(--blue_800)",
                    900: "var(--blue_900)",
                    a200: "var(--blue_a200)",
                    a200_01: "var(--blue_a200_01)",
                    a700: "var(--blue_a700)",
                    a700_01: "var(--blue_a700_01)",
                },
                blue_gray: {
                    50: "var(--blue_gray_50)",
                    100: "var(--blue_gray_100)",
                    200: "var(--blue_gray_200)",
                    300: "var(--blue_gray_300)",
                    400: "var(--blue_gray_400)",
                    600: "var(--blue_gray_600)",
                    700: "var(--blue_gray_700)",
                    900: "var(--blue_gray_900)",
                    "400_01": "var(--blue_gray_400_01)",
                },
                cyan: {
                    200: "var(--cyan_200)",
                },
                gray: {
                    50: "var(--gray_50)",
                    900: "var(--gray_900)",
                    "50_01": "var(--gray_50_01)",
                    "700_11": "var(--gray_700_11)",
                    "800_2b": "var(--gray_800_2b)",
                },
                green: {
                    600: "var(--green_600)",
                },
                indigo: {
                    50: "var(--indigo_50)",
                },
                pink: {
                    a200: "var(--pink_a200)",
                },
                red: {
                    400: "var(--red_400)",
                },
                white: {
                    a700: "var(--white_a700)",
                },
                gray_shadow: "var(--gray_shadow)",
            },
            boxShadow: {
                xs: "0 1px 3px 0 #0000003f",
                sm: "0 0 10px 4px #55555511",
                md: "0 15px 20px 0 #4545452b",
                lg: "0 0 13px 5px #00000029",
            },
            fontFamily: {
                inter: "Inter",
                gilroy: "Gilroy",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
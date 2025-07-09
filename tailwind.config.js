/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xxl: { max: "1570px" },
			xl: { max: "1250px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
		fontFamily: {
			sans: ["Gotham"],
			leviMarker: ["LeviMarker"],
			futura: ["Futura LT Book"],
			gilton: ["Gilton"],
		},
	},
	plugins: [],
};

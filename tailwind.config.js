/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./src/**/*.{html,svelte,js}"],
	theme: {
		extend: {
			colors: {
				dirtyWhite: "#EFEFEF",
				darkBlue: "#0584A2",
				lightBlue: "#06AED5",
			},
			fontFamily: {
				oswald: ["Oswald, sans-serif"],
				roboto: "Roboto",
			},
		},
	},
	plugins: [],
};

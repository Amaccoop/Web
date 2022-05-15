const config = {
	mode: "jit",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')

	],
};

module.exports = config;

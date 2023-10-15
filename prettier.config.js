/** @type {import("prettier").Config} */

module.exports = {
	trailingComma: "all",
	tabWidth: 4, // Choose either 4 or 2, but not both
	semi: true,
	endOfLine: "auto",
	useTabs: true,
	singleQuote: true,
	plugins: ["prettier-plugin-tailwindcss"]
};

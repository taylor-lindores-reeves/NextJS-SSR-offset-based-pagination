/**
 * Formats a number into a specified currency with options for decimals and thousand separators.
 *
 * @param {number} amount The amount to format.
 * @param {string} currency The currency code, e.g., 'GBP' for British Pound Sterling.
 * @param {boolean} showDecimals Whether to display decimals. Default is true.
 * @returns {string} The formatted currency string.
 */

export function formatCurrency(
	amount: number,
	currency = 'GBP',
	showDecimals = true,
) {
	const formatter = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: currency,
		useGrouping: true, // Use comma as thousand separator
		minimumFractionDigits: showDecimals ? 2 : 0,
		maximumFractionDigits: showDecimals ? 2 : 0,
	});

	return formatter.format(amount);
}

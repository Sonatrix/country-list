import { currencySymbolMap } from './currency-symbol.js';
/**
 * Retrieves the currency symbol for a given currency code
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency symbol or '?' if not found
 */
export function getSymbolFromCurrency(currencyCode: string): string;
/**
 * Retrieves the currency name for a given currency code
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency name or undefined if not found
 */
export function getNameFromCurrency(currencyCode: string): string;
/**
 * Safely retrieves the currency symbol, returning the code if symbol not found
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency symbol or the code if not found
 */
export function getSafeSymbolFromCurrency(currencyCode: string): string;
/**
 * Safely retrieves the currency name, returning the code if name not found
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency name or the code if not found
 */
export function getSafeNameFromCurrency(currencyCode: string): string;
export { currencySymbolMap };
//# sourceMappingURL=currency-symbol.module.d.ts.map
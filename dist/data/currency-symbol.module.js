/**
 * Module for currency symbols and utility functions
 * This file can be imported directly to benefit from tree-shaking
 * @module currency-symbol
 */

// Import the complete currency symbol mapping
import { currencySymbolMap } from './currency-symbol.js';

/**
 * Retrieves the currency symbol for a given currency code
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency symbol or '?' if not found
 */
function getSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') {
    return undefined;
  }

  const symbol = currencySymbolMap.find(
    (x) => x.code === currencyCode.toUpperCase()
  )?.symbol;

  return symbol || '?';
}

/**
 * Retrieves the currency name for a given currency code
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency name or undefined if not found
 */
function getNameFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') {
    return currencyCode;
  }

  const name = currencySymbolMap.find(
    (x) => x.code === currencyCode.toUpperCase()
  )?.name;
  return name ?? currencyCode;
}

/**
 * Safely retrieves the currency symbol, returning the code if symbol not found
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency symbol or the code if not found
 */
function getSafeSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') {
    return currencyCode;
  }

  const symbol = getSymbolFromCurrency(currencyCode);
  return symbol && symbol !== '?' ? symbol : currencyCode;
}

/**
 * Safely retrieves the currency name, returning the code if name not found
 * @param {string} currencyCode - The ISO currency code (e.g., 'USD')
 * @returns {string} The currency name or the code if not found
 */
function getSafeNameFromCurrency(currencyCode) {
  return getNameFromCurrency(currencyCode) ?? currencyCode;
}

// Individual exports for better tree-shaking
export { currencySymbolMap };
export { getSymbolFromCurrency };
export { getNameFromCurrency };
export { getSafeSymbolFromCurrency };
export { getSafeNameFromCurrency };

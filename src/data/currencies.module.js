/**
 * Module that exports only the currencies data
 * This file can be imported directly to benefit from tree-shaking
 * @module currencies
 */

// Currency data
const currenciesAll = [
  // Data will be copied from currencies.js during build
];

// Create an indexed lookup object
const currencies = {
  all: currenciesAll,
};

// Add lookup by currency code
currenciesAll.forEach((currency) => {
  const { code } = currency;
  if (code) currencies[code] = currency;
});

export default currencies;
export { currenciesAll };

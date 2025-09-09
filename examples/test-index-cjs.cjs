
// Example usage of country-data-list in CommonJS (CJS) environment
// Run: node examples/test-index-cjs.js

const { countries, currencies, lookup } = require('../dist/index.cjs');
const { getSymbolFromCurrency } = require('../dist/data/currency-symbol.module.js');

console.log('First country:', countries.all[0]);
console.log('Currency symbol for USD:', getSymbolFromCurrency('USD'));
console.log('Lookup country by name:', lookup.countries({ name: 'India' }));
console.log('All currencies:', currencies.all.slice(0, 3)); // print first 3
// Note: Adjusted to use 'countries.all' and 'currencies.all' based on the structure in index.js
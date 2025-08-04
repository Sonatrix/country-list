//import { countries, currencies, timezones, } from '../dist/index.js';
//console.log(countries, currencies, timezones);

import { lookup } from '../dist/index.js';

// String-based search (searches across name, alpha2, alpha3, code fields)
const results1 = lookup.countries('united');
console.log('String search for "united":', results1);

// Object-based search (exact match)
const results2 = lookup.countries({ name: 'United States' });
console.log('Object search for exact name:', results2);

// Import only the currency symbol function (smallest bundle size)
import { getSymbolFromCurrency, getNameFromCurrency } from '../dist/data/currency-symbol.js';

// Usage
console.log(getSymbolFromCurrency('USD')); // $
console.log(getNameFromCurrency('USD')); // US Dollar
// Tree-shaking example 1: Import only specific modules
import { countries, getSymbolFromCurrency } from '../src/index.js';

// Example showing how tree-shaking works
// When bundled with a tool like Rollup or webpack,
// only the necessary code for these functions will be included

// This only imports the countries data
console.log(`Number of countries: ${countries.all.length}`);

// This only imports the specific function and currency symbol map
console.log(`USD symbol: ${getSymbolFromCurrency('USD')}`);

// You can also import just the currency functions without the rest of the library
// Importing only currencySymbolMap would result in a much smaller bundle

// Notice that currencies, languages, and other exports are not included
// in the final bundle because they're not imported or used here

// -----------------------------------------------------------------
// Tree-shaking example 2: Direct imports of specific modules
// -----------------------------------------------------------------

// Comment out the above imports and uncomment these for even more targeted imports:
/*
// Direct import of only the currencies module
import { currencies } from '../src/index.js';

// Usage examples
console.log(`Euro name: ${currencies['EUR'].name}`);
console.log(`USD decimals: ${currencies['USD'].decimals}`);
console.log(`Total currencies: ${currencies.all.length}`);

// Only the currencies data will be included in the bundle
*/

// -----------------------------------------------------------------
// Tree-shaking example 3: Subpath imports for minimal bundles
// -----------------------------------------------------------------

/*
// Import only the specific data file you need
// This creates the smallest possible bundle
import countriesData from '../src/data/countries.module.js';
import currenciesData from '../src/data/currencies.module.js';
import languagesData from '../src/data/languages.module.js';
import { getSymbolFromCurrency } from '../src/data/currency-symbol.module.js';

// Examples with selective imports
const findCountry = (code) => countriesData.find(c => c.alpha2 === code || c.alpha3 === code);
const usa = findCountry('US');
console.log(`Country: ${usa.name}, Currency: ${usa.currencies[0]}`);

// Get all languages that start with 'A'
const aLanguages = languagesData.filter(lang => lang.name.startsWith('A'));
console.log(`Languages starting with A: ${aLanguages.map(l => l.name).join(', ')}`);

// Import only the specific currency symbol function
// This is the most efficient way to get just the currency symbol functionality
console.log(`EUR symbol: ${getSymbolFromCurrency('EUR')}`);
*/

// -----------------------------------------------------------------
// Tree-shaking example 4: Individual currency symbol functions
// -----------------------------------------------------------------

/*
// Import ONLY the specific currency symbol function you need
// This creates the absolute smallest possible bundle
import { getSymbolFromCurrency } from '../src/data/currency-symbol.module.js';

// Use just the one function you need
const showCurrencySymbol = (code) => {
  console.log(`${code} symbol: ${getSymbolFromCurrency(code)}`);
};

showCurrencySymbol('USD'); // $ 
showCurrencySymbol('EUR'); // €
showCurrencySymbol('GBP'); // £
showCurrencySymbol('JPY'); // ¥
*/

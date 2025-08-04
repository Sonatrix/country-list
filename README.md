# Country Data List

A comprehensive library providing access to standardized country, currency, and language information.

[![npm version](https://badge.fury.io/js/country-data-list.svg)](https://badge.fury.io/js/country-data-list)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Comprehensive Data**: Access to country names, ISO codes, currencies, languages, timezones, and more
- **Multiple Formats**: ES modules and UMD formats supported for browser and Node.js
- **Type Definitions**: Full TypeScript support with type definitions
- **Tree-Shaking Support**: Import only what you need to keep bundle size small
- **Zero Dependencies**: Lightweight and self-contained
- **Timezone Support**: IANA timezone data for all countries
- **Flexible Search**: String-based and object-based lookup functionality

## Installation

```bash
npm install country-data-list
# or
yarn add country-data-list
```

## Usage

### ES Modules (Recommended)

```javascript
import { countries, currencies, languages, timezones, lookup } from 'country-data-list';

// Get all countries
console.log(countries.all);

// Get a specific country by alpha2 code
console.log(countries['US']);

// Get a specific currency
console.log(currencies['USD']);

// Get timezones for a country
console.log(timezones.getTimezonesByCountry('US'));

// Get all timezones
console.log(timezones.all);

// Search for countries (string-based search)
const results = lookup.countries('united');
console.log(results);

// Search for countries (object-based search)
const exactResults = lookup.countries({ name: 'United States' });
console.log(exactResults);
```

### Browser Usage

```html
<script type="module">
  import { countries, currencies, languages } from 'https://cdn.jsdelivr.net/npm/country-data-list/dist/country-data-list.esm.js';
  
  // Use the library
  console.log(countries.all.length);
</script>
```

### CommonJS (Legacy)

```javascript
const { countries, currencies, languages } = require('country-data-list');

// Get all countries
console.log(countries.all);
```

### Tree-Shaking (Optimized Bundle Size)

Tree-shaking allows you to import only the specific parts you need, resulting in smaller bundle sizes. The library offers multiple ways to optimize your imports:

#### Method 1: Selective Named Imports

```javascript
// Import only the parts you need
import { countries, timezones } from 'country-data-list';
import { currencies } from 'country-data-list';
import { languages } from 'country-data-list';

// Or import specific utility functions
import { getSymbolFromCurrency, getUtcOffset } from 'country-data-list';
```

#### Method 2: Direct Data Module Imports

For even smaller bundles, import the data modules directly:

```javascript
// Most efficient imports for minimal bundle size
import countries from 'country-data-list/data/countries';
import currencies from 'country-data-list/data/currencies';
import languages from 'country-data-list/data/languages';
import timezones from 'country-data-list/data/timezones';
import regions from 'country-data-list/data/regions';
import continents from 'country-data-list/data/continents';
import { getSymbolFromCurrency } from 'country-data-list/data/currency-symbol';
```

#### Method 3: Individual Currency Symbol Functions

For applications that only need currency symbols, you can import just the functions you need:

```javascript
// Import only the currency symbol function (smallest bundle size)
import { getSymbolFromCurrency } from 'country-data-list/data/currency-symbol';

// Or import specific functions as needed
import { 
  getSymbolFromCurrency, 
  getNameFromCurrency 
} from 'country-data-list/data/currency-symbol';

// Usage
console.log(getSymbolFromCurrency('USD')); // $
console.log(getNameFromCurrency('USD')); // US Dollar
```

#### Bundle Size Comparison

| Import Method | Approximate Bundle Size | Data Included |
|---------------|------------------------|---------------|
| `import * from 'country-data-list'` | ~500KB | All data and functions |
| `import { countries } from 'country-data-list'` | ~200KB | Just countries data |
| `import countries from 'country-data-list/data/countries'` | ~150KB | Only countries data module |
| `import { getSymbolFromCurrency } from 'country-data-list'` | ~50KB | Just symbol function and map |
| `import { getSymbolFromCurrency } from 'country-data-list/data/currency-symbol'` | ~15KB | Only the specific function |

The library is designed to be fully tree-shakeable in bundlers that support ES modules like Webpack, Rollup, and esbuild.

#### Verifying Tree-Shaking

You can verify that tree-shaking works by running our test script:

```bash
# Run the tree-shaking test
npm run tree-shaking-test

# Compare the output file size with the full bundle
ls -la dist/tree-shaking-example.js dist/country-data-list.esm.js
```

To analyze your own project's tree-shaking:

```bash
# Using Rollup with visualizer
npx rollup your-file.js -f esm -o bundle.js -p rollup-plugin-visualizer

# Using webpack-bundle-analyzer with webpack
```

For more examples, check out the `examples/tree-shaking.js` file in the repository.

## Available Data

### Countries

The data provided for each country includes:

- `name`: The English name for the country
- `alpha2`: The [ISO 3166-1 alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
- `alpha3`: The [ISO 3166-1 alpha 3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
- `status`: The ISO status of the entry
- `currencies`: An array of [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217)
- `languages`: An array of [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) language codes
- `countryCallingCodes`: International call prefixes
- `ioc`: The [International Olympic Committee country code](http://en.wikipedia.org/wiki/List_of_IOC_country_codes)
- `emoji`: The country's flag emoji

### Currencies

Information about currencies includes:

- `code`: The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code
- `name`: The currency name
- `number`: The ISO 4217 currency number
- `decimals`: The number of decimal digits typically used with this currency
- `symbol`: The currency symbol (where available)

#### Currency Symbol Utilities

The library provides several utility functions for working with currency symbols:

```javascript
import { 
  getSymbolFromCurrency, 
  getNameFromCurrency,
  getSafeSymbolFromCurrency,
  getSafeNameFromCurrency,
  currencySymbolMap 
} from 'country-data-list';

// Get currency symbol
console.log(getSymbolFromCurrency('USD')); // $
console.log(getSymbolFromCurrency('EUR')); // €
console.log(getSymbolFromCurrency('GBP')); // £

// Get currency name
console.log(getNameFromCurrency('USD')); // US Dollar

// Safe versions return the currency code if symbol/name not found
console.log(getSafeSymbolFromCurrency('UNKNOWN')); // UNKNOWN
console.log(getSafeNameFromCurrency('UNKNOWN')); // UNKNOWN

// Access the complete currency symbol map
console.log(currencySymbolMap);
```

### Languages

Language information includes:

- `name`: The language name in English
- `alpha2`: The [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) code (2 character) where available
- `alpha3`: The [ISO 639-2/T](http://en.wikipedia.org/wiki/ISO_639-2) code (3 character) terminology
- `bibliographic`: The [ISO 639-2/B](http://en.wikipedia.org/wiki/ISO_639-2) bibliographic code

### Timezones

Timezone information includes:

- Complete IANA timezone database for all countries
- Functions to get timezones by country code
- Functions to find countries using specific timezones
- UTC offset calculation for any timezone

```javascript
import { timezones } from 'country-data-list';

// Get all available timezones
console.log(timezones.all);

// Get timezones for a specific country
console.log(timezones.getTimezonesByCountry('US'));
// Output: ['America/New_York', 'America/Chicago', 'America/Denver', ...]

// Find countries using a specific timezone
console.log(timezones.getCountriesForTimezone('Europe/London'));
// Output: ['GB']

// Get UTC offset for a timezone
console.log(timezones.getUtcOffset('Europe/London'));
// Output: '+0' or '+1' depending on daylight saving time
```

### Regions and Continents

Access to geographical regional data:

```javascript
import { regions, continents } from 'country-data-list';

// Or import specific modules for tree-shaking
import regionsData from 'country-data-list/data/regions';
import continentsData from 'country-data-list/data/continents';

// Find regions for a country
console.log(regionsData.getRegionsForCountry('US'));
// Output: ['Northern America']

// Get countries in a region
console.log(regionsData.getCountriesInRegion('Western Europe'));
// Output: ['AT', 'BE', 'FR', 'DE', ...]
```

### Lookup

The library includes a flexible lookup tool for finding entries with both string and object queries:

```javascript
import { lookup } from 'country-data-list';

// String-based search (searches across name, alpha2, alpha3, code fields)
const countryResults = lookup.countries('united');
console.log(countryResults); // Finds United States, United Kingdom, etc.

// Object-based search (exact property matching)
const exactResults = lookup.countries({ name: 'United States' });
console.log(exactResults); // Only exact name matches

// Search for currencies
const currencyResults = lookup.currencies('dollar');
console.log(currencyResults); // Finds USD, CAD, AUD, etc.

// Search for languages
const languageResults = lookup.languages('span');
console.log(languageResults); // Finds Spanish and related languages
```

## Contribute

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Country Data List

A comprehensive library providing access to standardized country, currency, and language information.

[![npm version](https://badge.fury.io/js/country-data-list.svg)](https://badge.fury.io/js/country-data-list)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Comprehensive Data**: Access to country names, ISO codes, currencies, languages, and more
- **Multiple Formats**: ES modules and UMD formats supported for browser and Node.js
- **Type Definitions**: Full TypeScript support with type definitions
- **Tree-Shaking Support**: Import only what you need to keep bundle size small
- **Zero Dependencies**: Lightweight and self-contained

## Installation

```bash
npm install country-data-list
# or
yarn add country-data-list
```

## Usage

### ES Modules (Recommended)

```javascript
import { countries, currencies, languages, lookup } from 'country-data-list';

// Get all countries
console.log(countries.all);

// Get a specific country by alpha2 code
console.log(countries['US']);

// Get a specific currency
console.log(currencies['USD']);

// Search for countries
const results = lookup.countries('united');
console.log(results);
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
import { countries } from 'country-data-list';
import { currencies } from 'country-data-list';
import { languages } from 'country-data-list';

// Or import specific utility functions
import { getSymbolFromCurrency } from 'country-data-list';
```

#### Method 2: Direct Data Module Imports

For even smaller bundles, import the data modules directly:

```javascript
// Most efficient imports for minimal bundle size
import countries from 'country-data-list/data/countries';
import currencies from 'country-data-list/data/currencies';
import languages from 'country-data-list/data/languages';
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

### Languages

Language information includes:

- `name`: The language name in English
- `alpha2`: The [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) code (2 character) where available
- `alpha3`: The [ISO 639-2/T](http://en.wikipedia.org/wiki/ISO_639-2) code (3 character) terminology
- `bibliographic`: The [ISO 639-2/B](http://en.wikipedia.org/wiki/ISO_639-2) bibliographic code

### Lookup

The library includes a simple lookup tool for finding entries:

```javascript
import { lookup } from 'country-data-list';

// Search for countries
const countryResults = lookup.countries('united');

// Search for currencies
const currencyResults = lookup.currencies('dollar');

// Search for languages
const languageResults = lookup.languages('span');
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

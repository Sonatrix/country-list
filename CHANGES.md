# Country List - Latest Updates (August 2025)

## New Features
* Added timezone data for all countries with IANA timezone identifiers
* New timezone API with methods for:
  * Getting all timezones for a country
  * Finding countries that use a specific timezone
  * Getting UTC offsets for timezones
* Full TypeScript support for timezone data

## Modern Module Structure
* Improved tree-shaking support for better bundle size optimization
* Direct JSON imports with proper type assertions for better type safety
* Updated all module exports to support ES modules subpath imports
* Streamlined build process for ESM and UMD formats

## Package Optimizations
* Removed redundant JS data files, using JSON sources directly
* Removed unnecessary dependencies (lodash, set-value)
* Fixed Rollup configuration to use proper plugin imports
* Updated all npm packages to latest versions

## Bundle Improvements
* Enhanced browser bundle for better compatibility
* Improved UMD module for direct script tag usage
* Optimized ESM modules for modern applications
* Added dedicated module files for tree-shaking support:
  * countries.module.js
  * currencies.module.js
  * languages.module.js
  * currency-symbol.module.js

## Developer Experience
* Enhanced examples with browser demos
* Better error handling in browser examples
* Improved TypeScript type definitions
* Enhanced documentation and examples

## Previously Added Features
### Currency Symbol Maps
* Removed external dependency for currency-symbol-map. Now we have 4 methods:
  * currencySymbolMap => returns list of currency with name, number, symbol
  * getSymbolFromCurrency
  * getNameFromCurrency
  * getSafeSymbolFromCurrency
  * getSafeNameFromCurrency
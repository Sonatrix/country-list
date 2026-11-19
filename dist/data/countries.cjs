'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Module that exports only the countries data
 * This file can be imported directly to benefit from tree-shaking
 * @module countries
 */

// Country data
const countriesAll = [
  // Data will be copied from countries.js during build
];

// Create an indexed lookup object
const countries = {
  all: countriesAll,
};

// Add lookup by country codes
countriesAll.forEach((country) => {
  const { alpha2, alpha3 } = country;
  if (alpha2) countries[alpha2] = country;
  if (alpha3) countries[alpha3] = country;
});

exports.countriesAll = countriesAll;
exports.default = countries;

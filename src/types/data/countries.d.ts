import type { Country } from '../index.js';

declare const countries: {
  all: Country[];
  [code: string]: Country | Country[];
};

export default countries;
export const countriesAll: Country[];

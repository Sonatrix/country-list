import { assert } from 'chai';

import * as countryData from '../src/index';

const { lookup, countries, currencies, languages } = countryData;

describe('lookup', () => {
  describe('check countries by currency', () => {
    countries.all.forEach((country) => {
      describe(`when country is ${country.name}`, () => {
        country.currencies.forEach((currency) => {
          it(currency, () => {
            assert.include(lookup.countries({ currencies: currency }), country);
          });
        });
      });
    });
  });

  describe('when country name is case sensitive', () => {
    it('should exist', () => {
      assert.strictEqual(lookup.countries({ name: 'FRANCE' }).length, 1);
    });
  });

  describe('check countries by name', () => {
    countries.all.forEach((country) => {
      const { name } = country;
      describe(`when country is ${name}`, () => {
        it(`should be present`, () => {
          if (name) assert.include(lookup.countries({ name }), country);
        });
      });
    });
  });

  describe('check currencies by code', () => {
    currencies.all.forEach((currency) => {
      const { code, name } = currency;
      describe(`when currency is ${name}`, () => {
        it(`should be present`, () => {
          if (code) assert.include(lookup.currencies({ code }), currency);
        });
      });
    });
  });

  describe('check languages by name', () => {
    languages.all.forEach((language) => {
      const { name } = language;
      describe(`when language is ${name}`, () => {
        it(`should be present`, () => {
          if (name) assert.include(lookup.languages({ name }), language);
        });
      });
    });
  });
});

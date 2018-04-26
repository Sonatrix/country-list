import { assert } from 'chai';

import * as countryData from '../src/index';

const { lookup, countries, currencies, languages } = countryData;

describe('lookup', () => {
  describe('check countries by currency', () => {
    countries.all.forEach((country, name) => {
      describe(name.toString(), () => {
        country.currencies.forEach(currency => {
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
    countries.all.forEach((country, name) => {
      describe(name.toString(), () => {
        it(name.toString(), () => {
          if (country.name)
            assert.include(lookup.countries({ name: country.name }), country);
        });
      });
    });
  });

  describe('check currencies by code', () => {
    currencies.all.forEach((currency, name) => {
      describe(name.toString(), () => {
        it(name.toString(), () => {
          if (currency.code)
            assert.include(
              lookup.currencies({ code: currency.code }),
              currency
            );
        });
      });
    });
  });

  describe('check languages by name', () => {
    languages.all.forEach((language, name) => {
      describe(name.toString(), () => {
        it(name.toString(), () => {
          if (language.name)
            assert.include(lookup.languages({ name: language.name }), language);
        });
      });
    });
  });
});

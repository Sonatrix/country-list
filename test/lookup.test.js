import { assert } from 'chai';
import { _ } from 'underscore';

import { lookup, countries, currencies, languages } from '../src/index';

describe('lookup', () => {
  describe('check countries by currency', () => {
    _.each(countries, (country, name) => {
      describe(name, () => {
        _.each(country.currencies, currency => {
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
    _.each(countries, (country, name) => {
      describe(name, () => {
        it(name, () => {
          if (country.name)
            assert.include(lookup.countries({ name: country.name }), country);
        });
      });
    });
  });

  describe('check currencies by code', () => {
    _.each(currencies, (currency, name) => {
      describe(name, () => {
        it(name, () => {
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
    _.each(languages, (language, name) => {
      describe(name, () => {
        it(name, () => {
          if (language.name)
            assert.include(lookup.languages({ name: language.name }), language);
        });
      });
    });
  });
});

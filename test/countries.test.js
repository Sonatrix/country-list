import { assert } from 'chai';

import * as countryData from '../src/index.js';

const { countries: countriesAll, currencies, languages } = countryData;

describe('countries', () => {
  describe('all', () => {
    it('should be array', () => {
      assert(Array.isArray(countriesAll.all));
    });
  });

  describe('alpha2', () => {
    it('should find USA', () => {
      assert.equal(countriesAll.BE.name, 'Belgium');
      assert.equal(countriesAll.US.name, 'United States');
    });
    it('should find USA emoji', () => {
      assert.equal(countriesAll.US.emoji, '🇺🇸');
      assert.equal(countriesAll.USA.emoji, '🇺🇸');
    });
    it('should prefer assigned alpha2 country codes', () => {
      assert.equal(countriesAll.SK.name, 'Slovakia');
      assert.equal(countriesAll.BY.name, 'Belarus');
    });
  });

  describe('alpha3', () => {
    it('should find France', () => {
      assert.equal(countriesAll.FRA.name, 'France');
      assert.deepEqual(countriesAll.FRA.currencies, ['EUR']);
    });
  });

  describe('check each country has correct form', () => {
    countriesAll.all.forEach(({ name, status, alpha2, alpha3 }) => {
      describe(`when country is ${name}`, () => {
        it('should have a status', () => {
          assert(status);
        });
        it('should have correctly formed alpha2 and alpha3', () => {
          assert(
            alpha2.match(/^[A-Z]{2}$/),
            `alpha2 correctly formed - ${alpha2}`
          );
          if (alpha3.length) {
            assert(
              alpha3.match(/^[A-Z]{3}$/),
              `alpha3 correctly formed - ${alpha3}`
            );
          }
        });
      });
    });
  });

  describe('check currencies for each country', () => {
    countriesAll.all.forEach(({ alpha2, currencies: currencyList }) => {
      describe(`when alpha2 code is ${alpha2}`, () => {
        currencyList.forEach((currency) => {
          it(currency, () => {
            assert(currencies[currency]);
          });
        });
      });
    });
  });

  describe('check specific country currencies', () => {
    it('Latvian currency should be EUR', () => {
      assert.deepEqual(countriesAll.LV.currencies, ['EUR']);
    });
  });

  describe('check emoji for a specific country', () => {
    it('Finland emoji should be the flag', () => {
      assert.deepEqual(
        countriesAll.FI.emoji,
        String.fromCharCode(55356, 56811, 55356, 56814)
      );
    });
  });

  describe('check languages for each country', () => {
    countriesAll.all.forEach(({ alpha2, languages: languagesList }) => {
      describe(`when country code is ${alpha2}`, () => {
        languagesList.forEach((language) => {
          it(`should exist`, () => {
            assert(languages[language]);
          });
        });
      });
    });
  });
});

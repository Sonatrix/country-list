import { assert } from 'chai';

import { countries, regions } from '../src/index';

describe('regions', () => {
  describe("check region's countries are known", () => {
    for (const key in regions) {
      describe(key.toString(), () => {
        regions[key].countries.forEach(country => {
          it(country, () => {
            assert(countries[country]);
          });
        });
      });
    }
  });

  describe('check region countries exist', () => {
    let countriesAssigned = [];
    for (const key in regions) {
      const region = regions[key];
      describe(key.toString(), () => {
        if (!region.countries) {
          region[key].countries.forEach(country => {
            countriesAssigned.push(country);
          });
        }
      });
    }

    countriesAssigned = countriesAssigned.sort();
    const duplicate = countriesAssigned.filter((value, index, array) => {
      array.splice(index);
      return array.indexOf(value) !== -1;
    });

    it('are not duplicated', () => {
      assert(duplicate.length === 0);
    });
  });

  describe('check all assigned countries are in regions', () => {
    const countriesAssigned = [];
    const countriesAvailable = [];
    for (const key in regions) {
      regions[key].countries.forEach(country => {
        countriesAssigned.push(country);
      });
    }

    countries.all.forEach(country => {
      if (country.status === 'assigned') {
        countriesAvailable.push(country.alpha2);
      }
    });

    const difference = countriesAvailable.filter(
      data => !countriesAssigned.includes(data)
    );

    it('are all used', () => {
      assert(difference.length === 0);
    });
  });
});

import { assert } from 'chai';
import { _ } from 'underscore';

import { countries, regions } from '../src/index';

describe('regions', () => {
  describe("check region's countries are known", () => {
    regions.forEach((region, name) => {
      describe(name.toString(), () => {
        region.countries.forEach(country => {
          it(country, () => {
            assert(countries[country]);
          });
        });
      });
    });
  });

  describe('check region countries exist', () => {
    let countriesAssigned = [];

    regions.forEach((region, name) => {
      describe(name.toString(), () => {
        if (!region.countries) {
          region[name].countries.forEach(country => {
            countriesAssigned.push(country);
          });
        }
      });
    });
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

    regions.forEach(region => {
      region.countries.forEach(country => {
        countriesAssigned.push(country);
      });
    });

    countries.all.forEach(country => {
      if (country.status === 'assigned') {
        countriesAvailable.push(country.alpha2);
      }
    });

    const difference = _.difference(countriesAvailable, countriesAssigned);

    it('are all used', () => {
      assert(difference.length === 0);
    });
  });
});

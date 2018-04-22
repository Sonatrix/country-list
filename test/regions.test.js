import { assert } from 'chai';
import { _ } from 'underscore';

import { countries, regions } from '../src/index';

describe('regions', () => {
  describe("check region's countries are known", () => {
    _.each(regions, (region, name) => {
      describe(name, () => {
        _.each(region.countries, country => {
          it(country, () => {
            assert(countries[country]);
          });
        });
      });
    });
  });

  describe('check region countries exist', () => {
    let countriesAssigned = [];

    _.each(regions, (region, name) => {
      describe(name, () => {
        if (!region.countries) {
          _.each(region[name].countries, country => {
            countriesAssigned.push(country);
          });
        }
      });
    });
    countriesAssigned = countriesAssigned.sort();
    const duplicate = countriesAssigned.filter((value, index, array) => {
      delete array[index];
      return array.indexOf(value) !== -1;
    });

    it('are not duplicated', () => {
      assert(duplicate.length === 0);
    });
  });

  describe('check all assigned countries are in regions', () => {
    const countriesAssigned = [];
    const countriesAvailable = [];

    _.each(regions, region => {
      _.each(region.countries, country => {
        countriesAssigned.push(country);
      });
    });

    _.each(countries.all, country => {
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

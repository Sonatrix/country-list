import { assert } from 'chai';
import { _ } from 'underscore';

const {
  callingCodes: { all: callingCodes },
  countries: { all: countries },
  callingCountries,
} = require('../src/index');

describe('calling codes', () => {
  describe('list of all calling codes', () => {
    _.each(countries, ({ name, countryCallingCodes }) => {
      if (countryCallingCodes && countryCallingCodes.length) {
        it(`should contain codes for ${name}`, () => {
          assert(
            _.every(
              countryCallingCodes,
              code => callingCodes.indexOf(code) > -1
            )
          );
        });
      }
    });
  });

  describe('callingCountries', () => {
    it('should contain countries with calling codes', () => {
      assert(callingCountries.BE);
    });

    it('should not contain countries without calling codes', () => {
      assert(!callingCountries.CP, 'Clipperton Island');
      assert(!callingCountries[''], 'empty string');
    });
  });
});

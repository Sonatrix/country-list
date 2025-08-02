import { expect } from 'chai';

import * as countryData from '../src/index.js';

const {
  callingCodes,
  countries: { all: countries },
  callingCountries,
} = countryData;

describe('calling codes', () => {
  describe('list of all calling codes', () => {
    countries.forEach(({ name, countryCallingCodes }) => {
      if (countryCallingCodes && countryCallingCodes.length) {
        it(`should contain codes for ${name}`, () => {
          expect(
            countryCallingCodes.every(
              (code) => callingCodes.all.indexOf(code) > -1
            )
          ).to.be.true;
        });
      }
    });
  });

  describe('callingCountries', () => {
    it('should contain countries with calling codes', () => {
      expect(callingCountries.BE).to.exist;
    });

    it('should not contain countries without calling codes', () => {
      expect(callingCountries.CP).to.not.exist; // Clipperton Island
      expect(callingCountries['']).to.not.exist; // empty string
    });
  });
});

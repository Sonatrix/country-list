import { expect } from 'chai';
import { timezones } from '../src/index.js';

describe('Timezones', () => {
  describe('All timezones', () => {
    it('should have an array of all timezones', () => {
      expect(timezones.all).to.be.an('array');
      expect(timezones.all.length).to.be.greaterThan(0);
    });

    it('should have common timezones', () => {
      expect(timezones.all).to.include('Europe/London');
      expect(timezones.all).to.include('America/New_York');
      expect(timezones.all).to.include('Asia/Tokyo');
    });
  });

  describe('Timezones by country', () => {
    it('should have timezone data by country code', () => {
      expect(timezones.byCountry).to.be.an('object');
      expect(Object.keys(timezones.byCountry).length).to.be.greaterThan(0);
    });

    it('should return timezones for specific countries', () => {
      expect(timezones.getTimezonesByCountry('US')).to.be.an('array');
      expect(timezones.getTimezonesByCountry('GB')).to.include('Europe/London');
      expect(timezones.getTimezonesByCountry('JP')).to.include('Asia/Tokyo');
    });

    it('should handle lowercase country codes', () => {
      expect(timezones.getTimezonesByCountry('us')).to.deep.equal(timezones.getTimezonesByCountry('US'));
    });

    it('should return null for invalid country codes', () => {
      expect(timezones.getTimezonesByCountry('XX')).to.be.null;
      expect(timezones.getTimezonesByCountry('')).to.be.null;
    });
  });

  describe('Countries by timezone', () => {
    it('should find countries that use a timezone', () => {
      expect(timezones.getCountriesForTimezone('Europe/London')).to.include('GB');
      expect(timezones.getCountriesForTimezone('America/New_York')).to.include('US');
    });

    it('should return empty array for invalid timezones', () => {
      expect(timezones.getCountriesForTimezone('Not/Real')).to.be.an('array').that.is.empty;
      expect(timezones.getCountriesForTimezone('')).to.be.an('array').that.is.empty;
    });
  });

  describe('UTC offset', () => {
    it('should get UTC offset for a timezone', function() {
      // Skip this test in environments where Intl API might not be fully supported
      if (typeof Intl === 'undefined' || !Intl.DateTimeFormat) {
        this.skip();
      }
      
      const offset = timezones.getUtcOffsetV2('Europe/London');
      expect(offset).to.be.a('string');
      expect(offset).to.match(/^[+-]\d{2}:\d{2}$/);
    });

    it('should return null for invalid timezones', () => {
      expect(timezones.getUtcOffset('Not/Real')).to.be.null;
      expect(timezones.getUtcOffset('')).to.be.null;
    });
  });
});

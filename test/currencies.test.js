import { assert } from 'chai';

import { currencies } from '../src/index';

describe('currencies', () => {
  describe('all', () => {
    it('should be array', () => {
      assert(Array.isArray(currencies.all));
    });
  });

  describe('code', () => {
    it('should find USD', () => {
      assert.equal(currencies.USD.name, 'United States dollar');
    });
  });

  describe('formatting', () => {
    it('decimals should be numbers', () => {
      assert(!Number.isNaN(currencies.USD.decimals));
    });
  });

  describe('symbols', () => {
    it('should find $', () => {
      assert.equal(currencies.USD.symbol, '$');
    });
    it('should find ¥', () => {
      assert.equal(currencies.JPY.symbol, '¥');
    });
    it('should find R', () => {
      assert.equal(currencies.ZAR.symbol, 'R');
    });

    it('should find AED (has no symbol)', () => {
      assert.equal(currencies.AED.symbol, 'د.إ');
    });
  });
});

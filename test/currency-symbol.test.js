import { assert } from 'chai';

import {
  getSymbolFromCurrency,
  currencySymbolMap,
} from '../src/data/currency-symbol';

describe('currency-symbol', () => {
  describe('getSymbolFromCurrency(): valid params', () => {
    it('should return $ when USD is provided', () => {
      assert.equal(getSymbolFromCurrency('USD'), '$');
    });

    it('should return E£ when GBP is provided', () => {
      assert.equal(getSymbolFromCurrency('GBP'), 'E£');
    });

    it('should return € when EUR is provided', () => {
      assert.equal(getSymbolFromCurrency('EUR'), '€');
    });

    it('should return € when eur is provided', () => {
      assert.equal(getSymbolFromCurrency('eur'), '€');
    });

    it('should return undefined when code is non-existent', () => {
      assert.equal(getSymbolFromCurrency('NON-EXISTENT-CODE'), undefined);
    });
  });

  describe('getSymbolFromCurrency(): invalid params', () => {
    it('should return undefined when param is not a string', () => {
      assert.equal(getSymbolFromCurrency(1), undefined);
    });

    it('should return undefined when param is null', () => {
      assert.equal(getSymbolFromCurrency(null), undefined);
    });

    it('should return undefined when param is false', () => {
      assert.equal(getSymbolFromCurrency(false), undefined);
    });

    it('should return undefined when param is undefined', () => {
      assert.equal(getSymbolFromCurrency(), undefined);
    });
  });

  describe('currency-symbol-map: no symbols should be missing', () => {
    currencySymbolMap.forEach(({ symbol, code }) => {
      it(`Symbol of ${code} should be a string`, () => {
        assert.equal(typeof symbol, 'string');
        assert.notEqual(symbol, '');
      });
    });
  });
});

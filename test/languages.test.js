import { expect, assert } from 'chai';

import { languages } from '../src/index.js';

describe('languages', () => {
  describe('all', () => {
    it('should be array', () => {
      expect(languages.all).to.be.an('array');
    });
  });

  describe('alpha2', () => {
    it('should find English and German', () => {
      assert.equal(languages.en.name, 'English');
      assert.equal(languages.de.name, 'German');
    });
  });

  describe('alpha3', () => {
    it('should find English and German', () => {
      assert.equal(languages.eng.name, 'English');
      assert.equal(languages.deu.name, 'German');
      assert.equal(languages.ger.name, 'German');
    });
  });
});

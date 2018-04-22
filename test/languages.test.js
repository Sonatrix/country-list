import { assert } from 'chai';
import { _ } from 'underscore';

import { languages } from '../src/index';

describe('languages', () => {
  describe('all', () => {
    it('should be array', () => {
      assert(_.isArray(languages.all));
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

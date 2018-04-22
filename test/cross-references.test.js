import { assert } from 'chai';
import { _ } from 'underscore';

import countryData from '../src/index';

const assertValidReferences = (
  referenceListName,
  referenceIdKey,
  listName,
  listKey
) => {
  const validIds = _.pluck(countryData[referenceListName].all, referenceIdKey);
  _.each(countryData[listName].all, item => {
    describe(`${listKey} of ${item.name}`, () => {
      it(`should be a valid reference to ${referenceIdKey} of ${referenceListName}`, () => {
        _.each(item[listKey], id => {
          assert(
            _.contains(validIds, id),
            `Expected ${id} in ${listKey} of ${listName} to be a valid entry in ${referenceListName}`
          );
        });
      });
    });
  });
};

describe('cross references', () => {
  assertValidReferences('currencies', 'code', 'countries', 'currencies');
  assertValidReferences('languages', 'alpha3', 'countries', 'languages');
});

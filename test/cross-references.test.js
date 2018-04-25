import { assert } from 'chai';

import * as countryData from '../src/index';

const assertValidReferences = (
  referenceListName,
  referenceIdKey,
  listName,
  listKey
) => {
  const validIds = countryData[referenceListName].all.map(
    data => data[referenceIdKey]
  );
  countryData[listName].all.forEach(item => {
    describe(`${listKey} of ${item.name}`, () => {
      it(`should be a valid reference to ${referenceIdKey} of ${referenceListName}`, () => {
        item[listKey].forEach(id => {
          assert(
            validIds.includes(id),
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

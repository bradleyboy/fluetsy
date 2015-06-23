import Base from '../../lib/api/Base';
import searchable from '../../lib/decorators/searchable';

import assert from 'assert';

@searchable
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Searchable decorator', () => {
  it('searches with keywords', () => {
    const listing = client.keywords('baseball');

    assert(listing.parameters.has('keywords'));
    assert.equal(listing.parameters.get('keywords'), 'baseball');
  });

  it('searches with array of keywords', () => {
    const listing = client.keywords(['merica', 'baseball']);

    assert(listing.parameters.has('keywords'));
    assert.deepEqual(listing.parameters.get('keywords'), ['merica', 'baseball']);
  });

  it('searches with array of keywords (search alias method)', () => {
    const listing = client.search(['merica', 'baseball']);

    assert(listing.parameters.has('keywords'));
    assert.deepEqual(listing.parameters.get('keywords'), ['merica', 'baseball']);
  });

  it('searches with array of keywords added as args', () => {
    const listing = client.search('merica', 'baseball');

    assert(listing.parameters.has('keywords'));
    assert.deepEqual(listing.parameters.get('keywords'), ['merica', 'baseball']);
  });

  it('sets translate keywords', () => {
    const listing = client
      .keywords(['merica', 'baseball'])
      .translateKeywords;

    assert(listing.parameters.has('translate_keywords'));
    assert(listing.parameters.get('translate_keywords'));
  });
})

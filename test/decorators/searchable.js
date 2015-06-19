import Fluetsy from '../../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Searchable decorator', () => {
  it('searches with keywords', () => {
    const listing = client.activeListings.keywords('baseball');

    assert(listing.parameters.has('keywords'));
    assert.equal(listing.parameters.get('keywords'), 'baseball');
  });

  it('searches with array of keywords', () => {
    const listing = client.activeListings.keywords(['merica', 'baseball']);

    assert(listing.parameters.has('keywords'));
    assert.deepEqual(listing.parameters.get('keywords'), ['merica', 'baseball']);
  });

  it('searches with array of keywords (search alias method)', () => {
    const listing = client.activeListings.search(['merica', 'baseball']);

    assert(listing.parameters.has('keywords'));
    assert.deepEqual(listing.parameters.get('keywords'), ['merica', 'baseball']);
  });

  it('searches with array of keywords added as args', () => {
    const listing = client.activeListings.search('merica', 'baseball');

    assert(listing.parameters.has('keywords'));
    assert.deepEqual(listing.parameters.get('keywords'), ['merica', 'baseball']);
  });

  it('sets translate keywords', () => {
    const listing = client
      .activeListings
      .keywords(['merica', 'baseball'])
      .translateKeywords;

    assert(listing.parameters.has('translate_keywords'));
    assert(listing.parameters.get('translate_keywords'));
  });
})

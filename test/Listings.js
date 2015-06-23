import Fluetsy from '../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Listings', () => {
  it('gets active listings', () => {
    const listing = client.listings;
    assert.equal(listing.endpoint, '/listings/active');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });

  it('gets interesting listings', () => {
    const listing = client.listings.interesting;
    assert.equal(listing.endpoint, '/listings/interesting');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });

  it('gets trending listings', () => {
    const listing = client.listings.trending;
    assert.equal(listing.endpoint, '/listings/trending');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });
});

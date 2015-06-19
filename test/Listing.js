import Etsy from '../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Listing', () => {
  it('gets active listings', () => {
    const listing = client.Listings;
    assert.equal(listing.endpoint, '/listings/active');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });

  it('gets interesting listings', () => {
    const listing = client.Listings.interesting;
    assert.equal(listing.endpoint, '/listings/interesting');
  });

  it('gets trending listings', () => {
    const listing = client.Listings.trending;
    assert.equal(listing.endpoint, '/listings/trending');
  });
});

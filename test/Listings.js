import Etsy from '../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Listings', () => {
  it('gets active listings', () => {
    const listing = client.activeListings;
    assert.equal(listing.endpoint, '/listings/active');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });

  it('gets interesting listings', () => {
    const listing = client.interestingListings;
    assert.equal(listing.endpoint, '/listings/interesting');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });

  it('gets trending listings', () => {
    const listing = client.trendingListings;
    assert.equal(listing.endpoint, '/listings/trending');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });
});

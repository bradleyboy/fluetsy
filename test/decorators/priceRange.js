import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Price Range decorator', () => {
  it('sets a min price', () => {
    const listing = client
      .activeListings
      .minPrice(10);

    assert.equal(listing.parameters.get('min_price'), 10);
  });

  it('sets a max price', () => {
    const listing = client
      .activeListings
      .maxPrice(10);

    assert.equal(listing.parameters.get('max_price'), 10);
  });

  it('sets a price range', () => {
    const listing = client
      .activeListings
      .pricedBetween(10, 20);

    assert.equal(listing.parameters.get('min_price'), 10);
    assert.equal(listing.parameters.get('max_price'), 20);
  });
})

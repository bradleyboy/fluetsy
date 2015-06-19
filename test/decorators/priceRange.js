import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Price Range decorator', () => {
  it('sets a min price', () => {
    const listing = client
      .Listings
      .minPrice(10);

    assert.equal(listing.parameters.get('min_price'), 10);
  });

  it('sets a max price', () => {
    const listing = client
      .Listings
      .maxPrice(10);

    assert.equal(listing.parameters.get('max_price'), 10);
  });

  it('sets a price range', () => {
    const listing = client
      .Listings
      .pricedBetween(10, 20);

    assert.equal(listing.parameters.get('min_price'), 10);
    assert.equal(listing.parameters.get('max_price'), 20);
  });
})

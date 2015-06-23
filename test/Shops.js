import Fluetsy from '../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Shops', () => {
  it('gets all shops', () => {
    const listing = client.shops;
    assert.equal(listing.endpoint, '/shops');
    assert.equal(listing.parameters.get('api_key'), '1234');
  });

  it('gets all shops by name', () => {
    const listing = client.shops.search('fred');
    assert.equal(listing.endpoint, '/shops');
    assert.equal(listing.parameters.get('shop_name'), 'fred');
  });

  it('gets a shop by ID', () => {
    const listing = client.shops.find(1);
    assert.equal(listing.endpoint, '/shops/1');
  });

  it("gets a shop's active listings", () => {
    const listing = client.shops.find(1).listings;
    assert.equal(listing.endpoint, '/shops/1/listings/active');
  });

  it("gets a shop's featured listings", () => {
    const listing = client.shops.find(1).listings.featured;
    assert.equal(listing.endpoint, '/shops/1/listings/featured');
  });
});

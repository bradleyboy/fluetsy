import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Category decorator', () => {
  it('filters by category', () => {
    const listing = client.Listings.category('Clothing/Men/Shirts');
    assert.deepEqual(listing.parameters.get('category'), 'Clothing/Men/Shirts');
  });
})

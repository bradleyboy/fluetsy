import Fluetsy from '../../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Category decorator', () => {
  it('filters by category', () => {
    const listing = client.activeListings.category('Clothing/Men/Shirts');
    assert.deepEqual(listing.parameters.get('category'), 'Clothing/Men/Shirts');
  });
})

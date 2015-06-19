import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Tags decorator', () => {
  it('filters by tags', () => {
    const listing = client.Listings.tags(['red', 'white', 'blue']);
    assert.deepEqual(listing.parameters.get('tags'), ['red', 'white', 'blue']);
  });
})

import Fluetsy from '../../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Tags decorator', () => {
  it('filters by tags', () => {
    const listing = client.activeListings.tags(['red', 'white', 'blue']);
    assert.deepEqual(listing.parameters.get('tags'), ['red', 'white', 'blue']);
  });
})

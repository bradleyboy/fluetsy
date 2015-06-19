import Fluetsy from '../../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Paginate decorator', () => {
  it('applies a limit', () => {
    const listing = client.activeListings.limit(4);
    assert.equal(listing.parameters.get('limit'), 4);
  });
})

import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Paginate decorator', () => {
  it('applies a limit', () => {
    const listing = client.Listings.limit(4);
    assert.equal(listing.parameters.get('limit'), 4);
  });
})

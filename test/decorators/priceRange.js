import Base from '../../lib/api/Base';
import priceRange from '../../lib/decorators/priceRange';

import assert from 'assert';

@priceRange
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Price Range decorator', () => {
  it('sets a min price', () => {
    const listing = client
      .minPrice(10);

    assert.equal(listing.parameters.get('min_price'), 10);
  });

  it('sets a max price', () => {
    const listing = client
      .maxPrice(10);

    assert.equal(listing.parameters.get('max_price'), 10);
  });

  it('sets a price range', () => {
    const listing = client
      .pricedBetween(10, 20);

    assert.equal(listing.parameters.get('min_price'), 10);
    assert.equal(listing.parameters.get('max_price'), 20);
  });
})

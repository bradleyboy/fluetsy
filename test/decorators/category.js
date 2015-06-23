import Base from '../../lib/api/Base';
import category from '../../lib/decorators/category';

import assert from 'assert';

@category
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Category decorator', () => {
  it('filters by category', () => {
    const listing = client.category('Clothing/Men/Shirts');
    assert.deepEqual(listing.parameters.get('category'), 'Clothing/Men/Shirts');
  });
})

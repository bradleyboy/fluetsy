import Base from '../../lib/api/Base';
import paginate from '../../lib/decorators/paginate';

import assert from 'assert';

@paginate
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Paginate decorator', () => {
  it('applies a limit', () => {
    const listing = client.limit(4);
    assert.equal(listing.parameters.get('limit'), 4);
  });
})

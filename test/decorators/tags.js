import Base from '../../lib/api/Base';
import tags from '../../lib/decorators/tags';

import assert from 'assert';

@tags
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Tags decorator', () => {
  it('filters by tags', () => {
    const listing = client.tags(['red', 'white', 'blue']);
    assert.deepEqual(listing.parameters.get('tags'), ['red', 'white', 'blue']);
  });
})

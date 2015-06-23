import Base from '../../lib/api/Base';
import sortable from '../../lib/decorators/sortable';

import assert from 'assert';

@sortable('price')
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Sortable decorator', () => {
  it('is sortable', () => {
    const listing = client
      .sortBy('price');

    assert.equal(listing.parameters.get('sort_on'), 'price');
  });

  it('is sortable by direction', () => {
    const listing = client
      .sortBy('price')
      .sortOrder('down');

    assert.equal(listing.parameters.get('sort_order'), 'down');
  });

  it('is sortable with shorthand', () => {
    const listing = client
      .sort('price', 'down');

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'down');
  });

  it('is sortable with .ascending', () => {
    const listing = client
      .sortBy('price')
      .ascending;

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'up');
  });

  it('is sortable with .descending', () => {
    const listing = client
      .sortBy('price')
      .descending;

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'down');
  });
})

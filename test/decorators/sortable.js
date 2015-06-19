import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Sortable decorator', () => {
  it('is sortable', () => {
    const listing = client
      .activeListings
      .sortBy('price');

    assert.equal(listing.parameters.get('sort_on'), 'price');
  });

  it('is sortable by direction', () => {
    const listing = client
      .activeListings
      .sortBy('price')
      .sortOrder('down');

    assert.equal(listing.parameters.get('sort_order'), 'down');
  });

  it('is sortable with shorthand', () => {
    const listing = client
      .activeListings
      .sort('price', 'down');

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'down');
  });

  it('is sortable with .ascending', () => {
    const listing = client
      .activeListings
      .sortBy('price')
      .ascending;

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'up');
  });

  it('is sortable with .descending', () => {
    const listing = client
      .activeListings
      .sortBy('price')
      .descending;

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'down');
  });
})

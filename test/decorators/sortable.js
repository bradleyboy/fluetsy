import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Sortable decorator', () => {
  it('is sortable', () => {
    const listing = client
      .Listings
      .sortBy('price');

    assert.equal(listing.parameters.get('sort_on'), 'price');
  });

  it('is sortable by direction', () => {
    const listing = client
      .Listings
      .sortBy('price')
      .sortOrder('down');

    assert.equal(listing.parameters.get('sort_order'), 'down');
  });

  it('is sortable with shorthand', () => {
    const listing = client
      .Listings
      .sort('price', 'down');

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'down');
  });

  it('is sortable with .ascending', () => {
    const listing = client
      .Listings
      .sortBy('price')
      .ascending;

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'up');
  });

  it('is sortable with .descending', () => {
    const listing = client
      .Listings
      .sortBy('price')
      .descending;

    assert.equal(listing.parameters.get('sort_on'), 'price');
    assert.equal(listing.parameters.get('sort_order'), 'down');
  });
})

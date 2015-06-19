import Fluetsy from '../../lib';
import assert from 'assert';

const client = new Fluetsy('1234');

describe('Color Filter decorator', () => {
  it('searches by HSV color', () => {
    const listing = client.activeListings.matchingColor(100, 101, 102);

    assert.equal(listing.parameters.get('color'), '100,101,102');
  });

  it('searches by HSV color with tolerance', () => {
    const listing = client.activeListings.matchingColor(100, 101, 102, 5);

    assert.equal(listing.parameters.get('color'), '100,101,102');
    assert.equal(listing.parameters.get('color_accuracy'), 5);
  });

  it('searches by RGB color', () => {
    const listing = client.activeListings.matchingColor('b80000');

    assert.equal(listing.parameters.get('color'), 'b80000');
  });

  it('searches by RGB color with tolerance', () => {
    const listing = client.activeListings.matchingColor('b80000', 5);

    assert.equal(listing.parameters.get('color'), 'b80000');
    assert.equal(listing.parameters.get('color_accuracy'), 5);
  });
})

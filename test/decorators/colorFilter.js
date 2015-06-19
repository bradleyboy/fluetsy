import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Color Filter decorator', () => {
  it('searches by HSV color', () => {
    const listing = client.Listings.matchingColor(100, 101, 102);

    assert.equal(listing.parameters.get('color'), '100,101,102');
  });

  it('searches by HSV color with tolerance', () => {
    const listing = client.Listings.matchingColor(100, 101, 102, 5);

    assert.equal(listing.parameters.get('color'), '100,101,102');
    assert.equal(listing.parameters.get('color_accuracy'), 5);
  });

  it('searches by RGB color', () => {
    const listing = client.Listings.matchingColor('b80000');

    assert.equal(listing.parameters.get('color'), 'b80000');
  });

  it('searches by RGB color with tolerance', () => {
    const listing = client.Listings.matchingColor('b80000', 5);

    assert.equal(listing.parameters.get('color'), 'b80000');
    assert.equal(listing.parameters.get('color_accuracy'), 5);
  });
})

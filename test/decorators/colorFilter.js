import Base from '../../lib/api/Base';
import colorFilter from '../../lib/decorators/colorFilter';

import assert from 'assert';

@colorFilter
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Color Filter decorator', () => {
  it('searches by HSV color', () => {
    const listing = client.matchingColor(100, 101, 102);

    assert.equal(listing.parameters.get('color'), '100,101,102');
  });

  it('searches by HSV color with tolerance', () => {
    const listing = client.matchingColor(100, 101, 102, 5);

    assert.equal(listing.parameters.get('color'), '100,101,102');
    assert.equal(listing.parameters.get('color_accuracy'), 5);
  });

  it('searches by RGB color', () => {
    const listing = client.matchingColor('b80000');

    assert.equal(listing.parameters.get('color'), 'b80000');
  });

  it('searches by RGB color with tolerance', () => {
    const listing = client.matchingColor('b80000', 5);

    assert.equal(listing.parameters.get('color'), 'b80000');
    assert.equal(listing.parameters.get('color_accuracy'), 5);
  });
})

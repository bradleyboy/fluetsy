import Base from '../../lib/api/Base';
import location from '../../lib/decorators/location';

import assert from 'assert';

@location('location', 'latlon', 'region', 'geolevel', 'distance')
class Dummy extends Base {
  endpoint = '/dummy';
}

const client = new Dummy('1234');

describe('Location decorator', () => {
  it('applies a location', () => {
    const listing = client.location('Atlanta');
    assert.equal(listing.parameters.get('location'), 'Atlanta');
  });

  it('applies lat/lon', () => {
    const listing = client.location(33.7550, 84.3900);
    assert.equal(listing.parameters.get('lat'), 33.7550);
    assert.equal(listing.parameters.get('lon'), 84.3900);
  });

  it('scopes to a region', () => {
    const listing = client.region('US');
    assert.equal(listing.parameters.get('region'), 'US');
  });

  it('sets the geo level', () => {
    const listing = client.location('Brooklyn').geoLevel('state');
    assert.equal(listing.parameters.get('geo_level'), 'state');
  });

  it('sets the max distance', () => {
    const listing = client.location(33.7550, 84.3900).distance(40);
    assert.equal(listing.parameters.get('lat'), 33.7550);
    assert.equal(listing.parameters.get('lon'), 84.3900);
    assert.equal(listing.parameters.get('distance_max'), 40);
  });
})

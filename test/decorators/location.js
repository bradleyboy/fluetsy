import Etsy from '../../lib/Etsy';
import assert from 'assert';

const client = new Etsy('1234');

describe('Location decorator', () => {
  it('applies a location', () => {
    const listing = client.Listings.location('Atlanta');
    assert.equal(listing.parameters.get('location'), 'Atlanta');
  });

  it('applies lat/lon', () => {
    const listing = client.Listings.location(33.7550, 84.3900);
    assert.equal(listing.parameters.get('lat'), 33.7550);
    assert.equal(listing.parameters.get('lon'), 84.3900);
  });

  it('scopes to a region', () => {
    const listing = client.Listings.region('US');
    assert.equal(listing.parameters.get('region'), 'US');
  });

  it('sets the geo level', () => {
    const listing = client.Listings.location('Brooklyn').geoLevel('state');
    assert.equal(listing.parameters.get('geo_level'), 'state');
  });
})

import Base from '../lib/api/Base';
import assert from 'assert';

class Dummy extends Base {
  endpoint = '/dummy';
}

const base = new Dummy({apiKey: '1234'});

describe('Base', () => {
  it('constructs with API key', () => {
    assert.equal(base.parameters.get('api_key'), '1234');
    assert.equal(base.config.apiKey, '1234');
  });

  it('has an endpoint', () => {
    assert.equal(base.endpoint, '/dummy');
  });

  it('constructs as simple URL', () => {
    assert.equal(base.url, 'https://openapi.etsy.com/v2/dummy.json?api_key=1234');
  });

  it('constructs as simple URL with parameters', () => {
    base.parameters.set('foo', 'bar');
    assert.equal(base.url, 'https://openapi.etsy.com/v2/dummy.json?api_key=1234&foo=bar');
  });

  it('constructs a URL with associations', () => {
    base.parameters.set('foo', 'bar');
    base.with('Images', 'Users')
    assert.equal(base.url, 'https://openapi.etsy.com/v2/dummy.json?api_key=1234&foo=bar&includes=Images,Users');
  });
});

import fetch from 'node-fetch';
import jsonp from 'jsonp-promise';

const baseURL = 'https://openapi.etsy.com/v2';
const browser = typeof window !== 'undefined';

class Base {
  constructor(apiKey) {
    this.parameters = new Map([['api_key', apiKey]]);
    this.apiKey = apiKey;
  }

  get url() {
    const pairs = [];

    for (let [key, value] of this.parameters) {
      pairs.push(`${key}=${value}`);
    }

    return `${baseURL}${this.endpoint}.${browser ? 'js' : 'json'}?${pairs.join('&')}`;
  }

  fetch() {
    if (browser) {
      return jsonp(this.url).promise;
    }

    return fetch(this.url)
      .then(res => res.json());
  }

  with(...associations) {
    this.parameters.set('includes', associations);

    return this;
  }
}

export default Base;

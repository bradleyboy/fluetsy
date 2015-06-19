import fetch from 'node-fetch';

const baseURL = 'https://openapi.etsy.com/v2';

class Base {
  constructor(apiKey) {
    this.parameters = new Map([['api_key', apiKey]]);
  }

  get url() {
    const pairs = [];

    for (let [key, value] of this.parameters) {
      pairs.push(`${key}=${value}`);
    }

    return `${baseURL}${this.endpoint}.json?${pairs.join('&')}`;
  }

  fetch() {
    return fetch(this.url)
      .then(res => res.json());
  }

  with(associations) {
    this.parameters.set('includes', associations);

    return this;
  }
}

export default Base;

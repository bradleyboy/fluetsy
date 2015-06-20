const baseURL = 'https://openapi.etsy.com/v2';

class Base {
  constructor(config) {
    this.parameters = new Map([['api_key', config.apiKey]]);
    this.config = config;
  }

  get url() {
    const pairs = [];

    for (let [key, value] of this.parameters) {
      pairs.push(`${key}=${value}`);
    }

    return `${baseURL}${this.endpoint}.json?${pairs.join('&')}`;
  }

  fetch() {
    return this.config.fetch(this.url);
  }

  with(...associations) {
    this.parameters.set('includes', associations);

    return this;
  }
}

export default Base;

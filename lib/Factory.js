import { Listings } from './api/Listings';
import { Shops } from './api/Shops';

export default function(fetch) {
  return class {
    constructor(apiKey) {
      this.config = {
        fetch,
        apiKey,
      };
    }

    get listings() {
      return new Listings(this.config);
    }

    get shops() {
      return new Shops(this.config);
    }
  };
}

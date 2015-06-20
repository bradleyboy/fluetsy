import {
  ActiveListings,
  TrendingListings,
  InterestingListings,
} from './api/Listings';

import { Shops } from './api/Shops';

export default function(fetch) {
  return class {
    constructor(apiKey) {
      this.config = {
        fetch,
        apiKey,
      };
    }

    get activeListings() {
      return new ActiveListings(this.config);
    }

    get trendingListings() {
      return new TrendingListings(this.config);
    }

    get interestingListings() {
      return new InterestingListings(this.config);
    }

    get shops() {
      return new Shops(this.config);
    }
  };
}

import {
  ActiveListings,
  TrendingListings,
  InterestingListings
} from './api/Listings';

import { Shops } from './api/Shops';

export default class Fluetsy {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  get activeListings() {
    return new ActiveListings(this.apiKey);
  }

  get trendingListings() {
    return new TrendingListings(this.apiKey);
  }

  get interestingListings() {
    return new InterestingListings(this.apiKey);
  }

  get shops() {
    return new Shops(this.apiKey);
  }
}

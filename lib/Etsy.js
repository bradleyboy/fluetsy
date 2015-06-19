import {
  ActiveListings,
  TrendingListings,
  InterestingListings
} from './api/Listings';

import { Shops, Shop } from './api/Shops';

class Etsy {
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

  shop(id) {
    return new Shop(id, this.apiKey);
  }
}

export default Etsy;

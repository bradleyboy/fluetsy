import {
  ActiveListings,
  TrendingListings,
  InterestingListings
} from './api/Listings';

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
}

export default Etsy;

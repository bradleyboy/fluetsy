import Listing from './api/Listing';

class Etsy {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  get Listings() {
    return new Listing(this.apiKey);
  }
}

export default Etsy;

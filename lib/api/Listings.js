import Base from './Base';

import {
  category,
  colorFilter,
  location,
  paginated,
  priceRange,
  searchable,
  sortable,
  tags,
} from '../decorators';

@category
@colorFilter
@location('location', 'latlon', 'region', 'geolevel')
@paginated
@priceRange
@searchable
@sortable('created', 'price', 'score')
@tags
export class Listings extends Base {
  endpoint = '/listings/active';

  get trending() {
    return new TrendingListings(this.config);
  }

  get interesting() {
    return new InterestingListings(this.config);
  }
}

@paginated
class TrendingListings extends Base {
  endpoint = '/listings/trending';
}

@paginated
class InterestingListings extends Base {
  endpoint = '/listings/interesting';
}



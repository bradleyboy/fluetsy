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
export class ActiveListings extends Base {
  endpoint = '/listings/active';
}

@paginated
export class TrendingListings extends Base {
  endpoint = '/listings/trending';
}

@paginated
export class InterestingListings extends Base {
  endpoint = '/listings/interesting';
}



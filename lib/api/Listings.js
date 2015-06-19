import Base from './Base';

import {
  Category,
  ColorFilter,
  Location,
  Paginated,
  PriceRange,
  Searchable,
  Sortable,
  Tags,
} from '../decorators';

@Category
@ColorFilter
@Location
@Paginated
@PriceRange
@Searchable
@Sortable(['created', 'price', 'score'])
@Tags
export class ActiveListings extends Base {
  endpoint = '/listings/active';
}

@Paginated
export class TrendingListings extends Base {
  endpoint = '/listings/trending';
}

@Paginated
export class InterestingListings extends Base {
  endpoint = '/listings/interesting';
}



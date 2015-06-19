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
class Listing extends Base {
  constructor(apiKey) {
    super(apiKey);

    this.endpoint = '/listings/active';
  }

  get interesting() {
    this.endpoint = '/listings/interesting';

    return this;
  }

  get trending() {
    this.endpoint = '/listings/trending';

    return this;
  }
}

export default Listing;

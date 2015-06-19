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

@Paginated
@Location('latlon', 'distance')
export class Shops extends Base {
  endpoint = '/shops'

  search(name) {
    this.parameters.set('shop_name', name);

    return this;
  }

  find(id) {
    return new Shop(id, this.apiKey);
  }
}

@Category
@ColorFilter
@Paginated
@PriceRange
@Searchable
@Sortable(['created', 'price', 'score'])
@Tags
class ActiveShopListings extends Base {
  constructor(id, apiKey) {
    super(apiKey);

    this.endpoint = `/shops/${id}/listings/active`;
  }
}

@Paginated
class FeaturedShopListings extends Base {
  constructor(id, apiKey) {
    super(apiKey);

    this.endpoint = `/shops/${id}/listings/featured`;
  }
}

class Shop extends Base {
  constructor(id, apiKey) {
    super(apiKey);

    this.endpoint = `/shops/${id}`;
    this.id = id;
  }

  get activeListings() {
    return new ActiveShopListings(this.id, this.apiKey);
  }

  get featuredListings() {
    return new FeaturedShopListings(this.id, this.apiKey);
  }
}

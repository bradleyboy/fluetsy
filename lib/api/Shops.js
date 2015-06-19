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
@paginated
@priceRange
@searchable
@sortable(['created', 'price', 'score'])
@tags
class ActiveShopListings extends Base {
  constructor(id, apiKey) {
    super(apiKey);

    this.endpoint = `/shops/${id}/listings/active`;
  }
}

@paginated
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

@paginated
@location('latlon', 'distance')
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

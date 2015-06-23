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
@sortable('created', 'price', 'score')
@tags
class ShopListings extends Base {
  constructor(id, config) {
    super(config);

    this.id = id;
    this.endpoint = `/shops/${id}/listings/active`;
  }

  get featured() {
    return new FeaturedShopListings(this.id, this.config);
  }
}

@paginated
class FeaturedShopListings extends Base {
  constructor(id, config) {
    super(config);

    this.endpoint = `/shops/${id}/listings/featured`;
  }
}

class Shop extends Base {
  constructor(id, config) {
    super(config);

    this.endpoint = `/shops/${id}`;
    this.id = id;
  }

  get listings() {
    return new ShopListings(this.id, this.config);
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
    return new Shop(id, this.config);
  }
}

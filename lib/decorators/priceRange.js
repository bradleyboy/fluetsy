import assign from 'object-assign';

export default function(target) {
  assign(target.prototype, {
    maxPrice(n) {
      this.parameters.set('max_price', n);

      return this;
    },

    minPrice(n) {
      this.parameters.set('min_price', n);

      return this;
    },

    pricedBetween(min, max) {
      return this.minPrice(min).maxPrice(max);
    },
  });
}

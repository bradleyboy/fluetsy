import assign from 'object-assign';

export default function(target) {
  assign(target.prototype, {
    limit(n) {
      this.parameters.set('limit', n);

      return this;
    },

    page(n) {
      this.parameters.set('page', n);

      return this;
    },

    offset(n) {
      this.parameters.set('offset', n);

      return this;
    },
  });
}

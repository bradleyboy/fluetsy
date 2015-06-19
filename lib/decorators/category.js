import assign from 'object-assign';

export default function(target) {
  assign(target.prototype, {
    category(category) {
      this.parameters.set('category', category);

      return this;
    },
  });
}

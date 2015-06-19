export default function(target) {
  Object.assign(target.prototype, {
    category(category) {
      this.parameters.set('category', category);

      return this;
    },
  });
}

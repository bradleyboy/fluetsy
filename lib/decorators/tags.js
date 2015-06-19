export default function(target) {
  Object.assign(target.prototype, {
    tags(tags) {
      this.parameters.set('tags', tags);

      return this;
    },
  });
}

import assign from 'object-assign';

export default function(target) {
  assign(target.prototype, {
    tags(tags) {
      this.parameters.set('tags', tags);

      return this;
    },
  });
}

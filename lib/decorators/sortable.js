const Sortable = (columns) => {
  return (target) => {
    return class extends target {
      sortBy(column) {
        if (columns.indexOf(column) === -1) {
          throw new Error('Invalid column');
        }

        this.parameters.set('sort_on', column);

        return this;
      }

      sortOrder(direction) {
        this.parameters.set('sort_order', direction);

        return this;
      }

      sort(column, direction = false) {
        this.sortBy(column);

        if (direction) {
          this.sortOrder(direction);
        }

        return this;
      }

      get descending() {
        this.sortOrder('down');

        return this;
      }

      get ascending() {
        this.sortOrder('up');

        return this;
      }
    }
  }
};

export default Sortable;

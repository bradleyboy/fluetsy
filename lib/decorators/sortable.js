const ORDER_UP = 'up';
const ORDER_DOWN = 'down';

export default function(...columns) {
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
        this.sortOrder(ORDER_DOWN);

        return this;
      }

      get ascending() {
        this.sortOrder(ORDER_UP);

        return this;
      }
    };
  };
}

const Category = (target) => {
  Object.assign(target.prototype, {
    category(category) {
      this.parameters.set('category', category);

      return this;
    }
  });
};

export default Category;

const Searchable = (target) => {
  return class extends target {
    keywords(string) {
      this.parameters.set('keywords', string);

      return this;
    }

    get translateKeywords() {
      this.parameters.set('translate_keywords', true);

      return this;
    }
  }
};

export default Searchable;

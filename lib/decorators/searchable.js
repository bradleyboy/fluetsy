const Searchable = (target) => {
  return class extends target {
    search(...keywords) {
      return this.keywords(...keywords);
    }

    keywords(...keywords) {
      if (keywords.length === 1) {
        keywords = keywords.shift();
      }

      this.parameters.set('keywords', keywords);

      return this;
    }

    get translateKeywords() {
      this.parameters.set('translate_keywords', true);

      return this;
    }
  }
};

export default Searchable;

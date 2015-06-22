export default function(target) {
  return class extends target {
    search(...keywords) {
      return this.keywords(...keywords);
    }

    keywords(...keywords) {
      this.parameters.set('keywords', keywords.length === 1 ? keywords.shift() : keywords);

      return this;
    }

    get translateKeywords() {
      this.parameters.set('translate_keywords', true);

      return this;
    }
  };
}

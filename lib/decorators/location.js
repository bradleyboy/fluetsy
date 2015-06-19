const Location = (target) => {
  Object.assign(target.prototype, {
    location(...args) {
      if (args.length === 1) {
        this.parameters.set('location', args[0]);
      } else {
        const [lat, lon] = args;

        this.parameters.set('lat', lat);
        this.parameters.set('lon', lon);
      }

      return this;
    },

    region(region) {
      this.parameters.set('region', region);

      return this;
    },

    geoLevel(level) {
      this.parameters.set('geo_level', level);

      return this;
    }
  });
};

export default Location;

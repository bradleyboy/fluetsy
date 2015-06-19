import assign from 'object-assign';

export default function(...methods) {
  const supports = (method) => {
    return methods.indexOf(method) !== -1;
  };

  return (target) => {
    assign(target.prototype, {
      location(...args) {
        if (args.length === 1) {
          if (!supports('location')) {
            throw new Error('location is not supported for this endpoint');
          }

          this.parameters.set('location', args[0]);
        } else {
          if (!supports('latlon')) {
            throw new Error('lat/lon is not supported for this endpoint');
          }

          const [lat, lon] = args;

          this.parameters.set('lat', lat);
          this.parameters.set('lon', lon);
        }

        return this;
      },

      region(region) {
        if (!supports('region')) {
          throw new Error('region is not supported for this endpoint');
        }

        this.parameters.set('region', region);

        return this;
      },

      distance(miles) {
        if (!supports('distance')) {
          throw new Error('distance is not supported for this endpoint');
        }

        this.parameters.set('distance_max', miles);

        return this;
      },

      geoLevel(level) {
        if (!supports('geolevel')) {
          throw new Error('geo_level is not supported for this endpoint');
        }

        this.parameters.set('geo_level', level);

        return this;
      },
    });
  };
}

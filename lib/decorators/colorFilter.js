export default function(target) {
  Object.assign(target.prototype, {
    _setTriplet(triplet, tolerance) {
      this.parameters.set('color', triplet);

      if (tolerance) {
        this.parameters.set('color_accuracy', tolerance);
      }

      return this;
    },

    matchingColor(...args) {
      if (args.length < 3) {
        const [hex, tolerance = 0] = args;
        return this._setTriplet(hex, tolerance);
      }

      const [hue, saturation, value, tolerance = 0] = args;
      return this._setTriplet(`${hue},${saturation},${value}`, tolerance);
    },
  });
}

// For Map support
// TODO: Find just a Map polyfill?
require('babel/polyfill');

import factory from './Factory';
import jsonp from 'jsonp-promise';

const fetch = (url) => jsonp(url.replace(/\.json\?/, '.js?')).promise;

export default factory(fetch);

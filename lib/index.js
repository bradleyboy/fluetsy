// For Map support
// TODO: Find just a Map polyfill?
require("babel/polyfill");

import Factory from './Factory';
import jsonp from 'jsonp-promise';

const fetch = (url) => jsonp(url.replace(/\.json\?/, '.js?')).promise;

export default Factory(fetch);

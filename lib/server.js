import factory from './dist/factory';
import fetch from 'node-fetch';

const fetcher = (url) => fetch(url).then(res => res.json());

export default factory(fetcher);

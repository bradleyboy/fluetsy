import Factory from './dist/Factory';
import fetch from 'node-fetch';

const fetcher = (url) => fetch(url).then(res => res.json());

export default Factory(fetcher);

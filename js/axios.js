
import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer, retryAdapterEnhancer, Cache } from 'axios-extensions';

const http = axios.create({
	baseURL: 'https://www.clerk.tools',
	headers: { 'Cache-Control': 'no-cache' },
	// disable the default cache
	adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false })
});

http.get('/users', { cache: true }); // make the request cacheable(real http request made due to first request invoke)

// define a cache manually
const cacheA = new Cache();
// or a cache-like instance
const cacheB = { get() {/*...*/}, set() {/*...*/}, del() {/*...*/} };

// two actual request will be made due to the different cache 
http.get('/users', { cache: cacheA });
http.get('/users', { cache: cacheB });

// a actual request made and cached due to force update configured
http.get('/users', { cache: cacheA, forceUpdate: true });
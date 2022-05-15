import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: 'index.html',
			precompress: true
		}),
		browser: {
			hydrate: true,
		}
	},

	// SSR
	ssr: false,

	preprocess: [
		preprocess({
			postcss: true,
			scss: true
		}),
	],
};

export default config;

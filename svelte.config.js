// import adapter from '@sveltejs/adapter-auto';
import adapter from 'svelte-adapter-github';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

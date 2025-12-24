/** @type {import('@sveltejs/kit').Config} 

import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/SayHerName' : ''
    },
    appDir: 'internal',
  }
};

export default config; */
/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
  // Enables preprocessing for TS, SCSS, etc.
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html',
      pages: 'build',
      assets: 'build'
    }),

    paths: {
      base: ''
    },

    appDir: 'internal',

    prerender: {
      handleHttpError: 'warn'
    },

    
  }
};

export default config;

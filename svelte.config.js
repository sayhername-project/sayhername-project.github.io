 @type {imdwqdport('@sveltejs/kit').Config}

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

export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess({
      style: true, // default value
      script: false, // default value
    }),
  ],
  kit: {
    prerender: {
      handleHttpError: () => {
        return;
      },
    },
    adapter: adapter(), // default options are shown. On some platforms
    paths: {
      // @ts-ignore
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;

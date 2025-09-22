import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9000',
    // Has to be wide enough for some responsive elements which only render on desktop screens
    // to render.
    viewportWidth: 1200,
  },
});

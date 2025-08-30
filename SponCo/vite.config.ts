import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WebConfig from 'vite-plugin-web-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  react(),
	  WebConfig({
		  proxy: [['api', 'http://localhost:3000']],
		  output: 'web.config',
	  }),
  ],
	build: {
		outDir: "docs"
	},
	base: './'
});

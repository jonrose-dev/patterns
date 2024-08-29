import { defineConfig } from 'vite'
import svgrPlugin from "vite-plugin-svgr";
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	base: '/',
	server: {
		port: 3000,
		open: true,
		host: true,
	  },
	plugins: [react(), svgrPlugin({ include: "**/*.svg", })]
})

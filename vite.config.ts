import { defineConfig } from 'vite'
import svgrPlugin from "vite-plugin-svgr";
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	base: '/',
	plugins: [react(), svgrPlugin({ include: "**/*.svg", })]
})

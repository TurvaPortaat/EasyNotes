import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
//import { enchancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
//		enchancedImages(),
		sveltekit()
			],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

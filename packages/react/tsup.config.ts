import { defineConfig } from 'tsup';

export default [
    defineConfig({
        entry: ['src/index.ts'],
        format: ['esm', 'cjs'],
        clean: true,
        minify: true,
        sourcemap: true,
        external: ['react', 'react-dom'],
        banner: { js: '"use client";' },
    }),

    // TYPES
    defineConfig({
        entry: ['src/**/index.ts'],
        clean: true,
        dts: { only: true },
        outDir: 'dist/types',
        external: ['react', 'react-dom'],
        bundle: false,
    }),
];

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/universal-remote-card.min.js',
    format: 'es',
    sourcemap: false,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationMap: false,
      sourceMap: false,
    }),
    terser({
      format: {
        comments: false,
      },
      compress: {
        drop_console: false,
        pure_getters: true,
        unsafe: false,
        passes: 2,
      },
      mangle: true,
    }),
  ],
  external: [],
  onwarn(warning, warn) {
    // Suppress circular dependency warnings from lit
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
};

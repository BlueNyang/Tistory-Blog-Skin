import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/scripts/common.ts',
  output: {
    dir: 'dist/images',
    format: 'iife',
    sourcemap: false,
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
}
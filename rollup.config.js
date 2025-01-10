import { nodeResolve } from '@rollup/plugin-node-resolve';
import { wasm } from '@rollup/plugin-wasm';

export default {
  input: 'src/main.js',
  output: {
    dir: 'output',
    format: 'esm'
  },
  plugins: [nodeResolve(), wasm()]
}

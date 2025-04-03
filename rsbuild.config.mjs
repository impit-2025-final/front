import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import TanStackRouterRspack from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
    ],
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
      
    },
  },
});

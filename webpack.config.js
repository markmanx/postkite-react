const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: path.resolve(__dirname, '/src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'postkite.js',
    library: {
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          loader: 'ts',
          target: 'es2015',
        },
      },
      {
        test: /\.tsx$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
    ],
  },
}

const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: path.resolve(__dirname, '/src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'postkite.js',
    library: {
      type: 'commonjs2',
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

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const isEnvProduction = mode === 'production';
// const isEnvDevelopment = mode === 'development';

const config = {
  performance: false,
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, isEnvProduction ? 'dist' : 'public'),
    },
    compress: false,
    port: 9876,
  },
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'swc-loader' },
          // {
          //   loader: '@linaria/webpack5-loader',
          //   options: {
          //     sourceMap: false,
          //   },
          // },
        ],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
    chunkFilename: isEnvProduction
      ? '[name].[chunkhash:8].chunk.js'
      : '[name].chunk.js',
  },
  optimization: {
    usedExports: true,
    flagIncludedChunks: isEnvProduction,
    concatenateModules: isEnvProduction,
    minimize: isEnvProduction,
    splitChunks: {
      filename: 'vendors.[chunkhash].js',
      chunks: 'all',
    },
    minimizer: [],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      react: 'preact/compat',
      // 'react-dom': 'preact/compat',
    },
  },
  target: ['web'],
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      ...(isEnvProduction
        ? {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          }
        : undefined),
    }),
  ],
};

if (mode === 'production') {
  config.optimization.minimizer.push(
    new TerserPlugin({
      minify: TerserPlugin.swcMinify,
      terserOptions: {
        mangle: true,
        ecma: 2020,
        compress: {
          /* eslint-disable-next-line */
          drop_console: true,
        },
      },
    })
  );
}

module.exports = config;

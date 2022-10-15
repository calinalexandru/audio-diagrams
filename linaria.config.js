module.exports = {
  evaluate: false,
  // displayName: false,
  // babelOptions: {
  //   presets: [ '@babel/preset-env', '@babel/preset-react', ],
  //   plugins: [ '@babel/plugin-transform-modules-commonjs', ],
  // },
  rules: [
    {
      action: require('@linaria/shaker').default,
    },
    {
      test: /\/node_modules\//,
      action: 'ignore',
    },
  ],
};

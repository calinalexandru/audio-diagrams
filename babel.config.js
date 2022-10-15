module.exports = {
  plugins: [
    ['macros'],
    // ["@babel/plugin-syntax-jsx"]
    // ["@babel/plugin-transform-runtime", { "regenerator": true }],
    // ["@babel/plugin-proposal-class-properties"],
    // ["@babel/plugin-proposal-object-rest-spread"],
    // ["@babel/plugin-syntax-dynamic-import"],
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false, // defaults to true
        // importSource: 'preact', // defaults to react
        pragma: 'h',
        fragment: 'Fragment',
      },
    ],
    // ['babel-plugin-styled-components'],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    ['@babel/preset-react'],
    // ['preact'],
    // ['@linaria'],
  ],
};

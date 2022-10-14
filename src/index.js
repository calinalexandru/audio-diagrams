import { h, render } from 'preact';
import Main from './components/main';
import './store/store';
// import React from 'react';
// Tells babel to use h for JSX. It's better to configure this globally.
// See https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#usage
// In tsconfig you can specify this with the jsxFactory
/** @jsx h */

// create our tree and append it to document.body:
render(<Main />, document.body);

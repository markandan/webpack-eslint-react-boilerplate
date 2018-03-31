import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';


const App = () => {
  ReactDom.render(
    <h1>Sample React Application</h1>,
    document.getElementById('root'),
  );
};
App();

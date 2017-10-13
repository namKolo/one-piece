import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const MOUNT_NODE = document.getElementById('main');

let renderApp = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

renderApp();

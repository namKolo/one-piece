import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'module/Home';
import About from 'module/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </div>
      </Router>
    );
  }
}

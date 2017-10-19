// @flow
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import Home from 'module/Home';
import About from 'module/About';
import { lightTheme } from 'theme';

export default class App extends Component<any> {
  render() {
    return (
      <MuiThemeProvider theme={lightTheme}>
        <Router>
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

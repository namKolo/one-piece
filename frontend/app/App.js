// @flow
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import AppBar from 'component/AppBar';

import Home from 'module/Home';
import About from 'module/About';
import LoginPage from 'module/Login';
import RegisterPage from 'module/Register';

import { lightTheme } from 'style/theme';

export default class App extends Component<any> {
  render() {
    return (
      <MuiThemeProvider theme={lightTheme}>
        <Router>
          <div>
            <AppBar />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

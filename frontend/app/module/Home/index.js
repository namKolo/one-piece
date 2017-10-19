import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Notebook
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

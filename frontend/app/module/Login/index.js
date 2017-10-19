// @flow
import React, { Component } from 'react';

import { withStyles, Grid, AppBar, Toolbar, Typography, Button } from 'material-ui';

import { LoginForm } from 'component/Form';

const styles = theme => ({
  bodyContent: {
    height: 'calc(100vh - 64px)',
    margin: '20px auto',
    maxWidth: '1200px',
  },
  light: {
    fontWeight: theme.typography.fontWeightLight,
  },
  flex: {
    flex: 1,
  },
});

class HomePage extends Component<any> {
  handleLogin = (params: { username: string, password: string }) => {
    console.log(params);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              Notebook
            </Typography>
            <Button color="contrast">Login</Button>
            <Button color="contrast">Sign up</Button>
          </Toolbar>
        </AppBar>
        <Grid container direction="column" className={classes.bodyContent}>
          <LoginForm onLogin={this.handleLogin} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);

// @flow
import React, { Component } from 'react';

import { withStyles, Grid } from 'material-ui';

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
});

class LoginPage extends Component<any> {
  handleLogin = (params: { username: string, password: string }) => {
    console.log(params);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" className={classes.bodyContent}>
          <LoginForm onLogin={this.handleLogin} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);

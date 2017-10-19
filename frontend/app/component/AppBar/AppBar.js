// @flow

import React from 'react';
import { withRouter, Link } from 'react-router';
import { withStyles, AppBar, Toolbar, Typography, Button } from 'material-ui';

type ProvidedProps = {
  classes: Object,
  history: Object,
};

type Props = {} & ProvidedProps;

const styles = () => ({
  flex: {
    flex: 1,
    cursor: 'pointer',
  },
});

function OurAppBar(props: Props) {
  const { classes, history } = props;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          type="title"
          color="inherit"
          className={classes.flex}
          onClick={() => history.push('/')}
        >
          Notebook
        </Typography>
        <Button color="contrast" onClick={() => history.push('/login')}>
          Login
        </Button>
        <Button color="contrast" onClick={() => history.push('/register')}>
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(withStyles(styles)(OurAppBar));

// @flow
import React, { Component } from 'react';

import {
  withStyles,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  CardHeader,
  Card,
  CardContent,
} from 'material-ui';

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
          <Grid item>
            <Card>
              <CardHeader title="Feature" />
              <CardContent>
                <Typography component="p" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title="Change logs" />
              <CardContent>
                <Typography component="p" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);

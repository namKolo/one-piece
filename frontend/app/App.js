import React, { Component } from 'react';

import Button from './component/Button';

export default class App extends Component {
  state = {
    color: 'red'
  };

  /*
    Change color here, it should reload magicallay
  */
  handleColorUpdate = () => this.setState({ color: 'red' });

  render() {
    const { color } = this.state;
    return (
      <div>
        <div style={{ color }} onClick={this.handleColorUpdate}>
          Look good man
        </div>
        <Button onClick={this.handleColorUpdate} label="hello swordman" />
      </div>
    );
  }
}

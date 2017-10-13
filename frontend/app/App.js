import React, { Component } from 'react';

import Button from './component/Button';

export default class App extends Component {
  state = {
    color: 'red'
  };

  updateCode = () => this.setState({ color: 'pink' });

  render() {
    const { color } = this.state;
    return (
      <div>
        <div style={{ color }} onClick={this.updateCode}>
          Hello Zoro
        </div>
        <Button onClick={() => this.setState({ color: 'grey' })} label="hello swordman" />
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onClick, label } = this.props;
    return <button {...{ onClick }}>{label}</button>;
  }
}
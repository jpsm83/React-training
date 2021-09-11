import React, { Component } from 'react';

export default class Dice extends Component {
  state = {
    img: '-empty',
  };

  clickHandler() {
    this.setState({ img: '-empty' });

    setTimeout(() => {
      this.setState({
        img: Math.ceil(Math.random() * 6),
      });
    }, 1000);
  }

  render() {
    return (
      <img
        onClick={() => this.clickHandler()}
        src={`img/dice${this.state.img}.png`}
        alt="Dice"
      />
    );
  }
}

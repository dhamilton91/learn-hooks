import React, { Component } from "react";

class Button extends Component<{}, { number: number }> {
  state = {
    number: 0
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <div>You have clicked the button: {number} times</div>
        <button onClick={() => this.setState({ number: number + 1 })}>
          Click me
        </button>
      </>
    );
  }
}

export default Button;

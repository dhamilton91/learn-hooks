import React, { Component } from "react";

interface Props {}

interface State {
  currentTime: number;
}

class Timer extends Component<Props, State> {
  state = {
    currentTime: 0
  };

  timer?: NodeJS.Timeout;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ currentTime: this.state.currentTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentTime } = this.state;
    return (
      <>
        <div className="loader" />
        <div className="time">{currentTime}s</div>
      </>
    );
  }
}

export default Timer;

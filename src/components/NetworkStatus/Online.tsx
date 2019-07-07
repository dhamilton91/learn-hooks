import React, { Component, useEffect, useState } from "react";

class Online extends Component<{ isOnline: boolean }, { showStatus: boolean }> {
  state = {
    prevIsOnline: false,
    showStatus: false
  };

  timeout?: NodeJS.Timeout;

  componentDidMount() {
    if (this.state.showStatus) {
      this.timeout = setTimeout(() => {
        this.setState({ showStatus: false });
      }, 1500);
    }
  }

  static getDerivedStateFromProps(
    { isOnline }: { isOnline: boolean },
    { prevIsOnline }: { prevIsOnline: boolean }
  ) {
    if (prevIsOnline !== isOnline) {
      return {
        prevIsOnline: isOnline,
        showStatus: isOnline
      };
    }
    return {};
  }

  componentDidUpdate() {
    if (!this.state.prevIsOnline && this.state.showStatus) {
      this.timeout = setTimeout(() => {
        this.setState({ showStatus: false });
      }, 1500);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { showStatus } = this.state;

    return showStatus ? (
      <div className="network online">
        <div>Online</div>
      </div>
    ) : null;
  }
}

export default Online;

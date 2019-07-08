import React, { Component } from "react";
import Online from "./Online";

class NetworkStatus extends Component<{}, { isOnline: boolean }> {
  state = {
    isOnline: true
  };

  onlineEventListener = () =>
    this.setState({
      isOnline: navigator.onLine
    });
  offlineEventListener = () =>
    this.setState({
      isOnline: navigator.onLine
    });

  componentDidMount() {
    window.addEventListener("online", this.onlineEventListener);
    window.addEventListener("offline", this.offlineEventListener);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.onlineEventListener);
    window.removeEventListener("offline", this.offlineEventListener);
  }

  render() {
    const { isOnline } = this.state;

    return (
      <>
        <button
          onClick={() =>
            this.setState({
              isOnline: !isOnline
            })
          }
        >
          Go {isOnline ? "OFFLINE" : "ONLINE"}{" "}
        </button>

        {isOnline && <Online isOnline={isOnline} />}
        {!isOnline && (
          <div className="network offline">
            <div>Offline</div>
          </div>
        )}
      </>
    );
  }
}

export default NetworkStatus;

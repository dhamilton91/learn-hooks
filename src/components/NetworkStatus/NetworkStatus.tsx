import React, { useState, useEffect } from "react";
import Online from "./Online";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineEventListener = () => setIsOnline(navigator.onLine);
    const offlineEventListener = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", onlineEventListener);
    window.addEventListener("offline", offlineEventListener);

    return () => {
      window.removeEventListener("online", onlineEventListener);
      window.removeEventListener("offline", offlineEventListener);
    };
  });

  return (
    <>
      <button onClick={() => setIsOnline(!isOnline)}>
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
};

export default NetworkStatus;

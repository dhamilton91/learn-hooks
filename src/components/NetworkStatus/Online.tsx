import React, { useState, useEffect } from "react";

const Online = ({ isOnline }: { isOnline: boolean }) => {
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOnline) {
      setShowStatus(true);
      timeout = setTimeout(() => {
        setShowStatus(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOnline]);

  return showStatus ? (
    <div className="network online">
      <div>Online</div>
    </div>
  ) : null;
};

export default Online;

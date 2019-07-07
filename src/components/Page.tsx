import React, { ReactChildren } from "react";
import { navigate } from "hookrouter";
import "./page.css";

const Page = ({ children }: { children: ReactChildren }) => {
  return (
    <div className="page">
      <div className="navigation">
        <div>Examples:</div>
        <ul>
          <li onClick={() => navigate("/button")}>Button</li>
          <li onClick={() => navigate("/timer")}>Timer</li>
          <li onClick={() => navigate("/network")}>Network</li>
          <li onClick={() => navigate("/exercise")}>Exercise</li>
        </ul>
      </div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Page;

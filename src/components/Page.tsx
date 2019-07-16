import React, { ReactChildren } from "react";
import { navigate } from "hookrouter";
import "./page.css";

interface Props {
  children: ReactChildren;
  routes: object;
}

const Page = ({ children, routes }: Props) => {
  return (
    <div className="page">
      <div className="navigation">
        <div>Examples:</div>
        <ol>
          <li onClick={() => navigate("/button")}>Button</li>
          <li onClick={() => navigate("/timer")}>Timer</li>
          <li onClick={() => navigate("/network")}>Network</li>
          <li onClick={() => navigate("/fetch")}>Fetch</li>
          <li onClick={() => navigate("/exercise")}>Exercise</li>
          <li onClick={() => navigate("/slideshow")}>SlideShow</li>
        </ol>
      </div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Page;

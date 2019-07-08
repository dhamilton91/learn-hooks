import React from "react";
import { useRoutes } from "hookrouter";
import Page from "./components/Page";
import Button from "./components/Button";
import Timer from "./components/Timer";
import NetworkStatus from "./components/NetworkStatus";
import Fetch from "./components/Fetch";
import Workout from "./components/Workout";
import "./App.css";

const routes = {
  "/": () => <Button />,
  "/timer": () => <Timer />,
  "/network": () => <NetworkStatus />,
  "/fetch": () => <Fetch />,
  "/exercise": () => <Workout />
};

const App = () => <Page>{useRoutes(routes) || <Button />}</Page>;

export default App;

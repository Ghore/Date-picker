import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutus" exact component={AboutUs} />
      </Switch>
    </>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Dasboard from "../components/Landinpage/Dasboard";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Dasboard />
      </Route>
      <Route path="/computer">
        <Dasboard />
      </Route>
      <Route path="/medical">
        <Dasboard />
      </Route>
      <Route path="/hotemanagement">
        <Dasboard />
      </Route>
    </>
  );
};

export default Routes;

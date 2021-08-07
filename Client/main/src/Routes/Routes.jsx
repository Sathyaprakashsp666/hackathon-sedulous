import React from "react";
import { Switch, Route } from "react-router-dom";
import { Institutes } from "../Components/Institutes/Institutes";
import { Knowledge } from "../Components/Institutes/Knowledge";
import { Navbar } from "../Components/InstitutesNavbar/Navbar";
import Dasboard from "../Components/Landinpage/Dasboard";

const Routes = () => {
  return (
    <>
    <Switch>
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
        <Route path = "/institutes" >
          <Navbar/>
          <Institutes/>
        </Route>
        <Route path = "/knowledge" >
          <Navbar/>
          <Knowledge/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

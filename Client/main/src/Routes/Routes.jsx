import React from "react";
import { Switch, Route } from "react-router-dom";
import Video from '../Components/VideoAndTextChat/Video'
import Home from '../Components/VideoAndTextChat/Home'
import { Chat } from "../Components/VideoAndTextChat/Chat/Chat"
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
        <Route path="/talkToExpert" exact component={Home} />
        <Route exact path="/sessionWithCareerExpert" component={Video} />
        <Route exact path="/chat" component={Chat} />
        <Route path="/institutes" >
          <Navbar />
          <Institutes />
        </Route>
        <Route path="/knowledge" >
          <Navbar />
          <Knowledge />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

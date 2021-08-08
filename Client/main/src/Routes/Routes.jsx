import React from "react";
import { Switch, Route } from "react-router-dom";
import Video from '../Components/VideoAndTextChat/Video'
import Home from '../Components/VideoAndTextChat/Home'
import { Chat } from "../Components/VideoAndTextChat/Chat/Chat"
import Dasboard from "../Components/Landinpage/Dasboard";
import { DynamicCardContent } from "../Components/DynamicCardContents/DynamicCardContent";
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
        <Route path = "/career/:id" >
          <DynamicCardContent/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

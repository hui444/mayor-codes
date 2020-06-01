import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import HomePage from "./places/pages/HomePage";
import CreatePage from "./places/pages/CreatePage";
import BookmarkPage from "./places/pages/BookmarkPage";
import NUSPlannerHeader from "./shared/components/NUSPlannerHeader";
import NavButton from "./shared/components/NavButton";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <NUSPlannerHeader />
            <HomePage />
          </Route>
          <Route path="/create" exact>
            <NUSPlannerHeader>
              <NavButton to="/">HOME</NavButton>
            </NUSPlannerHeader>
            <CreatePage />
            <style>{"body { background-color : #dae3f2; }"}</style>
          </Route>
          <Route path="/bookmark" exact>
            <NUSPlannerHeader>
              <NavButton to="/">HOME</NavButton>
            </NUSPlannerHeader>
            <BookmarkPage />
            <style>{"body { background-color : #e2f0da; }"}</style>
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

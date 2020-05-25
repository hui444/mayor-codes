import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Homepage from './shared/components/Homepage/Homepage';
import HomeMain from './HomeMain/pages/HomeMain';
import CreatePage from './places/pages/CreatePage';
import BookmarkPage from './places/pages/BookmarkPage';

const App = () => {
  return (
      <Router>
        <Homepage />
          <main>
            <Switch>
              <Route path="/" exact>
                <HomeMain />
              </Route>
              <Route path="/create" exact>
                <CreatePage />
                <style>
                  {'body { background-color : #dae3f2; }'}
                </style>
              </Route>
              <Route path="/bookmark" exact>
                <BookmarkPage />
                <style>
                  {'body { background-color : #e2f0da; }'}
                </style>
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
      </Router>
  );
}

export default App;

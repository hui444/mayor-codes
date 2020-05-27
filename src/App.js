import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import HomePage from './places/pages/HomePage';
import CreatePage from './places/pages/CreatePage';
import BookmarkPage from './places/pages/BookmarkPage';
import HomeButton from './shared/components/Homepage/HomeButton';
import NUSPlannerHeader from './shared/components/Homepage/NUSPlannerHeader';

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
                <HomeButton />
              </NUSPlannerHeader>
              <CreatePage />
              <style>
                {'body { background-color : #dae3f2; }'}
              </style>
            </Route>
            <Route path="/bookmark" exact>
              <NUSPlannerHeader>
                <HomeButton />
              </NUSPlannerHeader>
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

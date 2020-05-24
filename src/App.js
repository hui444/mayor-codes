import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Homepage from './shared/components/Homepage/Homepage';
import HomeMain from './homeMain/pages/HomeMain';

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
                {/* <HomeMain /> */}
              </Route>
              <Route path="/bookmark" exact>
                {/* <HomeMain /> */}
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
      </Router>
  );
}

export default App;

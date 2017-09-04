import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import List from './List';
import Detail from './Detail';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/ship/:id" component={Detail} />
    </Switch>
  </Router>
)


export default App;
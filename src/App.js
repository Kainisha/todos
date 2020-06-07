import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import store from 'store';
import Todo from 'components/views/Todo';

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/">
          <Todo />
        </Route>
      </Switch>
    </Provider>
  </Router>
);

export default App;

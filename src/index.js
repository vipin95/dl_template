import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Root from './page/root';
import Login from './page/login';
import ForgotPass from './page/forgotPass';

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={()=><Login/>} />
        <Route path="/forgot/Password" component={()=><ForgotPass/>} />
        {/* <Redirect from="/admin" to="/admin/login"/> */}
        <Route path="/SignUp" component={()=><Root/>} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Root from './page/root';
import Login from './page/login';
import ForgotPass from './page/forgotPass';
import ForgotPassSuccess from './page/forgotPassSuccess';

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/login/*" component={()=>"Page not found"} />
        <Route path="/signUp/*" component={()=>"Page not found"} /> */}
        <Route path="/login/forgotPassword/success" component={()=><ForgotPassSuccess/>} />
        <Route path="/login/forgotPassword" component={()=><ForgotPass/>} />
        <Route path="/login" component={()=><Login/>} />
        <Route path="/signUp" component={()=><Root/>} />
        <Redirect from="/" to="/login"/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
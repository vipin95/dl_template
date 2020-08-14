import React from 'react'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header from './component/header/index';
import Form from './component/form';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Page import
import SignUp from '../src/pages/SignUp';

const hist = createBrowserHistory();

ReactDOM.render(
  /* TODO
      will read about " React.StrictMode "
  */
  // <React.StrictMode>    
  //   <Header text="kdjfkdjfk"/>
  // </React.StrictMode>
 
 <Router history={hist}>
    <Switch>
      {/* <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/signUp" component={AdminSignUp} />
      <Route path="/admin/login/forgotPassword" component={AdminForgetPassword} /> */}
      <Route path="/Header" component={()=><Header/>} />
      <Route path="/signUp_comp" component={()=><Form name="Forgot Password"/>} />
      <Redirect from="/admin" to="/admin/login" />

      <Route path="/signUp" component={()=><SignUp name="Forgot Password"/>}/>


      <Route path="/" component={()=><h1>dashboard</h1>} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

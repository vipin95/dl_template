import React from 'react'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header from './component/header/index';
import Form from './component/form/index';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

const hist = createBrowserHistory();
const AdminLogin = (props)=>{
  return (
    <div>
      <Header/>
      <Form formType={1}/> 
    </div>
  )
 }
 const AdminSignUp = (props)=>{
  return (
    <div>
      <Header/>
      <Form formType={0}/> 
    </div>
  )
 }
 const AdminForgetPassword = (props)=>{
  return (
    <div>
      <Header/>
      <Form formType={2}/> 
    </div>
  )
 }
ReactDOM.render(
  /* TODO
      will read about " React.StrictMode "
  */
  // <React.StrictMode>    
  //   <Header text="kdjfkdjfk"/>
  // </React.StrictMode>

  /*  Notes
    0 = Register form
    1 = Login form
    2 = Forget password
  */
 
 <Router history={hist}>
    <Switch>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/signUp" component={AdminSignUp} />
      <Route path="/admin/forgotPassword" component={AdminForgetPassword} />
      <Redirect from="/admin" to="/admin/login"/>
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

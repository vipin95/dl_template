import React from 'react';
import Header from '../../component/header/index';
// import SignUpForm from '../../component/signUp/index';
// import Login from '../../component/login';
 import ForgotPass from '../../component/forgotPass';

function Dashboard(props){
  return(
    <React.Fragment>
      <Header/>
      {/* <SignUpForm/> */}
      {/* <Login/> */}
      <ForgotPass/>
    </React.Fragment>
  )
}

export default Dashboard;
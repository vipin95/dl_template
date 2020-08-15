import React from 'react';
import Header from '../../component/header/index';
// import SignUpForm from '../../component/signUp/index';
import Login from '../../component/login';

function Dashboard(props){
  return(
    <React.Fragment>
      <Header/>
      {/* <SignUpForm/> */}
      <Login/>
    </React.Fragment>
  )
}

export default Dashboard;
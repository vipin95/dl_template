import React from 'react';
import Header from '../../component/header/index';
import SignUpForm from '../../component/signUp/index';

function Dashboard(props){
  return(
    <React.StrictMode>
      <Header/>
      <SignUpForm/>
    </React.StrictMode>
  )
}

export default Dashboard;
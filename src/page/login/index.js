import React from 'react';
import Header from '../../component/header/index';
import Login from '../../component/login';

function Root(props){
  return(
    <React.Fragment>
      <Header/>
      <Login/>
    </React.Fragment>
  )
}

export default Root;
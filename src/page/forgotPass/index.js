import React from 'react';
import Header from '../../component/header/index';
import ForgotPass from '../../component/forgotPass';

function Root(props){
  return(
    <React.Fragment>
      <Header/>
      <ForgotPass/>
    </React.Fragment>
  )
}

export default Root;
import React from 'react';
import Header from '../../component/header/index';
import SignUpForm from '../../component/signUp/index';

function Root(props){
  return(
    <React.Fragment>
      <Header/>
        <SignUpForm/>
    </React.Fragment>
  )
}

export default Root;
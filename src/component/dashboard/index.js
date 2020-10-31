import React from 'react';

class Dash extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <div className="container-flux">
          <div className="float-left w-25 bg-primary">
            "Vipin mavi"
          </div>
          <div className="float-right w-75 bg-success">
          "Xyz mavi"
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Dash;
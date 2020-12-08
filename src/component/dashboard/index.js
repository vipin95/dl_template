import React from 'react';
import './public/css/index.css';
import profileImage from "../../public/img/profile.jpg";

class Dash extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <div className="container-flux">
          <div className="widthNav float-left  bg-primary">
            <div className="profileImage">
              <div className="positionProfileImage w-25 m-auto">
                <img src={profileImage} alt="image not loaded"/>
              </div>
            </div>
          </div>
          <div className="float-right  bg-success">
          "Xyz mavi G"
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Dash;
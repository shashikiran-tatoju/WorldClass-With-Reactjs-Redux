import React, { Component } from 'react';
import '../../assets/css/Footer.scss'; 

 class Footer extends Component {
  render() {
    return (
      <div className="worldClassFooter bgColor--000000">
        <a className="worldClassFooter__logo color--white" href="#logo" >Logo</a>
        <p className="worldClassFooter__text">@2018 World Class Property Company All Rights Reserved | Disclaimer</p>
       </div>
    )
  }
} 
export default Footer;

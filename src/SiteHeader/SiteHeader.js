import React from "react";
import "./SiteHeader.scss";
 class SiteHeader extends React.Component{
     render() {
         return(
             <div className={"header-logo"}>
             <div className={"site-header-tabs"}>
             <button>XBAY</button>
             <button>Account</button>
             <button>Logout</button>
             <button>CCC</button>
             </div></div>)
     }
 }
 export default SiteHeader
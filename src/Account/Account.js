import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
export default class Account extends React.Component {
    render(){
        return(
     <>       
<SiteHeader/>
<div class="jumbotron text-center">
  <h1>VASAM VISHAL</h1>
  <h4>SOFTWARE DEVELOPER</h4>
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-6">
      <h3>FrontEnd</h3>
      <p>REACT</p>
      <p>REDUX-REDUX LOOP</p>
      <p>BOOTSTRAP-4</p>
      <p></p>
      <p></p>       
    </div>
    <br/>
    {/* <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div> */}
    <div class="col-sm-6 col-md-6 col-lg-6">
      <h3>BackEnd</h3> 
      <p>JAVA</p>
      <p>SPRING BOOT</p>
      <p>JWT</p>
      <p></p>
      <p></p>        
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p> */}
    </div>
  </div>
</div>
</>
        )
    }

}

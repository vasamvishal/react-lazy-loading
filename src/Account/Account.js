import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";

export default class Account extends React.Component {
  render() {
    return (
      <>
        <SiteHeader />
        <div className="jumbotron text-center">
          <h1>VASAM VISHAL</h1>
          <h4>SOFTWARE DEVELOPER</h4>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h3>FrontEnd</h3>
              <p>REACT</p>
              <p>REDUX-REDUX LOOP</p>
              <p>Media Query</p>
              <p></p>
              <p></p>
            </div>
            <br />

            <div className="col-sm-6 col-md-6 col-lg-6">
              <h3>BackEnd</h3>
              <p>JAVA</p>
              <p>SPRING BOOT</p>
              <p>JWT</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </>
    )
  }

}

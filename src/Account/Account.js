import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import Container from '@material-ui/core/Container';
import "./Account.scss";
import Card from '@material-ui/core/Card';
import AccountDetails from "./AccountDetails";
import ComputerIcon from '@material-ui/icons/Computer';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import WhatshotIcon from '@material-ui/icons/Whatshot';

export default class Account extends React.PureComponent {
  render() {
    return (
      <>
        <SiteHeader />
        <Container maxWidth="34em" style={{ backgroundColor: '#cfe8fc', padding: "1px" }}>
          <h1>VASAM VISHAL</h1>
          <h4>SOFTWARE DEVELOPER</h4>
        </Container>
        <div className="details">
          <Card style={{ width: "22em", height: "25em" }}>
            <div>
            <div className="ba ba-linkedin"><ComputerIcon /></div>
            </div>
            <br/>
            <br/>
            <h1>FrontEnd</h1>
            <AccountDetails title="React JS"/>
            <AccountDetails title="React Redux"/>
            <AccountDetails title="Responsive Website"/>
            <AccountDetails title="Media Query"/>
            <AccountDetails title="Enzyme & Jest"/>
            <AccountDetails title="Frontend Unit testing"/>
          </Card>
          <Card style={{ width: "22em", height: "25em" }}>
            <div className="ba ba-linkedin"><StorageRoundedIcon/></div>
            <br/>
            <br/>
            <h1>BackEnd</h1>
            <AccountDetails title="Java"/>
            <AccountDetails title="Spring Boot"/>
            <AccountDetails title="JWT"/>
            <AccountDetails title="JavaScript"/>
            <AccountDetails title="Junit"/>
          </Card>
          <Card style={{ width: "22em", height: "20em" }}>
              <div className="ba ba-linkedin"><WhatshotIcon/></div>
            <br/>
            <br/>
            <h1>Others</h1>
            <AccountDetails title="TDD"/>
            <AccountDetails title="Unit testing"/>
            <AccountDetails title="SQL"/>
          </Card>
        </div>
        <br/>
        <div style={{display:"flex",justifyContent:"center"}}><h2>Connect:&nbsp;&nbsp;</h2> <a href="https://www.linkedin.com/in/vishal-vasam-70b7611a8/" class="fa fa-linkedin"></a></div>
        <br/>
        <br/>
      </>
    );
  }
}
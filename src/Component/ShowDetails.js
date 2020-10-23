import React from 'react'
import jwt_decode from "jwt-decode";

import BrowserService from "../BrowserService";

export default class ShowDetails extends React.Component {
    render() {
        let name = BrowserService.getLocalStorageValue("user");
        console.log("name",name);
        let token = BrowserService.getLocalStorageValue("token");
        console.log("name",token);

        var decoded = jwt_decode(token);
        let phoneNumber = parseInt(decoded.sub);
        return (
            <div style={{ padding: "0px 106px 0px 0px" }}>
                <div style={{paddingLeft:"2em"}}><span>Hi</span>&nbsp;
                <span>{name}</span></div>
                <span style={{ paddingLeft: "35px", fontSize: "15px", color: "#9d9d9d" }}> +91&nbsp;{phoneNumber}</span>
            </div>
        )
    }
}
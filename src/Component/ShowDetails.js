import React from 'react'
import jwt_decode from "jwt-decode";

import BrowserService from "../BrowserService";

export default class ShowDetails extends React.PureComponent {
    render() {
        let name = BrowserService.getLocalStorageValue("user");
        let token = BrowserService.getLocalStorageValue("token");

        var decoded = jwt_decode(token);
        let phoneNumber = parseInt(decoded.sub);
        return (
            <div style={{ padding: "-1px 106px 0px 0px" }}>
                <div style={{textAlign:"center"}}><span>Hi</span>&nbsp;
                <span>{name}</span></div>
                <span style={{ textAlign: "center", fontSize: "15px", color: "#9d9d9d" }}> +91&nbsp;{phoneNumber}</span>
            </div>
        )
    }
}
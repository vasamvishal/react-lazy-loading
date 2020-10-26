
import React from "react";
import Checkout from "../Component/Checkout";
import "./DrawComponent.scss";

export default class DrawerComponent extends React.Component {
    render() {
        console.log(this.props.amount);
        return (
            <div className="checkout-box1">
                <div style={{ fontWeight: "bold", display: "flex", paddingTop: "0.25em", paddingLeft: "0.75em" }}>Sub Total:&nbsp;<div style={{ fontWeight: '600' }}>{this.props.amount}</div></div>
                <div><Checkout amount={this.props.amount} close={this.props.close} /></div>
            </div>
        )
    }
}
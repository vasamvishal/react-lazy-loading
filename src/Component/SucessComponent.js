import React from "react";
import "./SucessComponent.scss"

class SucessComponent extends React.Component {
    render() {
        return (
            <div className="checkout-box">
                <i class="star"></i>
                <div className="order-done">
                    <div className="sucess">
                        Success!
                    </div>
                    <div className="order-sucess">
                    Your Order and Payment has been accepted 
                    </div>
                </div>
            </div>
        )
    }
}

export default SucessComponent
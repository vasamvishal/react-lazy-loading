import React from "react";
import "./SucessComponent.scss";
import { connect } from "react-redux";
import { deleteAllCartDetails } from "./SucessComponentAction";

class SucessComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
        this.props.deleteAllCartDetails(this.props.addToCart.cartData);
    }

    render() {
        return (
            <>
                <div className="checkout-box-sucess">
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
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        "deleteAllCartDetails": (e) => (dispatch(deleteAllCartDetails(e))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SucessComponent)
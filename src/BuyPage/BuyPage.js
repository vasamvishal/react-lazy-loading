import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import BooksDetails from "../Component/BooksDetails";
import { connect } from "react-redux";
import "./BuyPage.scss";
import { addToCart, deleteFromCart, setInitialStateForBuyPage } from "./BuyPriceAction";
import { Redirect } from "react-router-dom";

class BuyPage extends React.Component {
    componentDidMount() {
        this.props.setInitialStateForBuyPage();
    }

    addToCart = (item) => {
        this.props.onAddToCart(item)
    }

    constructor(props) {
        super(props);
        this.state={
            clicked:true
        }
    }

    render() {
        if (this.props.buyBookDetails.deletedFromCart) {
            return <Redirect to="/home" />
        }
        if (this.props.header.signUpPage) {
            return <Redirect to='/login' />
        }
        if (this.props.header.cartPage) {
            return <Redirect to='/cart' />
        }
        let item = this.props.homePage.selectedBook
        return (
            <div>
                <SiteHeader />
                <div>
                    <BooksDetails
                        onAddToCart={this.addToCart}
                        item={item} />
                    <div className="about-section">
                        <div className={"description"}>About this Product</div>
                        <div className={"description-text"}><div>{item.description}</div></div>
                        <button  onClick={() => { this.props.deleteProduct() }}
                            className={"delete-button"}>
                            Delete Product
                    </button>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        "deleteProduct": () => (dispatch(deleteFromCart())),
        "onAddToCart": (item) => (dispatch(addToCart(item))),
        "setInitialStateForBuyPage": () => (dispatch(setInitialStateForBuyPage()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);
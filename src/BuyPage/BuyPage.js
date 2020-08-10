import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import BooksDetails from "../Component/BooksDetails";
import abc from "../images/pexels-photo-1591447.jpeg";
import {connect} from "react-redux";
import "./BuyPage.scss";
import {addToCart, deleteFromCart, setInitialStateForBuyPage} from "./BuyPriceAction";
import {Redirect} from "react-router-dom";

class BuyPage extends React.Component {
    componentDidMount() {
        this.props.setInitialStateForBuyPage();
    }

    addToCart = (item) => {
        this.props.onAddToCart(item)
    }

    constructor(props) {
        super(props);
        this.state =
            {
                image: abc,
                title: "The Axis of Bank",
                author: "Vishal vasam",
                price: "3467",
                description: "About banking and all those things",
                abcd: 2
            }

    }

    render() {
        if (this.props.buyBookDetails.deletedFromCart) {
            return <Redirect to="/home"/>
        }
        if (this.props.header.signUpPage) {
            return <Redirect to='/login'/>
        }
        if (this.props.header.cartPage) {
            return <Redirect to='/cart'/>
        }
        let item = this.state
        return (
            <div>
                <SiteHeader/>
                <div>
                    <BooksDetails
                        onAddToCart={this.addToCart}
                        {...item}/>
                    <div className={"description"}>About this Product</div>
                    <div className={"description-text"}>{item.description}</div>
                    <button onClick={() => {
                        this.props.deleteProduct()
                    }} className={"button-new-card"}>
                        Delete Product
                    </button>
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
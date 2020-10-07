import React from "react";
import { connect } from "react-redux";
import SiteHeader from "../SiteHeader/SiteHeader";
import BookDetailsComponent from "../Component/BookDetailsComponent";
import "./AddToCart.scss";
import { Redirect } from "react-router-dom";
import {toBuyPage} from "../../src/AddToCart/AddToCartAction";
import BrowserService from "../../src/BrowserService";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

import SignUp from "../SignUp/SignUp";

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount=()=>{
    //     this.props.getCartDetails();
    // }

    abc = (item) => {
        console.log("DDD")
        let quantity = this.props.buyBookDetails.noOfItems;
        console.log(quantity);
        return (
            <>
                <div className="dog">
                    <div className='cart'>
                        <img className='bookImage' src={item.image} alt={"bookImg"} />
                    </div>
                    <div id="books-details-cart">
                        <div className="item-title">{item.title}</div>
                        <div className="item">
                        <div className="item-price">Price &nbsp;&nbsp;{item.price}</div>
                        &nbsp;&nbsp;
                        <div className="item-quantity">Quantity&nbsp;&nbsp;{quantity}</div>
                        </div>
                        <br/>
                        <div className="item-total">Total&nbsp;&nbsp;{item.price}*{quantity}</div>
                    </div>
                <div className="cancel-button"><CloseOutlinedIcon onClick={this.back}/></div>
                </div>
                <hr />
                <div className="dog">
                    <div className='cart'>
                        <img className='bookImage' src={item.image} alt={"bookImg"} />
                    </div>
                    <div id="books-details-cart">
                        <div className="item-title">{item.title}</div>
                        {/* <br/> */}
                        <div className="item-price">Price &nbsp;&nbsp;{item.price}</div>
                        {/* <br/> */}
                        <div className="item-quantity">Quantity&nbsp;&nbsp;{quantity}</div>
                        {/* <br/> */}
                        <div className="item-total">Total&nbsp;&nbsp;{item.price}*{quantity}</div>
                    </div>
                    <div className="cancel-button"><CloseOutlinedIcon onClick={this.back}/></div>
                </div>
                <hr />
            </>
        )
    }

    render() {
        const def = BrowserService.getLocalStorageValue("bookDetails");
        console.log("value", def);
        let item = this.props.buyBookDetails.addedToCart;
        console.log("ddd", item);
        return (
            <>
                <SiteHeader />
                {item.length === 0 ? <><div className="cartImage"></div></> :<>
                    <div className="checkout-main-box1">
                        {this.abc(item)}
                        <div className="checkout-box">
                            <div style={{fontWeight:"bold"}}>SUB TOTAL:{item.price}</div>
                            <button className="checkout-button" onClick={this.props.routeToBuyPage}>Checkout</button>
                            {/* <button className="checkout-button" onClick={this.props.routeToBuyPage}>Back</button> */}
                        </div>
                    </div>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        "routeToBuyPage": () => (dispatch(toBuyPage())),
        // "getCartDetails":()=>(dispatch(toGetCartDetails())),
        // "deleteCartDetails":()=>(dispatch(deleteCartDetails()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
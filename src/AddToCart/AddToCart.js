import React from "react";
import { connect } from "react-redux";
import SiteHeader from "../SiteHeader/SiteHeader";
import BookDetailsComponent from "../Component/BookDetailsComponent";
import "./AddToCart.scss";
import { Redirect } from "react-router-dom";

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
    }

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
                        <div >{item.title}</div>
                        <div>Price{item.price}*{quantity}</div>
                    </div>
                    <div className="cancel-button">X</div>
                </div>
                <hr />
                <div className="dog">
                    <div className='cart'>
                        <img className='bookImage' src={item.image} alt={"bookImg"} />
                    </div>
                    <div id="books-details-cart">
                        <div >{item.title}</div>
                        <div>Price &nbsp;&nbsp;{item.price}*{quantity}</div>
                    </div>
                    <div className="cancel-button">X</div>
                </div>
                <hr />
            </>
        )
        // }))
    }

    render() {
        if (this.props.header.homePage) {
            return <Redirect to="/home" />
        }
        let item = this.props.buyBookDetails.addedToCart;
        console.log("ddd", item);
        return (
            <div>
                <SiteHeader />
                {item.length === 0 ? <div className="cartImage"></div> :
                    <div className="checkout-main-box1">
                        {this.abc(item)}
                        <div className="checkout-box">
                            <div>SUB TOTAL:{item.price}</div>
                            <button className="checkout-button">Checkout</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state.homePage.array);
    return state
}

export default connect(mapStateToProps, null)(AddToCart);
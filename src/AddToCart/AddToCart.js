import React from "react";
import { connect } from "react-redux";
import SiteHeader from "../SiteHeader/SiteHeader";
import "./AddToCart.scss";
// import BrowserService from "../BrowserService";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {toBuyPage,toGetCartDetails,cancelOrder} from "../../src/AddToCart/AddToCartAction";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import LoginToFile from "../Component/LoginToFile";
import { NavLink } from "react-router-dom";

class AddToCart extends React.Component {
    
    componentDidMount=()=>{
        this.props.getCartDetails();
    }

    cancelOrder=(item)=>{
        this.props.cancelOrder(item);
    }

    abc = (items) => {
        return (
            <>
            {items.map((item, i) => (
                <div>
                <div className="dog">
                    <div className='cart'>
                        <img className='bookImage' src={item.image} alt={"bookImg"} />
                    </div>
                    <div id="books-details-cart">
                        <div className="item-title">{item.title}</div>
                        <div className="item">
                        <div className="item-price">Price &nbsp;&nbsp;{item.price}</div>
                        &nbsp;&nbsp;
                        <div className="item-quantity">Quantity&nbsp;&nbsp;{item.noOfBooks}</div>
                        </div>
                        <br/>
                        <div className="item-total">Total&nbsp;&nbsp;{item.price}*{item.noOfBooks}</div>
                    </div>
                <div className="cancel-button"><CloseOutlinedIcon onClick={()=>{this.cancelOrder(item)}}/></div>
                </div>
                <hr/>
                </div>
            )
            )}
            </>
        )
    }

    render() {
        let item = this.props.addToCart.cartData;
        return (
            <>
                <SiteHeader />
                {this.props.loginForm.login===false?<div><LoginToFile/></div>:<div>
                {item.length === 0 ? <><div className="cartImage"></div></> :<>
                    <div className="checkout-main-box1">
                        {this.abc(item)}
                        <div className="checkout-box">
                            <div style={{fontWeight:"bold"}}>SUB TOTAL:{item.price}</div>
                            <button className="checkout-button" onClick={this.props.routeToBuyPage}>Checkout</button>
                        </div>
                    </div>
                    <br/>
                    <NavLink to="/home" style={{display:"flex",textDecoration:"none",justifyContent:"center",fontWeight: "700",color: "black"}}><ArrowBackIcon/><div>Back to Main Page</div></NavLink>
                    <br/>
                     </>
                }
                </div>}
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
         "getCartDetails":()=>(dispatch(toGetCartDetails())),
         "cancelOrder":(item)=>(dispatch(cancelOrder(item)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
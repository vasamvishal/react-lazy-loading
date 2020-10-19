import React from "react";
import { connect } from "react-redux";
import SiteHeader from "../SiteHeader/SiteHeader";
import "./AddToCart.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { toBuyPage, toGetCartDetails, cancelOrder } from "../../src/AddToCart/AddToCartAction";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import LoginToFile from "../Component/LoginToFile";
import BrowserService from "../BrowserService"
import { NavLink } from "react-router-dom";
import Checkout from "../Component/Checkout";
import Loader from 'react-loader-spinner';
import SucessComponent from "../Component/SucessComponent";

let price = 0;

class AddToCart extends React.Component {
    isMethod = true;

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            isLoading: true,
            showComponent: false
        }
    }

    componentDidMount() {
        this.getToken();
        if (this.isMethod) {
            setTimeout(() => {
                this.setState({ isLoading: false })
            }, 1000)
            this.props.getCartDetails();
        }
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps.loginForm);
        console.log(this.props.loginForm)
        if (prevProps.loginForm.login !== this.props.loginForm.login) {
            this.props.getCartDetails();
        }
    }

    static getDerivedStateFromProps(props, state) {
        const value = BrowserService.getLocalStorage();
        if (value.token === undefined || value.token === null) {
            return { isAuthenticated: false };
        }
        else {
            return { isAuthenticated: true };
        }
    }

    calculateSubTotal = (item) => {
        let value = 0;
        item.map((state) => {
            value += state.price * state.noOfBooks
        })
        price = value;
    }

    handleCloseOpen = () => {
        this.setState({ showComponent: true }, () => {
            document.getElementById("checkout-button").disabled = true
        });
    }

    getToken = () => {
        const value = BrowserService.getLocalStorage();
        if (value.token === undefined || value.token === null) {
            this.setState({ isAuthenticated: false });
        }
        else {
            this.setState({ isAuthenticated: true });
        }
    }

    cancelOrder = (item) => {
        this.props.cancelOrder(item);
    }

    abc = (items) => {
        return (
            <>
                {items.map((item, i) => (
                    <div key={i}>
                        <div className="dog">
                            <div className='cart'>
                                <img className='bookImage' src={item.image} alt={"bookImg"} />
                            </div>
                            <div id="books-details-cart">
                                <div className="item-title">{item.title}</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div className="item">
                                    <div className="item-author">Author:&nbsp;&nbsp;{item.author}</div>
                                    <div className="item-price">Price:&nbsp;&nbsp;{item.price}</div>
                                    <div className="item-quantity">Quantity:&nbsp;&nbsp;{item.noOfBooks}</div>
                                </div>
                                <br />
                                <div className="item-total">Total&nbsp;Price:&nbsp;&nbsp;{item.price * item.noOfBooks}</div>
                            </div>
                            <div className="cancel-button"><CloseOutlinedIcon onClick={() => { this.cancelOrder(item) }} /></div>
                        </div>
                        <hr />
                    </div>
                )
                )}
            </>
        )
    }

    render() {
        let item = this.props.addToCart.cartData;
        this.calculateSubTotal(item);
        console.log("render")
        return (
            <>
                <SiteHeader />
                {this.state.isAuthenticated === false ? <div><LoginToFile /></div> : <div>
                    {this.state.isLoading ? <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={500}
                        width={200}
                        timeout={2000} /> : <>
                            {item.length === 0 ? <>
                                <div className="cartImage" />
                            </> :
                                <>
                                    <div className="checkout-main-box1">
                                        {this.state.showComponent ? <SucessComponent /> : <>{this.abc(item)}</>}
                                        <div className="checkout-box">
                                            <div style={{ fontWeight: "bold", display: "flex", paddingTop: "0.25em", paddingLeft: "0.75em" }}>Sub Total:&nbsp;<div style={{ fontWeight: '600' }}>{price}</div></div>
                                            <div><Checkout amount={price} close={this.handleCloseOpen} /></div>
                                        </div>
                                    </div>
                                    <br />
                                    <NavLink to="/home" style={{ display: "flex", textDecoration: "none", justifyContent: "flex-end", fontWeight: "700", color: "black", fontWeight: "500", paddingRight: "12em" }}><ArrowBackIcon /><div>Back to Main Page</div></NavLink>
                                    <br />
                                </>
                            }
                        </>
                    }
                </div>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        "routeToBuyPage": () => (dispatch(toBuyPage())),
        "getCartDetails": () => (dispatch(toGetCartDetails())),
        "cancelOrder": (item) => (dispatch(cancelOrder(item)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
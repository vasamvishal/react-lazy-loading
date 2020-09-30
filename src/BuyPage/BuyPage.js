import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import BooksDetails from "../Component/BooksDetails";
import { connect } from "react-redux";
import "./BuyPage.scss";
import { addToCart, deleteFromCart, setInitialStateForBuyPage, selectedNoOfItems } from "./BuyPriceAction";
import { Redirect } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BrowserService from "../../src/BrowserService";

class BuyPage extends React.Component {
    componentDidMount() {
        this.props.setInitialStateForBuyPage();
        this.getBookFromID(this.state.bookId);
    }

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            booksData: [],
            bookId: props.match.params.id
        }
    }

    getBookFromID = (bookId) => {
        console.log("DSDSD",this.props.homePage.getAllBookData);
            let bookDetails=JSON.parse(BrowserService.getLocalStorageValue("selectedBook"));
            Object.keys(bookDetails).map((key)=> {
            if (key=== "_id" && bookDetails[key] === bookId) {
                this.setState({ booksData: bookDetails })
            }
        });
    }

    noOfItemsCart = (e) => {
        this.props.selectednoOfItems(e)
    }

    addTocart = (item) => {
        //need to change
        // const addToCart = [];
        // addToCart.push(item._id);
        // const noOfItems = [];
        // noOfItems.push(this.props.buyBookDetails.noOfItems);
        // const itemDetails = JSON.stringify(addToCart)
        // console.log(itemDetails);
        // BrowserService.setLocalStorageValue("noOfItems", noOfItems);
        // BrowserService.setLocalStorageValue("bookDetails", itemDetails);
        this.props.onAddToCart(item)
    }

    deleteProduct = () => {
        const deleteFromCart = [];
        deleteFromCart.push(this.props.buyBookDetails.addedToCart);
        if (deleteFromCart.length > 0) {
            BrowserService.deleteLocalStorageItem("selectedBook");
        }
        this.props.deleteProduct();
    }

    render() {
        if (this.props.buyBookDetails.deletedFromCart) {
            return <Redirect to="/home" />
        }
        
        let item = this.state.booksData
        console.log("item", item);
        return (
            <>
                <SiteHeader />
                <div>
                    <BooksDetails
                        onAddToCart={this.addTocart}
                        selectednoOfItems={this.noOfItemsCart}
                        item={item} />
                    <div className="about-section">
                        <div className={"description"}>About this Product</div>
                        <div className={"description-text"}><div>{item.description}</div></div>
                        <button onClick={this.deleteProduct}
                            className={"delete-button"}>
                            <div className="delete-button-font">
                                <div><DeleteForeverIcon fontSize="small" /></div>
                                <div style={{ paddingTop: 2 }}>Delete Product</div>
                            </div>
                        </button>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                </div>
            </>
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
        "selectednoOfItems": (e) => (dispatch(selectedNoOfItems(e))),
        "setInitialStateForBuyPage": () => (dispatch(setInitialStateForBuyPage()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);
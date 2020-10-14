import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import BooksDetails from "../Component/BooksDetails";
import { connect } from "react-redux";
import "./BuyPage.scss";
import { addToCart, deleteFromCart, setInitialStateForBuyPage, selectedNoOfItems, redirectToCartPage } from "./BuyPriceAction";
import { Redirect } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BrowserService from "../../src/BrowserService";

class BuyPage extends React.Component {
    
    componentDidMount() {
        this.props.setInitialStateForBuyPage();
        this.getBookFromID(this.state.bookId);
        this.getToken();
    }

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            booksData: [],
            bookId: props.match.params.id,
            noOfBooks: "",
            isAuthenticated:false
        }
    }

    getToken = () => {
        console.log("State");
        const value = BrowserService.getLocalStorage();
        if (value.token === undefined || value.token === null) {
            this.setState({ isAuthenticated: false });
        }
        else {
            console.log("true");
            this.setState({ isAuthenticated: true });
        }
    }

    getBookFromID = (bookId) => {
        let bookDetails = JSON.parse(BrowserService.getLocalStorageValue("selectedBook"));
        return Object.keys(bookDetails).map((key) => {
            if (key === "_id" && bookDetails[key] === bookId) {
                this.setState({ booksData: bookDetails })
            }
        });
    }

    noOfItemsCart = (noOfBooks) => {
        this.setState({ noOfBooks: { noOfBooks } })
    }

    addTocart = (item) => {
        console.log(this.state.isAuthenticated);
        if (this.state.isAuthenticated===true) {
            let noOfBooks = this.state.noOfBooks;
            this.props.onAddToCart({ item, noOfBooks }, () => {
                this.props.redirectToCartPage()
            })
        }
        else {
            this.props.redirectToCartPage()
        }
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
        "redirectToCartPage": (e) => (dispatch(redirectToCartPage())),
        "setInitialStateForBuyPage": () => (dispatch(setInitialStateForBuyPage()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);
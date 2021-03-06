import React from "react";
import "./BooksDetails.scss";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

var data, text;

class BooksDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            validateInput: true,
            price: 1,
            clicked: true,
            quantity: 0
        }
    }

    changePrice = (e) => {
        data = e.target.value;
        if (isNaN(data)) {
            text = this.setState({ validateInput: false, price: 1, quantity: 0 })
        } else if (isNaN(data) || data < 1) {
            text = this.setState({ validateInput: true, price: 1, quantity: 0 })
        } else {
            this.props.selectednoOfItems(data);
            text = this.setState({ validateInput: true, price: data, quantity: data })
        }
    }

    render() {
        var buttonOnClick = this.state.clicked ? "card-button-onClick" : "card-button-unClicked"
        const item = this.props.item
        return (
            <div className='card-info'>
                <div className='first-box'>
                    <img className='bookImg card-bookImg' src={item.image} alt={"bookImg"} />
                </div>
                <div className={"second-box"}>
                    <div className="card-book-details-flex">
                        <div className='card-bookName'>{item.title}</div>
                        <div className='card-authorName'>{item.author}</div>
                        {this.state.quantity >= item.quantity ?
                            <div>OUT OF STOCK</div>
                            : <div style={{ display: "flex", paddingTop: "1em" }}>
                                <div className='card-bookPrice'>Rs.{item.price * this.state.price}</div>
                                <div className="Books-Available">Books Available:&nbsp;{item.quantity - this.state.quantity}</div>
                            </div>
                        }
                    </div>
                    <div className={"text-button"}>
                        <input id="demo" className={"text-box"} onChange={this.changePrice} required type={"textbox"} />
                        <button disabled={(this.state.quantity === 0 || this.state.quantity >= item.quantity)} className={buttonOnClick}
                            onClick={() => {
                                this.props.onAddToCart(item);
                                this.setState({ clicked: !this.state.clicked })
                            }}>
                            <div className="button">
                                <div><AddShoppingCartIcon style={{ paddingTop: 2,color:"white" }} fontSize="small" />&nbsp;&nbsp;</div>
                                {this.state.clicked?<div className="button-label">Add To Cart</div>:<div className="button-label">Item Added</div>}
                            </div>
                        </button>
                    </div>
                    {!this.state.validateInput ? <div className="text-error">Please Enter proper value</div> : <div></div>}
                    <br/>
                </div>
               
            </div>
        )
    }
}

export default BooksDetails;
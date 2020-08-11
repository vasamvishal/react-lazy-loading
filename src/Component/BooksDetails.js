import React from "react";
import "./Bookdetails.scss"

var data, text;

class BooksDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            validateInput: true,
            price: 1,
            clicked: true
        }
    }

    changePrice = (e) => {
        data = e.target.value;
        if (isNaN(data)) {
            text = this.setState({ validateInput: false, price: 1 })
        } else if (isNaN(data) || data < 1) {
            text = this.setState({ validateInput: true, price: 1 })
        } else {
            text = this.setState({ validateInput: true, price: data })
        }
    }

    buttonClicked=(item)=>{
            // console.log("ddd",this.props);
        
    }

    render() {
        var buttonOnClick = this.state.clicked == true ? "card-button-onClick" : "card-button-unClicked"
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
                        <div className='card-bookPrice'>Rs.{item.price * this.state.price}</div>
                    </div>
                    <div className={"text-button"}>
                        <input id="demo" className={"text-box"} onChange={this.changePrice} required type={"textbox"} />
                        <button className={buttonOnClick}
                            onClick={(item) => {this.props.onAddToCart(item);
                                this.setState({clicked:!this.state.clicked})}}>
                            Add To Cart
                        </button>
                    </div>
                    {!this.state.validateInput ? <div>Please Enter proper value</div> : <div></div>}
                </div>
            </div>
        )
    }
}

export default BooksDetails;
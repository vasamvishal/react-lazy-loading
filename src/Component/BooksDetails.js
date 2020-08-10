import React from "react";
import "./Bookdetails.scss"

var data, text;

class BooksDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            validateInput: true,
            price: 1
        }
    }

    changePrice = (e) => {
        console.log(e.target);
        data = e.target.value;
        if (isNaN(data)) {
            text = this.setState({validateInput: false, price: 1})
        } else if (isNaN(data) || data < 1) {
            text = this.setState({validateInput: true, price: 1})
        } else {
            text = this.setState({validateInput: true, price: data})
        }
    }

    render() {
        const item = this.props
        return (
            <div className='card-info'>
                <div className='first-box'>
                    <img className='bookImg card-bookImg' src={item.image} alt={"bookImg"}/>
                </div>
                <div className={"second-box"}>
                    <div className='card-bookName'>{item.title}</div>
                    <div className='card-authorName'>{item.author}</div>
                    <div className='card-bookPrice'>Rs.{item.price * this.state.price}</div>
                    <div className={"text-button"}>
                        <input id="demo" className={"text-box"} onChange={this.changePrice} required type={"textbox"}/>
                        <button className={"card-button"} onClick={() => {
                            this.props.onAddToCart(item)
                        }}>Add To Cart
                        </button>
                    </div>
                    {!this.state.validateInput ? <div>Please Enter proper value</div> : <div></div>}
                </div>
            </div>
        )
    }
}

export default BooksDetails;
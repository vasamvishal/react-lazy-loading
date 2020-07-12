import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import Card from "@material-ui/core/Card";
import "./Bookdetails.scss"

class BooksDetails extends React.Component {
    render() {
        const item = this.props
        console.log(item);
        return (
            <div className='card-info'>
                <div className='first-box'>
                    <img className='bookImg card-bookImg' src={item.image} alt={"bookImg"}/>
                </div>
                <div className={"second-box"}>
                    <div className='card-bookName'>{item.title}</div>
                    <div className='card-authorName'>{item.author}</div>
                    <div className='card-bookPrice'>Rs.{item.price}</div>
                </div>
                {/*<Card className="card bookInfo">*/}
                {/*    <p id="bookTitleForDescription"> Book Detail</p>*/}
                {/*    <p id="description">{item.description}</p>*/}
                {/*</Card>*/}
            </div>
        )
    }
}

export default BooksDetails;
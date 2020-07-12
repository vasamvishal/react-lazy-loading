import React from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import BooksDetails from "../Component/BooksDetails";
import abc from "../images/pexels-photo-1591447.jpeg";
import "./BuyPage.scss";

class BuyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                image: abc,
                title: "The Axis of Bank",
                author: "Vishal vasam",
                price: "3467",
                description: "About banking and all those things"
            }
    }

    render() {
        let item = this.state;
        return (<div>
            <SiteHeader/>
            <div><BooksDetails {...item}/>
            <div className={"description"}>About this Product</div>
            <div className={"description-text"} >{item.description}</div></div>
            <button className={"button-new-card"}>Delete Product</button>
        </div>)
    }
}

export default BuyPage;
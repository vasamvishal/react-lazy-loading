import React from "react";
import "./BooksComponent.scss";

class BooksComponent extends React.Component {
    constructor() {
        super();
        this.value();
    }
    value = () => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = "https://books.google.com"
        console.log("image",img);
    }

    render() {
        var item = this.props
        return (
            <>
                <div className='imageSpace'>
                    <img className='bookImg' src={item.image} alt={"bookImg"}/>
                </div>
                <div className='bookName'>{item.title}</div>
                <div className='authorName'>{item.author}</div>
                <div className='bookName'>Rs.{item.price}</div>
            </>
        )
    }
}
export default BooksComponent
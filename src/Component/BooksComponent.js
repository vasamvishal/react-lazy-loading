import React from "react";
import "./BooksComponent.scss";

class BooksComponent extends React.Component {
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
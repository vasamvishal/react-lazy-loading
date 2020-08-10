import abc from "../images/pexels-photo-1591447.jpeg";
import React from "react";

class BooksComponent extends React.Component {
    render() {
        var item = this.props
        return (
            <>
                <div className='imageSpace'>
                    <img className='bookImg' src={abc} alt={"bookImg"}/>
                </div>
                <div className='bookName'>{item.title}</div>
                <div className='authorName'>{item.author}</div>
                <div className='bookName'>Rs.{item.price}</div>
                {/*<Card className="card bookInfo">*/}
                {/*    <p id="bookTitleForDescription"> Book Detail</p>*/}
                {/*    <p id="description">{item.description}</p>*/}
                {/*</Card>*/}
            </>
        )
    }
}
export default BooksComponent
import React from "react";
import BooksComponent from "./BooksComponent";

class BookDetailsComponent extends React.Component {

    render() {
        let item = this.props.item;
        let i = this.props.element;
        return (
            <div className='info' id={i + 1}>
                <BooksComponent {...item}/>
            </div>
        )
    }
}

export default BookDetailsComponent
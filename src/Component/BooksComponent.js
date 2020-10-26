import React from "react";
import "./BooksComponent.scss";

export default class BooksComponent extends React.PureComponent {
    constructor() {
        super();
        this.value();
    }

    value = () => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = "https://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5"
    }

    render() {
        var item = this.props
        return (
            <>
                <div className="book-flex">
                    <div className='imageSpace'>
                        <img className='bookImg' src={item.image} alt={"bookImg"} />
                    </div>
                    <div>
                        <div className='bookName'>{item.title}</div>
                        <div className='authorName'>{item.author}</div>
                        <div className='bookName'>Rs.{item.price}</div>
                    </div>
                </div>
            </>
        )
    }
}


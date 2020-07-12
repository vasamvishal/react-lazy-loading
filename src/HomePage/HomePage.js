import React from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import SiteHeader from "../SiteHeader/SiteHeader";
import {connect} from "react-redux";
import {getBooks} from "./HomePageAction";
import abc from "../images/pexels-photo-1591447.jpeg";

const array = [{
    image: "dfff",
    title: "rcxcxcr",
    author: "rrdddxcxc",
    price: "eeexcxc",
    description: "rxcxcrdvcvvdd"
}, {
    image: "ddd",
    title: "rr",
    author: "rrddd",
    price: "eee",
    description: "rrdvcvvdd"
}, {
    image: "dfff",
    title: "rcxcxcr",
    author: "rrdddxcxc",
    price: "eeexcxc",
    description: "rxcxcrdvcvvdd"
}, {
    image: "ddd",
    title: "rr",
    author: "rrddd",
    price: "eee",
    description: "rrdvcvvdd"
}, {
    image: "dfff",
    title: "rcxcxcr",
    author: "rrdddxcxc",
    price: "eeexcxc",
    description: "rxcxcrdvcvvdd"
}, {
    image: "ddd",
    title: "rr",
    author: "rrddd",
    price: "eee",
    description: "rrdvcvvdd"
}, {
    image: "dfff",
    title: "rcxcxcr",
    author: "rrdddxcxc",
    price: "eeexcxc",
    description: "rxcxcrdvcvvdd"
}, {
    image: "ddd",
    title: "rr",
    author: "rrddd",
    price: "eee",
    description: "rrdvcvvdd"
}, {
    image: "dfff",
    title: "rcxcxcr",
    author: "rrdddxcxc",
    price: "eeexcxc",
    description: "rxcxcrdvcvvdd"
}, {
    image: "ddd",
    title: "rr",
    author: "rrddd",
    price: "eee",
    description: "rrdvcvvdd"
}, {
    image: "dfff",
    title: "rcxcxcr",
    author: "rrdddxcxc",
    price: "eeexcxc",
    description: "rxcxcrdvcvvdd"
}
];

class HomePage extends React.Component {
    renderBuyPage(item) {
        console.log(item)
        // this.props.history.push("/buyPrice")
        this.props.getBooks(item);
    }


    getCard = () => {
        console.log("ddd",this.props);
        return array.map((item, i) => {
            return (
                <div className={"card-block"} id={i + 1}>
                    <Card className='card' onClick={() => {
                        this.renderBuyPage(item)
                    }}>
                        <div className='info' id={i}>
                            <div className='imageSpace'>
                                <img className='bookImg' src={abc} alt={"bookImg"}/>
                            </div>
                            <div className='bookName'>{item.title}</div>
                            <div className='authorName'>{item.author}</div>
                            <div className='bookName'>Rs.{item.price}</div>
                            <Card className="card bookInfo">
                                <p id="bookTitleForDescription"> Book Detail</p>
                                <p id="description">{item.description}</p>
                            </Card>
                        </div>
                    </Card>
                    <br/>
                    <br/>
                    <br/>
                </div>

            )
        });
    }

    render() {
        return <div className={"homepage"}>
            <SiteHeader/>
            <div className={"main-content"}>
                {this.getCard()}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "getBooks": (item) => (console.log("fff"),
            dispatch(getBooks(item)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

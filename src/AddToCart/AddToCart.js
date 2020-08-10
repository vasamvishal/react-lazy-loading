import React from "react";
import { connect } from "react-redux";
import SiteHeader from "../SiteHeader/SiteHeader";
import "./AddToCart.scss";

class AddToCart extends React.Component {
    render() {
        let item = this.props.buyBookDetails.addedToCart;
        console.log("ddd",item);
        return (
            <div>
                <SiteHeader />
                {item.length === 0 ? <div className="cartImage"></div> :
                    <div className="square">
                        <div className="content">
                            {item.title}
                            {/*<BookDetailsComponent {...item}/>*/}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state.homePage.array);
    return state
}

export default connect(mapStateToProps, null)(AddToCart);
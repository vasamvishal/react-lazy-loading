import React from "react";
import "./MenuBurger.scss";

class MenuBurger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
        this.detect = this.detect.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    detect() {
        console.log("dsdsd")
        this.setState({display:true})
    }

    render() {
        console.log("rerendering")
        console.log(this.state.display)

        return (

            <div onClick={this.detect}>sss</div>
        )
    }
}

export default MenuBurger;

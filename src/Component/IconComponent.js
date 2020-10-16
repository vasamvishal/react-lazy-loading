
import React from "react";

export default class IconComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div style={{display:"flex"}}>
                <div>{this.props.icon}</div>&nbsp;&nbsp;
                <div>{this.props.name}</div>
            </div>
        )
    }

}
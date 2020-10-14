
import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
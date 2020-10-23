import React from "react";
import CheckIcon from '@material-ui/icons/Check';
export default class AccountDetails extends React.Component{
    render(){
        return(
            <div style={{display:"flex",justifyContent:"center"}}>
            <div><CheckIcon/></div>
            <br/>
            <br/>
            <div>{this.props.title}</div>
            </div>
        )
    }
}
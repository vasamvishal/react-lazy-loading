import React from 'react'
import "./PopupButton.scss";
import SignUp from '../SignUp/SignUp';

class PopupExamplePinned extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show:false
        }
        this.renderSignUpPage=this.renderSignUpPage.bind(this);
        this.closeSignUpPage = this.closeSignUpPage.bind(this);
    }
    componentWillMount(){
        document.addEventListener('mousedown',this.handleClick,false);
    }
    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClick,false);
    }

    handleClickOutside=()=>{
        if(this.state.show===false){
            this.setState({show:false},()=>{
                this.props.onCloseAccountPage();
            })
        }
    }

    handleClick=(e)=>{
        if(this.node.contains(e.target)){
            return;
        }
    this.handleClickOutside();
    }

    renderSignUpPage=()=>{
        if(this.state.show !==true){
            this.setState({show:true})
            }
    }

    closeSignUpPage(){
        if(this.state.show===true){
            this.setState({show:false})
        }
    }
 
    
    render(){
        return(
         <div ref={node=>this.node=node}>    
            <div className="account-popup">
            <div style={{paddingRight:'32vh'}}>Your Account</div>
            <br/>
            <button onClick={this.renderSignUpPage} className="button-login">Log&nbsp;In/Sign&nbsp;Up</button>
            {this.state.show?<SignUp onCloseSignUpPage={this.closeSignUpPage}/>:" " }
             <div style={{padding:"10px 130px 5px 0px"}}>
            <span>Hi</span>&nbsp;
            <span>Vishal</span><br/>
            <span style={{paddingLeft:"35px",fontSize: "12px",color:"#9d9d9d"}}> +91&nbsp;9987517015</span>
            </div>
            <hr/>
                <ul className="header-links">
                <li className="li-def">&nbsp;&nbsp;&nbsp;&nbsp;<a><div className="my-orders">&nbsp;&nbsp;&nbsp;&nbsp;My Orders</div></a></li>
                <hr/>
                <li className="li-def">&nbsp;&nbsp;&nbsp;&nbsp;<a><div className="my-orders">&nbsp;&nbsp;&nbsp;&nbsp;Logout</div></a></li>
                </ul>
            </div> 
         </div>
        );
    }
}

export default PopupExamplePinned
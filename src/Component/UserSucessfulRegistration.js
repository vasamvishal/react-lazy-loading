import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class UserSucessfulRegistration extends React.Component {
    constructor() {
        super()
        this.state = {
            open: true,
            vertical: 'top',
            horizontal: 'center'
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };
    
    render() {
        return (
            <div>
                {/* <Button onClick={this.handleClick}>Open simple snackbar</Button> */}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="User has been sucessfully registered"
                    action={
                         <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div >
        );
    }
}

export default UserSucessfulRegistration;


/**
 * Created by jyothi on 27/4/17.
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import OAuth from './OAuth';

export default class Header extends Component {

    render(){
        const { isLoggedIn } = this.props;
        return(
            <AppBar
                title="CrazyPulka"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={isLoggedIn ? <Logged /> : <Login />}
            />
        )
    }

}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Login extends Component {
    static muiName = 'FlatButton';

    constructor(props){
        super(props);
        this.state = {
            askLogin: false
        };
    }

    render() {
        const {askLogin} = this.state;
        return (
            <div>
                <FlatButton {...this.props} label="Login" onClick={() =>  this.setState({askLogin: !askLogin})}/>
                <OAuth show={askLogin}/>
            </div>
        );
    }
}
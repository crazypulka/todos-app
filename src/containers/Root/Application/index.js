/**
 * Created by jyothi on 26/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { MainHeader }from './components';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function mapStateToProps(state) {
    return {
        router: state.routing
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //logout: () => dispatch(logoutUser()),
    };
}

class App extends Component{

    componentWillMount(){
        injectTapEventPlugin();
    }

    componentWillReceiveProps(nextProps){

     }

    render() {
        const {children} = this.props;

        const isLoggedIn = token && token !== null && typeof token !== 'undefined';
        const showSideBar = app && app.app_versions && Object.keys(app.app_versions).length > 0;

        return (
            <MuiThemeProvider>

            </MuiThemeProvider>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
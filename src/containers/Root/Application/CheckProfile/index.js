/**
 * Created by jyothi on 14/5/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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

const token = 1234567;

/**
 * Checks for existence of User and profile privacy
 */
class CheckProfile extends Component{

    componentWillMount(){
        //TODO:
    }

    componentWillReceiveProps(nextProps){

    }

    render() {
        const {children} = this.props;

        const isLoggedIn = token && token !== null && typeof token !== 'undefined';

        return isLoggedIn ? children : null;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckProfile);
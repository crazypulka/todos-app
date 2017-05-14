/**
 * Created by jyothi on 26/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../../components/Header';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Todo from '../../../components/Todo';
import { ProfileComponent } from './RequireAuth/Profile/components';
import Todos from './RequireAuth/Todos';

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

class App extends Component{

    componentWillMount(){
        injectTapEventPlugin();
    }

    componentWillReceiveProps(nextProps){

    }

    render() {
        const {children} = this.props;

        const isLoggedIn = token && token !== null && typeof token !== 'undefined';

        return (
            <MuiThemeProvider>
                <div className="container-full">
                    <Header isLoggedIn={false}/>
                    {
                        children
                    }
                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
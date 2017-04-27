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
                    <Header isLoggedIn={true}/>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <Paper zDepth={1}>
                                        <RaisedButton label="Yesterday" primary={true} style={{width: '100%'}} />
                                    </Paper>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <Paper zDepth={1}>
                                        Center
                                    </Paper>
                                </div>
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <Paper zDepth={1}>
                                        <RaisedButton label="Tomorrow" secondary={true} style={{width: '100%'}}/>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
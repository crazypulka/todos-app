/**
 * Created by jyothi on 14/5/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Todo from '../../../../../components/Todo';
import { TODO_FILTER_ENUM } from '../../../../../constants';
import { ProfileComponent } from './components';

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

class Error404 extends Component {

    constructor(props){

        super(props);
        this.state = {

        }

    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps){

    }

    render() {

        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1 col-lg-1 visible-md visible-lg">

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <ProfileComponent/>
                        </div>
                        <div className="col-md-1 col-lg-1 visible-md visible-lg">

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Error404.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Error404);
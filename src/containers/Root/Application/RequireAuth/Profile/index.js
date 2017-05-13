/**
 * Created by jyothi on 30/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Todo from '../../../../../components/Todo';
import { TODO_FILTER_ENUM } from '../../../../../constants/index';
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

const token = 1234567;

class Profile extends Component {

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
                        <div className="col-md-2 col-lg-2 visible-md visible-lg">

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <ProfileComponent/>
                        </div>
                        <div className="col-md-2 col-lg-2 visible-md visible-lg">

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Profile.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
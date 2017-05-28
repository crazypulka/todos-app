/**
 * Created by jyothi on 30/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { darkWhite, blue900, red900 } from 'material-ui/styles/colors'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Todo from '../../../../../components/Todo';
import { TODO_FILTER_ENUM } from '../../../../../constants';
import { TodosToolbar } from './components';

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

class Todos extends Component {

    constructor(props){

        super(props);
        this.state = {
            currentFilter: TODO_FILTER_ENUM.ALL
        }

    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps){

    }

    handleDateFilter = (date) => {

    };

    handleTodoFilter = (filter) => {

    };

    render() {

        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1 col-lg-1 visible-md visible-lg">
                            <Paper zDepth={1} className="text-center">
                                <IconButton tooltip="Done" touch={true} tooltipPosition="bottom-right" onClick={() => {}}>
                                    <ArrowBack color={red900}/>
                                </IconButton>
                            </Paper>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <TodosToolbar handleTodoFilter={this.handleTodoFilter} handleDateFilter={this.handleDateFilter}/>
                            <Paper zDepth={1}>
                                <Todo/>
                            </Paper>
                        </div>
                        <div className="col-md-1 col-lg-1 visible-md visible-lg">
                            <Paper zDepth={1} className="text-center">
                                <IconButton tooltip="Tomorrow" touch={true} tooltipPosition="bottom-left" onClick={() => {}}>
                                    <ArrowForward color={blue900}/>
                                </IconButton>
                            </Paper>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todos);
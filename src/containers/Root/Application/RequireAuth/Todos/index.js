/**
 * Created by jyothi on 30/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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
                        <div className="col-md-2 col-lg-2">
                            <Paper zDepth={1}>
                                <RaisedButton label="Yesterday" primary={true} style={{width: '100%'}} />
                            </Paper>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <TodosToolbar handleTodoFilter={this.handleTodoFilter} handleDateFilter={this.handleDateFilter}/>
                            <Paper zDepth={1}>
                                <Todo/>
                            </Paper>
                        </div>
                        <div className="col-md-2 col-lg-2">
                            <Paper zDepth={1}>
                                <RaisedButton label="Tomorrow" secondary={true} style={{width: '100%'}}/>
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
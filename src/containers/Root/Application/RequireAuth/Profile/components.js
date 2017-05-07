/**
 * Created by jyothi on 30/4/17.
 */
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';
import EventIcon from 'material-ui/svg-icons/action/event';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import AllIcon from 'material-ui/svg-icons/content/select-all';
import SortIcon from 'material-ui/svg-icons/content/sort';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import moment from 'moment';
import {
    blue500, red500, green500, purple500, amber500, deepOrange500,
    lightBlack, blue900, darkWhite, fullWhite, lightWhite, blue200, blue300
} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import {Card, CardHeader} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { TODO_FILTER_ENUM } from '../../../../../constants';

export class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: false, //not model item
            name: "",
            username: "",
            email: "",
            mobile: "",
            location: "",
            verified: false,
            timezone: null,
            gender: 0,
            dob: null,
            isPublic: false,
            daily: [],
            weekly: [],
            monthly: []
        };
    }

    handleToggle = (event, toggle) => {
        this.setState({inEditMode: toggle});
    };

    handleDOBChange = (event, value) => {
        this.setState({date: value});
    };

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };

    render() {

        const { inEditMode, name, username, email, mobile,
            location, verified, timezone, gender, dob,
            isPublic, daily, weekly, monthly
        } = this.state;

        return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-9">
                                <Toggle
                                    toggled={inEditMode}
                                    onToggle={this.handleToggle}
                                    labelPosition="right"
                                    label="Edit"
                                />
                            </div>
                            <div className="col-md-3">
                                <Avatar
                                    src="/assets/img/user.png"
                                    size={200}
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <TextField
                                    value={name}
                                    onChange={this.handleNameChange}
                                    fullWidth={true}
                                    hintText="Full Name"
                                    floatingLabelText="Full Name"
                                />
                                <Card>
                                    <CardHeader
                                        title="URL Avatar"
                                        avatar="images/ok-128.jpg"
                                        titleStyle={{fontSize: '24px'}}
                                    />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        );
    }
}
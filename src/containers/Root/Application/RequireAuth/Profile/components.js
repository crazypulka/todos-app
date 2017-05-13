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
import {Card, CardHeader, CardText,  CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { TODO_FILTER_ENUM } from '../../../../../constants';

const FloatingText = (props) => (
    <span>
        {props.children}
        {props.required && <sup style={{color: red500}}>*</sup>}
    </span>
);

const titleStyles = {
    fontSize: '24px'
};

const subTitleStyles = {
    fontSize: '11px'
};

export class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: false, //not model item
            name: "",
            about: "",
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
            monthly: [],
            locations: []
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

    handleAboutChange = (e) => {
        this.setState({about: e.target.value});
    };

    handleUserNameChange = (e) => {
        this.setState({username: e.target.value});
    };

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handleMobileChange = (e) => {
        this.setState({mobile: e.target.value});
    };

    handleDateChange = (event, value) => {
        this.setState({dob: value.toLocaleDateString()});
    };

    handleSearch = (value) => {
        this.setState({
            locations: [
                value,
                value + value,
                value + value + value,
            ],
            location: value
        });
    };

    handleUpdate = (e) => {
        //TODO:
        this.handleToggle(e, false);
    };

    render() {

        const { inEditMode, name, about, username, email, mobile,
            location, verified, timezone, gender, dob,
            isPublic, daily, weekly, monthly, locations
        } = this.state;

        return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Card expanded={true} onExpandChange={this.handleExpandChange}>
                            <CardMedia
                                overlay={
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <Toggle
                                                    toggled={inEditMode}
                                                    onToggle={this.handleToggle}
                                                    labelPosition="right"
                                                    label="Edit"
                                                />
                                                <CardTitle title={name} subtitle={about} titleColor={fullWhite} subtitleColor={darkWhite}/>
                                            </div>
                                            <div className="col-md-3">
                                                <Avatar
                                                    src="/assets/img/user.png"
                                                    size={150}
                                                    style={{}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <img src="/assets/img/LinkedinCover.jpg" />
                            </CardMedia>
                            {
                                inEditMode &&
                                <CardText>
                                    <TextField
                                        value={username}
                                        onChange={this.handleUserNameChange}
                                        fullWidth={true}
                                        floatingLabelText={<FloatingText required>username</FloatingText>}
                                    />
                                    <TextField
                                        value={name}
                                        onChange={this.handleNameChange}
                                        fullWidth={true}
                                        floatingLabelText={<FloatingText required>Full Name</FloatingText>}
                                    />
                                    <TextField
                                        value={about}
                                        onChange={this.handleAboutChange}
                                        fullWidth={true}
                                        multiLine={true}
                                        rowsMax={2}
                                        floatingLabelText={<FloatingText required>About</FloatingText>}
                                    />
                                    <TextField
                                        value={email}
                                        onChange={this.handleEmailChange}
                                        fullWidth={true}
                                        floatingLabelText={<FloatingText required>Email</FloatingText>}
                                    />
                                    <DatePicker
                                        autoOk={true}
                                        container="inline"
                                        onChange={this.handleDateChange}
                                        defaultDate={new Date()}
                                        textFieldStyle={{cursor: 'pointer'}}
                                        fullWidth={true}
                                        floatingLabelText={<FloatingText>Date of Birth</FloatingText>}
                                    />
                                    <TextField
                                        value={mobile}
                                        onChange={this.handleMobileChange}
                                        fullWidth={true}
                                        floatingLabelText={<FloatingText>Mobile</FloatingText>}
                                    />
                                    <AutoComplete
                                        dataSource={locations}
                                        onUpdateInput={this.handleSearch}
                                        textFieldStyle={{color: darkWhite}}
                                        fullWidth={true}
                                        floatingLabelText={<FloatingText>Location</FloatingText>}
                                    />
                                </CardText>
                            }
                            {
                                !inEditMode &&
                                    <div>
                                        <CardTitle
                                            title={username}
                                            titleStyle={titleStyles}
                                            subtitle="@username"
                                            subtitleStyle={subTitleStyles}
                                        />
                                        <CardTitle
                                            title={name}
                                            titleStyle={titleStyles}
                                            subtitle="Full Name"
                                            subtitleStyle={subTitleStyles}
                                        />
                                        <CardTitle
                                            title={email}
                                            titleStyle={titleStyles}
                                            subtitle="Email"
                                            subtitleStyle={subTitleStyles}
                                        />
                                        <CardTitle
                                            title={dob}
                                            titleStyle={titleStyles}
                                            subtitle="Date of Birth"
                                            subtitleStyle={subTitleStyles}
                                        />
                                        <CardTitle
                                            title={mobile}
                                            titleStyle={titleStyles}
                                            subtitle="Mobile"
                                            subtitleStyle={subTitleStyles}
                                        />
                                        <CardTitle
                                            title={location}
                                            titleStyle={titleStyles}
                                            subtitle="Location"
                                            subtitleStyle={subTitleStyles}
                                        />
                                    </div>
                            }
                            {
                                inEditMode &&
                                    <CardActions className="text-right">
                                        <RaisedButton label="Update" primary={true} onClick={this.handleUpdate} />
                                    </CardActions>
                            }
                        </Card>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        );
    }
}
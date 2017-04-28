/**
 * Created by jyothi on 28/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from './TimePicker';

class PrioritySelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.handleChange(value);
    };

    render() {
        return (
            <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false}>
                <MenuItem value={1} primaryText="Low" />
                <MenuItem value={0} primaryText="Moderate" />
                <MenuItem value={-1} primaryText="High" />
            </DropDownMenu>
        );
    }
}

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: false,
            id: null,
            timestamp: null,
            title: "",
            description: "",
            startTime: null,
            endTime: null,
            status: false, //TODO: 3 states
            label: "Default",
            priority: "" //TODO: ENUM here
        };
    }

    handleExpandChange = (inEditMode) => {
        this.setState({inEditMode: inEditMode});
    };

    handleToggle = (event, toggle) => {
        this.setState({inEditMode: toggle});
    };

    handleExpand = () => {
        this.setState({inEditMode: true});
    };

    handleReduce = () => {
        this.setState({inEditMode: false});
    };

    handleTitleChange = (event, value) => {
        this.setState({title: value.trim()});
    };

    handleDescriptionChange = (event, value) => {
        this.setState({description: value.trim()});
    };

    handlePriorityChange = (value) => {
        this.setState({priority: value});
    };

    handleStartTimeChange = (value) => {
        this.setState({startTime: value});
    };

    handleEndTimeChange = (value) => {
        this.setState({endTime: value});
    };

    render() {
        const {
            inEditMode, title, description, label, startTime, endTime,
            status, timestamp
        } = this.state;
        return (
            <Card expanded={inEditMode} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    subtitle={description}
                    avatar="/assets/img/pulka.png"
                    actAsExpander={true}
                    showExpandableButton={true}
                    closeIcon={<ModeEdit />}
                    openIcon={<ModeEdit />}
                />
                <CardText expandable={true}>
                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                hintText="Title of new Pulka"
                                value={title}
                                onChange={this.handleTitleChange}
                            />
                            <TextField
                                hintText="description if any"
                                value={description}
                                onChange={this.handleDescriptionChange}
                            />
                        </div>
                        <div className="col-md-6">
                            Start Time: <TimePicker hintText="Start Time" handleChange={this.handleStartTimeChange} autoOk={true}/>
                            End Time: <TimePicker hintText="End Time" handleChange={this.handleEndTimeChange} autoOk={true}/>
                        </div>
                    </div>
                    <PrioritySelector handleChange={this.handlePriorityChange}/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions expandable={true}>
                    <FlatButton label="Save" onTouchTap={this.handleExpand} />
                    <FlatButton label="Edit" onTouchTap={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}


/**
 * Created by jyothi on 28/4/17.
 */
import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import NotificationOff from 'material-ui/svg-icons/social/notifications-off';
import NotificationActive from 'material-ui/svg-icons/social/notifications-active';
import NotificationOn from 'material-ui/svg-icons/alert/add-alert';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from './TimePicker';
import Slider from 'material-ui/Slider';
import { TIME_FORMATS, PRIORITY, PRIORITY_LABELS } from '../constants';
import {
    blue500, red500, green500, purple500, amber500, deepOrange500,
    lightBlack, blue900
} from 'material-ui/styles/colors';
import { isDefined } from '../utils';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class PrioritySelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 0,
            label: PRIORITY_LABELS.MODERATE
        };
    }

    componentWillMount(){
        const {value} = this.props;
        this.setState({value, label: value > 0 ? PRIORITY_LABELS.HIGH : (value < 0 ? PRIORITY_LABELS.LOW : PRIORITY_LABELS.MODERATE)});
    }

    handleChange = (event, value) => {
        this.setState({value, label: value > 0 ? PRIORITY_LABELS.HIGH : (value < 0 ? PRIORITY_LABELS.LOW : PRIORITY_LABELS.MODERATE)});
        this.props.handleChange(value);
    };

    render() {
        const {value, label} = this.state;
        return (
            <div className="text-center">
                <span>Priority: <strong>{label}</strong></span>
                <div style={{margin: '0 auto', width: '30px'}}>
                    <Slider step={1} style={{height: 90}} axis="y" defaultValue={0} onChange={this.handleChange} min={-1} max={1} />
                </div>
            </div>
        );
    }
}

const todoAttributeIconHolderStyles = {
    marginRight: '50px',
    marginTop: '10px'
};

const todoAttributeIconStyles = {
    width: '20px',
    height: '20px',
    marginRight: '10px'
};

const strikeThroughTextStyles = {
    textDecoration: 'line-through'
};

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: false,
            priorityColor: blue500,
            hintTitleError: false,
            _id: null,
            timestamp: null,
            title: "",
            description: "",
            startTime: null,
            endTime: null,
            status: false, //TODO: 3 states
            label: "Default",
            priority: PRIORITY.MODERATE,
            notify: false,
        };
    }

    componentWillMount(){
        const {handleSave, handleUpdate, ...todo} = this.props;
        this.handlePriorityChange(todo.priority);
        this.setState({...todo});
    }

    componentWillReceiveProps(nextProps){ //TODO:
        const {} = nextProps;
    }

    handleExpandChange = (inEditMode) => {
        this.setState({inEditMode: inEditMode});
    };

    handleExpand = () => {
        this.setState({inEditMode: true});
    };

    handleReduce = () => {
        this.setState({inEditMode: false});
    };

    handleTitleChange = (event, value) => {
        this.setState({title: value, hintTitleError: !value.trim()});
    };

    handleDescriptionChange = (event, value) => {
        this.setState({description: value});
    };

    handlePriorityChange = (value) => {
        const priorityColor = value > 0 ? red500 : (value < 0 ? amber500 : blue900);
        this.setState({priority: value, priorityColor: priorityColor});
    };

    handleStartTimeChange = (value) => {
        this.setState({startTime: value});
    };

    handleEndTimeChange = (value) => {
        this.setState({endTime: value});
    };

    handleSave = (e) => {
        let {hintTitleError, inEditMode, priorityColor, ...todo} = this.state;
        if(isDefined(todo.title.trim())){
            this.props.saveTodo(...todo);
        }else{
            this.setState({hintTitleError: true});
        }
    };

    render() {
        const {
            _id, inEditMode, title, description,
            label, startTime, endTime, status,
            timestamp, priority, priorityColor, hintTitleError,
            notify
        } = this.state;
        const {isNew = false} = this.props;
        return (
            <Card expanded={inEditMode} initiallyExpanded={isNew} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    subtitle={description}
                    avatar="/assets/img/pulka.png"
                    actAsExpander={true}
                    showExpandableButton={true}
                    closeIcon={<SettingsIcon color={lightBlack} />}
                    openIcon={<SettingsIcon color={lightBlack}/>}
                    titleColor={priorityColor}
                    titleStyle={status && strikeThroughTextStyles}
                    subtitleStyle={status && strikeThroughTextStyles}
                >
                    <div className="pull-right" style={todoAttributeIconHolderStyles}>
                        {
                            status && <CheckCircleIcon color={green500} style={todoAttributeIconStyles}/>
                        }
                        {
                            notify && <NotificationActive color={purple500} style={todoAttributeIconStyles}/>
                        }
                    </div>
                </CardHeader>
                <CardText expandable={true} style={{borderBottom: '1px solid #DDD', borderTop: '1px solid #DDD'}}>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            { !status &&
                                <IconButton tooltip="Done" touch={true} tooltipPosition="top-center" onClick={() => this.setState({status: true})}>
                                    <CheckCircleIcon color={green500} />
                                </IconButton>
                            }
                            { status &&
                                <IconButton tooltip="Undone" touch={true} tooltipPosition="top-center" onClick={() => this.setState({status: false})}>
                                    <ClearIcon color={red500} />
                                </IconButton>
                            }
                        </div>
                        <div className="col-md-4">
                            { !notify &&
                                <IconButton
                                            tooltip="Enable Notification"
                                            touch={true}
                                            tooltipPosition="top-center"
                                            onClick={() => this.setState({notify: true})}
                                >
                                    <NotificationOn color={purple500} />
                                </IconButton>
                            }
                            { notify &&
                                <IconButton
                                            tooltip="Disable Notification"
                                            touch={true}
                                            tooltipPosition="top-center"
                                            onClick={() => this.setState({notify: false})}
                                >
                                    <NotificationOff color={deepOrange500}/>
                                </IconButton>
                            }
                        </div>
                    </div>
                </CardText>
                <CardText expandable={true}>
                    <div className="row">
                        <div className="col-md-5">
                            <TextField
                                value={title}
                                onChange={this.handleTitleChange}
                                floatingLabelText="Title of new Pulka"
                                {...{errorText: hintTitleError && "Title required..!"}}
                            />
                            <TextField
                                value={description}
                                onChange={this.handleDescriptionChange}
                                floatingLabelText="Ingredients if any (description)"
                            />
                        </div>
                        <div className="col-md-5">
                            <TimePicker value={startTime} floatingLabelText="Start Time" handleChange={this.handleStartTimeChange} autoOk={true}/>
                            <TimePicker value={endTime} floatingLabelText="End Time" handleChange={this.handleEndTimeChange} autoOk={true}/>
                        </div>
                        <div className="col-md-2">
                            <PrioritySelector value={priority} handleChange={this.handlePriorityChange}/>
                        </div>
                    </div>
                </CardText>
                <CardActions expandable={true}>
                    {
                        isDefined(_id) ?
                            <FlatButton label="Update" primary={true} onTouchTap={this.handleReduce} />
                            : <FlatButton label="Save" primary={true} onTouchTap={this.handleSave} />
                    }
                </CardActions>
            </Card>
        );
    }
}


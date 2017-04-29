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
import Slider from 'material-ui/Slider';
import { TIME_FORMATS, PRIORITY, PRIORITY_LABELS } from '../constants';
import {blue500, red500, green500} from 'material-ui/styles/colors';
import { isDefined } from '../utils';

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
            priority: PRIORITY.MODERATE
        };
    }

    componentWillMount(){
        const {handleSave, handleUpdate, ...todo} = this.props;
        this.handlePriorityChange(todo.priority);
        this.setState({...todo});
    }

    componentWillReceiveProps(nextProps){
        const {handleSave, handleUpdate, ...todo} = nextProps;
        this.handlePriorityChange(todo.priority);
        this.setState({...todo});
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
        this.setState({title: value.trim(), hintTitleError: !value.trim()});
    };

    handleDescriptionChange = (event, value) => {
        this.setState({description: value.trim()});
    };

    handlePriorityChange = (value) => {
        const priorityColor = value > 0 ? red500 : (value < 0 ? green500 : blue500);
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
        if(isDefined(todo.title)){
            this.props.saveTodo(...todo);
        }else{
            this.setState({hintTitleError: true});
        }
    };

    render() {
        const {
            _id, inEditMode, title, description,
            label, startTime, endTime, status,
            timestamp, priority, priorityColor, hintTitleError
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
                    titleColor={priorityColor}
                    subtitleColor={priorityColor}
                />
                <CardText expandable={true}>
                    <div className="row text-center">
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
                                floatingLabelText="Description of Pulka"
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
                            <FlatButton label="Update" onTouchTap={this.handleReduce} />
                            : <FlatButton label="Save" onTouchTap={this.handleSave} />
                    }
                </CardActions>
            </Card>
        );
    }
}


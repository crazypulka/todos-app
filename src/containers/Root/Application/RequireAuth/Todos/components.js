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
import { TODO_FILTER_ENUM } from '../../../../../constants';

const DATE_MAPPER = {
    1: [moment(), moment()],
    2: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    3: [moment().add(1, 'days'), moment().add(1, 'days')],
    4: [moment().startOf("week"), moment().endOf("week")],
    5: [moment().subtract(1, 'week').startOf("week"), moment().subtract(1, "week").endOf("week")],
    6: [moment().startOf('month'), moment().endOf('month')],
    7: [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
};

export class TodosToolbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: 3,
            filter: TODO_FILTER_ENUM.ALL,
            dataSource: []
        };
    }

    handleDateChange = (event, value) => {
        this.props.handleDateFilter(DATE_MAPPER[value]);
        this.setState({date: value});
    };

    handleFilterChange = (event, index, filter) => {
        this.props.handleTodoFilter(filter);
        this.setState({filter});
    };

    handleSearch = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {

        const {date, filter, dataSource} = this.state;

        return (
            <Toolbar style={{backgroundColor: blue900, color: fullWhite}}>
                <ToolbarGroup>
                    <ToolbarTitle text="Pulkas" style={{color: darkWhite}} />
                    <FloatingActionButton mini={true} style={{margin: 'auto 10px'}}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <ToolbarSeparator />
                    <SearchIcon color={blue500} style={{margin: 'auto 10px'}}/>
                    <AutoComplete
                        hintText={<span style={{color: blue500}}>Search Pulkas..</span>}
                        dataSource={dataSource}
                        onUpdateInput={this.handleSearch}
                        textFieldStyle={{color: darkWhite}}
                    />
                    <ToolbarSeparator />
                    <SortIcon color={blue500} style={{margin: 'auto 10px'}}/>
                    <DropDownMenu value={filter} onChange={this.handleFilterChange} labelStyle={{color: darkWhite, fontSize: '18px'}} style={{width:150}} fixedWidth={true}>
                        <MenuItem value={TODO_FILTER_ENUM.ALL} primaryText="All" leftIcon={<AllIcon color={blue500}/>} />
                        <MenuItem value={TODO_FILTER_ENUM.DONE} primaryText="Done" leftIcon={<CheckCircleIcon color={green500}/>} />
                        <MenuItem value={TODO_FILTER_ENUM.UNDONE} primaryText="Undone" leftIcon={<ClearIcon color={red500} />} />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <ToolbarSeparator />
                    <EventIcon color={blue500} style={{margin: 'auto 10px'}}/>
                    <DatePicker
                        hintText="Select Date"
                        autoOk={true}
                        container="inline"
                        onChange={this.handleDateChange}
                        defaultDate={new Date()}
                        textFieldStyle={{maxWidth:120, cursor: 'pointer'}}
                        inputStyle={{color: darkWhite}}
                        underlineShow={false}
                    />
                    {/*<DropDownMenu value={date} onChange={this.handleDateChange} labelStyle={{color: darkWhite, fontSize: '18px'}} style={{width:180}} fixedWidth={true}>
                        <MenuItem value={1} primaryText="Today" />
                        <MenuItem value={2} primaryText="Yesterday" />
                        <MenuItem value={3} primaryText="Tomorrow" />
                        <MenuItem value={4} primaryText="This Week" />
                        <MenuItem value={5} primaryText="Last Week" />
                        <MenuItem value={6} primaryText="This Month" />
                        <MenuItem value={7} primaryText="Last Month" />
                    </DropDownMenu>*/}
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
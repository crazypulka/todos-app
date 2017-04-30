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
import ClearIcon from 'material-ui/svg-icons/content/clear';
import AllIcon from 'material-ui/svg-icons/content/select-all';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import moment from 'moment';
import {
    blue500, red500, green500, purple500, amber500, deepOrange500,
    lightBlack, blue900
} from 'material-ui/styles/colors';

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
            value: 3,
            filter: 1,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    handleFilterChange = (event, index, filter) => this.setState({filter});

    render() {

        const {value, filter} = this.state;

        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="Todos" />
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <RaisedButton label="Create Broadcast" primary={true} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <AllIcon color={blue500}/>
                    <DropDownMenu value={this.state.filter} onChange={this.handleFilterChange}>
                        <MenuItem value={1} primaryText="All" leftIcon={<AllIcon color={blue500}/>} />
                        <MenuItem value={2} primaryText="Done" leftIcon={<CheckCircleIcon color={green500}/>} />
                        <MenuItem value={3} primaryText="Undone" leftIcon={<ClearIcon color={red500} />} />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Today" />
                        <MenuItem value={2} primaryText="Yesterday" />
                        <MenuItem value={3} primaryText="Tomorrow" />
                        <MenuItem value={4} primaryText="This Week" />
                        <MenuItem value={5} primaryText="Last Week" />
                        <MenuItem value={6} primaryText="This Month" />
                        <MenuItem value={7} primaryText="Last Month" />
                    </DropDownMenu>
                    <FloatingActionButton mini={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
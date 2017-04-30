/**
 * Created by jyothi on 29/4/17.
 */
import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import { TIME_FORMATS } from '../constants';

export default class CustomTimePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
    }

    handleChangeTimePicker = (event, date) => {
        this.props.handleDateChange(date);
        this.setState({value: date});
    };

    render() {
        const { format=TIME_FORMATS.FULL, hintText } = this.props;
        return (
            <div>
                <TimePicker
                    format={format}
                    value={this.state.value}
                    onChange={this.handleChangeTimePicker}
                    {...this.props}
                />
            </div>
        );
    }
}
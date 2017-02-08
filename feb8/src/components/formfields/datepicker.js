import React, { PropTypes } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';  

var PickDate = React.createClass({
     getInitialState: function() {
        return {
            startDate: moment()
        };
    },

    handleChange: function(date) {
        this.setState({
            startDate: date
        });
        // console.log("hello", date)
    }, 
    render() {
        return (
            <div className="form-group">
                <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
            </div>
        );
    }
});

export default PickDate;
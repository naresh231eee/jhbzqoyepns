import React, { PropTypes } from 'react';
import * as apidata from '../api/api_form.jsx';
var TradingSelectOption = React.createClass({
    render() {
        // console.log(this.props.id);
      console.log(this.props.view);
    return (
            <option value={this.props.value}>{this.props.view}</option>
        )
    }   
    
});

var TradingSelectBox = React.createClass({
     getInitialState: function() {
        return {
            changedValue: null
        }
    },
    onchangeHandler(e){
        this.state.changedValue = e.target.value;
        this.props.tradingDesk(e.target.value)
    },    
    render() {
        return (
            <div>
                <select onChange={this.onchangeHandler} id={this.props.sid ? this.props.sid : ''} className="boxMinWidth">
                 {(this.props.data).map((result, index) => ( 
                     result[this.props.id] !== this.state.changedValue ? 
                    <TradingSelectOption key={index+'d'} value={result[this.props.id]} view={result[this.props.value]} /> :
                    null
                 ))}
                </select>
            </div>
        );
    }
});

export default TradingSelectBox;
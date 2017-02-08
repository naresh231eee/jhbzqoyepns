import React, { PropTypes } from 'react';
import * as apidata from '../api/api_form.jsx';
var SelectOption = React.createClass({
    render() {
        // console.log(this.props.id);
      console.log(this.props.view);
    return (
            <option value={this.props.value}>{this.props.view}</option>
        )
    }   
    
});

var SelectBox = React.createClass({    
    render() {
        // alert('select')
        console.log("this.props.data");
        // console.log(this.props.data);
        return (
            <div>
                <select id={this.props.sid ? this.props.sid : ''} className="boxMinWidth">
                 {(this.props.data).map((result, index) => ( 

                    <SelectOption key={index+'d'} value={result[this.props.id]} view={result[this.props.value]} />
                 ))}
                </select>
            </div>
        );
    }
});

export default SelectBox;
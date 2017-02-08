import React, { PropTypes } from 'react';
import Dropdown from "react-dropdown-multiselect";
import * as apidata from '../api/api_form.jsx';

var MultiSelect = React.createClass({
    onSelect: function(option) {
      console.log('You selected ', option.label)
      this.setState({selected: option})
    },
    render() {
    return (
      <Dropdown onChange={this.onSelect.bind(this)}  />
    );
  }
 
});

export default MultiSelect;
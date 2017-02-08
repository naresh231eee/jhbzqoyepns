import React, { PropTypes } from 'react';
import * as apidata from '../api/api_form.jsx';
var SelectOption = React.createClass({
    render() {
        console.log(this.props.id);
        console.log(this.props.val);
    return (
            <option value={this.props.id}>{this.props.val}</option>
        )
    }   
    
});

var MultiSelect = React.createClass({    
    getInitialState() {
    return {expanded: false};     
  },
  showCheckboxes() {
      var checkboxes = document.getElementById("checkboxes");
      if (!this.state.expanded) {
          $("#checkboxes").show();
           
          this.state.expanded = true;
      } else { 
          $("#checkboxes").hide();
          this.state.expanded = false;
      }
  },
  render() {
    return (
        <div className="multiselect">
            <div className="selectBox" onClick={this.showCheckboxes()}>
                <select>
                    <option>Select an option</option>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </select>
                <div className="overSelect"></div>
            </div>
            <div id="checkboxes">
                <label for="one"><input type="checkbox" id="one"/>First checkbox</label>
                <label for="two"><input type="checkbox" id="two"/>Second checkbox </label>
                <label for="three"><input type="checkbox" id="three"/>Third checkbox</label>
            </div>
        </div>
       
    )
  }
});

export default MultiSelect;
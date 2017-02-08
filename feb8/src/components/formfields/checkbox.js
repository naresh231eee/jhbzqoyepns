import React from "react";

var CheckBox = React.createClass({
   getInitialState() {
      return {
         "checked": false,
      }
   },
   clickHandler(e){
       if(this.props.ccyPair){
           this.props.ccyPair(e);
       } 

   },
    render() {
        return (
           <input onClick={this.clickHandler} id={this.props.sid ? this.props.sid : ''}  name={this.props.name ? this.props.name : ''}
               checked={this.props.checked} className={this.props.classBankRow} value={this.props.rowIndex ? this.props.rowIndex : '' } type="checkbox">
          </input>

        );
    }
});

export default CheckBox;
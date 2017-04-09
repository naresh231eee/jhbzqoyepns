import React from "react";
import * as _ from "lodash";
var SelectOption = React.createClass({
    getInitialState() {
        return {
            "value": null,
        }
    },
    render() {

        return ( <option value = { this.props.value }> { this.props.view } </option>
        )
    },
});

var SelectBox = React.createClass({

    render() {
        //    console.log(this.props.data);
        var placeholderoption = null;
        if (this.props.placeholder) {
            placeholderoption = <SelectOption value = ""
            view = { this.props.placeholder }
            className = "form-control" /> ;
        }
        //  console.log("this.props.disabled");
        // console.log(this.props.disabled);
        return ( <div>
            <select id = { this.props.sid ? this.props.sid : '' }
                className = {this.props.className ? this.props.className : 'boxMinWidth'}
                key = { Math.random() }
                disabled = { this.props.disabled ? "disabled" : "" }
                value = { this.props.selected }
                onChange={this.props.onChange}
                defaultValue = { this.props.defaultVal && this.props.defaultVal ? this.props.defaultVal : '' }
                ref = { this.props.ref ? this.props.ref : '' } >

            { placeholderoption } {
                _.map(this.props.data, (data, key)=>{
                                        return (<option value={data.refDataValue}>{data.refDataValue}</option>)
                                })} 
            }</select> </div>
        );
    }
});

export default SelectBox;
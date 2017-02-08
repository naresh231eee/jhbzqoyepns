import React from "react";
var SelectOption = React.createClass({
    getInitialState() {
        return {
            "value": null,
        }
    },
    render() {

        return (
            <option value={this.props.value}>{this.props.view}</option>
        )
    },
});

var SelectBox = React.createClass({

    render() {
        //    console.log(this.props.data);
        var placeholderoption = null;
        if (this.props.placeholder) {
            placeholderoption = <SelectOption value="" view={this.props.placeholder} className="form-control" />;
        }
        //  console.log("this.props.defaultVal");
        // console.log(this.props.onChange);
        return (
            <div>
                <select id={this.props.sid ? this.props.sid : ''}
                    className="boxMinWidth" key={Math.random()}
                    disabled={this.props.disabled && this.props.disabled === 'disabled' ? "disabled" : ""}
                    value={this.props.selected}
                    
                    // onChange={this.defaultOnChange}
                    defaultValue={this.props.defaultVal && this.props.defaultVal ? this.props.defaultVal : ''}
                    ref={this.props.ref ? this.props.ref : ''}>

                    {placeholderoption};
                 {this.props.data && (this.props.data).map((result, index) => {
                        return (<SelectOption key={result[this.props.value] + index} value={result[this.props.id]} view={result[this.props.value]} className="form-control" />)
                    })}
                </select>
            </div>
        );
    }
});

export default SelectBox;
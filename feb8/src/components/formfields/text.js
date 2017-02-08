import React, { PropTypes } from 'react';

var InputText = React.createClass({
     
    render() {
        return (
            <div>
                <input type="text" id={this.props.sid ? this.props.sid : ''}/>
            </div>
        );
    }
});

export default InputText;
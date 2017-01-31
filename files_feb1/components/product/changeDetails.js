import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute   } from 'react-router'

import InputText from "./../formfields/text.js";
import SelectBox from "./../formfields/select.js";
import * as apidata from "./../api/api_form";

var ChangeDetails = React.createClass({

    onchange(e){
        
      //  this.props.saveChangeDetails(e.target.id, e.target.value);

    },

    render() {
        // console.log("Change Details");
        // console.log(this.props.changeDetails.reasonforchange);
        return (
            <div className="container txt-color">
                <div className="clear"></div>
                
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="qlProduct">Reason For Change 
                                	<span> *</span>
                                </label>
                               { /* <SelectBox onChange={this.onchange} sid="reasonforchange" data={apidata.ReasonForChange} value={apidata.apiKeys.value} id={apidata.apiKeys.value}
                                defaultVal={this.props.changeDetails.reasonforchange!=="" ? this.props.changeDetails.reasonforchange : ''}
                                placeholder="Select"
                               />*/ }
                                 
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="pricingModel">Comment</label>
                                { /*<InputText sid="comment" />*/ }
                            </div>
                        </div>
                    </div>
                    
            </div>
        );
    }
});

export default ChangeDetails;

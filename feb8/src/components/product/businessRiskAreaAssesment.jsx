import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute   } from 'react-router'

import BusinessArea from "./businessArea.jsx";
import SelectBox from "./../formfields/select.js";
import * as apidata from "./../api/api_form.jsx";

var BusinessRiskAreaAssesment = React.createClass({
   getInitialState: function(){
      return {"insert":false};
   },
   getKeyByValue(value, dataGroup){
      if(dataGroup){
         var i,
            len = dataGroup.length;
         for (i = 0; i < len; i++) {
            if (dataGroup[i].refDataKeyName == value){
               return dataGroup[i].idValues;
            }
         }
      }
   },
   handleClick : function(){
      this.setState({"insert":true});
   },
    render() {
       var businessAreaView;
       if(this.state.insert)          {
          businessAreaView = <BusinessArea />;
       };
        let overallRiskStatus = this.getKeyByValue("Overall Risk Status", apidata.refData.refDataKeyGroups);
        let riskStatus = this.getKeyByValue("Risk Status", apidata.refData.refDataKeyGroups);
        let businessArea = this.getKeyByValue("Business Area", apidata.refData.refDataKeyGroups);
        return (
            <div className="container txt-color">
                <div className="clear"></div>
                 <div className="row">
                     <div className="col-lg-4 col-md-4 col-sm-4">
                         <div className="form-group">
                             <label for="overallProductRiskStatus">Overall Product Risk Status</label>
                             <SelectBox data={overallRiskStatus} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                         </div>
                     </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group">
                           <label for="overallProductRiskStatus">Risk Status</label>
                           <SelectBox data={riskStatus} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                        </div>
                    </div>
                     <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group">
                           <label for="riskStatus">Business Area</label>
                           <SelectBox data={businessArea} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                        </div>
                     </div>
                     <div className="col-lg-1 col-md-1 col-sm-1">
                          <div className="form-group margin-top-20">
                                <label></label>
                                <button className="btn btn-primary" onClick={this.handleClick} type="button">Add</button>
                          </div>
                     </div>
                 </div>
                 {businessAreaView}
            </div>
        );
    }
});

export default BusinessRiskAreaAssesment;

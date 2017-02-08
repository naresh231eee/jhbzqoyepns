import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute   } from 'react-router'

import SelectBox from "../formfields/select.js";
import * as apidata from "../api/api_form.js";

var TradeBookingSystem = React.createClass({
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

    render() {
         console.log("Trade Booking System");
        let tradeBookingSystem = this.getKeyByValue("Trade Booking System", apidata.refData.refDataKeyGroups);
        let advisoryBasis = this.getKeyByValue("Advisory Basis", apidata.refData.refDataKeyGroups);
        let distributionMethod = this.getKeyByValue("Distribution Method", apidata.refData.refDataKeyGroups);
        return (
            <div className="container txt-color">
                <div className="clear"></div>
               
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label for="tradeBookingSystem">Trade Booking System</label>
                                <SelectBox data={tradeBookingSystem} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label for="advisoryBasis">Advisory Basis</label>
                                <SelectBox data={advisoryBasis} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label for="distributionMethod">Distribution Method</label>
                                <SelectBox data={distributionMethod} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }
});

export default TradeBookingSystem;

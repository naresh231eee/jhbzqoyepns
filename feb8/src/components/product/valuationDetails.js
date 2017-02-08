import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute   } from 'react-router'

import SelectBox from "./../formfields/select.js";
import * as apidata from "../api/api_form.js";

var ValuationDetails = React.createClass({
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
        // console.log("valuation Deails")
        let QLProduct = this.getKeyByValue("QL Product", apidata.refData.refDataKeyGroups);
        let pricingModel = this.getKeyByValue("Pricing model", apidata.refData.refDataKeyGroups);
        return (
            <div className="container txt-color">
                <div className="clear"></div>
               
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="qlProduct">QL Product</label>
                                <SelectBox data={QLProduct} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="pricingModel">Pricing Model</label>
                                <SelectBox data={pricingModel} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                    </div>
               
            </div>
        );
    }
});

export default ValuationDetails;

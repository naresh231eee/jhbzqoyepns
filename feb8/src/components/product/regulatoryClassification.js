import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute   } from 'react-router'
import SelectBox from "../formfields/select.js";
import * as apidata from "../api/api_form";


var RegulatoryClassification = React.createClass({
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

        // Application MiFID Client Classification
        let MIFIDClassification = this.getKeyByValue("MIFID Classification", apidata.refData.refDataKeyGroups);
        let MIFIDIIClassification = this.getKeyByValue("MIFID II Classification", apidata.refData.refDataKeyGroups);
        let ISDAClassification = this.getKeyByValue("ISDA Classification", apidata.refData.refDataKeyGroups);
        console.log("RegulatoryClassification Details");
       
        return (
            <div className="container txt-color">
                <div className="clear"></div>
                
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="MIFID1Classification">MIFID I Classification</label>
                                <SelectBox data={MIFIDClassification} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                            <div className="form-group">
                                <label for="MIFID2Classification">MIFID II Classification</label>
                                <SelectBox data={MIFIDIIClassification} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="ISDAClassification">ISDA Classification</label>
                                <SelectBox data={ISDAClassification} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} />
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }
});

export default RegulatoryClassification;

/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import moment from "moment";
import SelectBox from "../formfields/select.js";
import CheckBox from "../formfields/checkbox.js";
import * as apidata from "../api/api_form.js";

var AddBankEntityRow= React.createClass({
   getInitialState: function() {
      var refData = {};
      var currency1 = (this.props.dataEntityRow) ? this.props.dataEntityRow.currency1: '';
      var currency2 = (this.props.dataEntityRow) ? this.props.dataEntityRow.currency2: '';
      var backToBack = (this.props.dataEntityRow) ? this.props.dataEntityRow.backToBack: '';
      var benchmark = (this.props.dataEntityRow) ? this.props.dataEntityRow.benchmark: '';
      var fixedRateOnly = (this.props.dataEntityRow) ? this.props.dataEntityRow.fixedRateOnly: '';
      var fixingBenchmark = (this.props.dataEntityRow) ? this.props.dataEntityRow.fixingBenchmark: '';
      var issuer = (this.props.dataEntityRow) ? this.props.dataEntityRow.issuer: '';
      var securityType = (this.props.dataEntityRow) ? this.props.dataEntityRow.securityType: '';
      var settledCashOnly = (this.props.dataEntityRow) ? this.props.dataEntityRow.settledCashOnly: '';
      var settlementSystem = (this.props.dataEntityRow) ? this.props.dataEntityRow.settlementSystem: '';
      var tenor = (this.props.dataEntityRow) ? this.props.dataEntityRow.tenor: '';
      var underlyingStatus = (this.props.dataEntityRow) ? this.props.dataEntityRow.underlyingStatus: '';
      var underlyingStatusChangeDate = (this.props.dataEntityRow) ? this.props.dataEntityRow.underlyingStatusChangeDate: '';
      if (this.props.dataEntityRow.underlyingStatusChangeDate) {
         var underlyingStatusChangeDateFormated = this.formatDateString(this.props.dataEntityRow.underlyingStatusChangeDate);
      }
      var underlyingStatusChangeDate = (this.props.dataEntityRow) ? underlyingStatusChangeDateFormated: '';
      return {
         refData: refData, currency1: currency1, currency2: currency2, backToBack: backToBack,benchmark: benchmark,
         fixedRateOnly: fixedRateOnly, fixingBenchmark: fixingBenchmark, issuer: issuer,
         securityType: securityType, settledCashOnly: settledCashOnly, settlementSystem,
         settlementSystem, tenor: tenor, underlyingStatus: underlyingStatus, underlyingStatusChangeDate: underlyingStatusChangeDate,
         currencies : this.props.dataEntityRow ? this.props.dataEntityRow : ''
      }
   },
   //Format Date string
   formatDateString: function(string) {
      var date = moment(string).toDate();
      var dateFormated = moment(date).format("DD/MM/YYYY");
      return dateFormated;
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
   handleInputChange(name, e){
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
   },
    handleSelectRowChange(e) { 
		let id = e.target.id;
		let value = e.target.value;
		let splitId = id.split("_");
		let column = splitId[0]+"_"+splitId[4];
		let columnIndex = splitId[1];
		var change = {}; 
		this.state.currencies[column] = value; 
	},
       
   render() {
      let ccy1 = this.getKeyByValue(apidata.APD_CURRENCY, this.props.refData.refDataKeyGroups);
      let ccy2 = this.getKeyByValue(apidata.APD_CURRENCY, this.props.refData.refDataKeyGroups);
      let tenor = this.getKeyByValue(apidata.TENOR, this.props.refData.refDataKeyGroups);
      let issuerTypeOfSecurity = this.getKeyByValue(apidata.ISSUER_TYPE_OF_SECURITY, this.props.refData.refDataKeyGroups);
      let securityType = this.getKeyByValue(apidata.SECURITY_TYPE, this.props.refData.refDataKeyGroups);
      let benchmark = this.getKeyByValue(apidata.BENCHMARK, this.props.refData.refDataKeyGroups);
      let underlyingStatus = this.getKeyByValue(apidata.UNDERLYING_STATUS, this.props.refData.refDataKeyGroups);
      // console.clear();
      console.log("1--->" + this.props.dataEntityRow.ccy_1);
      console.log("2--->" + this.props.dataEntityRow.ccy_2);
      console.log("3--->" + this.props.dataEntityRow.ccy_3);
      return (
         <div className="container">
            <div className="row bankEntity currencyCol">
               <div className="col-md-7">
                  <div className="col-md-12">
                     <div className="col-md-1 currencyCheckboxColumn">
                        <div className="form-group">

                                <input   id={'eachBankRow_'+this.props.tradingIndex+'_'+this.props.bankentityIndex+'_'+this.props.rowIndex} 
                className={'eachBankRow_'+this.props.tradingIndex+'_'+this.props.bankentityIndex} defaultValue="1" type="checkbox" />
                            

                        </div>
                     </div>
                     <div className="col-md-1">
                        <div className="form-group">
                           <SelectBox data={ccy1}  key={Math.random()}                               
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid = {"ccy_"+this.props.tradingIndex+"_"+this.props.bankentityIndex+"_"+this.props.rowIndex+"_1"}
                                onChange={this.handleSelectRowChange} 
                                defaultVal={this.props.dataEntityRow.ccy_1 !== "" ? this.props.dataEntityRow.ccy_1 : "Select"  }
                                placeholder="Select"
                           />

                        </div>
                     </div>
                     <div className="col-md-1">
                        <div className="form-group">
                           <SelectBox data={ccy2}  key={Math.random()} 
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid = {"ccy_"+this.props.tradingIndex+"_"+this.props.bankentityIndex+"_"+this.props.rowIndex+"_2"}
                                onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_2 !== "" ? this.props.dataEntityRow.ccy_2 : "Select"  }
                                placeholder="Select"
                           />

                        </div>
                     </div>
                     <div className="col-md-1">
                        <div className="form-group">
                           <SelectBox data={tenor}  key={Math.random()} 
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid = {"ccy_"+this.props.tradingIndex+"_"+this.props.bankentityIndex+"_"+this.props.rowIndex+"_3"}
                                onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_3 !== "" ? this.props.dataEntityRow.ccy_3 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-1">
                        <div className="form-group">
                          <SelectBox data={apidata.boolean}  key={Math.random()} 
                                id={apidata.apiKeys.id}
                                value={apidata.apiKeys.value}
                                sid = {"ccy_"+this.props.tradingIndex+"_"+this.props.bankentityIndex+"_"+this.props.rowIndex+"_4"}
                                onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_4 !== "" ? this.props.dataEntityRow.ccy_4 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-1">
                        <div className="form-group">
                           <SelectBox data={apidata.boolean}  key={Math.random()} 
                                selected={this.state.settledCashOnly}
                                id={apidata.apiKeys.id}
                                value={apidata.apiKeys.value}
                                sid="settledCashOnly"
                                onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_5 !== "" ? this.props.dataEntityRow.ccy_5 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={issuerTypeOfSecurity}  key={Math.random()} 
                                selected={this.state.securityType}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="securityType"
                                 onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_6 !== "" ? this.props.dataEntityRow.ccy_6 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={securityType}  key={Math.random()} 
                                selected={this.state.issuer}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="issuer"
                                 onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_7 !== "" ? this.props.dataEntityRow.ccy_7 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={benchmark}  key={Math.random()} 
                                selected={this.state.benchmark}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="benchmark"
                                 onChange={this.handleSelectRowChange}
                                defaultVal={this.props.dataEntityRow.ccy_8 !== "" ? this.props.dataEntityRow.ccy_8 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="col-md-12">
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={apidata.jsonData}  key={Math.random()} 
                                selected={this.state.commodityInformation}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="commodityInformation"
                                onChange={this.handleInputChange.bind(this,'commodityInformation' )}
                                defaultVal={this.props.dataEntityRow.ccy_9 !== "" ? this.props.dataEntityRow.ccy_9 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={apidata.jsonData}  key={Math.random()} 
                                selected={this.state.fixingBenchmark}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="fixingBenchmark"
                                onChange={this.handleInputChange.bind(this,'fixingBenchmark' )}
                                defaultVal={this.props.dataEntityRow.ccy_10 !== "" ? this.props.dataEntityRow.ccy_10 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={apidata.boolean}  key={Math.random()} 
                                selected={this.state.fixedRateOnly}
                                id={apidata.apiKeys.id}
                                value={apidata.apiKeys.value}
                                sid="fixedRateOnly"
                                onChange={this.handleInputChange.bind(this,'fixedRateOnly')}
                               defaultVal={this.props.dataEntityRow.ccy_11 !== "" ? this.props.dataEntityRow.ccy_11 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={apidata.jsonData}  key={Math.random()} 
                                selected={this.state.settlementSystem}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="settlementSystem"
                                onChange={this.handleInputChange.bind(this,'settlementSystem' )}
                                defaultVal={this.props.dataEntityRow.ccy_12 !== "" ? this.props.dataEntityRow.ccy_12 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <SelectBox data={underlyingStatus}  key={Math.random()} 
                                selected={this.state.underlyingStatus}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid="underlyingStatus"
                                onChange={this.handleInputChange.bind(this,'underlyingStatus' )}
                                defaultVal={this.props.dataEntityRow.ccy_13 !== "" ? this.props.dataEntityRow.ccy_13 : "Select"  }
                                placeholder="Select"/>
                        </div>
                     </div>
                     <div className="col-md-2">
                        <div className="form-group">
                           <p>{this.state.underlyingStatusChangeDate}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   );
   }
});

export default AddBankEntityRow;

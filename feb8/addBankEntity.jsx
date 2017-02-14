/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import AddBankEntityRow from "./addBankEntityRow.jsx";
import CommoditiesFeatures from "./commoditiesFeatures.jsx";
import SelectBox from "./../formfields/select.js";
import CheckBox from "./../formfields/checkbox.js";
import * as apidata from "./../api/api_form.jsx";

var NewBankEntity= React.createClass({
   getInitialState: function () {
      return this.getStateFromProps(this.props);
   },
   getStateFromProps: function (props) {
      var refData, disableFormFields = {};
      var bankEntityRows = [];
      if(this.props.bankEntityResult) {
         bankEntityRows = this.props.bankEntityResult;
         // bankEntityCurrencies = this.props.bankEntityResult.bankEntityCurrencies;
         var bankEntityStatus = this.props.bankEntityResult.bankEntityStatus;
         var anyCcyPairAllowed = this.props.bankEntityResult.anyCcyPairAllowed;
      }
      return {
         "insertRow":false, bankEntityStatus: bankEntityStatus, refData: refData,
         disableFormFields: disableFormFields, bankEntityRows: this.props.bankEntityResult,
         anyCcyPairAllowed: anyCcyPairAllowed
      };
   },
   componentWillReceiveProps: function (newProps) {
      //console.log("AddBankEntity:componentWillReceiveProps.props",newProps);
      if(newProps.isSuccess) {
         this.setState(this.getStateFromProps(newProps));
      }
   },
   addNewRow() {
      this.state.bankEntityRows.bankEntityCurrencies.push({'bankEntityCurrencyId':  Math.random(),
         'currency1' : '',
         'currency2' : '',
         'backToBack' : '',
         'benchmark' : '',
         'fixedRateOnly' : '',
         'fixingBenchmark' : '',
         'issuer' : '',
         'securityType' : '',
         'settledCashOnly' : '',
         'settlementSystem' : '',
         'tenor' : '',
         'underlyingStatus' : '',
         'underlyingStatusChangeDate' : ''
      });
      this.forceUpdate();
   },
   deleteRowHandler(e){
      //let deleteRowId = e.target.id.split("_")[1];
      //this.deleteRows(e.target.id);
      let rowBankId = e.target.id;
      let rowBank = rowBankId.split("_");
      let rowBankKey = rowBank[1]+'_'+rowBank[2];
      let parentKey = rowBank[1];
      let childKey = rowBank[2];
      let totalChange = document.getElementsByClassName('eachBankRow_'+rowBankKey).length;
      let updateRow = [];
      for(let i=0; i < totalChange; i++){
         if(document.getElementsByClassName('eachBankRow_'+rowBankKey)[i].checked){
            document.getElementsByClassName('eachBankRow_'+rowBankKey)[i].checked = false ;
         } else {
            updateRow.push(this.state.bankEntityRows.bankEntityCurrencies[i]);
         }
      }
      this.state.bankEntityRows.bankEntityCurrencies = updateRow;
      this.setState({bankEntityRows: this.state.bankEntityRows});
      this.forceUpdate();
   },
   removeBankEntity(e){
      let deleteBankEntityId = e.target.id.split("_")[1];
      this.props.deleteBankEntity(e.target.id);
   },
   handleInputChange(name, e){
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
   },
   getRefDataValueForKey: function(key) {
      return this.props.refData.get(key);
   },
   handleSelectChange(e){
      var bankEntityRows = this.state.bankEntityRows;
      var id = e.target.id;
      var column = id.split("_")[0];
      var value = e.target.value;
      bankEntityRows[column] = value;
      this.setState(bankEntityRows);
   },
   handleCheckboxChange(e) {
      var bankEntityRows = this.state.bankEntityRows;
      var id = e.target.id;
      var column = id.split("_")[0];
      var value = e.target.checked ? 'Y':'N';
      bankEntityRows[column] = value;
      this.setState(bankEntityRows);
   },
   ccyPair(e){
      var bankEntityRows = this.state.bankEntityRows;
      let bankEntityIdCcyPair = e.target.id;
      let lengthBankEntity = this.state.bankEntityRows.bankEntityCurrencies.length;
      let rowBank = bankEntityIdCcyPair.split("_");
      let rowBankKey = rowBank[1]+'_'+rowBank[2];
      for(let j=0; j<lengthBankEntity; j++){
         if(document.getElementById(e.target.id).checked) {
            document.getElementById("currency2_"+rowBankKey+"_"+j+"_2").setAttribute("disabled", "disabled");
         }
         else {
            console.log("bankEntityIdCcyPair disabled")
            document.getElementById("currency2_"+rowBankKey+"_"+j+"_2").removeAttribute("disabled");
         }
      }
      var column = bankEntityIdCcyPair.split("_")[0];
      var value = e.target.checked ? 'Y':'N';
      bankEntityRows[column] = value;
      this.setState(bankEntityRows)
   },
   render() {
      var bankEntityRow;
      if(this.state.insertRow){
         bankEntityRow = <AddBankEntityRow />;
      }
      let underlyingStatus = this.getRefDataValueForKey(apidata.UNDERLYING_STATUS);
      var anyCcyPairAllowed = this.state.anyCcyPairAllowed=='Y' ? true:false;
      console.log("this.state.bankEntityRows.bankEntityCurrencies", this.state.bankEntityRows.bankEntityCurrencies);

      return (
         <div className="wrapper">
            <div className="row">
               <div className="col-lg-2 col-md-2 col-sm-2">
                  <div className="form-group  margin-left-25">
                     <h2 className="">{this.props.bankEntityName}</h2>
                  </div>
               </div>
               <div className="col-lg-2 col-md-2 col-sm-2">
                  <div className="form-group">
                     <label for="bankEntityStatus">Bank status</label>
                    <SelectBox data={underlyingStatus}
                                selected={this.state.bankEntityStatus}
                                value={apidata.apiKeys.refDataValue}
                                id={apidata.apiKeys.refDataValue}
                                sid={"bankEntityStatus_"+this.props.tradingIndex+"_"+this.props.bankentityIndex+"_"}
                                onChange={this.handleSelectChange}
                                placeholder="Please select Entity Status"
                                disabled={this.props.disableFormFields}
                     />

                  </div>
               </div>
               <div className="col-lg-1 col-md-1 col-sm-1">
                  <div className="form-group">
                     <label></label>
                     <button className="btn btn-default" type="button" onClick={this.removeBankEntity}
                         id={'bankEntity_'+this.props.tradingIndex+'_'+this.props.bankentityIndex} disabled={this.props.disableFormFields}>Remove Bank Entity
                     </button>
                  </div>
               </div>
            </div>
            <div className="clear"></div>
            <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                     <label for="ccyPair">Any CCY Pair Combination Allowed
                        <span>(Lowest Tenor will be applied)</span>
                     </label>
                     <CheckBox classBankRow={'eachBankEntity_'+this.props.tradingIndex+'_'+this.props.bankentityIndex}
                               sid={'anyCcyPairAllowed_'+this.props.tradingIndex+'_'+this.props.bankentityIndex}
                               checked={anyCcyPairAllowed}
                               value={this.state.anyCcyPairAllowed}
                               disabled={this.props.disableFormFields}
                               //onChange={this.handleCheckboxChange}
                              onChange={this.ccyPair}
                     />
                  </div>
               </div>
               <div className="col-lg-2 col-md-2 col-sm-2"></div>
               <div className="col-lg-4 col-md-4 col-sm-4 pull-right padding-left-90">
                  <input type="button" className="btn btn-primary margin-right-10" value="Add new Row" onClick={this.addNewRow} disabled={this.props.disableFormFields} />
                  <input type="button" className="btn btn-default margin-right-10" value="Delete Rows" disabled={this.props.disableFormFields}
                         id={'deleterow_'+this.props.tradingIndex+'_'+this.props.bankentityIndex} onClick={this.deleteRowHandler}  />
               </div>
            </div>
            <div className="clear"></div>
            <CommoditiesFeatures refData={this.props.refData}/>
         </div>

      );
   }
});
export default NewBankEntity;

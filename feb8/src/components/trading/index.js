import React from "react";
import AddTradingDesk from "./addTradingDesk.js";
import * as apidata from "../api/api_form.js";
import SelectBox from "../formfields/select.js";
import * as util from "../../util/util.js";

var x = [];
var TradingDesk = React.createClass({
   // Initial state.
   getInitialState: function(){
      var tradingDesk = this.props.productId ? this.props.pd.productTradingDesks : [];
      var bankEntityRow = { 'bankEntityCurrencyId':  Math.random()};
      var deskValue= deskValue;
      var refData = {};
      var disableFormFields={};
      var multiSelectName ={};
      return{
         "insert":false, tradingDesk: tradingDesk, bankEntityRow: bankEntityRow,
         multiBankEntity: x, deskValue: deskValue, refData: refData,
         disableFormFields: disableFormFields, multiSelectName: multiSelectName
      }
   },
   getKeyByValue(value, dataGroup){
       util.getKeyByValues(value, dataGroup);
       console.log("Printed-------->")
       console.log(value)
       console.log(dataGroup)
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
   mapSelectOptionsWithReactSelect(results) {
      if (results && results.length > 0) {
         return results.map((result) => {
            return {
               label: result.refDataValue,
               value: result.refDataId
            };
         });
      }
      return [];
   },

   addTradingDesks(){
      let selectTradingDeskObj = this.getKeyByValue(apidata.TRADING_DESK, this.props.refData.refDataKeyGroups);
      let p = '';
      let selectedTradingDesk = document.getElementById('tradingBox').value;
      if(selectedTradingDesk !== ''){
      for(var i=0; i< selectTradingDeskObj.length; i++){
         if(parseInt(selectedTradingDesk) === parseInt(selectTradingDeskObj[i].refDataId)){
            p = selectTradingDeskObj[i].refDataValue;
         }
      }
      } else {
          this.state.errorHandlers.push("Please select Trading Desk");
        //   return false;
      }
      let TradingArray = this.state.tradingDesk;
      let validTradingDesk = true;
      for(let x=0; x<TradingArray.length; x++){
         if(validTradingDesk){
            if(TradingArray[x].deskName === p){
               validTradingDesk =  false;
               this.state.errorHandlers.push( p +" trading dek already added");
            //    return false;
            } else {
                
               validTradingDesk = true
            }
         }
      }

      if(validTradingDesk){
         this.state.tradingDesk.push({
            "approvalRestrictions": [{"approvalRescriptionId":'',
               "description":"",
               "type":""}],
            "bankEntities":[],
            "productTradingDesks": [],
            "clientJurisdiction":"",
            "deskHead": "",
            "deskName":p,
            "deskTradeConditions":[],
            "internalTradesOnly":"",
            "overallRisKStatus":"",
            "primaryDesk":"",
            "secondaryDesk":"",
            "restrictionType":  '',
            "tradingDeskId":"",
            "clientSegment":{
                'internalTradesOnly' : "N",
                'interbankMarket' : "N",
                'financialInstitutions' : "N",
                'globalCorporates' : "N",
                'midmarketers' : "N",
                'sme' : "N",
                'smeSegment' : "N",
                'wealth' : "N",
                'retailBusinessBank' : "N",
                'retail' : "N",
            },
            }
         );
        
      }
      document.getElementById('tradingBox').value = '';
   // console.log("Trading Updating");
   // console.log(this.state.tradingDesk);
    this.forceUpdate();
   },
    deleteTrading(id){
        
        // return false;
	   console.log(id)
	   let delId = id.split("_");
	   let tradingId = delId[1];
       console.log(tradingId);
       let updateTradingDesk = [];
       let tradingLength = this.state.tradingDesk.length;
       console.log(this.state.tradingDesk.length);
		for (let i = 0; i < tradingLength; i++) {
            console.log(parseInt(i) !== parseInt(tradingId));
            if (parseInt(i) !== parseInt(tradingId)) {           
                updateTradingDesk.push(this.state.tradingDesk[i]);
            }
		}
        console.log(updateTradingDesk);

        this.state.tradingDesk = updateTradingDesk; 
		console.log("------------");
		console.log(this.state.tradingDesk); 
		this.forceUpdate(); 

   },
   getTradingDetails(){
       console.log("Print this hello")
       this.props.getTradingDetails(this.state.tradingDesk)
   },
   deleteBankEntity(bankEntity, key){
      
       this.state.tradingDesk[key].bankEntities = bankEntity;
   },
   render() {
    //    console.clear();
      let selectDesk = util.getKeyByValues(apidata.TRADING_DESK, this.props.refData.refDataKeyGroups);
       console.log("Welcome to print");
       console.log(this.props.refData.refDataKeyGroups);
       console.log(selectDesk);

      this.approvedHeritage = util.getKeyByValues(apidata.APPROVED_HERITAGE, this.props.refData.refDataKeyGroups);
      var rows = []; var len = 0;
      if(this.state.insert){
         var i=0, len = $("#tradingBox").length,
            deskValue = $("#tradingBox").val(),
            deskName = $("#tradingBox option:selected").text();
            while (++i <= len) { rows.push(i); }
      }
      this.getTradingDetails();
      return (
         <div>
            <div className="list-group-item product-containers tradingbg">{ this.props.itemdetails}
               <div className="container txt-color form-inline">
                  <div className="form-group">
                    <SelectBox sid="tradingBox" data={selectDesk} id={apidata.apiKeys.refDataId}
                        value={apidata.apiKeys.refDataValue}
                        defaultVal=""
                        placeholder="---- Select trading desk ----"
                        disabled={this.props.disabled}
                    />
                  </div>
                  <button type="button" className="btn btn-primary margin-bottom-10 margin-left-25"  disabled={this.props.disabled} onClick={this.addTradingDesks}> Add </button>
               </div>
            </div>
            { (this.state.tradingDesk && this.state.tradingDesk.length > 0) ?  (this.state.tradingDesk).map((result, index) => (
               <AddTradingDesk
                  key={'newTrading'+Math.random()}
                  tradingIndex={index}
                   
                  deleteRows={this.deleteRowHandler}
                  deleteBankEntity={this.deleteBankEntityHandler}
                  bankEntities = {result.bankEntities}
                  deskValue={result}
                   
                  approvalRestrictions={result.approvalRestrictions}
                  id={apidata.apiKeys.refDataId}
                  addNewBankEntity={this.addNewBankEntity}
                  value={apidata.apiKeys.refDataValue}
                  deskName = {result.deskName}
                  selectDesk={selectDesk}
                  refData={this.props.refData}
                  disableFormFields={this.props.disabled}
                  multiSelectName={this.props.multiSelectName}
                  getTradingDetails={this.getTradingDetails}
                  deleteBankEntity={this.deleteBankEntity}
                  primarySecondaryHandler = {this.props.primarySecondaryHandler}
                  clientSegmentHandler = {this.props.clientSegmentHandler}
                  deleteTrading = {this.deleteTrading}
                  showHide={false}
               />
            )) : ''}
         </div>
      );
   }
});

export default TradingDesk;

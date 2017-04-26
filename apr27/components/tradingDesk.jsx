import React from "react";
import moment from "moment";
import AddTradingDesk from "./addTradingDesk.jsx";
import * as apidata from "./../api/api_form.jsx";
import SelectBox from "./../formfields/select.jsx";
var TradingDesk = React.createClass({
   isComponentDirty:false,
   getInitialState: function () {
      return this.getStateFromProps(this.props);
   },
   getStateFromProps: function (props) {
      var refData, disableFormFields, multiSelectName = {};
      var tradingDesk = this.props.productId ? this.props.pd.productTradingDesks : [];
      var productType = this.props.pd ? this.props.pd.productType : '';
      var params = this.props.params ? this.props.params : '';
      var isSuccess = this.props.isSuccess ? this.props.isSuccess : '';
      var errorHandlers = this.props.errorHandlers ? this.props.errorHandlers : '';
      return {
         "insert":false, tradingDesk: tradingDesk, refData: refData, productType : productType,
         disableFormFields: disableFormFields, multiSelectName: multiSelectName, params : params,
         isSuccess: isSuccess, errorHandlers: errorHandlers
      };
   },
   componentWillReceiveProps: function (newProps) {
      console.log("TradingDesk:componentWillReceiveProps.props",newProps);
      if(! this.isComponentDirty) {
         this.setState(this.getStateFromProps(newProps));
      }
   },

   updateUnderlyingStatus(id, value) {
      var eachTrading = this.state.tradingDesk; // this.state.trading;
      console.log(eachTrading);
      console.log('this.state.trading', this.state.tradingDesk);
      console.log('eachTrading --> ', eachTrading);
      eachTrading[id] =  this.totalTradingUnderlyingStatus(eachTrading[id], value);
      this.forceUpdate();
      // trading[column] = value;
      this.setState({tradingDesk: eachTrading});
  },

  reloadRows(zRowsData, value){

        _.map(zRowsData, (data, key)=>{
               zRowsData[key].underlyingStatus = value;
                
        });
        return zRowsData
   },

   

   
  totalTradingUnderlyingStatus(trading, value){
                 console.log("-------------------------------------------------trading");
                 console.log(trading);
    trading.deskStatus = value;
    trading.bankEntities =  this.reloadBankEntityRows(trading.bankEntities, value);
    return trading;
         
  },
  
  reloadBankEntityRows(zRowsData, value){
    _.map(zRowsData, (data, key)=>{
        zRowsData[key].bankEntityStatus = value;
      _.map(data.bankEntityCurrencies, (d, k)=>{
        zRowsData[key].bankEntityCurrencies[k].underlyingStatus = value;
      });
    });
    return zRowsData
  },

  handleUnderlyingRows(tradingDeskId, bankEntityRowId, value){
    console.log(tradingDeskId, bankEntityRowId, value)
        /*console.log(e.target.id)
         var bankEntityRows = this.state.bankEntityRows;
      var id = e.target.id;
      var column = id.split("_")[1];
      var value = e.target.value;
      console.log(this.state.bankEntityRows.bankEntityCurrencies);
     this.state.bankEntityRows.bankEntityCurrencies =  
     this.reloadRows(this.state.bankEntityRows.bankEntityCurrencies, value);
      bankEntityRows.bankEntityStatus = value;
      this.setState(bankEntityRows);*/

      var eachTrading = this.state.tradingDesk; // this.state.trading;
      console.log(eachTrading);
      console.log('this.state.trading', this.state.tradingDesk);
      console.log('eachTrading --> ', eachTrading);
      eachTrading[tradingDeskId].bankEntities[bankEntityRowId].bankEntityStatus =  value;
      eachTrading[tradingDeskId].bankEntities[bankEntityRowId].bankEntityCurrencies =  this.reloadRows(eachTrading[tradingDeskId].bankEntities[bankEntityRowId].bankEntityCurrencies, value);
      this.forceUpdate();
      // trading[column] = value;
      this.setState({tradingDesk: eachTrading});
   },
   

    
      
   addTradingDesks(){

      let selectTradingDeskObj = this.getRefDataValueForKey(apidata.TRADING_DESK);
      let p = '';
      let selectedTradingDesk = document.getElementById('tradingBox').value;
      console.log("selectedTradingDesk");
      console.log(selectedTradingDesk);
      if(selectedTradingDesk !== '') {
         for (var i = 0; i < selectTradingDeskObj.length; i++) {
           console.log(selectTradingDeskObj[i].refDataValue);
            // if (parseInt(selectedTradingDesk) === parseInt(selectTradingDeskObj[i].refDataId)) {
            if (selectedTradingDesk === selectTradingDeskObj[i].refDataValue) {
               p = selectTradingDeskObj[i].refDataValue;
            }
         }
      } else {
         //this.props.isSuccess = false;
         //this.props.errorHandlers.push(apidata.TRADING_DESK_VALIDATION_MESSAGE);
         this.setState({isSuccess: false,
            errorHandlers:apidata.TRADING_DESK_VALIDATION_MESSAGE });
      }
      let TradingArray = this.state.tradingDesk;
     // console.log(TradingArray);
      let validTradingDesk = true;
      for(let x=0; x<TradingArray.length; x++){
         if(validTradingDesk){
         //  console.log(TradingArray[x].deskName +' --- '+ p)
            if(TradingArray[x].deskName === p){
               validTradingDesk =  false;
               console.log("in valid");
               alert(apidata.ONLY_ONE_INSTANCE_OF_TRADING_DESK_ALLOWED);
               return false;
            } else {

               console.log("valid");
               validTradingDesk = true
            }
         }
      }
   //   console.log("Desk Name :");
    //  console.log(p);
      if(validTradingDesk){
         this.state.tradingDesk.push({
               "deskAttributes": [],
               "bankEntities": [],
               "productTradingDesks": [],
               "clientJurisdiction": "",
               "deskHead": "",
               "deskName": p,
               "deskStatus":'',
               "deskTradeConditions": [],
               "primaryDesk": "N",
               "secondaryDesk": "N",
               "internalTradesOnly": "N",
               "interbankTradesBToBOnly": "N",
               "financialInstitutions": "N",
               "globalCorporates": "N",
               "midMarkets": "N",
               "sME": "N",
               "sMESegment": "N",
               "wealth": "N",
               "retailBusinessBanking": "N",
               "retail": "N",
               "tradingDeskId": "",
               "description":'',
               "type":'',
               "MaxmumLimitSizePerTrade": '',
               "MinimumLimitSizePerTrade": '',
               "totalNotionalLimit": '',
               "maxNumberOfTrades": '',
               "maxNoCallPeriod": '',
               "clientTypeRestriction": '',
               "exchangeName": '',
               "exchangeProductSymbol": ''
            }
         );
         this.isComponentDirty = true;
         console.log(this.state.tradingDesk);
         this.forceUpdate();
      }
   },
   getTradingDetails(){
      this.props.getTradingDetails(this.state.tradingDesk)
      return this.state.tradingDesk;
   },
   getRefDataValueForKey: function(key) {
      return this.props.refData.get(key);
   },
   componentDidMount(){
      console.log("TradingDesk:componentDidMount: Component mounting finished:", moment(moment.now()).format("DD/MM/YYYY hh:mm:ss A"));
   },
   componentWillMount: function() {
      console.log("TradingDesk:componentWillMount: Component mounting started:", moment(moment.now()).format("DD/MM/YYYY hh:mm:ss A"));
   },
   deleteBankEntity(bankEntity, key){
      console.log(bankEntity);
      this.state.tradingDesk[key].bankEntities = bankEntity;
      this.isComponentDirty = true;
   },
   deleteTrading(id){
      let delId = id.split('_');
      let tradingId = delId[1];
      let updateTradingDesk = [];
      let tradingLength = this.state.tradingDesk.length;
      for(let i=0; i < tradingLength; i++){
         if(parseInt(i) !== parseInt(tradingId)){
            updateTradingDesk.push(this.state.tradingDesk[i]);
         }
         this.state.tradingDesk = updateTradingDesk;
         this.forceUpdate();
         this.isComponentDirty = true;
      }
   },
   enableDisableExternal(indexValue, isChecked){
      var checkboxes = document.getElementsByClassName(indexValue+"_external_Channels");
      for(var i=0; i < checkboxes.length; i++){
        if(isChecked){
          this.state.tradingDesk[indexValue][checkboxes[i].name] = "N";
          checkboxes[i].setAttribute("disabled", "disabled");
            
        } else {
           checkboxes[i].removeAttribute("disabled");
        }
      }
      this.state.tradingDesk[indexValue].internalTradesOnly = "Y";
      this.forceUpdate();
      this.isComponentDirty = true;
   },
   render() {
      let selectDesk = this.getRefDataValueForKey(apidata.TRADING_DESK);
      let approvedHeritage = this.getRefDataValueForKey(apidata.BANK_ENTITY);

      var rows = []; var len = 0;
      if(this.state.insert){

         var i=0, len = $("#tradingBox").length,
            deskValue = $("#tradingBox").val(),
            deskName = $("#tradingBox option:selected").text();
         while (++i <= len) { rows.push(i); }
      }
      console.log("Trading Desk")
      console.log(this.state.tradingDesk)
      //get Trading Desk values to Save or Submit
      // this.getTradingDetails();
      return (
         <div>
            {/*<div className="list-group-item product-containers tradingbg">{ this.props.itemdetails} */}
             <div className="list-group-item product-containers">
               <div className="container txt-color form-inline">
                  <div className="form-group">
                    <SelectBox sid="tradingBox" data={selectDesk} id={apidata.apiKeys.refDataId}
                               value={apidata.apiKeys.refDataValue}
                               placeholder="---- Select trading desk ----"
                               disabled={this.props.disabled}
                               //defaultVal={this.state.tradingDesk.deskName !== "" ? this.state.tradingDesk.deskName : "-- Select Trading Desk --"}
                    />
                  </div>
                  <button type="button" className="btn btn-primary margin-bottom-10 margin-left-25"
                          disabled={this.props.disabled}
                          onClick={this.addTradingDesks}> Add
                  </button>
               </div>
            </div>
            { (this.state.tradingDesk && this.state.tradingDesk.length > 0) ?  (this.state.tradingDesk).map((result, index) => (
               <AddTradingDesk
                  key={'newTrading'+index}
                  tradingIndex={index}
                  addNewRow={this.addNewRow}
                  deleteRows={this.deleteRowHandler}
                  deleteBankEntity={this.deleteBankEntityHandler}
                  BankEntity = {result.bankEntities}
                  bankEntities = {result.bankEntities}
                  deskValue={result}
                  trading={result}
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
                  deleteTrading={this.deleteTrading}
                  productType={this.props.productType}
                  params={this.state.params}
                  enableDisableExternal = {this.enableDisableExternal}
                  updateUnderlyingStatus={this.updateUnderlyingStatus}
                  handleUnderlyingRows={this.handleUnderlyingRows}
               />
            )) : ''}
         </div>
      );
   }
});

export default TradingDesk;

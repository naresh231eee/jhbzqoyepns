import React from "react";
import AddBankEntity from "./addBankEntity.jsx";
import InputText from "./../formfields/text.js";
import SelectBox from "./../formfields/select.js";
import CheckBox from "./../formfields/checkbox.js";
import * as apidata from "./../api/api_form.jsx";
import MultiSelect from "./../formfields/multiselect.js";

var AddTradingDesk = React.createClass({
   getInitialState: function () {
      return this.getStateFromProps(this.props);
   },
   getStateFromProps: function (props) {
      var refData, disableFormFields, desks = {};
      var bankEntities = [];
      var deskHead, deskName, deskStatus = '';
      //Trading Desk value
      var deskHead = (this.props.deskValue) ? this.props.deskValue.deskHead: '';
      var deskName = (this.props) ? this.props.deskValue.deskName:'';
      var deskStatus = (this.props) ? this.props.deskValue.deskStatus:'';
      var bankEntityName = (this.props.BankEntity) ? this.props.BankEntity.bankEntityName: '';
      var productType = this.props.productType;
      var params = this.props.params;

      if(props.deskValue) {
         //Checkboxes
         var primaryDesk = this.props.deskValue.primaryDesk;
         var internalTradesOnly = this.props.deskValue.internalTradesOnly;
         var interbankMarketHedging = this.props.deskValue.interbankMarketHedging;
         var financialInstitutions = this.props.deskValue.financialInstitutions;
         var globalCorporates = this.props.deskValue.globalCorporates;
         var midMarkets = this.props.deskValue.midMarkets;
         var sME = this.props.deskValue.sME;
         var sMESegment = this.props.deskValue.sMESegment;
         var wealth = this.props.deskValue.wealth;
         var retailBusinessBanking = this.props.deskValue.retailBusinessBanking;
         var retail = this.props.deskValue.retail;
         var externalGCT = this.props.deskValue.externalGCT;
         var externalClient = this.props.deskValue.externalClient;
         var moneyMarketLA = this.props.deskValue.moneyMarketLA;
         var attrMap = this.getAttrMap(this.props.deskValue.deskAttributes);
         var deskAttributes = attrMap.get(apidata.MIFID_CLASS);
      }
      return {
         desks: desks, deskHead: deskHead,deskName:deskName,deskStatus:deskStatus,
         primaryDesk: primaryDesk, internalTradesOnly: internalTradesOnly, interbankMarketHedging: interbankMarketHedging,
         financialInstitutions: financialInstitutions, globalCorporates: globalCorporates, midMarkets: midMarkets, sME: sME,
         sMESegment: sMESegment, wealth: wealth, retailBusinessBanking: retailBusinessBanking, retail: retail,
         externalGCT: externalGCT, externalClient: externalClient, moneyMarketLA: moneyMarketLA, refData: refData,
         disableFormFields: disableFormFields, trading: this.props.trading ? this.props.trading : null,
         bankEntities: this.props.bankEntities ? this.props.bankEntities : bankEntities, showHide : false,
         deskAttributes: deskAttributes, productType : productType, params : params
      };
   },
   extractAttributeValuesForKey(attrMap, attrKey) {
      return (this.props.deskValue.deskAttributes) ? this.mapEditedValuesWithReactSelect(attrKey, attrMap.get(attrKey)) : [];
   },
   getAttrMap(dataGroup){
      var attrMap = new Map();
      if(dataGroup){
         var i,
            len = dataGroup.length;
         for (i = 0; i < len; i++) {
            if(attrMap.has(dataGroup[i].attrName)){
               var valueArray = (attrMap.get(dataGroup[i].attrName)).concat(dataGroup[i]);
               //console.log("attrMap.get(dataGroup[i].attrName)", attrMap.get(dataGroup[i].attrName));
               attrMap.set(dataGroup[i].attrName, valueArray);
            } else {
               var valueArray = [dataGroup[i]];
               attrMap.set(dataGroup[i].attrName, valueArray);
            }
         }
         //console.log("attrMap", attrMap);
         return attrMap;
      }
   },
   componentWillReceiveProps: function (newProps) {
      //console.log("addTradingDesk:componentWillReceiveProps.props",newProps);
      if(newProps.isSuccess) {
         this.setState(this.getStateFromProps(newProps));
      }
   },
   getRefDataValueForKey: function(key) {
      return this.props.refData.get(key);
   },
   toggleTradingDesks(e) {
      if(e.target.dataset.id >= 0 || e.target.dataset.id === "undefined") {
         var id = 'trading-' + e.target.dataset.id;
         if ((document.getElementById(id).classList.value).indexOf("maxHeight") < 0) {
            document.getElementById(id).classList = "expandable maxHeight";
         } else {
            document.getElementById(id).classList = "expandable ";
         }
      }
   },
   getDeskName(){
      //console.log("addTradingDesk.jsx::getDeskName::selectDesk", this.props.selectDesk);
      //console.log("addTradingDesk.jsx::getDeskName::selectDesk", this.props.deskName);
      if(this.props.selectDesk) {
         for (let i = 0; i < this.props.selectDesk.length; i++) {
            if (this.props.selectDesk[i].refDataValue === this.props.deskName) {
               return this.props.selectDesk[i].refDataValue;
            }
         }
      }
   },
   handleSelectChange(e){
      var trading = this.state.trading;
      var id = e.target.id;
      var column = id.split("_")[0];
      var value = e.target.selected;
      trading[column] = value;
      this.setState(trading);
   },
   handleInputChange(e){
      var trading = this.state.trading;
      var id = e.target.id;
      var column = id.split("_")[0];
      var value = e.target.value;
      trading[column] = value;
      this.setState(trading);
   },
   handleCheckboxChange(e) {
      var trading = this.state.trading;
      var id = e.target.id;
      var column = id.split("_")[0];
      var value = e.target.checked ? 'Y':'N';
      trading[column] = value;
      this.setState(trading);
      //this.forceUpdate();
   },
   addNewBankEntity(e) {
      //console.log("Print --- ", e);
      let objID = (e.target.id).split("_")[1];
      // bankentity_0
      let bankEntity = '';
      let bankEntityDropdown = document.getElementById('bankentity_' + objID).value;
      if (bankEntityDropdown) {
         //  let BankEntityArray = this.state.tradingDesk[objID].bankEntities;
         let BankEntityArray = this.props.trading.bankEntities;
         let heritage = this.getRefDataValueForKey(apidata.APPROVED_HERITAGE, this.props.refData.refDataKeyGroups);
         for (var i = 0; i < heritage.length; i++) {
            if (bankEntityDropdown === heritage[i].refDataValue) {
               bankEntity = heritage[i].refDataValue;
            }
         }
         let validBank = true;
         for (let j = 0; j < BankEntityArray.length; j++) {
            if (validBank) {
               if (BankEntityArray[j].bankEntityName === bankEntity) {
                  validBank = false;
                  //console.log("in valid bank entity");
                  alert("The Trading Desk must only be assigned one instance of the Bank Entity. The same entity cannot be assigned to a Trading Desk more than one.");
                  return false;
               } else {
                  validBank = true
               }
            }
         }
         //console.log("this.state.bankEntities", this.state.bankEntities);
         if (validBank) {
            this.state.bankEntities.push({
                  "anyCcyPairAllowed": "",
                  "bankEntityCurrencies": [],
                  "bankEntityId": "",
                  "bankEntityName": bankEntity,
                  bankEntityStatus: ""
               }
               //'bankName': bankEntity, 'bankEntityCurrencies':[]}
            );
            this.forceUpdate();
         }
      } else { console.log("Am here add bank entity"); return false; }
   },
   deleteBankEntity(bankKey) {
      let keyBankEntity = bankKey.split("_");
      let combined = keyBankEntity[1] + '_' + keyBankEntity[2];
      let keyTradingIndex = keyBankEntity[1];
      let childIndex = keyBankEntity[2];
      let totalChange = document.getElementsByClassName('eachBankEntity_' + combined).length;
      let updateBankEntity = [];
      for (let i = 0; i < this.props.bankEntities.length; i++) {
         if (parseInt(childIndex) === parseInt(i)) {
         } else {
            updateBankEntity.push(this.props.bankEntities[i]);
         }
      }

      this.setState({bankEntities: updateBankEntity });
      this.props.deleteBankEntity(updateBankEntity, keyBankEntity[1]);
      this.forceUpdate();
   },
   deleteTrading(e){
      this.props.deleteTrading(e.target.id);
   },

   handleMultiSelectChange(name, selectedValue, e){
      console.log("addTradingDesk.jsx::.handleMultiSelectChange: name", name);
      console.log("addTradingDesk.jsx::.handleMultiSelectChange: selectedValue", selectedValue);
      var trading = this.state.trading;
      trading[name] = this.transformReactSelectValues(selectedValue);
      console.log("addTradingDesk.jsx::.handleMultiSelectChange: trading", trading);
      console.log("addTradingDesk.jsx::.handleMultiSelectChange: trading[name]", trading[name]);
      this.setState(trading);
   },
   transformReactSelectValues(selectedValues) {
      if (selectedValues && selectedValues.length > 0) {
         return selectedValues.map((selectedValue) => {
            return {
               attrName: selectedValue.name,
               attrValue: selectedValue.value
            };
         });
      }
      return [];
   },
   render() {
      //Trading Desk
      let approvedHeritage = this.getRefDataValueForKey(apidata.BANK_ENTITY);
      let region = this.getRefDataValueForKey(apidata.REGION);
      let underlyingStatus = this.getRefDataValueForKey(apidata.UNDERLYING_STATUS);
      let sMESegment = this.getRefDataValueForKey(apidata.SME_SEGMENT);
      //Checkboxes
      var primaryDesk = this.state.primaryDesk=='Y' ? true:false;
      var internalTradesOnly = this.state.internalTradesOnly=='Y' ? true:false;
      var interbankMarketHedging = this.state.interbankMarketHedging=='Y' ? true:false;
      var financialInstitutions = this.state.financialInstitutions=='Y' ? true:false;
      var globalCorporates = this.state.globalCorporates=='Y' ? true:false;
      var midMarkets = this.state.midMarkets=='Y' ? true:false;
      var sME = this.state.sME=='Y' ? true:false;
      var wealth = this.state.wealth=='Y' ? true:false;
      var retailBusinessBanking = this.state.retailBusinessBanking=='Y' ? true:false;
      var retail = this.state.retail=='Y' ? true:false;
      var externalGCT = this.state.externalGCT=='Y' ? true:false;
      //var externalClient = this.state.externalClient=='Y' ? true:false;
      var moneyMarketLA = this.state.moneyMarketLA=='Y' ? true:false;

      var MIFIDClassification = this.getRefDataValueForKey(apidata.MIFID_CLASS);

      let remainingClientSegments = false;
      if(internalTradesOnly) {
         //console.log("internalTradesOnly", internalTradesOnly)
         /*console.log("internalTradesOnly", internalTradesOnly)
         var checkboxes = new Array();
         //checkboxes = document.getElementsByTagName('input');
         checkboxes = document.getElementsByClassName('clearValue');
         console.log("clearValue", document.getElementsByClassName('clearValue'));
         console.log("checkboxes", checkboxes);
         for (var i=0; i<checkboxes.length; i++) {
            console.log("checkboxes[i].className", checkboxes[i].className);
            if (checkboxes[i].type == 'checkbox') {
               var trading = this.state.trading;
               var id = checkboxes[i].id;
               var column = id.split("_")[0];
               checkboxes[i].checked = false;
               var value = checkboxes[i].checked;
               trading[column] = value;
               console.log("trading[column]", trading[column]);
               this.setState(trading);
            }
         }*/
         remainingClientSegments = true;
      }

      return (
         <div className="list-group-item product-containers" data-id={this.props.tradingIndex} onClick={this.toggleTradingDesks}> {this.getDeskName()}
            <button className="btn btn-default margin-left-50" type="button" onClick={this.deleteTrading}
                    id={'delTradingDesk_'+this.props.tradingIndex} disabled={this.props.disableFormFields}>Remove Desk
            </button>
            <div className="clear"></div>
            <div className='expandable ' id={'trading-'+this.props.tradingIndex}>
               <div className="container txt-color">
                  <div className="row">
                     <div className="col-lg-1 col-md-1 col-sm-1">
                        <label htmlFor="deskHead">Desk Head</label>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-2">
                        <InputText name="deskHead"
                           //key={Math.random()}
                                   value={this.props.deskValue.deskHead}
                                   disabled={this.props.disableFormFields}
                                   sid={'deskHead_'+this.props.tradingIndex}
                           //onChange={this.handleInputChange.bind(this, 'deskHead')}
                                   onChange={this.handleInputChange}
                        />
                     </div>
                     <label class="checkbox-inline" htmlFor="primaryDesk">
                        <CheckBox name="primaryDesk"
                                  checked={primaryDesk}
                                  value={this.state.primaryDesk}
                                  disabled={this.props.disableFormFields}
                                  sid={'primaryDesk_'+this.props.tradingIndex}
                                  onChange={this.handleCheckboxChange}
                        />Primary Desk
                     </label>
                     <label class="checkbox-inline" htmlFor="internalTradesOnly">
                        <CheckBox name="internalTradesOnly"
                                  type="checkbox"
                                  checked={internalTradesOnly}
                                  disabled={this.props.disableFormFields}
                                  sid={'internalTradesOnly_'+this.props.tradingIndex}
                                  onChange={this.handleCheckboxChange}
                        />Internal Only
                     </label>
                     <div className="col-lg-1 col-md-1 col-sm-1">
                        <label htmlFor="deskStatus">Desk Status</label>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-2">
                        <SelectBox data={underlyingStatus}
                                   selected={this.state.deskStatus}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid={'deskStatus_'+this.props.tradingIndex}
                                   onChange={this.handleInputChange}
                                   placeholder="---- Select trading desk status ----"
                                   disabled={this.props.disableFormFields}
                        />
                     </div>
                  </div>
                  <hr />
                  <div className="row-fluid segment">
                     <h3>Distribution Channels - External</h3>
                     <div className="container-fluid form-inline">
                        <label htmlFor="interbankMarketHedging">
                           <CheckBox name="interbankMarketHedging"
                                     checked={interbankMarketHedging}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'interbankMarketHedging_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />
                           Interbank Market Hedging
                        </label>
                        <label htmlFor="externalGCT">
                           <CheckBox name="externalGCT" checked={externalGCT}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'externalGCT_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />External GCT
                        </label>
                        <label htmlFor="financialInstitutions">
                           <CheckBox name="financialInstitutions"
                                     checked={financialInstitutions}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'financialInstitutions_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />FI
                        </label>
                        <label htmlFor="globalCorporates">
                           <CheckBox name="globalCorporates"
                                     checked={globalCorporates}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'globalCorporates_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />GC
                        </label>
                        <label htmlFor="midMarkets">
                           <CheckBox name="midMarkets"
                                     checked={midMarkets}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'midMarkets_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />MM
                        </label>
                        <label htmlFor="moneyMarketLA">
                           <CheckBox name="moneyMarketLA"
                                     checked={moneyMarketLA}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'moneyMarketLA_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />MM (LA)
                        </label>
                        <label htmlFor="sME">
                           <CheckBox name="sME"
                                     checked={sME}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'sME_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />SME
                        </label>
                        <SelectBox className="smeStyles" data={sMESegment}
                                   selected={this.state.sMESegment}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid={'sMESegment_'+this.props.tradingIndex}
                                   onChange={this.handleInputChange}
                                   placeholder="-- Select SME  -- "
                                   disabled={this.props.disableFormFields || remainingClientSegments}
                        />
                        <label htmlFor="wealth">
                           <CheckBox name="wealth"
                                     checked={wealth}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'wealth_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />Wealth
                        </label>
                        <label htmlFor="retailBusinessBanking">
                           <CheckBox name="retailBusinessBanking" checked={retailBusinessBanking}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'retailBusinessBanking_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />RBB
                        </label>
                        <label htmlFor="retail">
                           <CheckBox name="retail" checked={retail}
                                     disabled={this.props.disableFormFields || remainingClientSegments}
                                     sid={'retail_'+this.props.tradingIndex}
                                     onChange={this.handleCheckboxChange}
                           />Retail
                        </label>
                     </div>
                  </div>
                  <div className="row channel">
                     <div className="container">
                        <div className="col-lg-1 col-md-1 col-sm-1">
                           <label htmlFor="MIFIDClassification">MIFID I</label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <MultiSelect data={MIFIDClassification}
                                   id={apidata.apiKeys.refDataValue}
                                   value={this.state.deskAttributes}
                                   datakey={apidata.MIFID_CLASS}
                                   options={MIFIDClassification}
                                   onChangeOfSelect={this.handleMultiSelectChange.bind(this, 'deskAttributes')}
                                   placeholder='---- Select mifid classification ----'
                                   name={this.props.multiSelectName}
                                   disabled={this.props.disableFormFields || remainingClientSegments}
                                   sid="mifidValue"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="clear"></div>
                  <hr />

                  <div className="row">
                     <div className="container">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                           <div className="form-group">
                              <SelectBox data={approvedHeritage}
                                         selected={this.state.bankEntityName}
                                         value={apidata.apiKeys.refDataValue}
                                         id={apidata.apiKeys.refDataValue}
                                         sid={'bankentity_'+this.props.tradingIndex}
                                         placeholder="Please Select Bank Entity"
                                         disabled={this.props.disableFormFields}
                              />
                           </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2">
                           <div className="form-group">
                              <SelectBox data={region}
                                         selected={this.state.region}
                                         value={apidata.apiKeys.refDataValue}
                                         id={apidata.apiKeys.refDataValue}
                                         sid={'region_'+this.props.tradingIndex}
                                         placeholder="Please Select region"
                                         disabled={this.props.disableFormFields}
                              />
                           </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                           <div className="form-group">
                              <div className="form-group">
                                 <button className="btn btn-primary" id={'bankentityname_'+this.props.tradingIndex}
                                         onClick={this.addNewBankEntity} type="button" disabled={this.props.disableFormFields}>Add
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="clear"></div>

                  { this.state.bankEntities.length > 0 && (this.state.bankEntities).map((result, index) => (
                     <AddBankEntity key={'MulitBank'+index}
                                    data={result.bankEntityCurrencies}
                                    bankEntityName={result.bankEntityName}
                                    tradingIndex={this.props.tradingIndex}
                                    bankentityIndex={index}
                                    bankEntityResult={result}
                                    deleteBankEntity={this.deleteBankEntity}
                                    selectEntity={this.approvedHeritage}
                                    selectRegion={this.region}
                                    bankEntity={result.bankEntityName}
                                    region={result.region}
                                    refData={this.props.refData}
                                    disableFormFields={this.props.disableFormFields}
                                    productType={this.state.productType}
                                    params={this.state.params}

                     />
                  ))}
               </div>
            </div>
         </div>
      );
   }
});
export default AddTradingDesk;

import React from "react";
import AddBankEntity from "./addBankEntity.jsx";
import InputText from "./../formfields/text.js";
import SelectBox from "./../formfields/select.js";
import CheckBox from "./../formfields/checkbox.js";
import * as apidata from "./../api/api_form.jsx";
import MultiSelect from "./../formfields/multiselect.js";
import * as util from "./../util/util.js";

var AddTradingDesk = React.createClass({
   getInitialState: function () {
      return this.getStateFromProps(this.props);
   },
   getStateFromProps: function (props) {
      console.log("addTradingDesk:getStateFromProps.Props",props);
      var refData, disableFormFields, desks = {};
      var bankEntities = [];
      //var deskHead, deskName, deskStatus, sMESegment = '';
      //Trading Desk value
      var deskHead = props.deskValue ? props.deskValue.deskHead: '';
      var deskName = props ? props.deskValue.deskName:'';
      var deskStatus = props ? props.deskValue.deskStatus:'';
      var bankEntityName = props.BankEntity ? props.BankEntity.bankEntityName: '';
      var sMESegment = props.deskValue ? props.deskValue.sMESegment : '';
      var productType = props.productType;
      var params = props.params;

      if(props.deskValue) {
         //Checkboxes
         var primaryDesk = props.deskValue.primaryDesk;
         var internalTradesOnly = props.deskValue.internalTradesOnly;
         var interbankMarketHedging = props.deskValue.interbankMarketHedging;
         var financialInstitutions = props.deskValue.financialInstitutions;
         var globalCorporates = props.deskValue.globalCorporates;
         var midMarkets = props.deskValue.midMarkets;
         var sME = props.deskValue.sME;
         var wealth = props.deskValue.wealth;
         var retailBusinessBanking = props.deskValue.retailBusinessBanking;
         var retail = props.deskValue.retail;
         var externalGCT = props.deskValue.externalGCT;
         var externalClient = props.deskValue.externalClient;
         var moneyMarketLA = props.deskValue.moneyMarketLA;
         var attrMap = this.getAttrMap(props.deskValue.deskAttributes);
         var deskAttributes = attrMap.get(apidata.MIFID_CLASS);
      }
      return {
         desks: desks, deskHead: deskHead,deskName:deskName,deskStatus:deskStatus,
         primaryDesk: primaryDesk, internalTradesOnly: internalTradesOnly, interbankMarketHedging: interbankMarketHedging,
         financialInstitutions: financialInstitutions, globalCorporates: globalCorporates, midMarkets: midMarkets, sME: sME,
         sMESegment: sMESegment, wealth: wealth, retailBusinessBanking: retailBusinessBanking, retail: retail,
         externalGCT: externalGCT, externalClient: externalClient, moneyMarketLA: moneyMarketLA, refData: refData,
         disableFormFields: disableFormFields, trading: props.trading ? props.trading : null,
         bankEntities: props.bankEntities ? props.bankEntities : bankEntities, showHide : false,
         deskAttributes: deskAttributes, productType : productType, params : params
      };
   },
   componentWillReceiveProps: function (newProps) {
      console.log("addTradingDesk:componentWillReceiveProps.newProps",newProps);
      if (newProps.trading != this.props.trading) {
         this.setState(this.getStateFromProps(newProps));
      }
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
               attrMap.set(dataGroup[i].attrName, valueArray);
            } else {
               var valueArray = [dataGroup[i]];
               attrMap.set(dataGroup[i].attrName, valueArray);
            }
         }
         return attrMap;
      }
   },
   getRefDataValueForKey: function(key) {
      return this.props.refData.get(key);
   },
   showHide(e) {
      util.showHideDiv('trading', e.target.dataset.id);
   },
   getDeskName(){
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
      var index = id.split("_")[1];
      var value = e.target.value;
      trading[column] = value;
      if(value === 'Inactive' || value === 'Active') {
         if (confirm(apidata.STATUS_CONFIRM_MESSAGE + this.getDeskName() + " to " + value + " ?")) {
            this.tradingDeskStatusToggle(index, value);
         } else {
            window.location();
         }
      }
      this.setState(trading);
   },
   handleCheckboxChange(e) {
      var trading = this.state.trading;
      var id = e.target.id;
      var column = id.split("_")[0];

      if(column === 'internalTradesOnly'){
         var f =   this.enableDisableExternalChannels();
         if(f){
            var value = e.target.checked ? 'Y' : 'N';
            trading[column] = value;
            this.setState(trading);
         }
      } else {
         var value = e.target.checked ? 'Y' : 'N';
         trading[column] = value;
         this.setState(trading);
      }
   },
   addNewBankEntity(e) {
      let objID = (e.target.id).split("_")[1];
      let bankEntity = '';
      let region = '';
      let bankEntityDropdown = document.getElementById('bankentity_' + objID).value;
      let regionDropdown = document.getElementById('region_' + objID).value;

      if(bankEntityDropdown && regionDropdown) {
         let BankEntityArray = this.props.trading.bankEntities;

         let heritage = this.getRefDataValueForKey(apidata.BANK_ENTITY, this.props.refData.refDataKeyGroups);
         for (var i = 0; i < heritage.length; i++) {
            if (bankEntityDropdown === heritage[i].refDataValue) {
               bankEntity = heritage[i].refDataValue;
            }
         }
         let regionRefData = this.getRefDataValueForKey(apidata.REGION, this.props.refData.refDataKeyGroups);
         for (var r = 0; r < regionRefData.length; r++) {
            if (regionDropdown === regionRefData[r].refDataValue) {
               region = regionRefData[r].refDataValue;
            }
         }

         let validBank = true;
         for (let j = 0; j < BankEntityArray.length; j++) {
            if (validBank) {
               if (BankEntityArray[j].bankEntityName === bankEntity && BankEntityArray[j].region === region) {
                  validBank = false;
                  alert(apidata.ONLY_ONE_INSTANCE_OF_ENTITY_AND_REGION_ALLOWED_FOR_A_TRADING_DESK);
                  return false;
               } else {
                  validBank = true
               }
            }
         }

         if (validBank) {
            this.state.bankEntities.push({
                  "anyCcyPairAllowed": "",
                  "bankEntityCurrencies": [],
                  "bankEntityId": "",
                  "bankEntityName": bankEntity,
                  "region": region,
                  bankEntityStatus: ""
               }

            );
            this.forceUpdate();
         }
      } else {
         alert(apidata.BOTH_ENTITY_AND_REGION_MUST_BE_SELECTED);
         return false;
      }
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
      var trading = this.state.trading;
      trading[name] = this.transformReactSelectValues(selectedValue);
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
   enableDisableExternalChannels() {
      var resultChecked = false;
      if ((this.refs.Internal_Only.checked
         && confirm(apidata.INTERNAL_EXTERNAL_TOGGLE_MESSAGE))
         || !this.refs.Internal_Only.checked) {
         /*var currentTrading = '';
         /!***** ClassList IE hack ****!/
         if (!!navigator.userAgent.match(/Trident\/7\./)){
            var currentTrading = this.refs.Internal_Only.classList[0];
         } else {
            var currentTrading = this.refs.Internal_Only.classList.value;
         }*/
         var currentTrading = this.refs.Internal_Only.className;
         var currentTradingIndex = currentTrading.split("_")[1];
         this.props.enableDisableExternal(currentTradingIndex, this.refs.Internal_Only.checked);
         this.state.smeStatus = !this.state.smeStatus;
         this.state.internalTradesOnly = true;
         resultChecked = true
      } else {
         this.refs.Internal_Only.checked = false;
         resultChecked = false

      }
      return resultChecked;
   },
   enableDisableExternal(indexValue, isChecked){
      var checkboxes = document.getElementsByClassName(indexValue+"_external_Channels");
      for(var i=0; i < checkboxes.length; i++){
         if(isChecked){
            checkboxes[i].setAttribute("disabled", "disabled");
         } else {
            //checkboxes[i].removeAttribute("disabled");
         }
      }
      this.state.smeStatus = true;
   },
   componentDidMount(){
      // On componentDidMount pass internal trades only value
      this.enableDisableExternal(this.props.tradingIndex, (this.state.internalTradesOnly === 'Y' ? true : false))
   },
   tradingDeskStatusToggle(index, value){
      this.props.tradingDeskStatus(index, value);
   },
   render() {
      //Trading Desk
      let approvedHeritage = this.getRefDataValueForKey(apidata.BANK_ENTITY);
      let region = this.getRefDataValueForKey(apidata.REGION);
      let activeInactiveStatus = this.getRefDataValueForKey(apidata.ACTIVE_INACTIVE_STATUS);
      let sMESegment = this.getRefDataValueForKey(apidata.SME_SEGMENT);
      //Checkboxes
      var primaryDesk = this.state.primaryDesk==='Y' ? true:false;
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
      var moneyMarketLA = this.state.moneyMarketLA=='Y' ? true:false;

      var MIFIDClassification = this.getRefDataValueForKey(apidata.MIFID_CLASS);

      var remainingClientSegments = false;

        if(internalTradesOnly){
               interbankMarketHedging, financialInstitutions, globalCorporates, midMarkets, sME, wealth, retailBusinessBanking,
               retail, externalGCT, moneyMarketLA, MIFIDClassification = false;
            remainingClientSegments = true;
        }
      return (
         <div className="list-group-item product-containers minHeight" id={'trading_'+this.props.tradingIndex} data-id={this.props.tradingIndex} onClick={this.showHide}> {this.getDeskName()}
            <button className="btn btn-default margin-left-50" type="button" onClick={this.deleteTrading}
                    id={'delTradingDesk_'+this.props.tradingIndex} disabled={this.props.disableFormFields}>Remove Desk
            </button>
            <div className="clear"></div>
            <div className='innerExpandable' id={'trading-'+this.props.tradingIndex}>
               <div className="container txt-color">
                  <div className="row">
                     <div className="col-lg-1 col-md-1 col-sm-1">
                        <label htmlFor="deskHead">Desk Head</label>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-2">
                        <InputText name="deskHead"
                                   value={this.state.deskHead}
                                   disabled={this.props.disableFormFields}
                                   sid={'deskHead_'+this.props.tradingIndex}
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
                     <label class="checkbox-inline" htmlFor="internalTradesOnly" title="Internal Trades Only">
                        <input type="checkbox"
                               name="internalTradesOnly"
                               checked={internalTradesOnly}
                               onChange={this.handleCheckboxChange}
                               id={'internalTradesOnly_'+this.props.tradingIndex}
                               value={this.state.text}
                               disabled={this.props.disableFormFields}
                               ref="Internal_Only" className={'internalTradesOnly_'+this.props.tradingIndex}
                        /> Internal Only
                     </label>
                     <div className="col-lg-1 col-md-1 col-sm-1">
                        <label htmlFor="deskStatus">Desk Status</label>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-2">
                        <SelectBox data={activeInactiveStatus}
                                   selected={this.state.deskStatus}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid={'deskStatus_'+this.props.tradingIndex}
                                   onChange={this.handleInputChange}
                                   placeholder="---- Select trading desk status ----"
                                   disabled={this.props.disableFormFields}
                                   ref={"deskStatus_"+this.props.tradingIndex}
                        />
                     </div>
                  </div>
                  <hr />
                  <div className="row-fluid segment">
                     <h3>Distribution Channels - External</h3>
                     <div className="container-fluid form-inline">
                        <label htmlFor="interbankMarketHedging">
                           <input type="checkbox"
                                  name="interbankMarketHedging"
                                  checked={interbankMarketHedging}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'interbankMarketHedging_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />
                           Interbank Market Hedging
                        </label>
                        <label htmlFor="externalGCT">
                           <input type="checkbox"
                                  name="externalGCT"
                                  checked={externalGCT}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'externalGCT_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />
                           External GCT
                        </label>
                        <label htmlFor="financialInstitutions" title="Financial Institutions">
                           <input type="checkbox"
                                  name="financialInstitutions"
                                  checked={financialInstitutions}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'financialInstitutions_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />FI
                        </label>
                        <label htmlFor="globalCorporates" title="Global Corporates">
                           <input type="checkbox"
                                  name="globalCorporates"
                                  checked={globalCorporates}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'globalCorporates_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />GC
                        </label>
                        <label htmlFor="midMarkets" title="Mid Markets">
                                <input type="checkbox"
                                name="midMarkets"
                                checked={midMarkets}
                                onChange={this.handleCheckboxChange}
                                disabled={this.props.disableFormFields || remainingClientSegments}
                                id={'midMarkets_'+this.props.tradingIndex}
                                className={this.props.tradingIndex+"_external_Channels"}
                                />MM
                        </label>
                        <label htmlFor="moneyMarketLA" title="Money Market LA">
                           <input type="checkbox"
                                  name="moneyMarketLA"
                                  checked={moneyMarketLA}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'moneyMarketLA_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />MM (LA)
                        </label>
                        <label htmlFor="sME">
                           <input type="checkbox"
                                  name="sME"
                                  checked={sME}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'sME_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />SME
                        </label>
                        <SelectBox className={this.props.tradingIndex + "_external_Channels smeStyles"} data={sMESegment}
                                   selected={!this.state.smeStatus ? this.state.sMESegment : ''}
                                   name="sMESegment"
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid={'sMESegment_'+this.props.tradingIndex}
                                   ref={'sMESegment_' + this.props.tradingIndex}
                                   onChange={this.handleInputChange}
                                   placeholder="-- Select SME  -- "
                                   disabled={this.state.smeStatus}
                        />
                        <label htmlFor="wealth">
                           <input type="checkbox"
                                  name="wealth"
                                  checked={wealth}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'wealth_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />Wealth
                        </label>
                        <label htmlFor="retailBusinessBanking" title="Retail Business Banking">
                           <input type="checkbox"
                                  name="retailBusinessBanking"
                                  checked={retailBusinessBanking}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'retailBusinessBanking_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
                           />RBB
                        </label>
                        <label htmlFor="retail">
                           <input type="checkbox"
                                  name="retail"
                                  checked={retail}
                                  onChange={this.handleCheckboxChange}
                                  disabled={this.props.disableFormFields || remainingClientSegments}
                                  id={'retail_'+this.props.tradingIndex}
                                  className={this.props.tradingIndex+"_external_Channels"}
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
                           <div className="form-group">
                              <MultiSelect data={MIFIDClassification}
                                      id={apidata.apiKeys.refDataValue}
                                      value={this.state.deskAttributes}
                                      datakey={apidata.MIFID_CLASS}
                                      options={MIFIDClassification}
                                      onChangeOfSelect={this.handleMultiSelectChange.bind(this, 'deskAttributes')}
                                      placeholder='---- Select mifid classification ----'
                                      name={this.props.multiSelectName}
                                      disabled={this.props.disableFormFields || remainingClientSegments}
                                      className={this.props.tradingIndex+"_external_Channels"}
                              />
                           </div>
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
                                    productType={this.props.productType}
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

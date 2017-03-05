import React from "react";
import AddBankEntity from "./addBankEntity.jsx";
import InputText from "./../formfields/text.js";
import SelectBox from "./../formfields/select.jsx";
import CheckBox from "./../formfields/checkbox.js";
import * as apidata from "./../api/api_form.jsx";
import MultiSelect from "./../formfields/multiselect.js";
import * as util from "./../util/util.js";

var primaryDesk, internalTradesOnly, interbankMarketHedging, financialInstitutions, globalCorporates,
midMarkets, sME, wealth, retailBusinessBanking, retail, externalGCT, externalClient, moneyMarketLA, 
attrMap, deskAttributes;

var AddTradingDesk = React.createClass({
        getInitialState: function () {
                return this.getStateFromProps(this.props);
        },
        getStateFromProps: function (props) {
                var refData, disableFormFields, desks = {};
                var bankEntities = [];
                var deskHead, deskName, deskStatus, sMESegment = '';
                //Trading Desk value
                var deskHead = (this.props.deskValue) ? this.props.deskValue.deskHead : '';
                var deskName = (this.props) ? this.props.deskValue.deskName : '';
                var deskStatus = (this.props) ? this.props.deskValue.deskStatus : '';
                var bankEntityName = (this.props.BankEntity) ? this.props.BankEntity.bankEntityName : '';
                var sMESegment = (this.props.deskValue) ? this.props.deskValue.sMESegment : '';
                var productType = this.props.productType;
                var params = this.props.params;
                var sMESegmentDisabled = false;

                if (props.deskValue) {
                        //Checkboxes
                         primaryDesk = this.props.deskValue.primaryDesk;
                        internalTradesOnly = this.props.deskValue.internalTradesOnly;
                        interbankMarketHedging = this.props.deskValue.interbankMarketHedging;
                        financialInstitutions = this.props.deskValue.financialInstitutions;
                        globalCorporates = this.props.deskValue.globalCorporates;
                        midMarkets = this.props.deskValue.midMarkets;
                        sME = this.props.deskValue.sME;
                        wealth = this.props.deskValue.wealth;
                        retailBusinessBanking = this.props.deskValue.retailBusinessBanking;
                        retail = this.props.deskValue.retail;
                        externalGCT = this.props.deskValue.externalGCT;
                        externalClient = this.props.deskValue.externalClient;
                        moneyMarketLA = this.props.deskValue.moneyMarketLA;
                        attrMap = this.getAttrMap(this.props.deskValue.deskAttributes);
                        deskAttributes = attrMap.get(apidata.MIFID_CLASS);
                }
                return {
                        desks: desks, deskHead: deskHead, deskName: deskName, deskStatus: deskStatus,
                        primaryDesk: primaryDesk, internalTradesOnly: internalTradesOnly, interbankMarketHedging: interbankMarketHedging,
                        financialInstitutions: financialInstitutions, globalCorporates: globalCorporates, midMarkets: midMarkets, sME: sME,
                        sMESegment: sMESegment, wealth: wealth, retailBusinessBanking: retailBusinessBanking, retail: retail,
                        externalGCT: externalGCT, externalClient: externalClient, moneyMarketLA: moneyMarketLA, refData: refData,
                        disableFormFields: disableFormFields, trading: this.props.trading ? this.props.trading : null,
                        bankEntities: this.props.bankEntities ? this.props.bankEntities : bankEntities, showHide: false,
                        deskAttributes: deskAttributes, productType: productType, params: params, sMESegmentDisabled: sMESegmentDisabled, smeStatus: false
                };
        },
        extractAttributeValuesForKey(attrMap, attrKey) {
                return (this.props.deskValue.deskAttributes) ? this.mapEditedValuesWithReactSelect(attrKey, attrMap.get(attrKey)) : [];
        },
        getAttrMap(dataGroup) {
                var attrMap = new Map();
                if (dataGroup) {
                        var i,
                                len = dataGroup.length;
                        for (i = 0; i < len; i++) {
                                if (attrMap.has(dataGroup[i].attrName)) {
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
                if (newProps.isSuccess) {
                        this.setState(this.getStateFromProps(newProps));
                }
        },
        getRefDataValueForKey: function (key) {
                return this.props.refData.get(key);
        },
        expandCollapse(e) {
                //    alert("trading")
                util.showHideDiv('trading', e.target.dataset.id);
                return;
        },
        getDeskName() {
                if (this.props.selectDesk) {
                        for (let i = 0; i < this.props.selectDesk.length; i++) {
                                if (this.props.selectDesk[i].refDataValue === this.props.deskName) {
                                        return this.props.selectDesk[i].refDataValue;
                                }
                        }
                }
        },
        handleSelectChange(e) {
                var trading = this.state.trading;
                var id = e.target.id;
                var column = id.split("_")[0];
                var value = e.target.selected;
                trading[column] = value;
                this.setState(trading);
        },
        handleInputChange(e) {
                var trading = this.state.trading;
                var id = e.target.id;
                var column = id.split("_")[0];
                var value = e.target.value;
                trading[column] = value;
                this.setState(trading);
        },
        handleCheckboxChange(e) {
                console.log(e.target.id);
                var trading = this.state.trading;
                var id = e.target.id;
                var column = id.split("_")[0];
                
                if(column === 'internalTradesOnly'){
                   var f =   this.enableDisableExternalChannels();
                   if(f){
                        var value = e.target.checked ? 'Y' : 'N';
                        console.log(value)
                        trading[column] = value;
                        console.log(trading[column]);
                        this.setState(trading);  
                   }
                } else {
                        var value = e.target.checked ? 'Y' : 'N';
                        console.log(value)
                        trading[column] = value;
                        console.log(trading[column]);
                        this.setState(trading);
                }
                //this.forceUpdate();
        },
        addNewBankEntity(e) {
                let objID = (e.target.id).split("_")[1];
                // bankentity_0
                let bankEntity = '';
                let region = '';
                let bankEntityDropdown = document.getElementById('bankentity_' + objID).value;
                let regionDropdown = document.getElementById('region_' + objID).value;

                if (bankEntityDropdown && regionDropdown) {
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
                                                alert("The Trading Desk must only be assigned one instance of the Bank Entity & region. The same entity & region cannot be assigned to a Trading Desk more than one.");
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
                                        "region": region,
                                        bankEntityStatus: ""
                                }
                                        //'bankName': bankEntity, 'bankEntityCurrencies':[]}
                                );
                                this.forceUpdate();
                        }
                } else {
                        alert("Please select both Bank entity & the Region");
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

                this.setState({ bankEntities: updateBankEntity });
                this.props.deleteBankEntity(updateBankEntity, keyBankEntity[1]);
                this.forceUpdate();
        },
        deleteTrading(e) {
                this.props.deleteTrading(e.target.id);
        },

        handleMultiSelectChange(name, selectedValue, e) {
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
                        var currentTrading = this.refs.Internal_Only.classList.value
                        var currentTradingIndex = currentTrading.split("_")[1];
                        this.props.enableDisableExternal(currentTradingIndex, this.refs.Internal_Only.checked);
                        this.state.smeStatus = !this.state.smeStatus;
                        console.log("Desk changed");
                        console.log(this.props.deskValue);
                        internalTradesOnly = true;
                        resultChecked = true 
                } else {
                        this.refs.Internal_Only.checked = false;
                        resultChecked = false 
                        
                }
                return resultChecked;
        },
        render() {
                //Trading Desk
                let approvedHeritage = this.getRefDataValueForKey(apidata.BANK_ENTITY);
                let region = this.getRefDataValueForKey(apidata.REGION);
                let underlyingStatus = this.getRefDataValueForKey(apidata.UNDERLYING_STATUS);
                let sMESegment = this.getRefDataValueForKey(apidata.SME_SEGMENT);
                //Checkboxes
                primaryDesk = this.state.primaryDesk === 'Y' ? true : false;
                internalTradesOnly = this.state.internalTradesOnly == 'Y' ? true : false;
                interbankMarketHedging = this.state.interbankMarketHedging == 'Y' ? true : false;
                financialInstitutions = this.state.financialInstitutions == 'Y' ? true : false;
                globalCorporates = this.state.globalCorporates == 'Y' ? true : false;
                midMarkets = this.state.midMarkets == 'Y' ? true : false;
                sME = this.state.sME == 'Y' ? true : false;
                wealth = this.state.wealth == 'Y' ? true : false;
                retailBusinessBanking = this.state.retailBusinessBanking == 'Y' ? true : false;
                retail = this.state.retail == 'Y' ? true : false;
                externalGCT = this.state.externalGCT == 'Y' ? true : false;
                moneyMarketLA = this.state.moneyMarketLA == 'Y' ? true : false;

                var MIFIDClassification = this.getRefDataValueForKey(apidata.MIFID_CLASS);

                let remainingClientSegments = false;
                /*this.state.sMESegmentDisabled = false;
          
                  if(internalTradesOnly){
                         interbankMarketHedging, financialInstitutions, globalCorporates, midMarkets, sME, wealth, retailBusinessBanking,
                         retail, externalGCT, moneyMarketLA = false;
                     this.state.sMESegmentDisabled = true;
                         remainingClientSegments = true;
                  }*/
                return (
                        <div className="list-group-item product-containers minHeight" id={'trading_' + this.props.tradingIndex} data-id={this.props.tradingIndex} onClick={this.expandCollapse}> {this.getDeskName()}
                                <button className="btn btn-default margin-left-50" type="button" onClick={this.deleteTrading}
                                        id={'delTradingDesk_' + this.props.tradingIndex} disabled={this.props.disableFormFields}>Remove Desk
            </button>
                                <div className="clear"></div>
                                <div className='innerExpandable' id={'trading-' + this.props.tradingIndex}>
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
                                                                        sid={'deskHead_' + this.props.tradingIndex}
                                                                        //onChange={this.handleInputChange.bind(this, 'deskHead')}
                                                                        onChange={this.handleInputChange}
                                                                />
                                                        </div>
                                                        <label class="checkbox-inline" htmlFor="primaryDesk">
                                                                <CheckBox name="primaryDesk"
                                                                        checked={primaryDesk}
                                                                        value={this.state.primaryDesk}
                                                                        disabled={this.props.disableFormFields}
                                                                        sid={'primaryDesk_' + this.props.tradingIndex}
                                                                        onChange={this.handleCheckboxChange}
                                                                />Primary Desk
                     </label>
                                                        <label class="checkbox-inline" htmlFor="internalTradesOnly" title="Internal Trades Only">
                                                                <input type="checkbox"
                                                                        name="internalTradesOnly"
                                                                        onChange={this.handleCheckboxChange}
                                                                        id={'internalTradesOnly_' + this.props.tradingIndex}
                                                                        value={this.state.text}
                                                                        ref="Internal_Only" className={'internalTradesOnly_' + this.props.tradingIndex}
                                                                /> Internal Only
                     </label>
                                                        <div className="col-lg-1 col-md-1 col-sm-1">
                                                                <label htmlFor="deskStatus">Desk Status</label>
                                                        </div>
                                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                                                <SelectBox data={underlyingStatus}
                                                                        selected={this.state.deskStatus}
                                                                        value={apidata.apiKeys.refDataValue}
                                                                        id={apidata.apiKeys.refDataValue}
                                                                        sid={'deskStatus_' + this.props.tradingIndex}
                                                                        onChange={this.handleInputChange}
                                                                        ref={'deskStatus_' + this.props.tradingIndex}
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
                                                                        <input type="checkbox"
                                                                                name="interbankMarketHedging"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'interbankMarketHedging_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />
                                                                        Interbank Market Hedging
                        </label>
                                                                <label htmlFor="externalGCT">
                                                                        <input type="checkbox"
                                                                                name="externalGCT"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'externalGCT_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />
                                                                        External GCT
                        </label>
                                                                <label htmlFor="financialInstitutions" title="Financial Institutions">
                                                                        <input type="checkbox"
                                                                                name="financialInstitutions"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'financialInstitutions_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />FI
                        </label>
                                                                <label htmlFor="globalCorporates" title="Global Corporates">
                                                                        <input type="checkbox"
                                                                                name="globalCorporates"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'globalCorporates_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />GC
                        </label>
                                                                <label htmlFor="midMarkets" title="Mid Markets">
                                                                        <input type="checkbox"
                                                                                name="midMarkets"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'midMarkets_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />MM
                        </label>
                                                                <label htmlFor="moneyMarketLA" title="Money Market LA">
                                                                        <input type="checkbox"
                                                                                name="moneyMarketLA"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'moneyMarketLA_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />MM (LA)
                        </label>
                                                                <label htmlFor="sME">
                                                                        <input type="checkbox"
                                                                                name="sME"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'sME_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />SME
                        </label>
                                                                <SelectBox className={this.props.tradingIndex + "_external_Channels"} data={sMESegment}
                                                                        selected={!this.state.smeStatus ? this.state.sMESegment : ''}
                                                                        value={apidata.apiKeys.refDataValue}
                                                                        id={apidata.apiKeys.refDataValue}
                                                                        sid={'sMESegment_' + this.props.tradingIndex}
                                                                        ref={'sMESegment_' + this.props.tradingIndex}
                                                                        onChange={this.handleInputChange}
                                                                        placeholder="-- Select SME  -- "
                                                                        disabled={this.state.smeStatus}
                                                                />
                                                                <label htmlFor="wealth">
                                                                        <input type="checkbox"
                                                                                name="wealth"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'wealth_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />Wealth
                        </label>
                                                                <label htmlFor="retailBusinessBanking" title="Retail Business Banking">
                                                                        <input type="checkbox"
                                                                                name="retailBusinessBanking"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'retailBusinessBanking_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
                                                                        />RBB
                        </label>
                                                                <label htmlFor="retail">
                                                                        <input type="checkbox"
                                                                                name="retail"
                                                                                onChange={this.handleCheckboxChange}
                                                                                disabled={this.props.disableFormFields || remainingClientSegments}
                                                                                id={'retail_' + this.props.tradingIndex}
                                                                                className={this.props.tradingIndex + "_external_Channels"}
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
                                                                                        sid={'bankentity_' + this.props.tradingIndex}
                                                                                        placeholder="Please Select Bank Entity"
                                                                                        onChange={false}
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
                                                                                        sid={'region_' + this.props.tradingIndex}
                                                                                        placeholder="Please Select region"
                                                                                        disabled={this.props.disableFormFields}
                                                                                />
                                                                        </div>
                                                                </div>
                                                                <div className="col-lg-1 col-md-1 col-sm-1">
                                                                        <div className="form-group">
                                                                                <div className="form-group">
                                                                                        <button className="btn btn-primary" id={'bankentityname_' + this.props.tradingIndex}
                                                                                                onClick={this.addNewBankEntity} type="button" disabled={this.props.disableFormFields}>Add
                                 </button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="clear"></div>

                                                {this.state.bankEntities.length > 0 && (this.state.bankEntities).map((result, index) => (
                                                        <AddBankEntity key={'MulitBank' + index}
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

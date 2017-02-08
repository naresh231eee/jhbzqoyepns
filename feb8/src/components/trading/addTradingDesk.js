import React from "react";
import AddBankEntity from "./addBankEntity.js";
import InputText from "../formfields/text.js";
import SelectBox from "../formfields/select.js";
import TextArea from "../formfields/textarea.js";
import CheckBox from "../formfields/checkbox.js";
// import TradingUI from "./addTradingUI.jsx";
import * as apidata from "../api/api_form.js";
import Select from "react-select";

var TradingUI = React.createClass({
	getInitialState() {

		var desks = {};
		var refData = {};
		var deskHead = (this.props.deskValue) ? this.props.deskValue.deskHead : '';
		var bankEntityName = (this.props.BankEntity) ? this.props.BankEntity.bankEntityName : '';
		//Approval Restrictions
		console.log("this.props.approvalRestrictions");
		// console.log(this.props.approvalRestrictions);
		//   console.log((this.props.approvalRestrictions)[0].description);
		var description = (this.props.approvalRestrictions) ? (this.props.approvalRestrictions)[0].description : '';
		var type = (this.props.approvalRestrictions) ? (this.props.approvalRestrictions)[0].type : '';
		var maximumLimitSizePerTrade = (this.props.deskValue) ? this.props.deskValue.maximumLimitSizePerTrade : '';
		var minimumLimitSizePerTrade = (this.props.deskValue) ? this.props.deskValue.minimumLimitSizePerTrade : '';
		var totalNotionalLimit = (this.props.deskValue) ? this.props.deskValue.totalNotionalLimit : '';
		var maxNumberOfTrades = (this.props.deskValue) ? this.props.deskValue.maxNumberOfTrades : '';
		var maxNoCallPeriod = (this.props.deskValue) ? this.props.deskValue.maxNoCallPeriod : '';
		//Multi Selects
		var clientTypeRestriction = (this.props.deskValue) ? this.props.deskValue.clientTypeRestriction : '';
		var exchangeName = (this.props.deskValue) ? this.props.deskValue.exchangeName : '';
		var exchangeProductSymbol = (this.props.deskValue) ? this.props.deskValue.exchangeProductSymbol : '';
		var maxNoCallPeriod = (this.props.deskValue) ? this.props.deskValue.maxNoCallPeriod : '';

		//Checkboxes
		console.log(this.props.deskValue);
		var primaryDesk = this.props.deskValue.primaryDesk == 'Y' ? true : false;
		var secondaryDesk = this.props.deskValue.secondaryDesk == 'Y' ? true : false;
		var internalTradesOnly = this.props.deskValue.internalTradesOnly === 'Y' ? true : false;
		var interbankTradesBToBOnly = this.props.deskValue.interbankTradesBToBOnly === 'Y' ? true : false;
		var financialInstitutions = this.props.deskValue.financialInstitutions == 'Y' ? true : false;
		var globalCorporates = this.props.deskValue.globalCorporates == 'Y' ? true : false;
		var midMarkets = this.props.deskValue.midMarkets == 'Y' ? true : false;
		var sME = this.props.deskValue.sME == 'Y' ? true : false;
		var sMESegment = this.props.deskValue.sMESegment == 'Y' ? true : false;
		var wealth = this.props.deskValue.wealth == 'Y' ? true : false;
		var retailBusinessBanking = this.props.deskValue.retailBusinessBanking == 'Y' ? true : false;
		var retail = this.props.deskValue.retail == 'Y' ? true : false;
		var bankEntities = [];
		var trading = [];
		return {
			trading: this.props.trading ? this.props.trading : null, bankEntities: this.props.bankEntities ? this.props.bankEntities : bankEntities, desks: desks, deskHead: deskHead, description: description, type: type, maximumLimitSizePerTrade: maximumLimitSizePerTrade,
			minimumLimitSizePerTrade: minimumLimitSizePerTrade, totalNotionalLimit: totalNotionalLimit, maxNumberOfTrades: maxNumberOfTrades,
			maxNoCallPeriod: maxNoCallPeriod, clientTypeRestriction: clientTypeRestriction, exchangeName: exchangeName,
			exchangeProductSymbol: exchangeProductSymbol, maxNoCallPeriod: maxNoCallPeriod, primaryDesk: primaryDesk, secondaryDesk: secondaryDesk,
			internalTradesOnly: internalTradesOnly, interbankTradesBToBOnly: interbankTradesBToBOnly, financialInstitutions: financialInstitutions,
			globalCorporates: globalCorporates, midMarkets: midMarkets, sME: sME, sMESegment: sMESegment, wealth: wealth,
			retailBusinessBanking: retailBusinessBanking, retail: retail, refData: refData, showHide : false
		};
	},

	getKeyByValue(value, dataGroup) {
		if (dataGroup) {
			var i,
				len = dataGroup.length;
			for (i = 0; i < len; i++) {
				if (dataGroup[i].refDataKeyName == value) {
					return dataGroup[i].idValues;
				}
			}
		}
	},
	getAttrValues(attrKey, dataGroup) {
		var attrValues = [];
		if (dataGroup) {
			var i,
				len = dataGroup.length;
			for (i = 0; i < len; i++) {
				if (dataGroup[i].attrName == attrKey) {
					attrValues[i] = dataGroup[i];
				}
			}
			return attrValues;
		}
	},
	mapSelectOptionsWithReactSelect(results) {
		if (results && results.length > 0) {
			return results.map((result) => {
				return {
					label: result.refDataValue,
					value: result.refDataValue
				};
			});
		}
		return [];
	},
	mapEditedValuesWithReactSelect(results) {
		if (results && results.length > 0) {
			return results.map((result) => {
				return {
					label: result.attrValue,
					value: result.attrValue
				};
			});
		}
		return [];
	},

	
	getDeskName() {
		// console.log(this.props.deskName + '--------->');

		if (this.props.selectDesk) {
			for (let i = 0; i < this.props.selectDesk.length; i++) {
				// console.log(this.props.selectDesk[i].refDataValue + '---------#');
				if (this.props.selectDesk[i].refDataValue === this.props.deskName) {
					return this.props.selectDesk[i].refDataValue;
				}
			}
		}
	},
	handleSelectChange(e) {
		alert("asfsdf")
		console.log(e.target.id);
		let id = e.target.id;
		let value = e.target.value;
		let splitId = id.split("_");
		let column = splitId[0];
		let columnIndex = splitId[1];
		var change = {};
		this.state.trading[column] = value;
	},
	handleInputChange(e) {

		let id = e.target.id;
		let value = e.target.value;
		let splitId = id.split("_");
		let column = splitId[0];
		let columnIndex = splitId[1];
		var change = {};
		this.state.trading[column] = value;
	},
	handleCheckboxChange(e) {

		let id = e.target.id;
		let value = e.target.value;
		let splitId = id.split("_");
		let column = splitId[0];
		let columnIndex = splitId[1];
		var change = {};
		this.state.trading[column] = value;
	},
	// Mulit Bank
	addNewBankEntity(e) {
		// console.log(e);
		// console.log("Print --- ")
		let objID = (e.target.id).split("_")[1];
		// bankentity_0
		let bankEntity = '';
		let bankEntityDropdown = document.getElementById('bankentity_' + objID).value;
		if (bankEntityDropdown) {
			//  let BankEntityArray = this.state.tradingDesk[objID].bankEntities;
			let BankEntityArray = this.props.trading.bankEntities;
			let heritage = this.getKeyByValue(apidata.APPROVED_HERITAGE, this.props.refData.refDataKeyGroups);
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
						alert("This bankenity already added to this Trading Desk " + bankEntity)
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
					bankEntityStatus: ""
				}
					//'bankName': bankEntity, 'bankEntityCurrencies':[]}
				);
				this.forceUpdate();
			}
		} else { return false; }
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
	primarySecondaryDesksHandlers(e) {

		let primarySecondayId = e.target.id;
		console.log(primarySecondayId);
		this.props.primarySecondaryHandler(primarySecondayId);
		this.forceUpdate();
	},
	clientSegmentHandler(e) {

		let clientSegmentId = e.target.id;
		console.log(clientSegmentId);
		this.props.clientSegmentHandler(clientSegmentId);
		this.forceUpdate();
	},
	toggleClientSegment(e) {
		var trading = this.state.trading;
		var id = e.target.id;
		var column = id.split("_")[0];
		var value = e.target.checked ? 'Y' : 'N';
		if (value != 'N') {
			$('#clientSegment_' + this.props.tradingIndex).slideToggle().removeClass('show');
		} else {
			$('#clientSegment_' + this.props.tradingIndex).slideToggle().removeClass('hide');
		}
		trading[column] = value;
		this.setState(trading);

	},
	deleteTrading(e) {
		alert("asfsdfsdfsdfsd")
		this.props.deleteTrading(e.target.id);
		this.forceUpdate();
		/*console.log(e.target.id)
		let delId = e.target.id.split("_");
		let tradingId = delId[1];
		 let updateTradingDesk = [];
		 let tradingLength = this.state.bankEntities.length;
		 for (let i = 0; i < tradingLength; i++) {
		 if (i === tradingId) {
		 	
		 } else {
			 updateTradingDesk[i] =(this.state.bankEntities[i]);
		 }
		 }
		 this.setState({bankEntities: ''});
		 this.setState({bankEntities: [updateTradingDesk]});
		 console.log(this.state.bankEntities);
		 this.props.bankEntities = this.state.bankEntities;
		 console.log(this.props.bankEntities);
	 	
	 // this.state.bankEntityRows.bankEntityCurrencies = updateRow; */

	},
	render(){
		//Trading Desk
		let approvalRestrictionType = this.getKeyByValue(apidata.APPROVAL_RESTRICTION_TYPE, this.props.refData.refDataKeyGroups);
		let exchangeName = this.getKeyByValue(apidata.EXCHANGE_NAME, this.props.refData.refDataKeyGroups);
		let exchangeProductSymbol = this.getKeyByValue(apidata.EXCHANGE_PRODUCT_SYMBOL, this.props.refData.refDataKeyGroups);
		this.approvedHeritage = this.getKeyByValue(apidata.APPROVED_HERITAGE, this.props.refData.refDataKeyGroups);
		let underlyingStatus = this.getKeyByValue(apidata.UNDERLYING_STATUS, this.props.refData.refDataKeyGroups);
		this.props.getTradingDetails();

		let internalTradesOnly = (this.props.deskValue.clientSegment.internalTradesOnly === "Y") ? true : false;
		let x = this.props.deskValue.clientSegment;
		let disabledinternalTradesOnly = false;
		if (x.interbankMarket === "Y" && x.financialInstitutions === "Y" && x.globalCorporates === "Y" && x.midmarketers === "Y" && x.sme === "Y" && x.smeSegment === "Y" && x.smeSegment === "Y" && x.wealth === "Y" && x.retailBusinessBank === "Y" && x.retail === "Y") {

			disabledinternalTradesOnly = true;
		}
		let remainingClientSegments = false;
		if (x.internalTradesOnly === "Y") {
			remainingClientSegments = true;
		}
		return(
			<div>
					<div className="container-fluid txt-color">
						<div className="row">
							<div className="form-group">
								<div className="col-lg-4 col-md-4 col-sm-4">

								</div>
							</div>
							<div className="form-group inline">
								<div className="col-lg-1 col-md-1 col-sm-1">
									<label htmlFor="deskHead">Trading Desk Status</label>
								</div>
								<div className="col-lg-2 col-md-2 col-sm-2">
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-1 col-md-1 col-sm-1">
								<div className="form-group">
									<label htmlFor="primaryDesk">Primary Desk er {this.props.deskValue.primaryDesk}</label>
									<input name={'primaryDesk_' + this.props.tradingIndex}  checked={this.props.deskValue.primaryDesk} id={'primaryDesk_' + this.props.tradingIndex} onClick={this.primarySecondaryDesksHandlers} type="checkbox" name={'primaryDesk_' + this.props.tradingIndex} />

								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-2">
								<div className="form-group">
									<label htmlFor="secondaryDesk">Secondary Desk</label>
									<input name={'secondaryDesk_' + this.props.tradingIndex} checked={this.props.deskValue.secondaryDesk} id={'secondaryDesk_' + this.props.tradingIndex} onClick={this.primarySecondaryDesksHandlers} type="checkbox" name={'secondaryDesk_' + this.props.tradingIndex} />
								</div>
							</div>
							<div className="form-group inline">
								<div className="col-lg-1 col-md-1 col-sm-1">
									<label htmlFor="deskHead">Desk Head</label>
								</div>
								<div className="col-lg-2 col-md-2 col-sm-2">
									<InputText key={Math.random()} name="deskHead" value={this.props.deskValue.deskHead} onChange={this.handleInputChange.bind(this, 'deskHead')} />
								</div>
							</div>
						</div>
						<hr />
						<div className="row-fluid segment">
							<h3>Client Segment</h3>
							<div className="container-fluid text-center">
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="internalTradesOnly">Internal<br />Trades Only</label>
										{/*<CheckBox name="internalTradesOnly"
                                           checked={internalTradesOnly}
                                           disabled={this.props.disableFormFields}
                                           sid={'internalTradesOnly_'+this.props.tradingIndex}
                                           //onChange={this.handleCheckboxChange}
                                           onChange={this.toggleClientSegment}
                                 		/>*/}

										<input disabled={disabledinternalTradesOnly} checked={internalTradesOnly} id={'internalTradesOnly_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'internalTradesOnly_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="interbankTradesBToBOnly">Interbank Market</label>
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.interbankMarket === "Y" && true} id={'interbankMarket_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'interbankMarket_' + this.props.tradingIndex} />

									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="financialInstitutions">Financial Institutions</label>
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.financialInstitutions === "Y" ? true : ''} id={'financialInstitutions_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'financialInstitutions_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="globalCorporates">Global Corporates</label>
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.globalCorporates === "Y" ? true : ''} id={'globalCorporates_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'globalCorporates_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="midMarkets">Mid Markets</label>
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.midmarketers === "Y" ? true : ''} id={'midmarketers_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'midmarketers_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="sME">SME</label><br />
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.sme === "Y" ? true : ''} id={'sme_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'sme_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="sMESegment">SME <br />Segment</label><br />
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.smeSegment === "Y" ? true : ''} id={'smeSegment_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'smeSegment_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="wealth">Wealth</label><br />
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.wealth === "Y" ? true : ''} id={'wealth_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'wealth_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="retailBusinessBanking">Retail Business Bank</label>
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.retailBusinessBank === "Y" ? true : ''} id={'retailBusinessBank_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'retailBusinessBank_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<label htmlFor="retail">Retail</label><br />
										<input disabled={remainingClientSegments} checked={this.props.deskValue.clientSegment.retail === "Y" ? true : ''} id={'retail_' + this.props.tradingIndex} onClick={this.clientSegmentHandler} type="checkbox" name={'retail_' + this.props.tradingIndex} />
									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1"></div>
							</div>
						</div>
						<div className="clear"></div>
						<hr />

						<div className="row">
							<div className="container">
								<div className="col-lg-2 col-md-2 col-sm-2">
									<div className="form-group">
										<label for="bankEntity">Bank Entity</label>
										{/*<SelectBox sid={'bankentity_'+this.props.tradingIndex} data={this.approvedHeritage} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} /> */}
										<SelectBox data={this.approvedHeritage}
											selected={this.state.bankEntityName}
											value={apidata.apiKeys.refDataValue}
											id={apidata.apiKeys.refDataValue}
											sid={'bankentity_' + this.props.tradingIndex}
											placeholder="Please Select Bank Entity" />

									</div>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<div className="form-group">
										<div className="form-group">
											<label></label>
											<button className="btn btn-primary" id={'bankentityname_' + this.props.tradingIndex} onClick={this.addNewBankEntity} type="button">Add</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="clear"></div>

						{ /*this.props.bankEntities.length > 0 && (this.props.bankEntities).map((result, index) => (
							<AddBankEntity key={'MulitBank' + index + Math.random()}
								data={result.bankEntityCurrencies}
								bankEntityName={result.bankEntityName}
								tradingIndex={this.props.tradingIndex}
								bankentityIndex={index}
								bankEntityResult={result}
								deleteRows={this.props.deleteRows}
								deleteBankEntity={this.deleteBankEntity}
								selectEntity={this.approvedHeritage}
								bankEntity={result.bankEntityName}
								refData={this.props.refData}
								/>
						))*/ }
						<hr />

						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="form-group">
									<label for="approvalRestrictionDescription">Restriction Type</label>
									<SelectBox  data={approvalRestrictionType}

										value={apidata.apiKeys.refDataValue}
										id={apidata.apiKeys.refDataValue}
										sid={'restrictionType_' + this.props.tradingIndex}
										onChange={this.handleSelectChange}
										placeholder="underlyingStatus" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="form-group">
									<label for="approvalRestrictionDescription">Approval Restriction Description</label>
									<TextArea value={this.state.description} onChange={this.handleInputChange.bind(this, 'description')} />
								</div>
							</div>
							<div className="clear"></div>
							<div className="col-lg-4 col-md-4 col-sm-4">
								<div className="form-group">
									<label for="clientTypeRestriction">Client Type restriction
                                 <span> (MFD types)</span>
									</label>
									{/*<SelectBox data={approvalRestrictionType} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} /> */}
									<Select key={Math.random()} multi data={approvalRestrictionType}
										id={apidata.apiKeys.refDataValue}
										value={this.state.clientTypeRestriction}
										name="clientTypeRestriction"
										options={this.mapSelectOptionsWithReactSelect(approvalRestrictionType)}
										onChange={this.handleSelectChange.bind(this, 'clientTypeRestriction')}
										placeholder='Please select Client Type Restrictions' />
								</div>
								<div className="form-group">
									<label for="MaxmumLimitSizePerTrade">Maximum limit size per Trade</label>
									<SelectBox   data={apidata.jsonData}
										selected={this.state.maximumLimitSizePerTrade}
										value={apidata.apiKeys.refDataValue}
										id={apidata.apiKeys.refDataValue}
										sid="maximumLimitSizePerTrade"
										onChange={this.handleInputChange.bind(this, 'maximumLimitSizePerTrade')}
										placeholder="Please Select Maximum limit size per Trade" />
								</div>
								<div className="form-group">
									<label for="MinimumLimitSizePerTrade">Minimum limit size per Trade</label>
									<SelectBox  data={apidata.jsonData}
										selected={this.state.minimumLimitSizePerTrade}
										value={apidata.apiKeys.refDataValue}
										id={apidata.apiKeys.refDataValue}
										sid="minimumLimitSizePerTrade"
										onChange={this.handleInputChange.bind(this, 'minimumLimitSizePerTrade')}
										placeholder="Please Select Minimum limit size per Trade" />
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4">
								<div className="form-group">
									<label for="totalNationalLimitOnAllTrades">Total National Limit on all trades</label>
									<SelectBox  data={apidata.jsonData}
										selected={this.state.totalNotionalLimit}
										value={apidata.apiKeys.refDataValue}
										id={apidata.apiKeys.refDataValue}
										sid="totalNotionalLimit"
										onChange={this.handleInputChange.bind(this, 'totalNotionalLimit')}
										placeholder="Please Select National Limit on all trades" />
								</div>
								<div className="form-group">
									<label for="maximumTraders">Maximum Traders</label>
									<SelectBox  data={apidata.jsonData}
										selected={this.state.maxNumberOfTrades}
										value={apidata.apiKeys.refDataValue}
										id={apidata.apiKeys.refDataValue}
										sid="maxNumberOfTrades"
										onChange={this.handleInputChange.bind(this, 'maxNumberOfTrades')}
										placeholder="Please Select Maximum Traders" />
								</div>
								<div className="form-group">
									<label for="dateofProductStatusChange">Interbank Traders
                                 <span> (back to back only)</span>
									</label>
									<SelectBox  data={apidata.jsonData}
										selected={this.state.interbankTradesBToBOnly}
										value={apidata.apiKeys.refDataValue}
										id={apidata.apiKeys.refDataValue}
										sid="interbankTradesBToBOnly"
										onChange={this.handleInputChange.bind(this, 'interbankTradesBToBOnly')}
										placeholder="Please Select Interbank Traders" />
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4">
								<div className="form-group">
									<label for="exchangeName">Exchange Name</label>
									{/*<SelectBox data={exchangeName} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} /> */}
									<Select  key={Math.random()}  multi data={exchangeName}
										id={apidata.apiKeys.refDataValue}
										value={this.state.exchangeName}
										name="exchangeName"
										options={this.mapSelectOptionsWithReactSelect(exchangeName)}
										onChange={this.handleSelectChange.bind(this, 'exchangeName')}
										placeholder='Please select Exchange Name' />
								</div>
								<div className="form-group">
									<label for="exchangeSymbol">Exchange Symbol</label>
									{/*<SelectBox data={exchangeProductSymbol} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} /> */}
									<Select key={Math.random()} multi data={exchangeProductSymbol}
										id={apidata.apiKeys.refDataValue}
										value={this.state.exchangeProductSymbol}
										name="exchangeProductSymbol"
										options={this.mapSelectOptionsWithReactSelect(exchangeProductSymbol)}
										onChange={this.handleSelectChange.bind(this, 'exchangeProductSymbol')}
										placeholder='Please select Exchange Symbol' />
								</div>
								<div className="form-group">
									<label for="maximumCallPeriod">Maximum Call Period</label>
									{/*<SelectBox data={approvalRestrictionType} id={apidata.apiKeys.refDataId} value={apidata.apiKeys.refDataValue} /> */}
									<Select key={Math.random()} multi data={approvalRestrictionType}
										id={apidata.apiKeys.refDataValue}
										value={this.state.maxNoCallPeriod}
										name="maxNoCallPeriod"
										options={this.mapSelectOptionsWithReactSelect(approvalRestrictionType)}
										onChange={this.handleSelectChange.bind(this, 'maxNoCallPeriod')}
										placeholder='Please select Maximum Call Period' />
								</div>
							</div>
						</div>
					</div>
				</div> 
		)
	}
});
let f = '';
let w = '';
var AddTradingDesk = React.createClass({
	getInitialState() {

		var desks = {};
		var refData = {};
		var deskHead = (this.props.deskValue) ? this.props.deskValue.deskHead : '';
		var bankEntityName = (this.props.BankEntity) ? this.props.BankEntity.bankEntityName : '';
		//Approval Restrictions
		console.log("this.props.approvalRestrictions");
		// console.log(this.props.approvalRestrictions);
		//   console.log((this.props.approvalRestrictions)[0].description);
		var description = (this.props.approvalRestrictions) ? (this.props.approvalRestrictions)[0].description : '';
		var type = (this.props.approvalRestrictions) ? (this.props.approvalRestrictions)[0].type : '';
		var maximumLimitSizePerTrade = (this.props.deskValue) ? this.props.deskValue.maximumLimitSizePerTrade : '';
		var minimumLimitSizePerTrade = (this.props.deskValue) ? this.props.deskValue.minimumLimitSizePerTrade : '';
		var totalNotionalLimit = (this.props.deskValue) ? this.props.deskValue.totalNotionalLimit : '';
		var maxNumberOfTrades = (this.props.deskValue) ? this.props.deskValue.maxNumberOfTrades : '';
		var maxNoCallPeriod = (this.props.deskValue) ? this.props.deskValue.maxNoCallPeriod : '';
		//Multi Selects
		var clientTypeRestriction = (this.props.deskValue) ? this.props.deskValue.clientTypeRestriction : '';
		var exchangeName = (this.props.deskValue) ? this.props.deskValue.exchangeName : '';
		var exchangeProductSymbol = (this.props.deskValue) ? this.props.deskValue.exchangeProductSymbol : '';
		var maxNoCallPeriod = (this.props.deskValue) ? this.props.deskValue.maxNoCallPeriod : '';

		//Checkboxes
		console.log(this.props.deskValue);
		var primaryDesk = this.props.deskValue.primaryDesk == 'Y' ? true : false;
		var secondaryDesk = this.props.deskValue.secondaryDesk == 'Y' ? true : false;
		var internalTradesOnly = this.props.deskValue.internalTradesOnly === 'Y' ? true : false;
		var interbankTradesBToBOnly = this.props.deskValue.interbankTradesBToBOnly === 'Y' ? true : false;
		var financialInstitutions = this.props.deskValue.financialInstitutions == 'Y' ? true : false;
		var globalCorporates = this.props.deskValue.globalCorporates == 'Y' ? true : false;
		var midMarkets = this.props.deskValue.midMarkets == 'Y' ? true : false;
		var sME = this.props.deskValue.sME == 'Y' ? true : false;
		var sMESegment = this.props.deskValue.sMESegment == 'Y' ? true : false;
		var wealth = this.props.deskValue.wealth == 'Y' ? true : false;
		var retailBusinessBanking = this.props.deskValue.retailBusinessBanking == 'Y' ? true : false;
		var retail = this.props.deskValue.retail == 'Y' ? true : false;
		var bankEntities = [];
		var trading = [];
		return {
			trading: this.props.trading ? this.props.trading : null, bankEntities: this.props.bankEntities ? this.props.bankEntities : bankEntities, desks: desks, deskHead: deskHead, description: description, type: type, maximumLimitSizePerTrade: maximumLimitSizePerTrade,
			minimumLimitSizePerTrade: minimumLimitSizePerTrade, totalNotionalLimit: totalNotionalLimit, maxNumberOfTrades: maxNumberOfTrades,
			maxNoCallPeriod: maxNoCallPeriod, clientTypeRestriction: clientTypeRestriction, exchangeName: exchangeName,
			exchangeProductSymbol: exchangeProductSymbol, maxNoCallPeriod: maxNoCallPeriod, primaryDesk: primaryDesk, secondaryDesk: secondaryDesk,
			internalTradesOnly: internalTradesOnly, interbankTradesBToBOnly: interbankTradesBToBOnly, financialInstitutions: financialInstitutions,
			globalCorporates: globalCorporates, midMarkets: midMarkets, sME: sME, sMESegment: sMESegment, wealth: wealth,
			retailBusinessBanking: retailBusinessBanking, retail: retail, refData: refData, showHide : false
		};
	},
	
	getKeyByValue(value, dataGroup) {
		if (dataGroup) {
			var i,
				len = dataGroup.length;
			for (i = 0; i < len; i++) {
				if (dataGroup[i].refDataKeyName == value) {
					return dataGroup[i].idValues;
				}
			}
		}
	},
	getDeskName() {
		console.log(this.props.deskName + '------**--->');

		if (this.props.selectDesk) {
			for (let i = 0; i < this.props.selectDesk.length; i++) {
				console.log(this.props.selectDesk[i].refDataValue + '---------#');
				if (this.props.selectDesk[i].refDataValue === this.props.deskName) {
					return this.props.selectDesk[i].refDataValue;
				}
			}
		}
	},
	componentDidMount(){
		f = <BeforeLoadeachTRading />
	},
	getAttrValues(attrKey, dataGroup) {
		var attrValues = [];
		if (dataGroup) {
			var i,
				len = dataGroup.length;
			for (i = 0; i < len; i++) {
				if (dataGroup[i].attrName == attrKey) {
					attrValues[i] = dataGroup[i];
				}
			}
			return attrValues;
		}
	},
	toggleTradingDesks(e) {
		console.log(e.target.dataset.id);
		console.log(this.props.deskValue);
		w = 'He he ';
		var id = 'Dtrading_'+e.target.dataset.id;
		//f = <BeforeLoadeachTRading data={this.props.deskValue}/>;
		this.forceUpdate();
		// if(!this.props.showHide){
		// 	this.props.showHide  = true;	
		// } else {
		// 	this.props.showHide = false;
		// }
		// this.props.showHide = !this.props.showHide;
		// $('#trading-' + id).slideToggle().removeClass('hide');
		// this.setState({showHide: !this.state.showHide});
		// this.state.showHide = true;
		console.log(id);
		 //var id = 'd' + e.target.dataset.id;
		 console.log(document.getElementById(id).classList.value);
		if ((document.getElementById(id).classList.value).indexOf("maxHeight") < 0) {
		document.getElementById(id).classList = "expandable maxHeight";
		} else {
		document.getElementById(id).classList = "expandable ";
		}
	},
	// componentWillUpdate(nextProps, nextState){
		
	// 	console.log("nextProps-----");
	// 	console.log(nextProps);
	// 	console.log("nextProps----->>>");
	// 	f = <BeforeLoadeachTRading data={nextProps} />
	// },
	render() {
		//Trading Desk
		/*let approvalRestrictionType = this.getKeyByValue(apidata.APPROVAL_RESTRICTION_TYPE, this.props.refData.refDataKeyGroups);
		let exchangeName = this.getKeyByValue(apidata.EXCHANGE_NAME, this.props.refData.refDataKeyGroups);
		let exchangeProductSymbol = this.getKeyByValue(apidata.EXCHANGE_PRODUCT_SYMBOL, this.props.refData.refDataKeyGroups);
		this.approvedHeritage = this.getKeyByValue(apidata.APPROVED_HERITAGE, this.props.refData.refDataKeyGroups);
		let underlyingStatus = this.getKeyByValue(apidata.UNDERLYING_STATUS, this.props.refData.refDataKeyGroups);
		this.props.getTradingDetails();

		let internalTradesOnly = (this.props.deskValue.clientSegment.internalTradesOnly === "Y") ? true : false;
		let x = this.props.deskValue.clientSegment;
		let disabledinternalTradesOnly = false;
		if (x.interbankMarket === "Y" && x.financialInstitutions === "Y" && x.globalCorporates === "Y" && x.midmarketers === "Y" && x.sme === "Y" && x.smeSegment === "Y" && x.smeSegment === "Y" && x.wealth === "Y" && x.retailBusinessBank === "Y" && x.retail === "Y") {

			disabledinternalTradesOnly = true;
		}
		let remainingClientSegments = false;
		if (x.internalTradesOnly === "Y") {
			remainingClientSegments = true;
		}
		console.log(">>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<----------------------" + this.props.tradingIndex);
		console.log("this.state.deskValue");
		console.log(this.props.deskValue);*/
		
		return (

			<div className="list-group-item product-containers" data-id={this.props.tradingIndex} onClick={this.toggleTradingDesks}> {this.getDeskName()}
				<div className="clear"></div>
				
				<div className="col-lg-4 col-md-4 col-sm-4" id={'delTradingDesk_' + this.props.tradingIndex} onClick={this.deleteTrading}>Delete </div>
				<div className='expandable'  id={'Dtrading_' + this.props.tradingIndex}>
				{w!=='' && ((<div><TradingUI key={Math.random} 
					tradingIndex={this.props.tradingIndex}
					deleteRows={this.props.deleteRows}
					deleteBankEntity={this.props.deleteBankEntity}
					bankEntities = {this.props.bankEntities}
					deskValue={this.props.deskValue}
					approvalRestrictions={this.props.approvalRestrictions}
					id={this.props.id}
					addNewBankEntity={this.props.addNewBankEntity}
					value={this.props.value}
					deskName = {this.props.deskName}
					selectDesk={this.props.selectDesk}
					refData={this.props.refData}
					disableFormFields={this.props.disableFormFields}
					multiSelectName={this.props.multiSelectName}
					getTradingDetails={this.props.getTradingDetails}
					deleteBankEntity={this.props.deleteBankEntity}
					primarySecondaryHandler = {this.props.primarySecondaryHandler}
					clientSegmentHandler = {this.props.clientSegmentHandler}
					deleteTrading = {this.props.deleteTrading}
				 
				 /> </div>))}
				 
				
				</div>
{ /*this.props.showHide &&
			<div className='expandable' id={'Dtrading-' + this.props.tradingIndex}>
				Welcome {this.props.tradingIndex}
				 </div>
				*/ }
			</div>
		);
	}
});


let LoadeachTRading = React.createClass({
	render(){
		return(
			<div>Super {this.props.data}</div>
		)
	}
})

let BeforeLoadeachTRading = React.createClass({
	render(){
		console.log(this.props.data);
		return(
			<div> Hello
			{this.props.data && this.props.data.length > 0 && 
			<div>Super {this.props.data.deskName}</div>}
			</div>	
		
		)
	}
})

export default AddTradingDesk;
import React from "react";
import moment from "moment";
import InputText from "./../formfields/text.js";
import TextArea from "./../formfields/textarea.js";
import CheckBox from "./../formfields/checkbox.js";
import * as apidata from "./../api/api_form.jsx";
import Select from "react-select";
import SelectBox from "./../formfields/select.js";
import {ACTION_EDIT, ACTION_VIEW} from "../api/api_form.jsx";

var ProductDetails = React.createClass({
   isComponentDirty : false,
   getInitialState: function(){

      return this.getStateFromProps(this.props);
   },
   componentWillReceiveProps: function (newProps) {
      console.log("ProductDetails:componentWillReceiveProps.props",newProps);
      console.log("this.isComponentDirty", this.isComponentDirty);
      console.log("ProductDetails:componentWillReceiveProps.mandatoryRerender", newProps.mandatoryRerender)
      //this.forceUpdate();

      if(!this.isComponentDirty || newProps.mandatoryRerender) {
         console.log("Changing the state", newProps);
         this.setState(this.getStateFromProps(newProps));
      }
   },
   getStateFromProps: function (props) {
      console.log("getStateFromProps props", props);
      var pgDataAvailable = false;
      var pgOwner,pgPhone,lastAARDate,nextAARDate,complianceOwnerName,lastApprovalBy,productLaunchDate  = '';

      if (props.pd) {
         var productName = props.pd.productName;
         var productCode = props.pd.productCode;
         var productDescription = props.pd.productDescription;
         var overallRiskStatus = props.pd.overallRiskStatus;
         var productStatus = props.pd.productStatus ? props.pd.productStatus : '';
         var clientJurisdiction = props.pd.clientJurisdiction;
         var productComplexity = props.pd.productComplexity ? props.pd.productComplexity : '';
         var oneOffTrading = props.pd.oneOffTrading ? props.pd.oneOffTrading : '';

         var residualRiskRating = props.pd.residualRiskRating ? props.pd.residualRiskRating : '';
         var phierarchyMap = this.getAttrMap(props.pd.productHierarchy);
         var productFamily = this.extractSingleAttributeValueForKey(phierarchyMap, apidata.PRODUCT_FAMILY);
         var productSubFamily = this.extractSingleAttributeValueForKey(phierarchyMap, apidata.PRODUCT_SUB_FAMILY);
         var assetClass = this.extractSingleAttributeValueForKey(phierarchyMap, apidata.ASSET_CLASS);
         var productSubset = this.extractSingleAttributeValueForKey(phierarchyMap, apidata.PRODUCT_SUBSET);
         var oneMIHierachy = this.extractSingleAttributeValueForKey(phierarchyMap, apidata.ONE_MI_HIERARCHY)

         var compositeProduct = props.pd.compositeProduct ? props.pd.compositeProduct : '';
         var productType = props.pd.productType ? props.pd.productType : '';
         var mustUseMarkit = props.pd.mustUseMarkit ? props.pd.mustUseMarkit : '';

         var policyReference = props.pd.policyReference ? props.pd.policyReference : '';
         var npaReference = props.pd.npaReference ? props.pd.npaReference : '';


         var bunit = this.getAttrValues(apidata.BUSINESS_UNIT, props.pd.productCoreAttributes);
         var businessUnit = this.mapEditedValuesWithReactSelect(apidata.BUSINESS_UNIT, bunit);
         var bcIdentifier = this.getAttrValues(apidata.BUSINESS_CASE_IDENTIFIER, props.pd.productCoreAttributes);
         var businessCaseIdentifier = this.mapEditedValuesWithReactSelect(apidata.BUSINESS_CASE_IDENTIFIER, bcIdentifier);
         var auditDateTime = props.pd.auditDateTime;

         /************** Valuation details ***********/
         var qlProduct = this.getAttrValues(apidata.QL_PRODUCT, props.pd.productValuations);
         var qlProductValue =this.mapEditedValuesWithReactSelect(apidata.QL_PRODUCT, qlProduct);
         // Pricing model value
         var pricingModel = this.getAttrValues(apidata.PRICING_MODEL, props.pd.productValuations);
         var pricingModelValue =this.mapEditedValuesWithReactSelect(apidata.PRICING_MODEL, pricingModel);
         /************** End of Valuation details ***********/

         /************** Execution details ***********/
         //Trade Booking System value
         var tradeBooking = this.getAttrValues(apidata.TRADE_BOOKING_SYSTEM, props.pd.productExecutions);
         var tradeBookingValue = this.mapEditedValuesWithReactSelect(apidata.TRADE_BOOKING_SYSTEM, tradeBooking);
         // Distribution Method value
         var distributionMethod = this.getAttrValues(apidata.DISTRIBUTION_METHOD, props.pd.productExecutions);
         var distributionMethodValue = this.mapEditedValuesWithReactSelect(apidata.DISTRIBUTION_METHOD, distributionMethod);
         // Advisory Basis value
         var advisoryBasisValue = props.pd.advisoryBasis;
         /************** End of Execution details ***********/

         /************** Governance details ***********/
         if (props.pd.productGovernance) {
            pgDataAvailable = true;
            complianceOwnerName = props.pd.productGovernance.complianceOwnerName;
            lastApprovalBy = props.pd.productGovernance.lastApprovalBy;
         }
         if (pgDataAvailable) {
            var lastApprovalDate = props.pd.productGovernance.lastApprovalDate;
         }
         /************** End of Governance details ***********/

         /************** Regulatory Classification details ***********/
         var attrMap = this.getAttrMap(props.pd.productRegs);
         //var mifidValue = this.extractAttributeValuesForKey(attrMap, apidata.MIFID_CLASS);
         var mifidIIValue = this.extractAttributeValuesForKey(attrMap, apidata.MIFID2_CLASS);
         var isdaValue = this.extractAttributeValuesForKey(attrMap, apidata.ISDA_CLASS);
         var inscopeForPRIPPS = props.pd.inscopeForPRIPPS == 'Y'? true:false;
         var pRIPPSSecMarketImpact = props.pd.pRIPPSSecMarketImpact == 'Y'? true:false;

         var manLegalNameExist = this.extractAttributeValuesForKey(attrMap, apidata.MANUFACTURER_LEGAL_NAME);
         var manufacturerLegalName = manLegalNameExist[0]? manLegalNameExist[0].value: '';
         var tpLegalNameExist = this.extractAttributeValuesForKey(attrMap, apidata.DISTRIBUTOR_LEGAL_NAME);
         var thirdPartyDistributorLegalName = tpLegalNameExist[0] ? tpLegalNameExist[0].value: '';

         /************** end of Regulatory Classification details ***********/

      }
      return {
         /**********************************************/
         //Read Only Fields, the values must not change
         id: props.pd ? props.pd.id : 0,
         apdId: props.pd ? props.pd.apdId : '',
         auditStatus: props.pd ? props.pd.auditStatus : '',
         auditUser: props.pd ? props.pd.auditUser : '',
         auditDateTime: props.pd ? props.pd.auditDateTime : '',
         /**********************************************/
         productName: productName, productCode: productCode, productDescription: productDescription,
         overallRiskStatus: overallRiskStatus, productFamily: productFamily,
         clientJurisdiction: clientJurisdiction,
         productStatus: productStatus, businessUnit: businessUnit,
         oneMIHierachy: oneMIHierachy, oneOffTrading: oneOffTrading,
         businessCaseIdentifier: businessCaseIdentifier, auditDateTime: auditDateTime,
         dateOfProductStatusChange : this.props.pd.auditDateTime? this.props.pd.auditDateTime:null,
         productComplexity:productComplexity, residualRiskRating: residualRiskRating,
         productSubFamily: productSubFamily, compositeProduct: compositeProduct, productType: productType,
         mustUseMarkit: mustUseMarkit, assetClass: assetClass, productSubset: productSubset,
         //policyReference: policyReference,
         npaReference: npaReference,

         /************** Valuation details ***********/
         qlProductValue: qlProductValue, pricingModelValue: pricingModelValue,
         /************** End of Valuation details ***********/

         /************** Execution details ***********/
         tradeBookingValue: tradeBookingValue, advisoryBasis: advisoryBasisValue,
         distributionMethodValue: distributionMethodValue,
         /************** End of Execution details ***********/

         /************** Governance details ***********/
          pgDataAvailable : pgDataAvailable, lastApprovalDate: lastApprovalDate, complianceOwnerName:complianceOwnerName,
         lastApprovalBy:lastApprovalBy, startDate: moment(),
         /************** End of Governance details ***********/

         /************** Regulatory Classification details ***********/
         mifidIIValue: mifidIIValue, isdaValue: isdaValue,
         inscopeForPRIPPS:inscopeForPRIPPS, pRIPPSSecMarketImpact:pRIPPSSecMarketImpact,
         legalNameOfManufacturer:manufacturerLegalName, thirdPartyDistributorLegalName:thirdPartyDistributorLegalName
         /************** end of Regulatory Classification details ***********/
      };
   },
   getRefDataValueForKey: function(key) {
      return this.props.refData.get(key);
   },
   getAttrValues(attrKey, dataGroup){
      var attrValues = [];
      if(dataGroup){
         var i,
            len = dataGroup.length;
            for (i = 0; i < len; i++) {
               if (dataGroup[i].attrName == attrKey){
                  attrValues[i] = dataGroup[i];
               }
            }
         return attrValues;
      }
   },
   extractAttributeValuesForKey(attrMap, attrKey) {
      return this.mapEditedValuesWithReactSelect(attrKey, attrMap.get(attrKey));
   },
   extractSingleAttributeValueForKey(attrMap, attrKey) {
      return this.mapEditedValuesWithReactSelect(attrKey, attrMap.get(attrKey)).length > 0 ? this.mapEditedValuesWithReactSelect(attrKey, attrMap.get(attrKey))[0].value : "";
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
   mapSelectOptionsWithReactSelect(label, results) {
      if (results && results.length > 0) {
         return results.map((result) => {
            return {
               name : label,
               label: result.refDataValue,
               value: result.refDataValue
            };
         });
      }
      return [];
   },
   mapEditedValuesWithReactSelect(label, results) {
      if (results && results.length > 0) {
         return results.map((result) => {
            return {
               name: label,
               label: result.attrValue,
               value: result.attrValue
            };
         });
      }
      return [];
   },
   formatDateString: function(string) {
      var date = moment(string).toDate();
      var dateFormated = moment(date).format("DD/MM/YYYY");

      return dateFormated;
   },
   handleSelectChange(name, selectedValue, e){
      console.log("handleSelectChange e", e);
      var change = {};
      change[name] = selectedValue;
      this.setState(change);
      this.isComponentDirty=true;
   },
   handleInputChange(name, e){
      console.log("handleInputChange e", e);
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
      this.isComponentDirty=true;
      if(name == 'productType'){
         this.props.changeProductType(e.target.value);
      }
   },
   handleCheckBox(name, e){
      var change = {};
      change[name] = e.target.checked;
      this.setState(change);
      this.isComponentDirty=true;
   },
   getData: function() {
      return this.state;
   },
    render() {
      console.log("productDetails.jsx.render.state", this.state);
        // Product Details
       let productStatusOptions = this.getRefDataValueForKey(apidata.PRODUCT_STATUS);
       let productFamilyOptions = this.getRefDataValueForKey(apidata.PRODUCT_FAMILY);
       let productRegisterLocationOptions = this.getRefDataValueForKey(apidata.PRODUCT_REGISTER_LOCATION);
       let businessUnitOptions = this.getRefDataValueForKey(apidata.BUSINESS_UNIT);
       let oneMIHierarchyOptions = this.getRefDataValueForKey(apidata.ONE_MI_HIERARCHY);
       let clientJurisdictionCountryOptions = this.getRefDataValueForKey(apidata.CLIENT_JURISDICTION);
       let riskStatusOptions = this.getRefDataValueForKey(apidata.OVERALL_RISK_STATUS);
       let productComplexityOptions = this.getRefDataValueForKey(apidata.PRODUCT_COMPLEXITY);
       let businessCaseIdentifierOptions = this.getRefDataValueForKey(apidata.BUSINESS_CASE_IDENTIFIER);
       let dateOfProductStatusChange = this.state.dateOfProductStatusChange?this.formatDateString(this.state.dateOfProductStatusChange):'';

       let residualRiskRatingOptions = this.getRefDataValueForKey(apidata.RESIDUAL_RISK_RATING);
       let productSubFamilyOptions = this.getRefDataValueForKey(apidata.PRODUCT_SUB_FAMILY);
       let compositeProductOptions = this.getRefDataValueForKey(apidata.COMPOSITE_PRODUCT);
       let productTypeOptions = this.getRefDataValueForKey(apidata.PRODUCT_TYPE);
       let mustUseMarkitOptions =  this.getRefDataValueForKey(apidata.MUST_USE_MARKIT);
       let assetClassOptions = this.getRefDataValueForKey(apidata.ASSET_CLASS);
       let productSubsetOptions = this.getRefDataValueForKey(apidata.PRODUCT_SUBSET);

       /***** Valuation Details ***********/
       let QLProduct = this.getRefDataValueForKey(apidata.QL_PRODUCT);
       let pricingModel = this.getRefDataValueForKey(apidata.PRICING_MODEL);
       /************** End of Valuation details ***********/

       /************** Execution details ***********/
       let tradeBookingSystem = this.getRefDataValueForKey(apidata.TRADE_BOOKING_SYSTEM);
       let advisoryBasis = this.getRefDataValueForKey(apidata.ADVISORY_BASIS);
       let distributionMethod = this.getRefDataValueForKey(apidata.DISTRIBUTION_METHOD);
       /************** End of Execution details ***********/

       /************** Governance details ***********/
       let lastApprovalDateFormatted = this.formatDateString(this.state.lastApprovalDate);
       /************** End of Governance details ***********/

       /************** Regulatory Classification details ***********/

       let MIFIDIIClassification = this.getRefDataValueForKey(apidata.MIFID2_CLASS);
       let ISDAClassification = this.getRefDataValueForKey(apidata.ISDA_CLASS);
       /************** end of Regulatory Classification details ***********/
       return (

            <div className="container txt-color">
               <div className="clear"></div>
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group item-required">
                        <label htmlFor="productName">Product Name<span className="requiredField"> *</span></label>
                        <InputText name="productName" value={this.state.productName ? this.state.productName : ''}
                                   sid="productName"
                                   id="productName"
                                   onChange={this.handleInputChange.bind(this, 'productName')}
                                   disabled={this.props.disabled}
                                   required
                                   placeholder="---- Select product name ----"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group item-required">
                        <label htmlFor="productType">Product Type<span className="requiredField"> *</span></label>
                        {(this.props.params.action == ACTION_EDIT || this.props.params.action == ACTION_VIEW) ?
                           <p className="form-control-static para">{this.state.productType}</p> :
                        <SelectBox data={productTypeOptions}
                                   selected={this.state.productType}
                                   value={apidata.apiKeys.refDataValue}
                                   id="productType"
                                   sid="productType"
                                   onChange={this.handleInputChange.bind(this,'productType' )}
                                   placeholder="---- Select product status ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                        }
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="productStatus">Product Status<span className="requiredField"> *</span></label>
                        <SelectBox data={productStatusOptions}
                                   selected={this.state.productStatus}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="productStatus"
                                   onChange={this.handleInputChange.bind(this,'productStatus' )}
                                   placeholder="---- Select product status ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="dateofProductStatusChange">Date of Product Status Change</label>
                        <p className="form-control-static">{this.props.pd ? dateOfProductStatusChange : ''}</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="oneMiHierarchy">Composite Product</label>
                        <SelectBox data={compositeProductOptions}
                                   selected={this.state.compositeProduct}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="compositeProduct"
                                   onChange={this.handleInputChange.bind(this,'compositeProduct' )}
                                   placeholder="---- Select Composite Product ----"
                                   disabled={this.props.disabled}
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="oneOffTrading">One off Trading<span className="requiredField"> *</span></label>
                        <SelectBox data={apidata.boolean}
                                   selected={this.state.oneOffTrading}
                                   value={apidata.apiKeys.value}
                                   id={apidata.apiKeys.id}
                                   sid="oneOffTrading"
                                   onChange={this.handleInputChange.bind(this,'oneOffTrading' )}
                                   placeholder="---- Select one off trading ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="businessUnit">Business Unit <span className="requiredField"> *</span></label>
                        <Select multi data={businessUnitOptions}
                                id={apidata.apiKeys.refDataValue}
                                value={this.state.businessUnit}
                                options={this.mapSelectOptionsWithReactSelect(apidata.BUSINESS_UNIT, businessUnitOptions)}
                                onChange={this.handleSelectChange.bind(this,'businessUnit')}
                                placeholder='Please select Business Unit'
                                name={this.props.multiSelectName}
                                disabled={this.props.disabled}
                                sid="businessUnit"
                                required
                        />
                     </div>
                  </div>
               </div>

               <hr />
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="residualRiskRating">Residual Risk Rating <span className="requiredField"> *</span></label>
                        <SelectBox data={residualRiskRatingOptions}
                                   selected={this.state.residualRiskRating}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="residualRiskRating"
                                   onChange={this.handleInputChange.bind(this,'residualRiskRating' )}
                                   placeholder="---- Residual Risk Rating ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="productComplexityLabel">Product Complexity<span> *</span></label>
                        <SelectBox data={productComplexityOptions}
                                   selected={this.state.productComplexity}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="productComplexity"
                                   onChange={this.handleInputChange.bind(this,'productComplexity' )}
                                   placeholder="---- Select Product Complexity ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="qlProduct">QL Product</label>
                        <Select multi data={QLProduct}
                                id={apidata.apiKeys.refDataId} value={this.state.qlProductValue}
                                options={this.mapSelectOptionsWithReactSelect(apidata.QL_PRODUCT, QLProduct)}
                                onChange={this.handleSelectChange.bind(this, 'qlProductValue')}
                                placeholder='Please select QL Product'
                                name={this.props.multiSelectName}
                                disabled={this.props.disabled}
                                sid="qlProductValue"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="tradeBookingSystem">Trade Booking System</label>
                        <Select multi data={tradeBookingSystem}
                                id={apidata.apiKeys.refDataId} value={this.state.tradeBookingValue}
                                options={this.mapSelectOptionsWithReactSelect(apidata.TRADE_BOOKING_SYSTEM, tradeBookingSystem)}
                                onChange={this.handleSelectChange.bind(this, 'tradeBookingValue')}
                                placeholder='Please select Trade Booking System'
                                name={this.props.multiSelectName}
                                disabled={this.props.disabled}
                                sid="tradeBookingValue"
                        />
                     </div>
                  </div>
               </div>

               <hr />
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="overallProductRiskStatus">Asset Class</label>
                        <SelectBox data={assetClassOptions}
                                   selected={this.state.assetClass}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="assetClass"
                                   onChange={this.handleInputChange.bind(this,'assetClass' )}
                                   placeholder="---- Select Asset Class ----"
                                   disabled={this.props.disabled}
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group item-required">
                        <label htmlFor="productFamily">Product Family</label>
                        <SelectBox name="productFamily" data={productFamilyOptions}
                                   selected={this.state.productFamily}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="productFamily"
                                   onChange={this.handleInputChange.bind(this,'productFamily' )}
                                   placeholder="---- Select product family ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="productSubFamily">Product Sub Family</label>
                        <SelectBox data={productSubFamilyOptions}
                                   selected={this.state.productSubFamily}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="productSubFamily"
                                   onChange={this.handleInputChange.bind(this,'productSubFamily' )}
                                   placeholder="---- Select Product Sub Family ----"
                                   disabled={this.props.disabled}
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="productComplexityLabel">Product Subset</label>
                        <SelectBox data={productSubsetOptions}
                                   selected={this.state.productSubset}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="productSubset"
                                   onChange={this.handleInputChange.bind(this,'productSubset' )}
                                   placeholder="---- Select Product Subset ----"
                                   disabled={this.props.disabled}
                                   required
                        />
                     </div>
                  </div>
               </div>


               <hr />
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="npaReference">NPA Reference</label>
                        <InputText value={this.state.npaReference}
                                   onChange={this.handleInputChange.bind(this,'npaReference')}
                                   disabled={this.props.disabled}
                                   sid="npaReference"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="mustUseMarkit">Must Use Markit</label>
                        <SelectBox data={mustUseMarkitOptions}
                                   selected={this.state.mustUseMarkit}
                                   value={apidata.apiKeys.refDataValue}
                                   id={apidata.apiKeys.refDataValue}
                                   sid="mustUseMarkit"
                                   onChange={this.handleInputChange.bind(this,'mustUseMarkit' )}
                                   placeholder="---- Select Must Use Markit ----"
                                   disabled={this.props.disabled}
                        />
                     </div>
                  </div>
               </div>
               <hr />
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="prippsScope">In scope for PRIIPS</label>
                        <CheckBox name="inscopeForPRIPPS" checked={this.state.inscopeForPRIPPS}
                                  onChange={this.handleCheckBox.bind(this, 'inscopeForPRIPPS')}
                                  disabled={this.props.disabled}
                                  sid="inscopeForPRIPPS"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="productName">Legal Name of Manufacturer</label>
                        <InputText value={this.state.legalNameOfManufacturer}
                                   onChange={this.handleInputChange.bind(this,'legalNameOfManufacturer')}
                                   disabled={this.props.disabled}
                                   sid="legalNameOfManufacturer"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="prippsMarket" className="margin-right-10">PRIIPS - Secondary Market impact</label>
                        <CheckBox name="pRIPPSSecMarketImpact" checked={this.state.pRIPPSSecMarketImpact}
                                  onChange={this.handleCheckBox.bind(this, 'pRIPPSSecMarketImpact')}
                                  disabled={this.props.disabled}
                                  sid="pRIPPSSecMarketImpact"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="productName">Third Party Distributor Legal Name</label>
                        <InputText value={this.state.thirdPartyDistributorLegalName}
                                   onChange={this.handleInputChange.bind(this,'thirdPartyDistributorLegalName')}
                                   disabled={this.props.disabled}
                                   sid="thirdPartyDistributorLegalName"
                        />
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="ISDAClassification">ISDA Classification</label>
                        <Select multi data={ISDAClassification}
                                id={apidata.apiKeys.refDataValue} value={this.state.isdaValue}
                                options={this.mapSelectOptionsWithReactSelect(apidata.ISDA_CLASS, ISDAClassification)}
                                onChange={this.handleSelectChange.bind(this, 'isdaValue')}
                                placeholder='---- Select isda classification ----'
                                name={this.props.multiSelectName}
                                disabled={this.props.disabled}
                                sid="isdaValue"
                        />
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <div className="form-group">
                        <label htmlFor="MIFID2Classification">MIFID II Classification</label>
                        <Select multi data={MIFIDIIClassification}
                                id={apidata.apiKeys.refDataValue} value={this.state.mifidIIValue}
                                options={this.mapSelectOptionsWithReactSelect(apidata.MIFID2_CLASS, MIFIDIIClassification)}
                                onChange={this.handleSelectChange.bind(this, 'mifidIIValue')}
                                placeholder='---- Select mifid II classification ----'
                                name={this.props.multiSelectName}
                                disabled={this.props.disabled}
                                sid="mifidIIValue"
                        />
                     </div>
                  </div>
               </div>
               <div className="clear"></div>
               <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                     <label htmlFor="productDescription">Product Description<span className="requiredField"> *</span></label>
                             <TextArea value={this.state.productDescription ? this.state.productDescription : ''}
                                       onChange={this.handleInputChange.bind(this, 'productDescription')}
                                       disabled={this.props.disabled}
                                       placeholder="Please Enter Product Description"
                                       sid="productDescription"
                                       required
                             />
                  </div>
               </div>
            </div>
        );
    }
});

export default ProductDetails;

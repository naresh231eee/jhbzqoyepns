import React from "react";
import moment from "moment";
import InputText from "../formfields/text.js";
import TextArea from "../formfields/textarea.js";
import SelectBox from "../formfields/select.js";
import * as apidata from "../api/api_form.js";
import Select from "react-select";
import ValuationDetails from "./valuationDetails.js";
import ExecutionDetails from "./executionDetails.js";

// import InputText from "../formfields/text.js";
// import SelectBox from "../formfields/select.js";
// import * as apidata from "../api/api_form";


var ProductDetails = React.createClass({
   getInitialState: function(){
    //   console.log("this.props.ref",this.props.ref)

       if(this.props.pd) {
          var productName = this.props.pd.productName;
          var productCode = this.props.pd.productCode ;
          var productDescription = this.props.pd.productDescription;
          var overallRiskStatus = this.props.pd.overallRiskStatus;
          var productFamily = this.props.pd.productFamily?this.props.pd.productFamily:'';
          var productStatus = this.props.pd.productStatus;
          var clientJurisdiction = this.props.pd.clientJurisdiction;

          var oneMIHierachy = this.props.pd.oneMIHierarchy?this.props.pd.oneMIHierarchy:'' ;
          var oneOffTrading = this.props.pd.oneOffTrading;

          var bunit = this.getAttrValues(apidata.BUSINESS_UNIT, this.props.pd.productCoreAttributes);
          var businessUnit = this.mapEditedValuesWithReactSelect(apidata.BUSINESS_UNIT, bunit);
          var rlocation = this.getAttrValues(apidata.PRODUCT_REGISTER_LOCATION, this.props.pd.productCoreAttributes);
          var productRegister = this.mapEditedValuesWithReactSelect(apidata.PRODUCT_REGISTER_LOCATION, rlocation);
          var bcIdentifier = this.getAttrValues(apidata.BUSINESS_CASE_IDENTIFIER, this.props.pd.productCoreAttributes);
          var businessCaseIdentifier = this.mapEditedValuesWithReactSelect(apidata.BUSINESS_CASE_IDENTIFIER, bcIdentifier);
          var auditDateTime = this.props.pd.auditDateTime;
       }
      return {
         /**********************************************/
         //Read Only Fields, the values must not change
         id : this.props.pd? this.props.pd.id : 0,
         apdId : this.props.pd? this.props.pd.apdId : '',
         auditStatus : this.props.pd? this.props.pd.auditStatus : '',
         auditUser : this.props.pd? this.props.pd.auditUser : '',
         auditDateTime : this.props.pd? this.props.pd.auditDateTime : '',


         productName: productName, productCode: productCode, productDescription: productDescription,
         overallRiskStatus: overallRiskStatus, productFamily: productFamily,
         productRegister:productRegister, clientJurisdiction: clientJurisdiction,
         productStatus: productStatus, businessUnit: businessUnit,
         oneMIHierachy: oneMIHierachy, oneOffTrading:oneOffTrading,
          businessCaseIdentifier:businessCaseIdentifier, auditDateTime: auditDateTime
       };
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
   handleSelectChange(name, selectedValue, e){
    //   console.log("selectedValue",selectedValue);
    //   console.log("name",name);
    //   console.log("e",e);

      var change = {};
      change[name] = selectedValue;
      this.setState(change);
   },
   handleInputChange(name, e){
      var change = {};
      change[name] = e.target.value;
      this.setState(change);


   },
   getData: function() {
      return this.state;
   },
    render() {
        // Product Details
       let productStatusOptions = this.getKeyByValue(apidata.PRODUCT_STATUS, this.props.refData.refDataKeyGroups);
       let productFamilyOptions = this.getKeyByValue(apidata.PRODUCT_FAMILY, this.props.refData.refDataKeyGroups);
       let productRegisterLocationOptions = this.getKeyByValue(apidata.PRODUCT_REGISTER_LOCATION, this.props.refData.refDataKeyGroups);
       let businessUnitOptions = this.getKeyByValue(apidata.BUSINESS_UNIT, this.props.refData.refDataKeyGroups);
       let oneMIHierarchyOptions = this.getKeyByValue(apidata.ONE_MI_HIERARCHY, this.props.refData.refDataKeyGroups);
       let clientJurisdictionCountryOptions = this.getKeyByValue(apidata.CLIENT_JURISDICTION, this.props.refData.refDataKeyGroups);
       let riskStatusOptions = this.getKeyByValue(apidata.OVERALL_RISK_STATUS, this.props.refData.refDataKeyGroups);
       let businessCaseIdentifierOptions = this.getKeyByValue(apidata.BUSINESS_CASE_IDENTIFIER, this.props.refData.refDataKeyGroups);
       let dateOfProductStatusChange = moment(moment(this.state.auditDateTime).toDate()).format("DD/MM/YYYY");

       return (

            <div className="container txt-color">
                <div className="clear"></div>
                 <div className="row">
                     <div className="col-lg-4 col-md-4 col-sm-4">
                         <div className="form-group">
                             <label htmlFor="uniqueProductID">Unique Product ID</label>
                             <div className="controls">
                                <p className="form-control-static para" >{this.props.pd ? this.props.pd.apdId : ''}</p>
                             </div>
                         </div>
                         <div className="form-group">
                             <label htmlFor="productName">Product Name<span className="requiredField"> *</span></label>
                             <InputText name="productName" sid="productName" value={this.props.pd ? this.state.productName : ''} onChange={this.handleInputChange.bind(this, 'productName')} disabled={this.props.disabled} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="productCode">Product Code<span className="requiredField"> *</span></label>
                             <InputText value={this.props.pd ? this.state.productCode : ''} onChange={this.handleInputChange.bind(this, 'productCode')}  disabled={this.props.disabled} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="productFamily">Product Family<span className="requiredField"> *</span></label>
                            <SelectBox data={productFamilyOptions}
                                       selected={this.state.productFamily}
                                       value={apidata.apiKeys.refDataValue}
                                       id={apidata.apiKeys.refDataValue}
                                       sid="productFamily"
                                       onChange={this.handleInputChange.bind(this,'productFamily' )}
                                       placeholder="---- Select product family ----"
                                       disabled={this.props.disabled}
                            />
                         </div>
                         <div className="form-group">
                              <label htmlFor="overallProductRiskStatus">Overall Product Risk Status</label>
                              <SelectBox data={riskStatusOptions}
                                       selected={this.state.overallRiskStatus}
                                       value={apidata.apiKeys.refDataValue}
                                       id={apidata.apiKeys.refDataValue}
                                       sid="overallRiskStatus"
                                       onChange={this.handleInputChange.bind(this,'overallRiskStatus' )}
                                       placeholder="---- Select overall risk status ----"
                                       disabled={this.props.disabled}
                              />
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-4">
                         <div className="form-group">
                             <label htmlFor="productRegistrationLocation">Product Registration Location
                                <span className="requiredField"> *</span>
                             </label>
                             <Select multi data={productRegisterLocationOptions}
                                    id={apidata.apiKeys.refDataValue}
                                    value={this.state.productRegister}
                                    options={this.mapSelectOptionsWithReactSelect(apidata.PRODUCT_REGISTER_LOCATION, productRegisterLocationOptions)}
                                    onChange={this.handleSelectChange.bind(this,'productRegister')}
                                    placeholder='Please select Registration Location'
                                    name={this.props.multiSelectName}
                                    disabled={this.props.disabled}
                             />
                         </div>
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
                            />
                         </div>
                         <div className="form-group">
                             <label htmlFor="dateofProductStatusChange">Date of Product Status Change</label>
                             <p className="form-control-static">{this.props.pd ? dateOfProductStatusChange : ''}</p>
                         </div>
                         <div className="form-group">
                             <label htmlFor="clientJurisdictionCountry">Client Jurisdiction - Country<span> *</span></label>
                            <SelectBox data={clientJurisdictionCountryOptions}
                                       selected={this.state.clientJurisdiction}
                                       value={apidata.apiKeys.refDataValue}
                                       id={apidata.apiKeys.refDataValue}
                                       sid="clientJurisdiction"
                                       onChange={this.handleInputChange.bind(this,'clientJurisdiction' )}
                                       placeholder="---- Select client jurisdiction ----"
                                       disabled={this.props.disabled}
                            />
                         </div>

                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-4">
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
                             />
                         </div>
                         <div className="form-group">
                             <label htmlFor="businessCaseIdentifier">Business Case Identifier<span className="requiredField"> *</span></label>
                            <Select multi data={businessCaseIdentifierOptions}
                                    id={apidata.apiKeys.refDataId}
                                    value={this.state.businessCaseIdentifier}
                                    options={this.mapSelectOptionsWithReactSelect(apidata.BUSINESS_CASE_IDENTIFIER, businessCaseIdentifierOptions)}
                                    onChange={this.handleSelectChange.bind(this,'businessCaseIdentifier')}
                                    name={this.props.multiSelectName}
                                    disabled={this.props.disabled}
                                    placeholder={(this.props.pd) ? this.props.pd.productHierarchy : '---- Select business case identifier ----'} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="oneMiHierarchy">One MI Hierarchy</label>
                            <SelectBox data={oneMIHierarchyOptions}
                                       selected={this.state.oneMIHierachy}
                                       value={apidata.apiKeys.refDataValue}
                                       id={apidata.apiKeys.refDataValue}
                                       sid="oneMIHierarchy"
                                       onChange={this.handleInputChange.bind(this,'oneMIHierachy' )}
                                       placeholder="---- Select one MI hierarchy ----"
                                       disabled={this.props.disabled}
                            />
                         </div>
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
                            />
                         </div>
                     </div>
                     <div className="clear"></div>
                     <div className="col-lg-12 col-md-12 col-sm-12">
                         <div className="form-group">
                             <label htmlFor="productDescription">Product Description<span className="requiredField"> *</span></label>
                             <TextArea value={this.props.pd ? this.state.productDescription : ''} onChange={this.handleInputChange.bind(this, 'productDescription')} disabled={this.props.disabled} />
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
});

export default ProductDetails;

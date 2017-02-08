import React from "react";
import moment from "moment";
import InputText from "../formfields/text.js";
import TextArea from "../formfields/textarea.js";
import * as apidata from "../api/api_form.js";
import Select from "react-select";
import SelectBox from "../formfields/select.js";
import ProductDetails from "./productDetails.js";
import ValuationDetails from "./valuationDetails.js";
import ExecutionDetails from "./executionDetails.js";
import GovernanceDetails from "./governanceDetails.js";
import RegulatoryClassification from "./regulatoryClassification.js";

// import InputText from "../formfields/text.js";
// import SelectBox from "../formfields/select.js";
// import * as apidata from "../api/api_form";


var Products = React.createClass({
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
            businessCaseIdentifier:businessCaseIdentifier, auditDateTime: auditDateTime,
             governance: { date: '' }
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

   /* Added in New llyods */
   governanceDatesHandler(dateE, id) {
    this.state.governance[id] = dateE;
    this.forceUpdate();
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
                    Product Details
                    <ProductDetails ref={(ref) => this.productDetails = ref} refData={this.props.refData} pd={this.state.productDetails} />
                    Valuation Details
                    <ValuationDetails ref={(ref) => this.valuationDetails = ref} refData={this.state.refData} pd={this.state.productDetails} />
                    Execution Details
                    <ExecutionDetails refData={this.state.refData} pd={this.state.productDetails} />
                    GovernanceDetails
                    <GovernanceDetails governanceDatesHandler={this.governanceDatesHandler} refData={this.state.refData} gov={this.state.governance} pd={this.state.productDetails} />
                    Regulatory Classification
                    <RegulatoryClassification refData={this.state.refData} pd={this.state.productDetails} />
            </div>
        );
    }
});

export default Products;

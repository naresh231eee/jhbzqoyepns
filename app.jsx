 import React from "react";
import moment from "moment";
import PrimaryHeader from "./primaryHeader.jsx";
import ChangeDetails from "./changeDetails.jsx";
import ProductDetails from "./productDetails.jsx";
import ConfirmationModal from "./confirmationModal.jsx";
import InitiationModal from "./initiationModal.jsx";
import DiscardModal from "./discardModal.jsx";
import TradingDesk from "./tradingDesk.jsx";
import {Link} from "react-router";
import {ModalContainer, ModalDialog} from "react-modal-dialog";
import * as util from "./../util/util.js";
import {
   ACTION_EDIT,
   ACTION_CREATE,
   ACTION_VIEW,
   ACTION_SAVE,
   ACTION_CONFIRM,
   ACTION_REJECT,
   ACTION_DISCARD,
   ACTION_SUBMIT,
   ACTION_VIEW_LATEST_APPROVED,
   ACTION_DISPLAY_MAP,
   AUDIT_STATUS_APPROVED,
   AUDIT_STATUS_INITIATED,
   AUDIT_STATUS_PEND_CONFIRM,
   ACTION_CANCEL,
   MANDATORY_FIELD_VALIDATION_MESSAGE,
   PRIMARY_DESK_VALIDATION_MESSAGE,
   TRADING_DESK_VALIDATION_MESSAGE,
   TRADE_ECONOMIC_DATA_ROW_VALIDATION_MESSAGE,
   CLIENT_SEGMENT_VALIDATION_MESSAGE,
   BANK_ENTITY_VALIDATION_MESSAGE
} from "../api/api_form.jsx";

var App = React.createClass({
   getInitialState() {
      var tabdata = [
         {id: 1, author: "Change Details", text: "This is one comment"},
         {id: 2, author: "Product Details", text: "This is one comment"},
         {id: 3, author: "Add Trading Desk", text: "This is *another* comment"}
      ];
      var productDetails = {};
      var refData = {};
      var pd = {};
      var disabled  = false;
      var multiSelectDisableFieldName = '';
      var productId = '';
      var tradingDeskValue= [];
      var isConfirmModal= false;
      var isInitiationModal = false;
      var isModal=false;
      var isUndoModal=false;
      var errorHandlers = "";
      var action = this.props.params.action;
      var mandatoryRerender = false;

      this.getCurrentUser();

      return {
         formValue: {},
         tabdata: tabdata, productDetails: productDetails, refData: refData, pd: pd, index:'',
         disabled: disabled, multiSelectDisableFieldName: multiSelectDisableFieldName,
         tradingDeskValue: tradingDeskValue, isConfirmModal: isConfirmModal, isModal: isModal,
         isInitiationModal: isInitiationModal, errorHandlers: errorHandlers, errorsDisplay: false, isUndoModal: isUndoModal,
         action:action, mandatoryRerender: mandatoryRerender
      };
   },
   handleUndoClick(){
      this.setState({isUndoModal: true});
   },
   handleUndoClose(){
      this.setState({isUndoModal: false});
   },
   handleConfirmClick(){
      this.setState({isConfirmModal: true});
   },
   handleConfirmClose(){
      this.setState({isConfirmModal: false});
   },
   handleInitiationClick(){
      this.setState({isInitiationModal: true});
   },
   handleInitiationClose(){
      this.setState({isInitiationModal: false});
   },
   onModalClick(){
      this.setState({isModal: true});
   },
   onModalClose(){
      this.setState({isModal: false});
   },
   showHide(e){
      util.showHideDiv('section', e.target.dataset.id)
   },
   getProductDataFromWSAndSetState(url, stateAttributeName){
      $.ajax({
         url: url,
         type: 'GET',
         dataType: 'json',
         async: false,
         success: function(returnData) {
            console.log("app.jsx:componentWillMount: data", returnData);
            var change= {};
            change[stateAttributeName] = returnData.data;
            console.log("app.jsx:componentWillMount: change", change);
            this.setState(change);
            return returnData;
         }.bind(this)
      });
   },
   getRefDataFromWSAndSetState(url, stateAttributeName){
      $.ajax({
         url: url,
         type: 'GET',
         dataType: 'json',
         async: false,
         success: function(returnData) {
            console.log("app.jsx:componentWillMount: data", returnData);
            var formattedRefData = this.formatReferenceData(returnData.data.refDataKeyGroups);
            var change= {};
            change[stateAttributeName] = formattedRefData;
            this.setState(change);
            return returnData;
         }.bind(this)
      });
   },
   formatReferenceData(refDataKeyGroups){
      var refDataKeyMap = new Map();
      if(refDataKeyGroups){
         var i,
            len = refDataKeyGroups.length;
         for (i = 0; i < len; i++) {
            refDataKeyMap.set(refDataKeyGroups[i].refDataKeyName, refDataKeyGroups[i].idValues);
         }
         //console.log("app.jsx:formatReferenceData:refDataKeyMap", refDataKeyMap);
         return refDataKeyMap;
      }
   },
   componentDidMount(){
      console.log("app.jsx:componentDidMount: Component mounting finished:", moment(moment.now()).format("DD/MM/YYYY hh:mm:ss A"));
   },
   componentWillMount: function(){
      console.log("app.jsx:componentWillMount: Component mounting started:", moment(moment.now()).format("DD/MM/YYYY hh:mm:ss A"));
      console.log("app.jsx:componentWillMount: this.props.params", this.props.params);
      console.log("app.jsx:componentWillMount:Making Ajax call for action:", this.state.action);

      this.getCurrentUser();

      this.setState({errorHandlers: '',
         productDetails:'', productTypeProductDetails: {}});

      if(this.state.action == ACTION_VIEW_LATEST_APPROVED){
         var url = "apd/latestApproved?apdId=" + this.props.params.productId;
      } else {
         var url = "apd/product/" + this.props.params.productId;
      }

      if(ACTION_CREATE != this.state.action) {
         this.getProductDataFromWSAndSetState(url, 'productDetails');
      }
      // Load refData from Server
      console.log("app.jsx:componentWillMount: Now getting reference data");
      url = "apd/refData";
      this.getRefDataFromWSAndSetState(url, 'formattedRefData');

      if(this.state.action == ACTION_VIEW || this.state.action == ACTION_VIEW_LATEST_APPROVED){
         this.setState({disabled : true,
            multiSelectDisableFieldName : "disabled"});
      } else {
         this.setState({disabled : false,
            multiSelectDisableFieldName : ''});
      };
   },
   _onValueChange(name, value) {
      this.formData[name] = value;
   },
   changeState(data) {
      this.setState({productDetails: data});
   },
   formMandatoryFieldCheck() {
      var form = document.getElementById('productForm');
      for(var i=0; i < form.elements.length; i++){
         if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
            this.setState({isSuccess: false,
               errorHandlers:MANDATORY_FIELD_VALIDATION_MESSAGE });
            return false;
         }
      }
   },
   edit(){
      this.setState({disabled : false, multiSelectDisableFieldName : ''});
      window.location.replace('#/products/${this.props.params.productId}/'+ACTION_EDIT+'/'+ this.props.params.auditStatus);
   },
   save(){
      this.sendToServer(ACTION_SAVE);
      //this.setState({mandatoryRerender: true});
   },
   getCurrentUser(){
      console.log("app.jsx:getCurrentUser: Getting current user");
      $.ajax({
         url: "apd/currentUser",
         dataType: 'json',
         async: false,
         success: function (returnData) {
            var user = returnData.user;
            console.log("app.jsx:getCurrentUser: current user", user);
            this.setState({user: user});
         }.bind(this)
      })
   },
   submit(){
      this.state.errorHandlers = "";
      let tradingObj = this.tradingDesks.productTradingDesks;
      let tradingDeskLength = tradingObj.length;

      /*********** Mandatory field Validations ***********/

      this.formMandatoryFieldCheck();

      /*********** End of Mandatory field Validations ***********

       /***********  Trading Desk validations ***********/

      this.atleastOneBankEntityAndEconomicRowMustBeSelected(tradingDeskLength, tradingObj);

      /*********** Ends Trading Desk validations ***********/
   },
   atleastOnePrimaryDeskForProductFlag(tradingObj){
      let tradingDeskLength = tradingObj.length;
      let atleaseOnePrimary = false;
      _.map(tradingObj, (eachTrading, key) => {
         if(eachTrading.primaryDesk) {
            atleaseOnePrimary = true;
         }
      });
      if(!atleaseOnePrimary){
         this.setState({isSuccess: false,
            errorHandlers: PRIMARY_DESK_VALIDATION_MESSAGE});
         return false;
      }
   },
   atleastOneBankEntityAndEconomicRowMustBeSelected(tradingDeskLength, tradingObj){
      if(tradingDeskLength > 0){

         /*********** Select atleast one trading desk as primary desk ***********/

         this.atleastOnePrimaryDeskForProductFlag(tradingObj);

         /*********** End of primary desk validations ***********/

         for(let i=0; i < tradingDeskLength; i++){

            /*********** Internal or External Flag Validations ***************/

            let internalOrExternalFlag = (tradingObj[i].internalTradesOnly === 'Y' || tradingObj[i].interbankMarketHedging === 'Y'
            || tradingObj[i].externalGCT === 'Y' || tradingObj[i].financialInstitutions === 'Y' || tradingObj[i].globalCorporates === 'Y'
            || tradingObj[i].midMarkets=== 'Y' || tradingObj[i].moneyMarketLA === 'Y' || tradingObj[i].sME === 'Y' || tradingObj[i].sMESegment === 'Y'
            || tradingObj[i].wealth === 'Y' || tradingObj[i].retailBusinessBanking === 'Y' || tradingObj[i].retail === 'Y');

            if(!internalOrExternalFlag){
               let clientSegmentMessage = CLIENT_SEGMENT_VALIDATION_MESSAGE + tradingObj[i].deskName;
               this.setState({ isSuccess: false,errorHandlers:clientSegmentMessage});
               return false;
            }

            /*********** End of Internal or External Flag Validations ***************/

            /*********** Bank Entity validations ***********/
            let eachBankenityObj = tradingObj[i].bankEntities;
            let bankEntityLength = eachBankenityObj.length;

            if(bankEntityLength > 0){
               for(let j=0; j < eachBankenityObj.length; j++) {
                  let eachBankenityRowObj = eachBankenityObj[j].bankEntityCurrencies;
                  let eachBankenityRowObjLength = eachBankenityRowObj.length;
                  /*********** Trade Economic data Row ***********/
                  if(eachBankenityRowObjLength < 0){
                     var tradeEconomicDateMessage = TRADE_ECONOMIC_DATA_ROW_VALIDATION_MESSAGE + tradingObj[i].deskName+" and the "+ eachBankenityObj[j].bankEntityName + "-" + eachBankenityObj[j].region;
                     this.setState({isSuccess: false,
                        errorHandlers: tradeEconomicDateMessage});
                     return false;
                  }
                  /*********** Ends Trade Economic data Row validations ***********/
               }
            } else {
               var bankEntityValidationMessage = BANK_ENTITY_VALIDATION_MESSAGE + tradingObj[i].deskName;
               this.setState({isSuccess: false,
                  errorHandlers: bankEntityValidationMessage});
               return false;
            }
            /*********** Ends Bank Entity validations ***********/
         }
         /*********** When all the validations are passed submit to server ***********/
         this.sendToServer(ACTION_SUBMIT);

      } else {
         this.setState({isSuccess: false,
            errorHandlers: TRADING_DESK_VALIDATION_MESSAGE});
         return false;
      }
   },
   discard(){
      this.sendToServer(ACTION_DISCARD);
   },
   confirm(){
      this.sendToServer(ACTION_CONFIRM);
   },
   reject(){
      this.sendToServer(ACTION_REJECT);
   },
   cancel(){
      this.redirectToNextPage(ACTION_CANCEL)
   },
   sendToServer: function (action){

      var username = this.state.user? this.state.user.principal.username : 'Guest';

      if(this.state.isConfirmModal){
         var confirmationData = this.ConfirmationModal.getData();
      } else {
         var confirmationData = '';
      }
      if(this.state.isInitiationModal){
         var initiationData = this.InitiationModal.getData();
      } else {
         var initiationData = '';
      }

      var data = Object.assign(
         {},
         this.changeDetails.getData(),
         this.productDetails.getData(),
         this.tradingDesks,
         confirmationData, initiationData
      );

      if(this.state.action == ACTION_CREATE)
         var url = 'apd/createProductRaw?action=' +action+'&userId=' + username;
      else
         var url = 'apd/updateProductRaw?action=' +action+'&userId=' + username;

      console.log("app.jsx:sendToServer:this.currentUser", username);
      console.log("app.jsx:sendToServer:this.formData", JSON.stringify(data));
      console.log("app.jsx:sendToServer:this.url", url);
      // Submit form via jQuery/AJAX

      $.ajax({
         type: 'POST',
         url: url,
         data: JSON.stringify(data),
         dataType: 'json',
         contentType : 'application/json',
         async: false,
         success: function(returnData) {
            console.log("app.jsx:sendDataToServer:for "+ action+":Returned data:", returnData);

            var success = returnData.success;
            if(success) {
               this.redirectToNextPage(action);
               var newData = returnData.data;
               this.setState({productDetails: newData});
               this.setState({action: ACTION_EDIT});
               this.setState({isSuccess: true});
               this.setState({mandatoryRerender: true});
               console.log("iam here sucess", this.state.mandatoryRerender);
               this.setState({errorHandlers: "Product changes have been " + ACTION_DISPLAY_MAP.get(action) + " successfully"});
            } else {
               var errorMessages = returnData.errorMessages;
               console.log("app.jsx:sendDataToServer:errormessage",errorMessages);
               this.setState({isSuccess: false});
               var error = errorMessages[0].replace(/\\n/g,"<br/>");
               this.setState({errorHandlers: error});
               this.setState({mandatoryRerender: false});
            }
         }.bind(this),
         error: function(xhr, error){
            console.log("app.jsx:sendDataToServer:xhr",xhr);
            var responseText = xhr.response;
            console.log("app.jsx:sendDataToServer:errormessage",responseText);
            this.setState({isSuccess: false});
            this.setState({errorHandlers: responseText});
            this.setState({mandatoryRerender: false});
         }.bind(this)
      })

   },
   redirectToNextPage(action){
      if(action == ACTION_SUBMIT || action == ACTION_CONFIRM || action == ACTION_REJECT || action == ACTION_CANCEL || action == ACTION_DISCARD){
         console.log("app.jsx:redirectToNextPage:Redirecting to Landing page on action ", action);
         //Go to landing page
         //window.location.replace('#/');
         window.location.replace('#/?action='+action);
      }
   },
   /*getConfirmationDetails(confirmationObject){
    console.log("app.jsx:getConfirmationDetails:trading desk objects:", confirmationObject);
    },*/
   getTradingDetails(desksObject){
      console.log("app.jsx:getTradingDetails:trading desk objects:", desksObject);
      this.tradingDesks = {productTradingDesks : desksObject};
   },
   errorMessagesHide(){
      document.getElementById("errorMessagesHeader").className = "displayNone";
      this.setState({errorsDisplay:false, errorHandlers: ''})
   },
   updatedForm(e){
      let idForm = e.target.id;
      if(document.getElementById(e.target.id).value !== ''){
         // this.state.formValue[idForm] = null;
         let x = this.state.formValue[idForm];
         x = e.target.value;
         // this.state.formValue[idForm] = e.target.value;
         this.setState({formValue: x});
         //this.forceUpdate();
      } else{
         if(this.state.formValue) {
            delete this.state.formValue[idForm];
         }
      }
      // if(idForm.indexOf('each') === 0){
      return false;
      // }
   },
   returnToLandingPage(){
      //let size = this.state.formValue === undefined ? 0 : Object.keys(this.state.formValue).length;
      let formValueLength = (this.state.formValue).length;
      let size = formValueLength === undefined ? 0 : formValueLength;
      //Dirty Flag Check
      if(size > 0){
         if(confirm("Do you want to save the modifications?")){
            this.state.formValue = '';
            this.save();
         }else{
            window.location.replace('#/');
         }
      } else {
         window.location.replace('#/');
      }
   },
   changeProductType(productType){
      this.state.productTypeProductDetails.productType = productType;
      this.forceUpdate();
   },
   render() {
      /*console.log("app.jsx:render: this.props.params", this.props.params);
      console.log("app.jsx:render: this.state.formattedRefData", this.state.formattedRefData);
      console.log("app.jsx:render: this.state.errorHandlers", this.state.errorHandlers);
      console.log("app.jsx:render: this.state.disabled", this.state.disabled);
      console.log("app.jsx:render: this.state.multiSelectDisableFieldName", this.state.multiSelectDisableFieldName);*/
      console.log("app.jsx:render: this.state.mandatoryRerender", this.state.mandatoryRerender);
      if(this.state.action == ACTION_VIEW || this.state.action == ACTION_EDIT) {
         var productType = this.state.productDetails.productType;
      } else {
         var productType = this.state.productTypeProductDetails.productType;
      }

      var messageColour = this.state.isSuccess? "green" : "red";
      var username = this.state.user? this.state.user.principal.username : 'Guest';
      var displayEditButton = ((this.props.params.auditStatus == AUDIT_STATUS_APPROVED || this.props.params.auditStatus == AUDIT_STATUS_INITIATED) &&
      this.state.action == ACTION_VIEW);
      var displaySaveButton = (this.state.action == ACTION_EDIT || this.state.action == ACTION_CREATE);
      var displaySubmitButton = displaySaveButton;
      var displayLastApprvedButton = this.state.productDetails && this.state.productDetails.approvedVersionExists && this.props.params.auditStatus != AUDIT_STATUS_APPROVED;
      var displayDiscardChangesButton = this.props.params.auditStatus == AUDIT_STATUS_INITIATED;
      var displayConfirmButton = (this.state.productDetails && this.props.params.auditStatus == AUDIT_STATUS_PEND_CONFIRM && username != this.state.productDetails.auditUser);
      //var displayReturnToInitiationButton = false;
      var displayReturnToLandingPageButton = this.state.action != ACTION_VIEW_LATEST_APPROVED;
      return (
         <div className="container-fluid">
            {this.props.children}
            <div className="navbar-fixed-top">
               <PrimaryHeader user={this.state.user} />
               <div className="row secondary-header">
                  <div className="col-lg-3 col-md-3"></div>
                  <div className="col-lg-9 col-md-9 pull-right margin-top-bottom-10 padding-left-15-percent">
                     <Link type="button" className="btn btn-success margin-right-10" to="/">Download Product</Link>

                     {(displayDiscardChangesButton) ?
                        <a type="button" className="btn btn-success margin-right-10" onClick={this.handleUndoClick}>Undo Changes
                           {
                              this.state.isUndoModal &&
                              <DiscardModal
                                 isUndoModal={this.state.isUndoModal}
                                 discard = {this.discard}
                                 handleUndoClick={this.handleUndoClick}
                                 handleUndoClose={this.handleUndoClose}
                              />
                           }
                        </a> : ''
                     }

                     {(displaySaveButton)? <a type="button" className="btn btn-success margin-right-10" disabled={this.state.disabled} onClick={this.save}>Save</a> : ''}

                     {(displaySubmitButton)? <a type="button" className="btn btn-success margin-right-10" disabled={this.state.disabled} onClick={this.submit}>Submit Changes</a> : ''}


                     {(displayLastApprvedButton) ?
                        <a type="button" target="_blank" href={`/#/products/${this.state.productDetails.apdId}/${ACTION_VIEW_LATEST_APPROVED}/${AUDIT_STATUS_APPROVED}`}
                           className="btn btn-success margin-right-10">View Last Approved Version</a> : ''
                     }

                     { (displayEditButton)? <a type="button" onClick={this.edit} className="btn btn-success margin-right-10">Edit Product</a> : '' }
                     {(displayConfirmButton) ?
                        <a type="button" className="btn btn-success margin-right-10" onClick={this.handleConfirmClick}>Confirm Changes
                           {
                              this.state.isConfirmModal &&

                              <ConfirmationModal
                                 isConfirmModal={this.state.isConfirmModal}
                                 pd={this.state.productDetails}
                                 ref={(ref) => this.ConfirmationModal = ref}
                                 //getConfirmationDetails = {this.getConfirmationDetails}
                                 handleConfirmClick={this.handleConfirmClick}
                                 handleConfirmClose={this.handleConfirmClose}
                                 confirm={this.confirm}
                              />
                           }
                        </a> : ''
                     }
                     {(displayConfirmButton) ?
                        <a type="button" className="btn btn-success margin-right-10" onClick={this.handleInitiationClick}>Return To Initiation
                           {
                              this.state.isInitiationModal &&

                              <InitiationModal
                                 isInitiationModal={this.state.isInitiationModal}
                                 pd={this.state.productDetails}
                                 ref={(ref) => this.InitiationModal = ref}
                                 //getConfirmationDetails = {this.getConfirmationDetails}
                                 handleInitiationClick={this.handleInitiationClick}
                                 handleInitiationClose={this.handleInitiationClose}
                                 reject={this.reject}
                              />
                           }
                        </a> : ''
                     }

                     {(displayReturnToLandingPageButton) ?
                        <a type="button" className="btn btn-success margin-right-10" onClick={this.returnToLandingPage} >Return to Landing Page</a> : ''
                     }
                  </div>
               </div>
               <div className="clear"></div>
               {this.state.action != ACTION_CREATE &&
               <div className="text-center displayProductName">
                  <h4 className="text-center">{this.state.productDetails.apdId} - {this.state.productDetails.productName}</h4>
               </div>
               }
               <div className="clear"></div>
               {(this.state.errorHandlers && this.state.errorHandlers != "") &&
               <div ref="errorMessages" id="errorMessagesHeader" className="displayBlock errorMessagesDisplay">
                  <ul className="col-lg-12 col-md-12">
                     <span className="close" onClick={this.errorMessagesHide}>X</span>
                     <li>
                        <font color={messageColour}><b>{this.state.errorHandlers}</b></font>
                     </li>
                  </ul>
               </div>
               }
            </div>
            <div className="row main-content">
               <div className="col-lg-12 col-md-12">
                  <form className="productForm" id="productForm" onChange={this.updatedForm}>
                     {(this.state.tabdata).map((result, index) => (
                        <div key={'s'+index}>
                           { result.id !== 3 &&
                           <div className= {result.id === 1 ? 'list-group-item product-containers maxHeight' : 'list-group-item product-containers minHeight'} id={'section_'+result.id} data-id={result.id}
                                onClick={result.id !== 1 ? this.showHide : ''}>
                              { result.id !== 3 ? result.author : ''}
                              <div className={result.id === 1 ? ' maxHeight' : 'innerExpandable'} id={'section-' + result.id}>
                                 {result.id === 1 && <ChangeDetails ref={(ref) => this.changeDetails = ref}
                                                                    refData={this.state.formattedRefData} pd={this.state.productDetails} item={result.author}
                                                                    disabled={this.state.disabled} params={this.props.params} isSuccess={this.state.isSuccess}
                                                                    mandatoryRerender={this.state.mandatoryRerender}
                                 />
                                 }
                                 {result.id === 2 && <ProductDetails ref={(ref) => this.productDetails = ref}
                                                                     refData={this.state.formattedRefData} pd={this.state.productDetails} params={this.props.params}
                                                                     disabled={this.state.disabled} multiSelectName={this.state.multiSelectDisableFieldName}  isSuccess={this.state.isSuccess}
                                                                     changeProductType={this.changeProductType} productType={productType} mandatoryRerender={this.state.mandatoryRerender}
                                 />
                                 }
                              </div>
                           </div>
                           }
                           <div id={'d'+result.id}>
                              {result.id === 3 && <TradingDesk itemdetails={result.author} ref={(ref) => this.tradingDesk = ref}
                                                               refData={this.state.formattedRefData} pd={this.state.productDetails}
                                                               disabled={this.state.disabled} multiSelectName={this.state.multiSelectDisableFieldName}
                                                               params={this.props.params} productId = {this.props.params.productId ? this.props.params.productId : null}
                                                               getTradingDetails = {this.getTradingDetails}  isSuccess={this.state.isSuccess}
                                                               errorHandlers = {this.state.errorHandlers} productType={productType}
                                                               mandatoryRerender={this.state.mandatoryRerender}
                              />
                              }
                           </div>
                        </div>
                     ))}
                  </form>
               </div>
            </div>
         </div>
      );
   }
})

export default App;

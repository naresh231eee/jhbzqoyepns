import React from "react";
import moment from "moment";
import InputText from "./../formfields/text.js";
import * as apidata from "./../api/api_form.jsx";
import SelectBox from "./../formfields/select.js";
import {ACTION_EDIT, AUDIT_STATUS_APPROVED} from "../api/api_form.jsx";

var ChangeDetails = React.createClass({
   getInitialState: function () {
      return {
         productReason: this.props.pd?this.props.pd.productReason:'',
         productComment: this.props.pd? this.props.pd.productComment:'',
         auditUser: this.props.pd? this.props.pd.auditUser:'',
         auditDateTime: this.props.pd.auditDateTime? this.props.pd.auditDateTime:null,
      };
   },
   handleInputChange(name, e){
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
   },
   formatDateString: function(string) {
      var date = moment(string).toDate();
      var dateFormated = moment(date).format("DD/MM/YYYY hh:mm:ss A ");

      return dateFormated;
   },
   getRefDataValueForKey: function(key) {
      return this.props.refData.get(key);
   },
   componentWillReceiveProps: function (newProps) {
      console.log("changeDetails:componentWillReceiveProps.props",newProps);
      if(newProps.isSuccess) {
         this.setState({
            productReason: newProps.pd ? newProps.pd.productReason : '',
            productComment: newProps.pd ? newProps.pd.productComment : '',
            auditUser: newProps.pd ? newProps.pd.auditUser : '',
            auditDateTime: newProps.pd.auditDateTime ? newProps.pd.auditDateTime : null

         });
      }
   },
   getData: function() {
      return this.state;
   },
    render() {
      console.log("changeDetails:render:this.state", this.state);

       let productReasonOptions = this.getRefDataValueForKey(apidata.REASON_FOR_CHANGE);
       let lastModifiedDateFormatted = this.state.auditDateTime?this.formatDateString(this.state.auditDateTime):'';
       return (

       <div className="container txt-color">
          <div className="clear"></div>
          {(this.props.params.auditStatus != AUDIT_STATUS_APPROVED || this.props.params.action==ACTION_EDIT) ?
          <div>
             <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                   <div className="form-group">
                      <label htmlFor="auditReason">Reason For Change
                         <span className="requiredField"> *</span>
                      </label>
                      <SelectBox data={productReasonOptions}
                                 selected={this.state.productReason}
                                 value={apidata.apiKeys.refDataValue}
                                 id={apidata.apiKeys.refDataValue}
                                 sid="auditReason"
                                 onChange={this.handleInputChange.bind(this,'productReason' )}
                                 placeholder="---- Select a reason for change ----"
                                 disabled={this.props.disabled}
                      />
                   </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                   <div className="form-group">
                      <label htmlFor="auditComment">Comment</label>
                      <InputText value={this.state.productComment}
                                 onChange={this.handleInputChange.bind(this,'productComment')}
                                 disabled={this.props.disabled}
                                 sid="productComment"
                      />
                   </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                   <div className="form-group">
                      <label htmlFor="auditUser">Last Modified By : </label>
                      <p className="form-control-static para">{this.state.auditUser}</p>
                   </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                   <div className="form-group">
                      <label htmlFor="auditDateTime">Last Modified On : </label>
                      <p className="form-control-static para">{lastModifiedDateFormatted}</p>
                   </div>
                </div>
             </div>
          </div>: <div></div>
         }
         </div>
       );
    }
});

export default ChangeDetails;

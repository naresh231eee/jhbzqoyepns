import React from "react";
import {ModalContainer, ModalDialog} from "react-modal-dialog";
import moment from "moment";
import TextArea from "./../formfields/textarea.js";
import {CONFIRMATION_MODAL_HEADING} from "../api/api_form.jsx";
//import ConfirmOrInitiationData from "./confirmOrInitiationData.jsx";

var ConfirmationModal = React.createClass({
   getInitialState() {
      var header= CONFIRMATION_MODAL_HEADING;
      return {header:header,
         auditDateTime : this.props.pd ? this.props.pd.auditDateTime : '',
         confirmationComment: this.props.pd ? this.props.pd.confirmationComment : ''
      };
   },
   formatDateString: function(string) {
      var date = moment(string).toDate();
      var dateFormated = moment(date).format("DD/MM/YYYY hh:mm:ss A ");

      return dateFormated;
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
      let dateOfProductStatusChange = this.state.auditDateTime ?
            this.formatDateString(this.state.auditDateTime) : ''
        return (
           <div onClose={this.props.handleConfirmClose} className="container txt-color">
              {
                 this.props.isConfirmModal &&
                 <ModalContainer onClose={this.props.handleConfirmClose}>
                    <ModalDialog onClose={this.props.handleConfirmClose}>
                       <div className="clear"></div>
                       {/*<ConfirmOrInitiationData pd={this.props.pd} header={this.state.header} getConfirmationDetails={this.getConfirmationDetails} />*/}
                       <div>
                          <div className="row">
                             <h2 className="text-center">{this.props.header}</h2>
                             <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group inline">
                                   <label htmlFor="qlProduct">Name of the User who Initiated the change</label>
                                   <p className="form-control-static">{this.props.pd.auditUser}</p>
                                </div>
                                {/*<div className="form-group inline">
                                 <label htmlFor="pricingModel">Name of the User who is Confirming the changes</label>
                                 <p className="form-control-static">{this.props.pd.auditUser}</p>
                                 </div> */}
                                <div className="form-group inline">
                                   <label htmlFor="pricingModel">Change Type</label>
                                   <p className="form-control-static">{this.props.pd.productReason}</p>
                                </div>
                             </div>
                             <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group inline">
                                   <label htmlFor="pricingModel">Date & Time</label>
                                   <p className="form-control-static">{this.props.pd ? dateOfProductStatusChange : ''}</p>
                                </div>
                                {/*<div className="form-group inline">
                                 <label htmlFor="pricingModel">Date & Time</label>
                                 <p className="form-control-static">{this.props.pd ? dateOfProductStatusChange : ''}</p>
                                 </div> */}
                             </div>
                             <div className="clear"></div>
                             <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group inline">
                                   <label htmlFor="productDescription">Confirmation Comments</label>
                                   <TextArea value={this.props.pd ? this.state.confirmationComment : ''}
                                             onChange={this.handleInputChange.bind(this, 'confirmationComment')}
                                             placeholder="Please Enter Confirmation comment"
                                   />
                                </div>
                             </div>
                          </div>
                          <div className="row">
                             <div className="col-lg-12 col-md-12 pull-right margin-top-bottom-10">
                                <a type="button" className="btn btn-success margin-right-10" onClick={this.props.confirm}>Confirm</a>
                             </div>
                          </div>
                          </div>
                    </ModalDialog>
                 </ModalContainer>
              }
           </div>
         );
    }
})

export default ConfirmationModal;
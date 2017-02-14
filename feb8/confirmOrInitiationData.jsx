import React from "react";
import moment from "moment";
import TextArea from "./../formfields/textarea.js";

var ConfirmOrInitiationData = React.createClass({
   getInitialState() {
      return {
         auditDateTime : this.props.pd.auditDateTime ? this.props.pd.auditDateTime : '',
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
   render() {
      let dateOfProductStatusChange = this.state.auditDateTime?this.formatDateString(this.state.auditDateTime):'';
      console.log("this.props.pd", this.props.pd);
      console.log("this.state.confirmationComment", this.state.confirmationComment)
      return (
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
      );
   }
})
export default ConfirmOrInitiationData;

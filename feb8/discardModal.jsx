import React from "react";
import {ModalContainer, ModalDialog} from "react-modal-dialog";

var DiscardModal = React.createClass({
   getInitialState() {
      return {
      };
   },
   render() {
      return (
         <div onClose={this.props.handleUndoClose} className="container txt-color">
            {
               this.props.isUndoModal &&
               <ModalContainer onClose={this.props.handleUndoClose}>
                  <ModalDialog onClose={this.props.handleUndoClose}>
                     <div className="clear"></div>
                     <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                           <h5 className="text-center">Do you want to Undo proposed changes to this product?</h5>
                        </div>
                        <div className="col-lg-12 col-md-12 text-right margin-top-bottom-10">
                           <a type="button" className="btn btn-success margin-right-10" onClick={this.props.discard}>Undo proposed changes</a>
                        </div>
                     </div>
                  </ModalDialog>
               </ModalContainer>
            }
         </div>
      );
   }
})

export default DiscardModal;

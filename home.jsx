import React from "react";
import PrimaryHeader from "./primaryHeader.jsx";
import ProductPendingInitiation from "./productPendingInitiation.jsx";
import {Link} from "react-router";
import {
   ACTION_CONFIRM,
   ACTION_REJECT,
   ACTION_DISCARD,
   ACTION_SUBMIT,
   CONFIRM_MESSAGE,
   SUBMIT_MESSAGE,
   DISCARDED_MESSAGE,
   REJECTED_MESSAGE,
   ACTION_CREATE,
   HOME_HEADER
} from "../api/api_form.jsx";


var Home = React.createClass({
    getInitialState() {
       return {
          products: {},
          user:{}
       }
    },
   componentDidMount(){
      let urlPostData =  this.props.location.query.action;
      if(urlPostData === ACTION_CONFIRM){
         this.setState({isSuccess: true, message:CONFIRM_MESSAGE})
      } else if(urlPostData === ACTION_REJECT){
         this.setState({isSuccess: true, message:REJECTED_MESSAGE})
      } else if(urlPostData === ACTION_DISCARD){
         this.setState({isSuccess: true, message:DISCARDED_MESSAGE})
      } else if(urlPostData === ACTION_SUBMIT){
         this.setState({isSuccess: true, message:SUBMIT_MESSAGE})
      }
   },
   componentWillMount: function(){
      $.ajax({
         url: "apd/landingPage",
         dataType: 'json',
         async: false,
         success: function(result) {
            console.log("result", result);
            var data = result.data;
            var user = result.user;
            this.setState({products: data, user: user});
         }.bind(this)
      });
   },
   errorMessagesHide(){
      document.getElementById("errorMessagesHeader").className = "displayNone";
      this.setState({message: '', messageColour:''})
   },
    render() {
       var messageColour = this.state.isSuccess? "green" : "red";
        return (
        <div className="container-fluid">
            {this.props.children}
            <div className="navbar-fixed-top">
               <PrimaryHeader user={this.state.user}/>
               <div className="row secondary-header">
                   <div className="col-lg-6 col-md-6"></div>
                   <div className="col-lg-3 col-md-3"></div>
                   <div className="col-lg-3 col-md-3 margin-top-bottom-10">
                      <Link type="button" className="btn btn-success" to={`/products/new/${ACTION_CREATE}`}> Create Product </Link>
                   </div>
               </div>
               <div className="clear"></div>
               {(this.state.message && this.state.message != "") &&
               <div ref="errorMessages" id="errorMessagesHeader" className="displayBlock errorMessagesDisplay">
                  <ul className="col-lg-12 col-md-12 text-center">
                     <span className="close" onClick={this.errorMessagesHide}>X</span>
                     <li>
                        <font color={messageColour}><b>{this.state.message}</b></font>
                     </li>
                  </ul>
               </div>
               }
            </div>
            <div className="row main-content">
                <ProductPendingInitiation products={this.state.products} user={this.state.user} headerText={HOME_HEADER} />
            </div>
        </div>

      );
    }
})

export default Home;

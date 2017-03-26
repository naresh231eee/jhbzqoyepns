import React from "react";
import * as _ from "lodash";
// import ApdSortableTable from "./ApdSortableTable.jsx";
//import ProductPendingInitiation from "./productPendingInitiation.jsx";
import PrimaryHeader from "./primaryHeader.jsx";
import SelectBox from "./../formfields/select.jsx";
import InputText from "./../formfields/text.js";
import * as apidata from "./../api/api_form.jsx";
import {Link} from "react-router";
import * as landingPage from "../api/landingPage.jsx";
import {ACTION_VIEW, ACTION_CREATE, ACTION_EDIT, AUDIT_STATUS_PEND_CONFIRM, ACTION_CONFIRM, SEARCH_HEADER} from "../api/api_form.jsx";
import ProductPendingInitiation from "./productPendingInitiation.jsx";
import * as util from "./../util/util.js";
/**
 * Created by 8799778 on 03/11/2016.
 */


var SearchPage = React.createClass({
   getInitialState: function(){
      return {
         searchResult: landingPage.landingAPI.data,
         isSuccess: true,
      };
   },
   validateAndSearchForProduct(){
      const val = $('#searchFor').val();
      if(val.length < 3){
         console.error("Minimum 3 chars needed to search. Please correct");
      }
      this.searchForProduct();
   },
   componentWillMount: function() {
      console.log("search.jsx:componentWillMount: Getting current user");
      $.ajax({
         url: "apd/currentUser",
         dataType: 'json',
         async: false,
         success: function (returnData) {
            var user = returnData.user;
            console.log("search.jsx:componentWillMount: current user", user);
            this.setState({user: user});
         }.bind(this)
      })
            this.setState({user: null});
   },
   searchForProduct(){
      var SB = $('#searchBy').val();
      var ST = $('#searchType').val();
      var SF = $('#searchFor').val();

      let options = {};

      if(SB){
            options.SB = SB;
      }
      if(ST){
            options.ST = ST;
      }
      if(SF){
            options.primaryDesk = SF;
      }

      let filterData = ''; let one = false;
      if(SB=== '' && ST ==='' && SF ===''){
       filterData = landingPage.landingAPI.data;
       one = false;
      } else { 
      one = true
      filterData = _.filter(landingPage.landingAPI.data, options);
      }
      console.log("filterData");
      console.log(filterData);
      /*$.ajax({
         url: "apd/findProducts?key="+SB+"&&type="+ST+"&&value="+SF,
         dataType: 'json',
         async: false,
         success: function(returnData) {
            console.log("returnData",returnData);
            var success = returnData.success;
            if(success) {
               var results = returnData.data;
               console.log("results length:", results.length);
               console.log("results:", results);
               var responseText = "";
               if (results.length == 0) {
                  var responseText = "No matching products found";
               }
               this.setState({
                  isSuccess: true,
                  actionMessage: responseText,
                  searchResult: results
               });
            } else {
               console.log("errormessage",returnData.errorMessages);
               this.setState({isSuccess: false,
                              actionMessage: returnData.errorMessages[0],
                              searchResult: []});

            }
         }.bind(this),
         error: function(xhr, error){
            console.log("xhr",xhr);
            var responseText = xhr.response;
            console.log("errormessage",responseText);
         }.bind(this)
      });*/
               this.setState({isSuccess: false,
                              actionMessage: one,
                               searchResult: filterData.length > 0 ? filterData : []});
      console.log("this.state.searchResult");                               
      console.log(this.state.searchResult);                               
   },
   render() {
      var messageColour = this.state.isSuccess? "green" : "red";
      console.log("search.jsx:render: this.state.actionMessage", this.state.actionMessage);
      console.log(apidata.apiKeys.refDataValue);
      let searchByKeyValue = util.getKeyByValues(apidata.SEARCH_BY_KEY_VALUE);
      // console.log(searchByKeyValue);
      let searchByKeyType = util.getKeyByValues(apidata.SEARCH_BY_KEY_TYPE);
      // let searchByKeyValue = this.getRefDataValueForKey(apidata.SEARCH_BY_KEY_VALUE);
      // let searchByKeyType = this.getRefDataValueForKey(apidata.SEARCH_BY_KEY_TYPE);

     /* const columns = [
         {
            header: 'Id',
            key: 'id',
            headerStyle:{display: 'none'},
            dataStyle:{display: 'none'},
            render: (id) => {
               this.state.productId = id;
               return id }
         },
         {
            header: 'Audit Status',
            key: 'auditStatus',
            headerStyle:{display: 'none'},
            dataStyle:{display: 'none'},
            render: (auditStatus) => {
               this.state.auditStatus = auditStatus;
               return auditStatus; }
         },
         {
            header: 'approvedVersionExists',
            key: 'approvedVersionExists',
            headerStyle:{display: 'none'},
            dataStyle:{display: 'none'},
            render: (approvedVersionExists) => {
               this.state.approvedVersionExists = approvedVersionExists;
               return approvedVersionExists }
         },
         {
            header: 'Product ID',
            key: 'apdId',
            render: (apdId) => {
               this.state.apdId = apdId;
               return apdId;
            }
         },
         {
            header: 'Product Name',
            key: 'productName',
            render: (productName) => {
               return <Link to={`/products/${this.state.productId}/${ACTION_VIEW}/${this.state.auditStatus}`}>{productName}</Link>;
            }
         },
         {
            header: 'QL Product Name',
            key: 'qLProductName'
         },
         {
            header: 'Primary Desk',
            key: 'primaryDesk'
         },
         {
            header: 'Product Grouping 1',
            key: 'grouping1'
         },
         {
            header: 'Product Grouping 2',
            key: 'grouping2'
         },
         {
            header: 'Product Status',
            key: 'productStatus'
         },
         {
            header: 'Audit Status',
            key: 'auditStatus',
            render: (auditStatus) => {
               return this.state.auditStatus; }
         },
         {
            header: 'Modified By',
            key: 'auditUser',
            render: (auditUser) => {
               this.state.auditUser = auditUser;
               return auditUser; }
         },
         {
            header: 'Action',
            key: 'id',
            render: (id) => {
               this.state.productId = id;
               var currentUser = '';
               /*if(this.state.user !== null)
                  currentUser = this.state.user.principal.username;
               else
                  currentUser = "Guest";

               if (this.state.auditUser == currentUser && AUDIT_STATUS_PEND_CONFIRM == this.state.auditStatus)
                  return ACTION_CONFIRM;
               else if (this.state.auditStatus == AUDIT_STATUS_PEND_CONFIRM)
                  return  <Link to={`/products/${id}/${ACTION_VIEW}/${this.state.auditStatus}`}>{ACTION_CONFIRM}</Link>;
               else
                  return  <Link to={`/products/${id}/${ACTION_EDIT}/${this.state.auditStatus}`}>{ACTION_EDIT}</Link>;
            }
         }
      ];*/
 
 
 var currentUser = '';
      return (
         <div className="container-fluid">
            <PrimaryHeader user={this.state.user}/>
            <div className="row secondary-header">
               <div className="col-lg-6 col-md-6"></div>
               <div className="col-lg-3 col-md-3"></div>
               <div className="col-lg-3 col-md-3 margin-top-bottom-10">
                  <Link type="button" className="btn btn-success margin-right-10" to={`/products/new/${ACTION_CREATE}`}> Create New Product </Link>
                  <Link type="button" className="btn btn-success" to="/"> Bulk Upload </Link>
               </div>
            </div>
            <div className="clear">
               <form>
                  <div className="row">
                        <br/>
                  </div>
                  <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group">
                           <label>Search by: </label>
                           <SelectBox data={searchByKeyValue}  value={apidata.apiKeys.refDataValue} id={apidata.apiKeys.refDataValue} sid="searchBy" />
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group">
                           <label>Search type: </label>
                           <SelectBox data={searchByKeyType}  value={apidata.apiKeys.refDataValue} id={apidata.apiKeys.refDataValue}sid="searchType"/>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group">
                           <label>Search value: </label>
                           <InputText sid="searchFor"/>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group">
                           <button type="button" className="btn btn-success margin-bottom-10 margin-top-15 margin-left-20"
                                   onClick={this.validateAndSearchForProduct}
                           > Search </button>
                        </div>
                     </div>
                  </div>
                </form>
            </div>
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <h2>Products Search Result</h2>
                  <div>
                     <span>
                         <font color={messageColour}><b>{this.state.actionMessage}</b></font>
                     </span>
                  </div>
                  <ProductPendingInitiation products={this.state.searchResult} action={this.state.actionMessage} user={currentUser} headerText={SEARCH_HEADER} />
                  { /*<ApdSortableTable data={this.state.searchResult} columns={columns}/>*/ }
               </div>
            </div>
         </div>
      )
   }
})

export default SearchPage;

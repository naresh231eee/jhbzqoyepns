import React from "react";
import {Link} from "react-router";
import ApdSortableTable from "./ApdSortableTable.js";
import {ACTION_VIEW, AUDIT_STATUS_PEND_CONFIRM, ACTION_CONFIRM, ACTION_EDIT} from "./../api/api_form";


var ProductPendingInitiation = React.createClass({

    getInitialState() {
        return {
           username : this.props.user? this.props.user.principal.username : 'Unknown'
        };
    },
    render() {
       const columns = [
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
             header: 'Primark Desk',
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
                var currentUser = this.state.username;
                if (this.state.auditUser == currentUser && AUDIT_STATUS_PEND_CONFIRM == this.state.auditStatus)
                   return ACTION_CONFIRM;
                else if (this.state.auditStatus == AUDIT_STATUS_PEND_CONFIRM)
                   return  <Link to={`/products/${id}/${ACTION_VIEW}/${this.state.auditStatus}`}>{ACTION_CONFIRM}</Link>;
                else
                   return  <Link to={`/products/${id}/${ACTION_EDIT}/${this.state.auditStatus}`}>{ACTION_EDIT}</Link>;
             }
          }
       ];
       console.log(this.props.products);
       return (
           <div>
                <div className="col-lg-12 col-md-12">
                    <h2>In Progress Products</h2>
                   <ApdSortableTable data={this.props.products}  columns={columns}/>
               </div>
               </div> 
        );
    }
});

export default ProductPendingInitiation;

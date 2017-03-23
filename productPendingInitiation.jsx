import React from "react";
import {Link} from "react-router";
import ReactDataGrid from "react-data-grid";
import {ACTION_VIEW, AUDIT_STATUS_PEND_CONFIRM, ACTION_CONFIRM, ACTION_EDIT} from "../api/api_form.jsx";
const { Formatters, Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

var ProductPendingInitiation = React.createClass({
    getInitialState(){
       console.log("getInitialState:::::::::::::");
       this._columns = [
          {
             name: 'ID',
             key: 'apdId',
             sortable: true,
             resizable: true
          },
          {
             name: 'Product Name',
             key: 'productName',
             sortable: true,
             Formatters: textFormatter,
             getRowMetaData: (row) => row,
             resizable: true
          },
          {
             name: 'QL Product Name',
             key: 'qLProductName',
             sortable: true,
             resizable: true
          },
          {
             name: 'Primary Desk',
             key: 'primaryDesk',
             sortable: true,
             resizable: true
          },
          {
             name: 'Product Grouping 1',
             key: 'grouping1',
             sortable: true,
             resizable: true
          },
          {
             name: 'Product Grouping 2',
             key: 'grouping2',
             sortable: true,
             resizable: true
          },
          {
             name: 'Product Status',
             key: 'productStatus',
             sortable: true,
             resizable: true
          },
          {
             name: 'Audit Status',
             key: 'auditStatus',
             sortable: true,
             resizable: true
          },
          {
             name: 'Modified By',
             key: 'auditUser',
             sortable: true,
             resizable: true
          },
          {
             name: 'Action',
             key: 'id',
             Formatters: actionFormatter,
             getRowMetaData: (row) => row,
             sortable: true,
             resizable: true
          }
       ];

       let rows = this.createRows(this.props.products.length);
       console.log("rows", rows);
       let originalRows = rows;
        return {
           rowLength: this.props.products.length,
           rows:rows,
           originalRows: originalRows,
           user: this.props.user,
           products: this.props.products
        };
    },
   createRows(numberOfRows) {
      let rows = [];
      console.log("products", this.props.products);
      _.forEach(this.props.products, (eachRow) => {
         let eachObj = {};
         _.forEach(this._columns, (eachKey) => {
            eachObj[eachKey.key] = eachRow[eachKey.key];
         });
         rows.push(eachObj)
      })
      this._rows = rows;
   },

   rowGetter(i) {
      const row = Object.assign({}, this._rows[i]);
      row.productName = this._rows[i];
      row.id = this._rows[i];
      let currentUser = this.state.user ? this.state.user.principal.username : 'Guest';
      row.currentUser = currentUser;
      return row;
   },

   handleGridSort(sortColumn, sortDirection) {
      const comparer = (a, b) => {
         if (sortDirection === 'ASC') {
            return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
         } else if (sortDirection === 'DESC') {
            return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
         }
      };

      const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this._rows.sort(comparer);
   },
   handleCellDrag({ fromRow, toRow, cellKey, value }) {
      var updated = {};
      updated[cellKey] = value;
      for (let rowIdx = fromRow; rowIdx <= toRow; rowIdx++) {
         this.handleRowUpdated({rowIdx, updated});
      }
   },
    render() {
       console.log("this._columns", this._columns);
       console.log("this.props.products render:::::", this.props.products);
       console.log("this.props.products.length", this.props.products.length);
       return (
                <div className="col-lg-12 col-md-12">
                    <h2>{this.props.headerText}</h2>
                   <ReactDataGrid
                      onGridSort={this.handleGridSort}
                      columns={this._columns}
                      onCellsDragged={this.handleCellDrag}
                      rowGetter={this.rowGetter}
                      rowsCount={this.state.rowLength}
                      minHeight={800}
                      width="auto"
                   />
               </div>
        );
    }
})
export default ProductPendingInitiation;

var textFormatter = React.createClass({
   render() {
      let value = this.props.value;
      return (
         <Link to={`/products/${value.id}/${ACTION_VIEW}/${value.auditStatus}`}>{value.productName}</Link>);
   }
});

var actionFormatter = React.createClass({
   render() {
      let value = this.props.value;
      let user = this.props.dependentValues ? this.props.dependentValues.currentUser : 'Guest';
      let action = '';
      let auditUser = (value.auditUser).toLowerCase();
      let currentUser = user.toLowerCase();
      if(auditUser == currentUser && AUDIT_STATUS_PEND_CONFIRM == value.auditStatus) {
         action = ACTION_CONFIRM;
      } else if(value.auditStatus == AUDIT_STATUS_PEND_CONFIRM) {
         action = <Link to={`/products/${value.id}/${ACTION_VIEW}/${value.auditStatus}`}>{ACTION_CONFIRM}</Link>;
      } else {
         action = <Link to={`/products/${value.id}/${ACTION_EDIT}/${value.auditStatus}`}>{ACTION_EDIT}</Link>;
      }
      return (
         <div>{action}</div>
      );
   }
});

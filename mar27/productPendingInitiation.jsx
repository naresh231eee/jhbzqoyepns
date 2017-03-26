import React from "react";
import {Link} from "react-router";
import ReactDataGrid from "react-data-grid";
import {ACTION_VIEW, AUDIT_STATUS_PEND_CONFIRM, ACTION_CONFIRM, ACTION_EDIT} from "../api/api_form.jsx";
const { Editors, Toolbar, Data: { Selectors } } = require('react-data-grid-addons');
import {Formatters} from "react-data-grid-addons";
import * as _ from "lodash";



var ProductPendingInitiation = React.createClass({
    getInitialState() {
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
             formatter: textFormatter,
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
             formatter: actionFormatter,
             getRowMetaData: (row) => row,
             sortable: true,
             resizable: true
          }
       ];

    return { rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null };
  },

  getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  },

  prevRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
      });
    }
    return rows;
  },

 createRows() {
      let rows = [];
    //   console.log("products", this.props.products);
      _.forEach(this.props.products, (eachRow) => {
        //   console.log("Hello")
         let eachObj = {};
         _.forEach(this._columns, (eachKey) => {
            // console.log(eachKey.key);
            // console.log(eachObj[eachKey.key] , eachRow[eachKey.key]);
            eachObj[eachKey.key] = eachRow[eachKey.key];
            // console.log(eachObj[eachKey.key] , eachRow[eachKey.key]);
         });
        //  console.log(eachObj);
         rows.push(eachObj)
      })
      this._rows = rows;
      console.log("rows -->");
      console.log(this._rows);
      console.log("rows --<");
      return rows;
   },
  getRows() {
    return Selectors.getRows(this.state);
  },

  getSize() {
    return this.getRows().length;
  },

  rowGetter(rowIdx) {
    const rows = this.getRows();
    return rows[rowIdx];
  },

  handleGridSort(sortColumn, sortDirection) {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  },

  handleFilterChange(filter) {
      console.log(filter)
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  },

  onClearFilters() {
    this.setState({ filters: {} });
  },

  render() {
      console.log("Here called this");
      if(this.props.action){

      }
    return  (
        <div className="col-lg-12 col-md-12">
                    <h2>{this.props.headerText}</h2>
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={800}
        width="auto"
        toolbar={<Toolbar enableFilter={true}/>}
        onAddFilter={this.props.action ? this.handleFilterChange : null}
        onClearFilters={this.onClearFilters} /></div>)
         
  }

})
export default ProductPendingInitiation;

var textFormatter = React.createClass({
   render() {
    //    console.log("this.props")
    //    console.log(this.props)
      let value =  this.props.value;
      return (
         <Link to={`/products/${value.id}/${ACTION_VIEW}/${value.auditStatus}`}>{value}</Link>);
   }
});

var actionFormatter = React.createClass({
   render() {
       console.log("actionFormatter");
      let value = 20; // this.props.value;
      let user = 'hello'; //this.props.dependentValues ? this.props.dependentValues.currentUser : 'Guest';
      let action = '';
      let auditUser = "got it"; //(value.auditUser).toLowerCase();
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
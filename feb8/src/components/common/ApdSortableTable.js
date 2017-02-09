import React, {PropTypes} from 'react';
// const SortableTable = require("react-sortable-table");
import SortableTable from "react-sortable-table";
window.React = require('react');//this is required by SortableTable - DO NOT REMOVE


/**
 * Works over react-sortable-table. At the time of this write-up, an ADVANCED example usage is in search.jsx
 * USAGE
 * 1. Define a list of columns with each columns having following properties
 *    - header (required)
 *    - key (the key to retrieve the data from the props) (required)
 *    - sortable (true or false) (optional, default: true)
 *    - render function (optional, if you want to render the value in different way, like href or something else)
 *    E.g.
 *     const columns = [{
                           header: 'Product ID',
                           key: 'apdId'
                        },
 {
    header: 'Product Name',
    key: 'productName',
    render: (productName) => { return <a href={'product?name='+productName}>{productName}</a>; }
 },
 {
    header: 'QL Product Name',
    key: 'qLProductName',
    sortable: false
 }];
 * 2. Call the component
 *      <ApdSortableTable data={this.state.searchResult} columns={columns}/>
 */
class ApdSortableTable extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    console.log("ApdSortableTable--->")
    // const inProgressProducts = this.props.inProgressProducts;
    // console.log(inProgressProducts);
    const paddingLeft={marginLeft:'5px'};
    const style = {backgroundColor: 'white'};
    const iconasc = <img alt="Sort Asc" src="./images/a-zsort.png" style={paddingLeft}/>;
    const icondesc = <img alt="Sort Desc" src="./images/z-asort.png" style={paddingLeft}/>;
    return (
      <div>  
      {this.props.inProgressProducts && this.props.inProgressProducts.length > 0 && 
         <SortableTable className="table table-striped"
                       data={this.props.inProgressProducts}
                       columns={this.props.columns}
                       style={style}
                       iconAsc={iconasc}
                       iconDesc={icondesc}
                       iconBoth={null}  /> 
      }
      </div>
    );
  }
}

export default ApdSortableTable;
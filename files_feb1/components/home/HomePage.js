const React = require("react");
const reactRouter  = require("react-router");
const Link = reactRouter.Link;
import * as types from '../../actions/actionTypes';
// const ApdSortableTable =require('../common/ApdSortableTable');
import ApdSortableTable from '../common/ApdSortableTable';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    const inProgressProducts = (this.props.inProgressProducts && this.props.inProgressProducts.length > 0 ) ? this.props.inProgressProducts : [];
    //console.log("inProgressProducts home", inProgressProducts);
    //const columns = [];
    const columns = [
      {
        header: 'Id',
        key: 'id',
        headerStyle:{display: 'none'},
        dataStyle:{display: 'none'},
        render: (id) => {
          inProgressProducts.productId = id;
          return id }
      },
      {
        header: 'Audit Status',
        key: 'auditStatus',
        headerStyle:{display: 'none'},
        dataStyle:{display: 'none'},
        render: (auditStatus) => {
          inProgressProducts.auditStatus = auditStatus;
          return auditStatus; }
      },
      {
        header: 'approvedVersionExists',
        key: 'approvedVersionExists',
        headerStyle:{display: 'none'},
        dataStyle:{display: 'none'},
        render: (approvedVersionExists) => {
          inProgressProducts.approvedVersionExists = approvedVersionExists;
          return approvedVersionExists }
      },
      {
        header: 'Product ID',
        key: 'apdId',
        render: (apdId) => {
          inProgressProducts.apdId = apdId;
          return apdId;
        }
      },
      {
        header: 'Product Name',
        key: 'productName',
        render: (productName) => {
          return <Link to={`/products/${inProgressProducts.productId}/+"view"+/${inProgressProducts.auditStatus}`}>{productName}</Link>;
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
          return auditStatus; }
      },
      {
        header: 'Modified By',
        key: 'auditUser',
        render: (auditUser) => {
          inProgressProducts.auditUser = auditUser;
          return auditUser; }
      },
      {
        header: 'Action',
        key: 'id',
        render: (id) => {
         inProgressProducts.productId = id;
          var currentUser = inProgressProducts.username;
          if (inProgressProducts.auditUser == currentUser && types.AUDIT_STATUS_PEND_CONFIRM == inProgressProducts.auditStatus)
            return types.ACTION_CONFIRM;
          else if (inProgressProducts.auditStatus == types.AUDIT_STATUS_PEND_CONFIRM)
            return  <Link to={`/products/${id}/${types.ACTION_VIEW}/${inProgressProducts.auditStatus}`}>{types.ACTION_CONFIRM}</Link>;
          else
            return  <Link to={`/products/${id}/${types.ACTION_EDIT}/${inProgressProducts.auditStatus}`}>{types.ACTION_EDIT}</Link>;
          return "confirm";
        }
      }
    ];
    // const data = this.props.inProgressProducts;
    console.log("sdsa");
    // console.log(inProgressProducts);
    return (
      <div>
      { inProgressProducts && inProgressProducts.length > 0 &&
           <ApdSortableTable inProgressProducts ={inProgressProducts} columns={columns}/>
      }
      </div>
    );
  }

}
export default HomePage;

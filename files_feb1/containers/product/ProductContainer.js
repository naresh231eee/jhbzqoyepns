import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productPageActions from '../../actions/productPageActions';
import AppBar from 'material-ui/AppBar';
import ChangeDetails from "../../components/product/changeDetails";
import {browserHistory} from 'react-router';
import {Link} from "react-router";

const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

class ProductContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  /*redirectToAddCoursePage() {
    browserHistory.push('/course');
  }*/

  render() {
    const products = this.props.products;
    console.log("products", products);
    return (
      <div>
       <div className="row secondary-header">
          <div className="col-lg-6 col-md-6"></div>
          <div className="col-lg-6 col-md-6 pull-right margin-top-bottom-10">

                    <a type="button" className="btn btn-success margin-right-10"  >Discard Changes</a>
                    <a type="button" className="btn btn-success margin-right-10" onClick={this.save}>Save</a>
                    <a type="button" className="btn btn-success margin-right-10" onClick={this.submit}>Submit Changes</a>
                    <Link type="button" className="btn btn-success margin-right-10" to="/">Download Product</Link>
                    <a type="button" className="btn btn-success margin-right-10" onClick={this.returnLandingPage}>Return to Landing Page</a>
                 </div>
        </div>
      <div>
       
        <h1>Create Product</h1>
        <div className="row main-content">
          <div className="col-lg-12 col-md-12">
            <form className="productForm" id="productForm" onChange={this.updatedForm} >
            <div className="list-group-item product-containers">
                <ChangeDetails />
                </div>

                <div className="list-group-item product-containers">
                <ChangeDetails />
                </div>
            </form>
            </div>
            </div>
        
      </div>
      </div>
    );
  }
}

ProductContainer.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productPageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

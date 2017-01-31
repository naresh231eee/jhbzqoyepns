import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as landingPageActions from '../../actions/landingPageActions';
import HomePage from "../../components/home/HomePage";
import {browserHistory} from 'react-router';
import {Link} from "react-router";
class LandingContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  /*redirectToAddCoursePage() {
    browserHistory.push('/course');
  }*/

  render() {
    const inProgressProducts = this.props.inProgressProducts;
    console.log("inProgressProducts", inProgressProducts);
    return (
      <div>
      <div className="row secondary-header">
                <div className="col-lg-6 col-md-6"></div>
                <div className="col-lg-3 col-md-3"></div>
                <div className="col-lg-3 col-md-3 margin-top-bottom-10">
                   <Link type="button" className="btn btn-success" to="/products"> Create Product </Link>
                   <Link type="button" className="btn btn-success" to="" onClick={this.handleToggle}> Dialogue </Link>
                </div>
            </div>
      <div>
        <h1>In Progress Products</h1>
        { inProgressProducts.length > 0 && <HomePage inProgressProducts={inProgressProducts} />}
      </div>
      </div>
    );
  }
}

LandingContainer.propTypes = {
  inProgressProducts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    inProgressProducts: state.inProgressProducts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(landingPageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);

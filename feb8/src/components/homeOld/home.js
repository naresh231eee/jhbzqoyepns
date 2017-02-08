import React, {PropTypes}  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../../actions/homeActions';
import ProductPendingInitiation from "./productPendingInitiation";
// import * as landingpage from './landingPage.js';
import {ACTION_VIEW, AUDIT_STATUS_PEND_CONFIRM, ACTION_CONFIRM, ACTION_EDIT} from "./../api/api_form";
class HomePage extends React.Component {
     constructor(props, context) {
    super(props, context);
    // this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

   /*componentDidMount(){
       console.log("W");
       this.setState({home: HomeActions.getProducts()});

    // $.ajax({
    //       url: "apd/landingPage",
    //       dataType: 'json',
    //       async: false,
    //       success: function(result) {
    //           console.log("result", result);
    //           var data = result.data;
    //           var user = result.user;
    //           this.setState({products: data,
    //                         user: user});
    //           //console.log("data", data);
    //           //console.log("User", user);
    //       }.bind(this)
    //     });
    // this.setState({products: landingpage.landingPage});
  //  this.setState({products: homeActions.getProducts('home')});
  //  console.log("Displaying Products");
  //  console.log(this.state.products);
   }*/
  render() {
      const {home} = this.props;
      console.log("Displaying Products");
      console.log(home);
    return (
      <div>
       <div className="row secondary-header">
            <div className="col-lg-6 col-md-6"></div>
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-3 col-md-3 margin-top-bottom-10">
                <Link type="button" className="btn btn-success" to="/products"> Create Product </Link>
                <Link type="button" className="btn btn-success" to="/"> Dialogue </Link>
            </div>
        </div>
        <div>
        <ProductPendingInitiation products={home} />
         </div>
        </div>
      
    );
  }
}

// export default HomePage;

HomePage.propTypes = {
  home: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    home: state.home
  };
}
 
function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(HomeActions, dispatch),
    HomeActions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

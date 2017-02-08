import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import productPageActions from '../../actions/productsPageActions';
import AppBar from 'material-ui/AppBar';
import ChangeDetails from "../../components/product/changeDetails";
import Products from "../../components/product/";
import Trading from "../../components/trading/";
import {browserHistory} from 'react-router';
import {Link} from "react-router";
import * as apidata from "../../components/api/api_form.js";
 
class ProductContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  /*redirectToAddCoursePage() {
    browserHistory.push('/course');
  }*/

  getInitialState() {
    var tabdata = [
      { id: 1, author: "Change Details", text: "This is one comment" },
      { id: 2, author: "Product Details", text: "This is one comment" },
      { id: 3, author: "Valuation Details", text: "This is *another* comment" },
      { id: 4, author: "Execution Details", text: "This is one comment" },
      { id: 5, author: "Governance Details", text: "This is *another* comment" },
      { id: 6, author: "Regulatory Classification", text: "This is *another* comment" },
      { id: 7, author: "Add Trading Desk", text: "This is *another* comment" }
    ];
    var productDetails = {};
    var refData = {};
    var pd = {};
    var td = [];
    return { 
      changeDetails: [],
      formValue: {},
      tabdata: tabdata,
      productDetails: productDetails, 
      governance: { date: '' }, 
      refData: refData, 
      pd: pd, 
      productTradinDesk: td, 
      errorHandlers: [], 
      errorsDisplay: false };
  }
  componentWillMount() {
    console.log("this.props.params.productId");
    console.log(this.props.params.productId);
    if (this.props.params.productId) {
      this.setState({ productDetails: this.props.products.productDetails });

    }
    this.setState({ refData: apidata.refData });
    // Load refData from Server
    //   $.ajax({
    //      url: "http://localhost:9091/apd/refData",
    //      dataType: 'json',
    //      async: false,
    //      success: function(data) {
    //         this.setState({refData: data});
    //      }.bind(this)
    //   });
    // Load product details from Server
    //   $.ajax({
    //      url: "http://localhost:9091/apd/product/"+this.props.params.productId,
    //      dataType: 'json',
    //      async: false,
    //      success: function(data) {
    //         this.setState({productDetails: data});
    //      }.bind(this)
    //   });
  }
  save(){}
  submit(){}
  returnLandingPage(){}
  updatedForm(){}

  getTradingDetails(tradingDeskObj) {
    // console.log(tradingDeskObj);
    // this.setState({productTradinDesk : tradingDeskObj})
    // this.state.productTradinDesk = '';
  }
   primarySecondaryHandler(primarySecondaryId) {
    console.log(primarySecondaryId)
    let name = primarySecondaryId.split("_")[0];
    let tradingId = primarySecondaryId.split("_")[1];

    if (name === 'secondaryDesk') {
      if (document.getElementById(primarySecondaryId).checked) {
        this.state.productTradinDesk[tradingId].secondaryDesk = true;
      } else {
        this.state.productTradinDesk[tradingId].secondaryDesk = false;
      }
      this.state.productTradinDesk[tradingId].primaryDesk = false;
    }

    this.forceUpdate();
    let add = false;
    let update = false;

    (this.state.productTradinDesk).map((eachTrading, key) => {

      if (eachTrading.primaryDesk) {
        if (parseInt(key) !== parseInt(tradingId)) {
          this.state.errorHandlers.push("Primary desk already selected");
          update = true
        }
      } else if (!eachTrading.primaryDesk && !update) {
        add = true;
      }
      console.log(eachTrading.primaryDesk)
    });

    if (name === 'primaryDesk' && add && !update) {
      if (document.getElementById(primarySecondaryId).checked) {
        this.state.productTradinDesk[tradingId].primaryDesk = true;
      } else {
        this.state.productTradinDesk[tradingId].primaryDesk = false;
      }
      this.state.productTradinDesk[tradingId].secondaryDesk = false;
    }
  }
  clientSegmentHandler(clientSegmentId) {
    let name = clientSegmentId.split("_")[0];
    let tradingId = clientSegmentId.split("_")[1];
    if (document.getElementById(clientSegmentId).checked) {

      if (name === 'internalTradesOnly') {
        this.state.productTradinDesk[tradingId].clientSegment.internalTradesOnly = 'Y';
        this.state.productTradinDesk[tradingId].clientSegment.interbankMarket = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.financialInstitutions = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.globalCorporates = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.midmarketers = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.sme = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.smeSegment = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.wealth = 'N'
        this.state.productTradinDesk[tradingId].clientSegment.retailBusinessBank = 'N';
        this.state.productTradinDesk[tradingId].clientSegment.retail = 'N';
      }

      this.state.productTradinDesk[tradingId].clientSegment[name] = "Y";
      //  console.log(this.state.productTradinDesk[tradingId].clientSegment[name]);
      if (name === 'interbankMarket' && name === 'financialInstitutions' && name === 'globalCorporates' && name === 'midmarketers' && name === 'sme' && name === 'smeSegment' && name === 'wealth' && name === 'retailBusinessBank' && name === 'retail') {
        this.state.productTradinDesk[tradingId].clientSegment.internalTradesOnly = 'N';

      }
      //  this.state.productTradinDesk[tradingId].clientSegment[name] = true;
    } else {
      this.state.productTradinDesk[tradingId].clientSegment[name] = "N";
    }
    this.forceUpdate();
  }
  render() {
    console.log(this.props.products);
    let productsDetails = this.props.products; 
  
   /* 
   for working 
   */
  let result = {};
    result.author = 'Trading Desk';
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
                  <ChangeDetails changeDetails="Hello"/>
              </div>
              <div className="list-group-item product-containers">
                <Products refData={productsDetails.refData} pd={productsDetails.products} />
              </div>
              <div className="list-group-item product-containers">
                <Trading errorHandlers={this.state.errorHandlers}
                      updateDetails={this.getDetails}
                      productId={this.props.params.productId ? this.props.params.productId : null}
                      itemdetails={result.author} refData={this.state.refData}
                      pd={this.state.productDetails}
                      getTradingDetails={this.getTradingDetails}
                      primarySecondaryHandler={this.primarySecondaryHandler}
                      clientSegmentHandler={this.clientSegmentHandler} />
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
  console.log(state);
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productPageActions: bindActionCreators(productPageActions, dispatch),
    Dispatch: dispatch     
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

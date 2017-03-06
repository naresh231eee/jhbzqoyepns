import React from "react";
import PrimaryHeader from "./primaryHeader.jsx";
import ProductPendingInitiation from "./productPendingInitiation.jsx";
import { Router, Route, Link, History, hashHistory, browserHistory, IndexRoute } from 'react-router';
import * as landingpage from './../api/landingPage.jsx';
 
 

var Home = React.createClass({
    mixins: [History],
    getInitialState() {

        console.log("Params Parsed");
        console.log(this.props.params);
       return this.state = { products: {} };
    },
    componentDidMount(){
        console.log(this.props)
        console.log(this.props.location.state)
        let urlPostData =  this.props.location.state;
        console.log(urlPostData.action)
    },
   componentWillMount: function(){
    //   $.ajax({
    //      url: "http://localhost:9091/apd/landingPage",
    //      dataType: 'json',
    //      async: false,
    //      success: function(data) {
    //         this.setState({products: landingpage});
    //      }.bind(this)
    //   });
    this.setState({products: landingpage.landingPage});
   },
  products(){
      console.log(this.props)
      this.props.history.pushState({data:'save'},"/products");
  },
    render() {
     
        return (
        <div className="container-fluid">
            {this.props.children}
            <PrimaryHeader />
            <div className="row secondary-header">
                <div className="col-lg-6 col-md-6"></div>
                <div className="col-lg-3 col-md-3"></div>
                <div className="col-lg-3 col-md-3 margin-top-bottom-10">
                    {this.props.children}
                   {/*<Link type="button" className="btn btn-success" to="products"> Create Product </Link>
                   <Link type="button" className="btn btn-success" onClick={this.handleToggle}> Dialogue </Link>*/}
                   <button type="button" className="btn btn-success"   onClick={this.products}> Create Product </button>
                   <button type="button" className="btn btn-success"   onClick={this.handleToggle}> Dialogue </button>
                </div>
            </div>
            <div className="row main-content">
                <ProductPendingInitiation products={this.state.products} />
            </div>
        </div>

      );
    }
});

export default Home;

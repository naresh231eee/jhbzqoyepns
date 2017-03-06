import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

import Home from './components/home.jsx';
import Product from './components/app.jsx';
 
var Index = React.createClass({

  getInitialState: function() {
        return {
            componentSelected: 'Home'
        }
    },

  changeComponent: function(component) {
    this.setState({
        componentSelected: component    
    });
  },

  // renderComponent: function(component) {
  //       if(component == 'Home') {
  //       return <Home changeComponent={this.changeComponent} />
  //     } else if(component == 'Product') {
  //       return <App changeComponent={this.changeComponent} />
  //     }  
  // },

  render: function() {
      console.log(this.state.componentSelected + ' wlecome')
    return (
      <Router history={hashHistory}>
          <Route path={"/:action"} component={Home}>
            <Route path="products" component={Product}>
              <Route path="products/:productId" component={Product} />
            </Route>
          </Route>
      </Router>
    );
  }
});

export default Index;
/* 
 <Route path="inbox" component={Inbox}>
              <Route path="messages/:id" component={Message} />
               <div>
        {this.renderComponent(this.state.componentSelected)}
      </div>
            </Route>
*/
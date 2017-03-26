import React from "react";
import {Router, Route, hashHistory} from "react-router";
import Home from "./components/home.jsx";
import App from "./../components/app.jsx";
import SearchPage from "./components/search.jsx";

var Index = React.createClass({

   getInitialState: function() {
      return {
         componentSelected: ''
      }
   },
   render: function() {
      return (
         <Router history={hashHistory}>
            <Route path={"/:action"} component={Home}>
               <Route path="products" component={App}>
                  <Route path="/products/:productId" component={App} />
                  <Route path="search" component={SearchPage} />
               </Route>
            </Route>
         </Router>
      );
   }
});

export default Index;

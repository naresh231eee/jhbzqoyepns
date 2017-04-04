import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute } from 'react-router';

import Home from './../components/home.jsx';
import App from './../components/app.jsx';
import SearchPage from "./../components/search.jsx";
import './../css/custom.scss';

ReactDOM.render((
    <Router history = { hashHistory } >
        <Route path = "/" component = { Home }/>
		<Route path = "products" component = { App }  />
        <Route path = "/products/:productId" component = { App } />
        <Route path = "/products/:productId" component = { App } />
        <Route path = "search" component = { SearchPage } />
    </Router>

    ), document.getElementById('content'))
    
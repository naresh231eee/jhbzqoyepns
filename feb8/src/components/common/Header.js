import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return ( 
    <div className="row primary-header">
        <div className="col-lg-4 col-md-4">
            <div className="clearfix content-heading">
                <img className="header pull-left"  src='./images/lloyds-logo.png'/>
                <h1>Approved Product Database</h1>
            </div>
        </div>
        <div className="col-lg-2 col-md-2"></div>
        <div className="col-lg-6 col-md-6 margin-top-20 margin-bottom-10">
            <ul className="nav nav-pills">
                <li><a href="#">Manage Data</a></li>
                <li><a href="#">Generate Report</a></li>
                <li><a href="#">Product Search</a></li>
            </ul>
        </div>
        
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

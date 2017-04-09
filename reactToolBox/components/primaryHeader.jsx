import React from "react";
import {Link} from "react-router";
import {Button, IconButton} from 'react-toolbox/lib/button';

const ButtonsTest = () => (
  <div>
    <Button href='http://github.com/javivelasco' target='_blank' raised>
    </Button>
    <Button icon='bookmark' label='Bookmark' accent />
    <Button icon='bookmark' label='Bookmark' raised primary />
    <Button icon='inbox' label='Inbox' flat />
    <Button icon='add' floating />
    <Button icon='add' floating accent mini />
    <IconButton icon='favorite' accent />
    <Button icon='add' label='Add this' flat primary />
    <Button icon='add' label='Add this' flat disabled />
  </div>
);

var PrimaryHeader = React.createClass({

    getInitialState() {
       var username = 'Hello'; // this.props.user? this.props.user.principal.username : 'Guest'
        return { username : username};
    },
    render() {
        return (
            <div className="row primary-header">
                <div className="col-lg-4 col-md-4">
                    <div className="clearfix content-heading">
                        <a className="" href="#/home">
                           <img className="header pull-left" src='./images/lloyds-logo.png'/>
                           <h1>Approved Product Database</h1>
                        </a>
                    </div>
                </div>
                <ButtonsTest />
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5 margin-top-10 margin-bottom-10">
                    <ul className="nav nav-pills">
                        <li><Button icon='' label="Manage Data" className="btn-success" floating accent raised  /></li>
                        <li><Link type="button" className="" to="/"> Manage Data</Link></li>
                        <li><Link type="button" className="" to="/"> Generate Report</Link></li>
                        <li><Link type="button" className="" to="/search"> Search Product </Link></li>
                    </ul>
                     
                </div>
               <div className="col-lg-2 col-md-2">
                  <h1>Welcome {this.state.username} </h1>
               </div>
            </div>
        );
    }
})
export default PrimaryHeader;

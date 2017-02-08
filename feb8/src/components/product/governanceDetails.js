import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment'; 
import InputText from "../formfields/text.js";
import * as apidata from "../api/api_form";


var GovernanceDetails = React.createClass({
    getInitialState: function() {
        return {
            startDate: moment()
        };
    },
    
    productLaunchDate(productLanuchDate){ 
        this.props.governanceDatesHandler(productLanuchDate, 'productLaunchDate');
    },
    dateLastModified(productLanuchDate){ 
        this.props.governanceDatesHandler(productLanuchDate, 'dateLastModified');
    },
    dateOfNextAAR(productLanuchDate){ 
        this.props.governanceDatesHandler(productLanuchDate, 'dateOfNextAAR');
    },
    dateOfLastAAR(productLanuchDate){ 
        this.props.governanceDatesHandler(productLanuchDate, 'dateOfLastAAR');
    },
    reviewDate(productLanuchDate){ 
        this.props.governanceDatesHandler(productLanuchDate, 'reviewDate');
    },
    render() { 
        return (
            <div className="container txt-color">
                <div className="clear"></div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label for="dateofLastAAR">Date of Last AAR</label>
                                <DatePicker dateFormat="YYYY/MM/DD"
                                    selected={this.props.gov.dateOfLastAAR ? this.props.gov.dateOfLastAAR : this.state.startDate}
                                    onChange={this.dateOfLastAAR} />
                            </div>
                            <div className="form-group">
                                <label for="dateofNextAAR">Date of Next AAR</label>
                                <DatePicker dateFormat="YYYY/MM/DD"
                                    selected={this.props.gov.dateOfNextAAR ? this.props.gov.dateOfNextAAR : this.state.startDate}
                                    onChange={this.dateOfNextAAR} />
                            </div>
                            <div className="form-group">
                                <label for="productOwnerContactName1">Product Owner Contact Name</label>
                                <InputText />
                            </div>
                            <div className="form-group">
                                <label for="productOwnerContactName2">Product Owner Contact Name</label>
                                <InputText />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label for="compliantOwner">Compliant Owner</label>
                                <InputText />
                            </div>
                            <div className="form-group">
                                <label for="TCLastReviewDate">Terms & Conditions Last Review Date</label>
                                <DatePicker dateFormat="YYYY/MM/DD"
                                    selected={this.props.gov.reviewDate ? this.props.gov.reviewDate : this.state.startDate}
                                    onChange={this.reviewDate} />
                            </div>
                            <div className="form-group">
                                <label for="TCVersion Number">Terms & Conditions Version Number</label>
                                <InputText />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label for="productLaunchDate">Product Launch Date</label>
                                 
                                <DatePicker dateFormat="YYYY/MM/DD"
                                    selected={this.props.gov.productLaunchDate ? this.props.gov.productLaunchDate : this.state.startDate}
                                    onChange={this.productLaunchDate} />
                            </div>
                            <div className="form-group">
                                <label for="dateLastModified">Date Last Modified</label>
                                <DatePicker dateFormat="YYYY/MM/DD"
                                    selected={this.props.gov.dateLastModified ? this.props.gov.dateLastModified : this.state.startDate}
                                    onChange={this.dateLastModified} />
                            </div>
                            <div className="form-group">
                            </div>
                            <div className="form-group">
                                <label for="lastModifiedBy">Last Modified By</label>
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }
});

export default GovernanceDetails;

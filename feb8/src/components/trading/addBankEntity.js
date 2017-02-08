/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import AddBankEntityRow from "./addBankEntityRow.js";
import SelectBox from "../formfields/select.js";
import CheckBox from "../formfields/checkbox.js";
import * as apidata from "../api/api_form.js";

var NewBankEntity = React.createClass({

  getInitialState: function () {
    var refData = {}; 
    var bankEntityStatus = '';  
    return {
      "insertRow": false,
      bankEntityRows: this.props.bankEntityResult,
      bankEntityStatus: bankEntityStatus,
      refData: refData,
    };
  },
  getKeyByValue(value, dataGroup) {
    if (dataGroup) {
      var i,
        len = dataGroup.length;
      for (i = 0; i < len; i++) {
        if (dataGroup[i].refDataKeyName == value) {
          return dataGroup[i].idValues;
        }
      }
    }
  },
  
  removeBankEntity(e) {
    let deleteBankEntityId = e.target.id.split("_")[1];
    this.props.deleteBankEntity(e.target.id);
  },
  getBankEntityName() {
    console.log(this.props.bankEntityName);
  },
  // New Bank Row
  addNewRow() {
    this.state.bankEntityRows.bankEntityCurrencies.push({
      bankEntityCurrencyId: Math.random(),
      ccy_1: '',
      ccy_2: '',
      ccy_3: '',
      ccy_4: '',
      ccy_5: '',
      ccy_6: '',
      ccy_7: '',
      ccy_8: '',
      ccy_9: '',
      ccy_10: '',
      ccy_11: '',
      ccy_12: '',
      ccy_13: ''
    });
    this.forceUpdate();
  },

  handleInputChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },
  deleteRowHandler(e) {
    let rowBankId = e.target.id;
    console.log()
    let rowBank = rowBankId.split("_");
    let rowBankKey = rowBank[1] + '_' + rowBank[2]; //
    let parentKey = rowBank[1];
    let childKey = rowBank[2];
    let totalChange = document.getElementsByClassName('eachBankRow_' + rowBankKey).length;
    let updateRow = [];
    for (let i = 0; i < totalChange; i++) {
      if (document.getElementsByClassName('eachBankRow_' + rowBankKey)[i].checked) {
        document.getElementsByClassName('eachBankRow_' + rowBankKey)[i].checked = false;
      } else {
        updateRow.push(this.state.bankEntityRows.bankEntityCurrencies[i]);
      }
    }
    this.state.bankEntityRows.bankEntityCurrencies = updateRow;
    this.forceUpdate();
  },
  getData: function () {
    return this.state;
  },
  ccyPair(e) {
    let bankEntityIdCcyPair = e.target.id;
    let lengthBankEntity = this.state.bankEntityRows.bankEntityCurrencies.length;
    let rowBank = bankEntityIdCcyPair.split("_");
    let rowBankKey = rowBank[1] + '_' + rowBank[2];
    for (let j = 0; j < lengthBankEntity; j++) {
      if (document.getElementById(e.target.id).checked) {
        document.getElementById("ccy_" + rowBank[1] + "_" + rowBank[2] + "_" + j + "_2").setAttribute("disabled", "disabled");
      }
      else {
        document.getElementById("ccy_" + rowBank[1] + "_" + rowBank[2] + "_" + j + "_2").removeAttribute("disabled");
      }
    }
  },
  render() {
    var bankEntityRow;
    if (this.state.insertRow) {
      bankEntityRow = <AddBankEntityRow />;
    }
    let underlyingStatus = this.getKeyByValue(apidata.UNDERLYING_STATUS, this.props.refData.refDataKeyGroups);
    console.log(this.state.bankEntityRows.bankEntityCurrencies);
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="form-group  margin-left-25">
              <h2 className="">{this.props.bankEntityName}</h2>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="form-group">
              <label for="bankEntityStatus">Bank status</label>
              <SelectBox data={underlyingStatus}
                selected={this.state.bankEntityStatus}
                value={apidata.apiKeys.refDataValue}
                id={apidata.apiKeys.refDataValue}
                sid="bankEntityStatus"
                onChange={this.handleInputChange.bind(this, 'bankEntityStatus')}
                placeholder="Please select Entity Status" />
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1">
            <div className="form-group">
              <label></label>
              <button className="btn btn-default" type="button" onClick={this.removeBankEntity}
                id={'bankEntity_' + this.props.tradingIndex + '_' + this.props.bankentityIndex}>Remove Bank Entity</button>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-group">
              <label for="ccyPair">Any CCY Pair Combination Allowed
                        <span>(Lowest Tenor will be applied)</span>
              </label>
              <CheckBox ccyPair={this.ccyPair} classBankRow={'eachBankEntityCcyPair_' + this.props.tradingIndex + '_' + this.props.bankentityIndex}
                sid={'eachBankEntityCcyPair_' + this.props.tradingIndex + '_' + this.props.bankentityIndex} />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2"></div>
          <div className="col-lg-4 col-md-4 col-sm-4 pull-right padding-left-90">
            <input type="button" className="btn btn-primary margin-right-10" value="Add new Row" onClick={this.addNewRow} />
            <input type="button" className="btn btn-default margin-right-10" value="Delete Rows"
              id={'deleterow_' + this.props.tradingIndex + '_' + this.props.bankentityIndex} onClick={this.deleteRowHandler} />
          </div>
        </div>
        <div className="clear"></div>
        {this.state.bankEntityRows.bankEntityCurrencies && this.state.bankEntityRows.bankEntityCurrencies.length > 0 &&
          <div className="container">
            <div className="row bankEntity currencyCol">
              <div className="col-md-7">
                <div className="col-md-12">
                  <div className="col-md-1 currencyCheckboxColumn">
                    <div className="form-group">
                      <label htmlFor="currencyCheckbox"></label>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-group">
                      <label htmlFor="currency1">CCY1</label>

                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-group">
                      <label htmlFor="currency2">CCY2</label>

                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-group">
                      <label htmlFor="tenor">Tenor<span> * </span></label>

                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-group">
                      <label htmlFor="backToBack">B2B<span> *</span></label>

                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-group">
                      <label htmlFor="settledCashOnly">Settled Cash</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="issuer">Issuer Type<br />of Security</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="securityType">Security Type</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="benchmark">Benchmark / Index<span> *</span></label>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="col-md-12">
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="commodityInformation">Commodity<br />Information</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="fixingBenchmark">Fixing<br />Benchmark</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="fixedRateOnly">Fixed Rate</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="settlementSystem">Settlement system<br />Restriction</label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="underlyingStatus">Underlying<br />Status<span> *</span> </label>

                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="underlyingStatusChangeDate">Date of Underlying Status Change</label>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        { /*this.state.bankEntityRows.bankEntityCurrencies && this.state.bankEntityRows.bankEntityCurrencies.length > 0 && (this.state.bankEntityRows.bankEntityCurrencies).map((row, index) => {
        return(  <AddBankEntityRow
            key={'BankEntityRow' + Math.random()}
            tradingIndex={this.props.tradingIndex}
            bankentityIndex={this.props.bankentityIndex}
            rowIndex={index}
            dataEntityRow={row}

            lengthRows={this.props.bankEntityResult.bankEntityCurrencies.length}
            refData={this.props.refData} updateRow={this.updateRow}
            />)
        })*/}
      </div>

    );
  }
});
export default NewBankEntity;

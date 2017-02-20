/**
 * Created by 8773465 on 02/11/2016.
 */
import * as _ from "lodash";
import React from "react";
import ReactDataGrid from "react-data-grid";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import * as apidata from "./../api/api_form.jsx";
import update from "react-addons-update";
const { AutoComplete: AutoCompleteEditor } = Editors;

var newOriginalRow = apidata.NEW_ORIGINAL_WS_ROW_ATTRIBUTES;
Object.assign(newOriginalRow,{"bankEntityCurrencyFeatures": apidata.MM_FEATURES})
console.log("new Original row", newOriginalRow);

var newGridRow = apidata.NEW_MM_GRID_ROW;
Object.assign(newGridRow, newOriginalRow);
console.log("newGridRow", newGridRow);

var MMAndRepoFeatures= React.createClass({

   getRefDataValueForKey(key){
      return this.props.refData.get(key);
   },
   formatRefDataForGrid(refDataObject){
      if(refDataObject){
         var formatted = new Array;
         for(var i in refDataObject){
            formatted[i] = {id: refDataObject[i].refDataId,
               title : refDataObject[i].refDataValue
            }
         }
      }
      return formatted;
   },

   getInitialState() {

      let balanceSheet = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.BALANCE_SHEET));
      let ccy1 = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.APD_CURRENCY));
      let fixed = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.FIXED));
      let floating = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.FLOATING));
      let referenceRate = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.REFERENCE_RATE));
      let issuer = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.ISSUER));
      let securityType = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.SECURITY_TYPE));
      let maxTenor = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.MAX_TENOR));
      let openRisk = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.OPEN_RISK));
      let openRiskMaxTenor = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.OPEN_RISK_MAX_TENOR));
      let tradeSettlementCash = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.TRADE_SETTLEMENT_CASH));
      let tradeSettlementPhysical = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.TRADE_SETTLEMENT_PHYSICAL));
      let exchange = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.EXCHANGE));
      let exchangePlatform = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.EXCHANGE_PLATFORM));
      let exchangeSymbol = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.EXCHANGE_SYMBOL));
      let clearingAgent = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.CLEARING_AGENT));
      let underlyingStatus = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.UNDERLYING_STATUS));
      console.log("MMFeaturesAttributes",apidata.MM_FEATURES);

      this._columns = [
         {
            key: 'currency1',
            name: 'CCY1',
            editor : <AutoCompleteEditor options={ccy1} />,
            editable: true,
            width: 60,
            locked: true
         }, {
            key: 'fixed',
            name: 'Fixed',
            editor : <AutoCompleteEditor options={fixed} />,
            editable: true,
            width: 80
         }, {
            key: 'floating',
            name: 'Floating',
            editor : <AutoCompleteEditor options={floating} />,
            editable: true,
            width: 90
         }, {
            key: 'referenceRate',
            name: 'Reference Rate',
            editor : <AutoCompleteEditor options={referenceRate} />,
            editable: true,
            width: 120
         }, {
            key: 'issuer',
            name: 'Issuer',
            editor : <AutoCompleteEditor options={issuer} />,
            editable: true,
            width: 100
         }, {
            key: 'securityType',
            name: 'Security Type',
            editor : <AutoCompleteEditor options={securityType} />,
            editable: true,
            width: 120
         }, {
            key: 'maxTenor',
            name: 'Max Tenor',
            editor : <AutoCompleteEditor options={maxTenor} />,
            editable: true,
            width: 100
         }, {
            key: 'openRisk',
            name: 'Open Risk',
            editor : <AutoCompleteEditor options={openRisk} />,
            editable: true,
            width: 100
         }, {
            key: 'openRiskMaxTenor',
            name: 'Open Risk Max Tenor',
            editor : <AutoCompleteEditor options={openRiskMaxTenor} />,
            editable: true,
            width: 160,
            height: 100
         }, {
            key: 'bankingBook',
            name: 'Banking Book',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 50
         }, {
            key: 'tradingBook',
            name: 'Trading Book',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 80
         }, {
            key: 'tradeSettlementCash',
            name: 'Trade Settlement Cash',
            editor : <AutoCompleteEditor options={tradeSettlementCash} />,
            editable: true,
            width: 180
         }, {
            key: 'tradeSettlementPhysical',
            name: 'Trade Settlement Physical',
            editor: <AutoCompleteEditor options={tradeSettlementPhysical} />,
            editable: true,
            width: 100,
            height: 100
         },{
            key: 'oTC',
            name: 'OTC',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 50
         }, {
            key: 'exchange',
            name: 'Exchange',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 80
         }, {
            key: 'exchangePlatform',
            name: 'Exchange Platform',
            editor : <AutoCompleteEditor options={exchangePlatform} />,
            editable: true,
            width: 140
         }, {
            key: 'exchangeSymbol',
            name: 'Exchange Symbol',
            editor : <AutoCompleteEditor options={exchangeSymbol} />,
            editable: true,
            width: 140
         }, {
            key: 'clearingAgent',
            name: 'Clearing Agent',
            editor : <AutoCompleteEditor options={clearingAgent} />,
            editable: true,
            width: 110
         },{
            key: apidata.TRI_PARTY_REPO.attrName,
            name: apidata.TRI_PARTY_REPO.attrName,
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 90
         },{
            key:apidata.PRE_TRADE_RESTRICTION.attrName,
            name: apidata.PRE_TRADE_RESTRICTION.attrName,
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 160
         },{
            key: apidata.NOTICE_PERIOD_DAYS.attrName,
            name: apidata.NOTICE_PERIOD_DAYS.attrName,
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 80
         }, {
            key: 'callable',
            name: 'Callable - Allowed',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 120
         }, {
            key: 'convertible',
            name: 'Convertible - Allowed',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true,
            width: 90
         }, {
            key: 'balanceSheet',
            name: 'Balance Sheet',
            width: 120,
            editor : <AutoCompleteEditor options={balanceSheet} />,
            editable: true
         }, {
            key: 'underlyingStatus',
            name: 'Underlying Status',
            editor : <AutoCompleteEditor options={underlyingStatus} />,
            editable: true,
            width: 160
         }, {
            key: 'underlyingStatusChangeDate',
            name: 'Underlying Status Change Date',
            width: 160
         }
      ];

      return { rows: this.createRows(this.props.gridRowsLength),
               originalrows: this.props.gridRows};
   },

   createRows(numberOfRows) {
      let rows = [];
      _.forEach(this.props.gridRows, (eachRow) => {
         let eachObj = {};
         _.forEach(this._columns, (eachKey) => {
            let currencyFeature = _.find(eachRow.bankEntityCurrencyFeatures,{attrName: eachKey.name});
            if(currencyFeature){
               eachObj[eachKey.key] =  currencyFeature.attrValue;
            } else {
               eachObj[eachKey.key] = eachRow[eachKey.key];
            }
         });
         rows.push(eachObj)
      })
      return rows;
   },

   getColumns() {
      let clonedColumns = this._columns.slice();
      clonedColumns[2].events = {
         onClick: (ev, args) => {
            const idx = args.idx;
            const rowIdx = args.rowIdx;
            this.refs.grid.openCellEditor(rowIdx, idx);
         }
      };

      return clonedColumns;
   },

   rowGetter(i) {
      return this.state.rows[i];
   },

   handleRowUpdated({ rowIdx, updated }) {

      /*************************
       * This is for the data grid to work correctly. Data grid has flat structure.
       * Features are same as attributes
       * ********************************/
      let rows = this.state.rows;
      Object.assign(rows[rowIdx], updated);
      console.log("Updated Row is ", rows[rowIdx]);
      this.setState({rows: rows});
      /*********************************/

      /*************************
       * This is for the webservice to work correctly. Webservice data has internal Currency Features Array.
       * Features are inside the Features Array unlike the attributes.
       * ********************************/
      var originalRows = this.state.originalrows;
      var key = Object.keys(updated)[0];
      var isFeature = false;
      _.forEach(apidata.MM_FEATURES, (eachKey) => {
         if(eachKey.attrName === key){
            isFeature = true;
            return false;
         }
      });
      if(isFeature) {
         var updatedFeature = _.find(originalRows[rowIdx].bankEntityCurrencyFeatures,{attrName: key});
         updatedFeature.attrValue = updated[key];
      } else{
         Object.assign(originalRows[rowIdx], updated);
      }
      this.setState({originalrows: originalRows});
      /*console.log("this.state.rows", this.state.rows);
      console.log("this.state.originalrows", this.state.originalrows);*/
      this.props.updateEntity('', this.props.bankEntityIndex,rowIdx ,this.state.originalrows)
   },
   getRowAt(index) {
      if (index < 0 || index > this.getSize()) {
         return undefined;
      }

      return this.state.rows[index];
   },
   getSize() {
      return this.state.rows.length;
   },
   handleAddRow({ newRowIndex }) {
      var gridRows = this.state.rows;
      var originalRows = this.state.originalrows;
      var updatedGridrows = update(gridRows, {$push: [newGridRow]});
      var updatedOriginalrows = update(originalRows, {$push: [newOriginalRow]});
      this.setState({rows: updatedGridrows, originalrows: updatedOriginalrows});
   },
   render() {

      return (
         <div className="container">
            <div className="row">
               <ReactDataGrid
                  //ref="grid"
                  enableCellSelect={true}
                  // columns={this._columns}
                  rowGetter={this.rowGetter}
                  rowsCount={this.state.rows.length}
                  onRowUpdated={this.handleRowUpdated}
                  columns={this.getColumns()}
                  rowGetter={this.getRowAt}
                  rowsCount={this.getSize()}
                  onGridRowsUpdated={this.handleGridRowsUpdated}
                  toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
                  //enableRowSelect={true}
                  minHeight={300}
                  maxWidth={700}
                  //rowScrollTimeout={200}
                  rowHeight="25"
               />
            </div>
         </div>
      );
   }
});

export default MMAndRepoFeatures;

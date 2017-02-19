/**
 * Created by 8773465 on 02/11/2016.
 */
import * as _ from "lodash";
import React from "react";
import ReactDataGrid from "react-data-grid";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import * as apidata from "./../api/api_form.jsx";
const { AutoComplete: AutoCompleteEditor } = Editors;
//const { DropDownFormatter } = Formatters;
import update from 'react-addons-update';

var CommoditiesFeatures= React.createClass({

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
      let referenceRate = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.REFERENCE_RATE));
      let exchange = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.EXCHANGE));
      let exchangePlatform = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.EXCHANGE_PLATFORM));
      let exchangeSymbol = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.EXCHANGE_SYMBOL));
      let maxTenor = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.MAX_TENOR));
      let openRisk = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.OPEN_RISK));
      let openRiskMaxTenor = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.OPEN_RISK_MAX_TENOR));
      let tradeSettlementCash = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.TRADE_SETTLEMENT_CASH));
      let tradeSettlementPhysical = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.TRADE_SETTLEMENT_PHYSICAL));
      let underlyingStatus = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.UNDERLYING_STATUS));


      let coreAssets = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.CORE_ASSETS));
      let subCategory = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.SUB_CATEGORY));
      let subAssets = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.SUB_ASSETS));
      let commoditiesRegion = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.COMMODITIES_REGION));
      let productGrade = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.PRODUCT_GRADE));
      let basis = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.BASIS));
      let priceSource = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.PRICE_SOURCE));
      let bbgPlattsCodeFutureTicker = this.formatRefDataForGrid(this.getRefDataValueForKey(apidata.BBG_PLATTS_CODE_FUTURE_TICKER));

      this._columns = [
         {
            key: 'currency1',
            name: 'CCY1',
            editor : <AutoCompleteEditor options={ccy1} />,
            editable: true,
            width: 60,
            locked: true
         }, {
            key: 'referenceRate',
            name: 'Reference Rate',
            editor : <AutoCompleteEditor options={referenceRate} />,
            editable: true,
            width: 120
         }, {
            key: 'Core Assets',
            name: 'Core Assets',
            editor : <AutoCompleteEditor options={coreAssets} />,
            editable: true,
            width: 100
         },{
            key: 'Sub Category',
            name: 'Sub Category',
            editor : <AutoCompleteEditor options={subCategory} />,
            editable: true,
            width: 110
         },{
            key: 'Sub Assets',
            name: 'Sub Assets',
            editor : <AutoCompleteEditor options={subAssets} />,
            editable: true,
            width: 90
         },{
            key: 'Commodities Region',
            name: 'Commodities Region',
            editor : <AutoCompleteEditor options={commoditiesRegion} />,
            editable: true,
            width: 160
         },{
            key: 'Product Grade',
            name: 'Product Grade',
            editor : <AutoCompleteEditor options={productGrade} />,
            editable: true,
            width: 110
         },{
            key: 'Basis',
            name: 'Basis',
            editor : <AutoCompleteEditor options={basis} />,
            editable: true,
            width: 70
         },{
            key: 'Price Source',
            name: 'Price Source',
            editor : <AutoCompleteEditor options={priceSource} />,
            editable: true,
            width: 110
         },{
            key: 'BBG / Platts Code / Futures Ticker',
            name: 'BBG / Platts Code / Futures Ticker',
            editor : <AutoCompleteEditor options={bbgPlattsCodeFutureTicker} />,
            editable: true,
            width: 220
         }, {
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
            key: 'maxTenor',
            name: 'Max Tenor',
            editor : <AutoCompleteEditor options={maxTenor} />,
            editable: true,
            width: 100
         },{
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
            width: 160
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
            width: 180
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

      return { rows: this.createRows(150) };
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
      // merge updated row with current row and rerender by setting state
      console.log(rowIdx)
      console.log(updated);

      let rows = this.state.rows;
      console.log("rows");
      console.log(rows);


      Object.assign(rows[rowIdx], updated);
      this.setState({rows: rows});
     console.log(this.state.rows);

     this.props.updateEntity('', this.props.bankEntityIndex,rowIdx ,this.state.rows)
    },
   handleGridRowsUpdated({ fromRow, toRow, updated }) {
       console.log(fromRow, toRow, updated)
      let rows = this.state.rows.slice();
      console.log(rows)
      for (let i = fromRow; i <= toRow; i++) {
         let rowToUpdate = rows[i];
         let updatedRow = update(rowToUpdate, {$merge: updated})
         rows[i] = updatedRow;
         console.log(rows[i]);
      }

      this.setState({ rows });
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
       
      const gridRows = this.state.rows;

      console.log("this.props.gridRows");
      console.log(this.state.rows);
      let myrows = [];
      _.forEach(this.props.gridRows, (eachRow) => {
         let eachObj = {};
         let bankCurrencyRow = [];
         _.forEach(this._columns, (eachKey) => {
            // console.log(eachKey);
            let currencyFeature = _.find(eachRow.bankEntityCurrencyFeatures,{attrName: eachKey.name});
            //console.log(currencyFeature);
            if(currencyFeature){
                
                bankCurrencyRow.push(currencyFeature);
                /*console.log(eachRow.bankEntityCurrencyFeatures);
                eachRow.bankEntityCurrencyFeatures = currencyFeature;
                console.log(eachObj[eachRow.bankEntityCurrencyFeatures]); 
                console.log(eachObj[eachRow.bankEntityCurrencyFeatures]); 
                console.log(eachKey.key); */

              // eachObj[eachRow.bankEntityCurrencyFeatures][eachKey.key] =  currencyFeature.attrValue;
            } else {
               eachObj[eachKey.key] = eachRow[eachKey.key];
            }
            eachObj.bankEntityCurrencyFeatures = bankCurrencyRow;
         }); 
         myrows.push(eachObj)
      })
      console.log(myrows);
      console.log("myrows");

      const newRow = {
         value: newRowIndex,
         bankEntityCurrencyId: '',
        currency1: "",
        currency2: "",
        maxTenor: '',
        securityType: null,
        referenceRate: "",
        settlementSystem: null,
        underlyingStatus: null,
        underlyingStatusChangeDate: null,
        issuer: null,
        clearingAgent: null,
        cCPOnly: null,
        minAmount: null,
        maxTime: null,
        escalationCondition: null,
        deferredSettlementPeriod: null,
        daysPermitted: null,
        tradeSettlementCash: "Y",
        tradeSettlementPhysical: null,
        bankingBook: null,
        tradingBook: null,
        fixed: null,
        floating: null,
        shortPosition: null,
        openRisk: "N",
        exchange: null,
        oTC: "Y",
        balanceList: "UK B/S",
        openRiskMaxTenor: null,
        exchangePlatform: null,
        region: "London",
        bankEntityCurrencyFeatures: [
            {
            id: 1,
            attrName: "Core Assets",
            attrValue: ""
            },
            {
            id: 2,
            attrName: "Sub Category",
            attrValue: ""
            },
            {
            id: 3,
            attrName: "Sub Assets",
            attrValue: ""
            },
            {
            id: 4,
            attrName: "Region",
            attrValue: ""
            },
            {
            id: 5,
            attrName: "Product Grade",
            attrValue: ""
            },
            {
            id: 6,
            attrName: "Basis",
            attrValue: ""
            },
            {
            id: 7,
            attrName: "Price Source",
            attrValue: ""
            },
            {
            id: 8,
            attrName: "BBG / Platts Code / Futures Ticker",
            attrValue: ""
            },
            {
            id: 9,
            attrName: "EMIR - Dodd-Frank",
            attrValue: ""
            }
        ]
      };
    //   gridRows = myrows; 
      const rows = update(myrows, {$push: [newRow]});
      this.setState({ rows });
        console.log(rows);
        console.log("---- Row Created");
   },
   
   handleDeleteRow(){
      console.log("delete row functionality here");
   },
   render() {
      //console.log("gridRows", this.props.gridRows);
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
                  toolbar={<Toolbar title="Add Row" onAddRow={this.handleAddRow}/>}
                  //toolbar={<Toolbar title="Delete Row" onDeleteRow={this.handleDeleteRow}/>}
                  //enableRowSelect={true}
                  minHeight={500}
                  maxWidth={700}
                  //rowScrollTimeout={200}
               />
            </div>
         </div>
      );
   }
});

export default CommoditiesFeatures;

/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import ReactDataGrid from "react-data-grid";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import * as apidata from "./../api/api_form.jsx";

const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
const { DropDownFormatter } = Formatters;

// options for priorities autocomplete editor
const priorities = [{ id: 0, title: 'Critical' }, { id: 1, title: 'High' }, { id: 2, title: 'Medium' }, { id: 3, title: 'Low'} ];
const PrioritiesEditor = <AutoCompleteEditor options={priorities} />;

// options for IssueType dropdown editor
// these can either be an array of strings, or an object that matches the schema below.
const issueTypes = [
   { id: 'bug', value: 'bug', text: 'Bug', title: 'Bug' },
   { id: 'improvement', value: 'improvement', text: 'Improvement', title: 'Improvement' },
   { id: 'epic', value: 'epic', text: 'Epic', title: 'Epic' },
   { id: 'story', value: 'story', text: 'Story', title: 'Story' }
];

const IssueTypesEditor = <DropDownEditor options={issueTypes}/>;

const IssueTypesFormatter = <DropDownFormatter options={issueTypes}/>;

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
            key: 'id',
            name: 'ID',
            width: 30,
            locked: true
         }, {
            key: 'Currency1',
            name: 'Ccy1',
            editor : <AutoCompleteEditor options={ccy1} />,
            editable: true,
            locked: true
         }, {
            key: 'referenceRate',
            name: 'Reference Rate',
            editor : <AutoCompleteEditor options={referenceRate} />,
            editable: true,
            locked: true
         }, {
            key: 'coreAssets',
            name: 'Core Assets',
            editor : <AutoCompleteEditor options={coreAssets} />,
            editable: true
         },{
            key: 'subCategory',
            name: 'Sub Category',
            editor : <AutoCompleteEditor options={subCategory} />,
            editable: true
         },{
            key: 'subAssets',
            name: 'Sub Assets',
            editor : <AutoCompleteEditor options={subAssets} />,
            editable: true
         },{
            key: 'commoditiesRegion',
            name: 'Commodities Region',
            editor : <AutoCompleteEditor options={commoditiesRegion} />,
            editable: true
         },{
            key: 'productGrade',
            name: 'Product Grade',
            editor : <AutoCompleteEditor options={productGrade} />,
            editable: true
         },{
            key: 'basis',
            name: 'Basis',
            editor : <AutoCompleteEditor options={basis} />,
            editable: true
         },{
            key: 'priceSource',
            name: 'Price Source',
            editor : <AutoCompleteEditor options={priceSource} />,
            editable: true
         },{
            key: 'bbgPlattsCodeFutureTicker',
            name: 'BBG / Platts Code / Futures Ticker',
            editor : <AutoCompleteEditor options={bbgPlattsCodeFutureTicker} />,
            editable: true
         }, {
            key: 'oTC',
            name: 'OTC',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true
         }, {
            key: 'exchange',
            name: 'Exchange',
            editor : <AutoCompleteEditor options={exchange} />,
            editable: true
         }, {
            key: 'exchangePlatform',
            name: 'Exchange Platform',
            editor : <AutoCompleteEditor options={exchangePlatform} />,
            editable: true
         }, {
            key: 'exchangeSymbol',
            name: 'Exchange Symbol',
            editor : <AutoCompleteEditor options={exchangeSymbol} />,
            editable: true
         }, {
            key: 'maxTenor',
            name: 'Max Tenor',
            editor : <AutoCompleteEditor options={maxTenor} />,
            editable: true
         },{
            key: 'openRisk',
            name: 'Open Risk',
            editor : <AutoCompleteEditor options={openRisk} />,
            editable: true
         }, {
            key: 'openRiskMaxTenor',
            name: 'Open Risk Max Tenor',
            editor : <AutoCompleteEditor options={openRiskMaxTenor} />,
            editable: true
         }, {
            key: 'tradeSettlementCash',
            name: 'Trade Settlement Cash',
            editor : <AutoCompleteEditor options={tradeSettlementCash} />,
            editable: true
         }, {
            key: 'tradeSettlementPhysical',
            name: 'Trade Settlement Physical',
            editor: <AutoCompleteEditor options={tradeSettlementPhysical} />,
            editable: true
         }, {
            key: 'underlyingStatus',
            name: 'Underlying Status',
            editor : <AutoCompleteEditor options={underlyingStatus} />,
            editable: true,
         }, {
            key: 'underlyingStatusChangeDate',
            name: 'Underlying Status Change Date'
         }
      ];

      return { rows: this.createRows(1000) };
      //return null;
   },
   createRows(numberOfRows) {
      let rows = [];
      for (let i = 1; i < numberOfRows; i++) {
         rows.push({
            id: i,
            task: 'Task ' + i,
            name: 'NAME ' + i,
            firstname: 'First name ' + i,
            lastname: 'Last nam ' + i,
            a: 'Apple ' + i,
            b: 'Ball ' + i,
            c: 'Cat ' + i,
            d: 'Dog' + i,
            priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
            issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
         });
      }

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
      let rows = this.state.rows;
      Object.assign(rows[rowIdx], updated);
      this.setState({rows: rows});
   },
   /*handleGridRowsUpdated({ fromRow, toRow, updated }) {
      let rows = this.state.rows;
      for (let i = fromRow; i <= toRow; i++) {
         let rowToUpdate = rows[i];
         let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
         rows[i] = updatedRow;
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
      const newRow = {
         value: newRowIndex,
         userStory: '',
         developer: '',
         epic: ''
      };

      const rows = React.addons.update(this.state.rows, {$push: [newRow]});
      this.setState({ rows });
   },*/
   render() {
      return (
         <div className="container">
            <div className="row">
               <ReactDataGrid
                  //ref="grid"
                  enableCellSelect={true}
                  columns={this._columns}
                  rowGetter={this.rowGetter}
                  rowsCount={this.state.rows.length}
                  onRowUpdated={this.handleRowUpdated}
                  /*columns={this.getColumns()}
                  rowGetter={this.getRowAt}
                  rowsCount={this.getSize()}
                  onGridRowsUpdated={this.handleGridRowsUpdated}
                  toolbar={<Toolbar onAddRow={this.handleAddRow}/>}*/
                  enableRowSelect={true}
                  minHeight={500}
                  maxWidth={1070}
                  //rowScrollTimeout={200}
               />
            </div>
         </div>
         );
      }
});

export default CommoditiesFeatures;

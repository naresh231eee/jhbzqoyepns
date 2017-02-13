/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import SelectBox from "./../formfields/select.js";
import * as apidata from "./../api/api_form.jsx";
import ReactDataGrid from "react-data-grid";
import { Editors, Toolbar, Formatters } from "react-data-grid-addons";
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
   /*let ccy1 = this.getRefDataValueForKey(apidata.APD_CURRENCY);
   let referenceRateOptions = this.getRefDataValueForKey(apidata.REFERENCE_RATE);
   let exchangeOptions = this.getRefDataValueForKey(apidata.EXCHANGE);
   let exchangePlatformOptions = this.getRefDataValueForKey(apidata.EXCHANGE_PLATFORM);
   let exchangeSymbolOptions = this.getRefDataValueForKey(apidata.EXCHANGE_SYMBOL);
   let maxTenorOptions = this.getRefDataValueForKey(apidata.MAX_TENOR);
   let openRiskMaxTenorOptions = this.getRefDataValueForKey(apidata.OPEN_RISK_MAX_TENOR);
   let tradeSettlementCashOptions = this.getRefDataValueForKey(apidata.TRADE_SETTLEMENT_CASH);
   let tradeSettlementPhysicalOptions = this.getRefDataValueForKey(apidata.TRADE_SETTLEMENT_PHYSICAL);
   let underlyingStatus = this.getRefDataValueForKey(apidata.UNDERLYING_STATUS);

   /!***** commodities Features *****!/
   let coreAssetsOptions = this.getRefDataValueForKey(apidata.CORE_ASSETS);
   let subAssetsOptions = this.getRefDataValueForKey(apidata.SUB_ASSETS);
   let commoditiesRegionOptions = this.getRefDataValueForKey(apidata.COMMODITIES_REGION);
   let productGradeOptions = this.getRefDataValueForKey(apidata.PRODUCT_GRADE);
   let basisOptions = this.getRefDataValueForKey(apidata.BASIS);
   let priceSourceOptions = this.getRefDataValueForKey(apidata.PRICE_SOURCE);
   let bbgPlattsCodeFutureTickerOptions = this.getRefDataValueForKey(apidata.BBG_PLATTS_CODE_FUTURE_TICKER);


   getRefDataValueForKey(key){
      return this.props.refData.get(key);
   },*/
   getInitialState() {
      this._columns = [
         {
            key: 'id',
            name: 'ID',
            width: 30,
            locked: true
         },
         {
            key: 'task',
            name: 'Title',
            editable: true,
            locked: true
         },
         {
            key: 'name',
            name: 'NAME',
            editable: true,
            width: 80,
            locked: true
         },
         {
            key: 'firstname',
            name: 'First name',
            editable: true,
            width: 80
         },
         {
            key: 'lastname',
            name: 'Last name',
            editable: true,
            width: 80
         },
         {
            key: 'a',
            name: 'Apple',
            editable: true,
            width: 80
         },
         {
            key: 'b',
            name: 'Ball',
            editable: true,
            width: 80
         },
         {
            key: 'c',
            name: 'Cat',
            editable: true,
            width: 80
         },
         {
            key: 'd',
            name: 'Dog',
            editable: true,
            width: 80
         },
         {
            key: 'priority',
            name: 'Priority',
            editor: PrioritiesEditor
         },
         {
            key: 'issueType',
            name: 'Issue Type',
            editor: IssueTypesEditor,
            formatter: IssueTypesFormatter
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
                  ref="grid"
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
                  //enableRowSelect={true}
                  minHeight={500}
                  minWidth={600}
                  rowScrollTimeout={200}
               />
            </div>
         </div>
         );
      }
});

export default CommoditiesFeatures;

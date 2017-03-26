/**
 * Created by 8773465 on 02/11/2016.
 */
import * as _ from "lodash";
import React from "react";
import ReactDataGrid from "react-data-grid";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import update from "react-addons-update";
const { AutoComplete: AutoCompleteEditor } = Editors;

var BankEntityCurrencyDataGrid = React.createClass({

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
   createDataGridColumns(columns){
       console.log(columns);
      var _columns = [];
      for(var i=0; i<columns.length;i++){
         var newColumn =  {
            key: columns[i].key,
            name: columns[i].name,
            editor : (!_.isNil(columns[i].editor)) ? columns[i].editor : <AutoCompleteEditor options={this.formatRefDataForGrid(this.getRefDataValueForKey(columns[i].name))} />,
            editable: columns[i].editable,
            width: columns[i].width,
            locked: (!_.isNil(columns[i].locked)) ? columns[i].locked : false,
            resizable : true
         }

         _columns.push(newColumn);
      }
      return _columns;
   },
   getInitialState() {
      this._newOriginalRow = this.props.newOriginalRow;
      this._newGridRow = this.props.newGridRow;
      var columns = this.props.columns;
      this._columns = this.createDataGridColumns(columns);
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
      return clonedColumns;
   },
   rowGetter(i) {
      return this.state.rows[i];
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
      var updatedGridrows = update(gridRows, {$push: [this._newGridRow]});
      var updatedOriginalrows = update(originalRows, {$push: [this._newOriginalRow]});
      this.setState({rows: updatedGridrows, originalrows: updatedOriginalrows});
   },
   handleCellDrag({ fromRow, toRow, cellKey, value }) {
      var updated = {};
      updated[cellKey] = value;
      for (let rowIdx = fromRow; rowIdx <= toRow; rowIdx++) {
         this.handleRowUpdated({rowIdx, updated});
      }
   },
   handleRowUpdated({ rowIdx, updated }) {
      /*************************
       * This is for the data grid to work correctly. Data grid has flat structure.
       * Features are same as attributes
       * ********************************/
      let rows = this.state.rows;
      Object.assign(rows[rowIdx], updated);
      this.setState({rows: rows});
      /*********************************/

      /*************************
       * This is for the webservice to work correctly. Webservice data has internal Currency Features Array.
       * Features are inside the Features Array unlike the attributes.
       * ********************************/
      this.setStateForWebservice(rowIdx,updated);
   },
   setStateForWebservice(rowIdx, updated){
      console.log("BankEntityCurrencyDataGrid.setStateForWebservice [rowIdx, updated]", rowIdx, updated)
      var originalRows = this.state.originalrows;
      var key = Object.keys(updated)[0];
      var isFeature = false;
      _.forEach(this.props.featuresList, (eachKey) => {
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
      this.props.updateEntity('', this.props.bankEntityIndex,rowIdx ,this.state.originalrows)
   },
   render() {
      let enableCellSelect= ! this.props.disabled;
      return (
         <div className="container">
            <div className="row">
               <ReactDataGrid
                  ref='grid'
                  enableCellSelect={enableCellSelect}
                  onRowUpdated={this.handleRowUpdated}
                  columns={this.getColumns()}
                  rowGetter={this.getRowAt}
                  rowsCount={this.getSize()}
                  toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
                  onCellsDragged={this.handleCellDrag}
                  minHeight={250}
                  maxWidth={700}
                  rowHeight={25}
               />
            </div>
         </div>
      );
   }
});
export default BankEntityCurrencyDataGrid;

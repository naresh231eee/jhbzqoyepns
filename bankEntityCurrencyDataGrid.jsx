/**
 * Created by 8773465 on 02/11/2016.
 */
import * as _ from "lodash";
import React from "react";
import moment from "moment";
import ReactDataGrid from "react-data-grid";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import update from "react-addons-update";
const { AutoComplete: AutoCompleteEditor,  DropDownEditor } = Editors;
import {UNDERLYING_STATUS_CHANGE_DATE} from "../api/api_form.jsx";

var dateFormatter = React.createClass({
   render() {
      let value = this.props.value;
      let dateFormated ='';
      if(value) {
         let date = moment(value).toDate();
         dateFormated = moment(date).format("DD/MM/YYYY");
      }
      return ( <div>{dateFormated}</div> );
   }
});

var BankEntityCurrencyDataGrid = React.createClass({

   getRefDataValueForKey(key){
      return this.props.refData.get(key);
   },
   formatRefDataForGrid(refDataObject){
      if(refDataObject){
         var formatted = new Array;
         formatted[0] = {
            id: 0,
            value: "",
            text: "--Select--",
            title: "--Select--"
         }
         for(var j in refDataObject){
            formatted.push({
               id: refDataObject[j].refDataId,
               value: refDataObject[j].refDataValue,
               text: refDataObject[j].refDataValue,
               title: refDataObject[j].refDataValue
            });
         }
      }
      return formatted;
   },
   createDataGridColumns(columns){
      var _columns = [];
      for(var i=0; i<columns.length;i++){
         var newColumn =  {
            key: columns[i].key,
            name: columns[i].name,
            editor : (!_.isNil(columns[i].editor)) ? columns[i].editor : <DropDownEditor options={this.formatRefDataForGrid(this.getRefDataValueForKey(columns[i].editorKey))} />,
            editable: columns[i].editable,
            width: columns[i].width,
            locked: (!_.isNil(columns[i].locked)) ? columns[i].locked : false,
            resizable : true,
            formatter: (columns[i].key === UNDERLYING_STATUS_CHANGE_DATE.key) ? dateFormatter : '',
            getRowMetaData: (row) => row
         }

         _columns.push(newColumn);
      }
      return _columns;
   },
   getInitialState() {
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
      var gridRows = this.state.rows.slice();
      var originalRows = this.state.originalrows.slice();
      var updatedGridrows = update(gridRows, {$push: [this.props.newGridRow]});
      var updatedOriginalrows = update(originalRows, {$push: [this.props.newOriginalRow]});
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
      let rows = this.state.rows.slice();
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
      console.log("BankEntityCurrencyDataGrid.setStateForWebservice.currentRows",originalRows);
      this.props.updateEntity('', this.props.bankEntityIndex,rowIdx ,originalRows)
   },
   render() {
      let enableCellSelect= ! this.props.disabled;
      var toolbar = <Toolbar onAddRow={this.handleAddRow}/>;
      if(!this.props.disabled){
         toolbar= toolbar;
      } else {
         toolbar= <Toolbar />
      }
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
                  toolbar={toolbar}
                  onCellsDragged={this.handleCellDrag}
                  minHeight={250}
                  maxWidth={700}
               />
            </div>
         </div>
      );
   }
});
export default BankEntityCurrencyDataGrid;

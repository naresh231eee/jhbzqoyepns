/**
 * Created by 8773465 on 02/11/2016.
 */
/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import * as apidata from "./../api/api_form.jsx";
import CurrencyDataGrid from "./bankEntityCurrencyDataGrid.jsx";
const { AutoComplete: AutoCompleteEditor } = Editors;

var CommoditiesFeatures= React.createClass({
   getInitialState(){
      var newOriginalRow = apidata.NEW_ORIGINAL_WS_ROW_ATTRIBUTES;
      Object.assign(newOriginalRow,{"bankEntityCurrencyFeatures": apidata.COMMODITIES_FEATURES})

      var newGridRow = apidata.NEW_COMMODITIES_GRID_ROW;
      Object.assign(newGridRow, newOriginalRow);

      var myColumns = [apidata.CCY1,apidata.REFERENCE_RATE, apidata.CORE_ASSETS, apidata.SUB_CATEGORY, apidata.SUB_ASSETS, apidata.COMMODITIES_REGION, apidata.PRODUCT_GRADE, apidata.BASIS,
         apidata.PRICE_SOURCE, apidata.BBG_PLATTS_CODE_FUTURE_TICKER, apidata.OTC, apidata.EXCHANGE, apidata.EXCHANGE_PLATFORM, apidata.EXCHANGE_SYMBOL, apidata.MAX_TENOR,
         apidata.OPEN_RISK, apidata.OPEN_RISK_MAX_TENOR, apidata.TRADE_SETTLEMENT_CASH, apidata.TRADE_SETTLEMENT_PHYSICAL, apidata.BALANCE_SHEET, apidata.UNDERLYING_STATUS, apidata.UNDERLYING_STATUS_CHANGE_DATE
      ]

      return {
         newOriginalRow:newOriginalRow,
         newGridRow:newGridRow,
         myColumns:myColumns
      }
   },
   render() {
      return (
         <div className="container">
            <div className="row">
               <CurrencyDataGrid
                  refData={this.props.refData}
                  columns={this.state.myColumns}
                  newOriginalRow={this.state.newOriginalRow}
                  newGridRow={this.state.newGridRow}
                  gridRowsLength={this.props.gridRowsLength}
                  gridRows={this.props.gridRows}
                  updateEntity={this.props.updateEntity}
                  bankEntityIndex={this.props.bankEntityIndex}
                  disabled={this.props.disabled}
                  featuresList={apidata.COMMODITIES_FEATURES}
               />
            </div>
         </div>
      );
   }
});

export default CommoditiesFeatures;

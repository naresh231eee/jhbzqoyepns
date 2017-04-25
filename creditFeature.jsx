/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import * as apidata from "./../api/api_form.jsx";
import CurrencyDataGrid from "./bankEntityCurrencyDataGrid.jsx";
import {
   MODAL_VAL_APPROVAL_YRS,
   MARKET_RISK_APPROVAL_TRADES_PER_YR,
   CREDIT_RISK_HEDGED,
   CREDIT,
   BUSINESS_CONTROL,
   OPERATIONS,
   RISK_PLATFORMS,
   TWO_WAY_LETTER_REQUIRED,
   LIMIT_DOLLAR_M,
   MAX_HOLDING_PERIOD_DAY,
   MAX_TRADES_PER_YR,
   MAX_TOTAL_EXECUTED_TRADES
} from "../api/api_form.jsx";
const { AutoComplete: AutoCompleteEditor } = Editors;

var CreditFeatures= React.createClass({
   getInitialState(){
      return {}
   },

   render() {
      const CREDIT_FEATURES =[Object.assign({}, MODAL_VAL_APPROVAL_YRS), Object.assign({},MARKET_RISK_APPROVAL_TRADES_PER_YR),
         Object.assign({},CREDIT_RISK_HEDGED), Object.assign({},CREDIT), Object.assign({},BUSINESS_CONTROL), Object.assign({},OPERATIONS),
         Object.assign({},RISK_PLATFORMS), Object.assign({},TWO_WAY_LETTER_REQUIRED), Object.assign({},LIMIT_DOLLAR_M),
         Object.assign({},MAX_HOLDING_PERIOD_DAY), Object.assign({},MAX_TRADES_PER_YR),Object.assign({},MAX_TOTAL_EXECUTED_TRADES)
      ];
      var newOriginalRow = Object.assign({}, apidata.NEW_ORIGINAL_WS_ROW_ATTRIBUTES);
      var features = CREDIT_FEATURES.slice();
      Object.assign(newOriginalRow,{"bankEntityCurrencyFeatures": features})

      var newGridRow = Object.assign({}, apidata.NEW_CREDIT_GRID_ROW);
      Object.assign(newGridRow, newOriginalRow);

      const myColumns = Object.freeze([apidata.CCY1,apidata.FIXED, apidata.FLOATING, apidata.REFERENCE_RATE, apidata.MAX_TENOR, apidata.OPEN_RISK,
         apidata.OPEN_RISK_MAX_TENOR, apidata.TRADE_SETTLEMENT_CASH, apidata.TRADE_SETTLEMENT_PHYSICAL, apidata.OTC, apidata.EXCHANGE,
         apidata.EXCHANGE_PLATFORM, apidata.EXCHANGE_SYMBOL, apidata.MODAL_VAL_APPROVAL_YRS, apidata.MARKET_RISK_APPROVAL_TRADES_PER_YR,
         apidata.CREDIT_RISK_HEDGED, apidata.CREDIT, apidata.BUSINESS_CONTROL, apidata.OPERATIONS, apidata.RISK_PLATFORMS, apidata.TWO_WAY_LETTER_REQUIRED,
         apidata.LIMIT_DOLLAR_M, apidata.MAX_HOLDING_PERIOD_DAY, apidata.MAX_TRADES_PER_YR, apidata.MAX_TOTAL_EXECUTED_TRADES, apidata.BALANCE_SHEET,
         apidata.UNDERLYING_STATUS, apidata.UNDERLYING_STATUS_CHANGE_DATE
      ]);
      
      return (
         <div className="container">
            <div className="row">
               <CurrencyDataGrid
                  refData={this.props.refData}
                  columns={myColumns}
                  newOriginalRow={Object.assign({}, newOriginalRow)}
                  newGridRow={Object.assign({}, newGridRow)}
                  gridRowsLength={this.props.gridRowsLength}
                  gridRows={this.props.gridRows}
                  updateEntity={this.props.updateEntity}
                  bankEntityIndex={this.props.bankEntityIndex}
                  disabled={this.props.disabled}
                  featuresList={features}
               />
            </div>
         </div>
      );
   }
});

export default CreditFeatures;

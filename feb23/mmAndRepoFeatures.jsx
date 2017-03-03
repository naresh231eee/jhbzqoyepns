/**
 * Created by 8773465 on 02/11/2016.
 */
import React from "react";
import {Editors, Toolbar, Formatters} from "react-data-grid-addons";
import * as apidata from "./../api/api_form.jsx";
import CurrencyDataGrid from "./bankEntityCurrencyDataGrid.jsx";
const { AutoComplete: AutoCompleteEditor } = Editors;

var MMAndRepoFeatures= React.createClass({
   getInitialState(){
      var newOriginalRow = apidata.NEW_ORIGINAL_WS_ROW_ATTRIBUTES;
      Object.assign(newOriginalRow,{"bankEntityCurrencyFeatures": apidata.MM_FEATURES})

      var newGridRow = apidata.NEW_MM_GRID_ROW;
      Object.assign(apidata.MM_FEATURES, apidata.MM_FEATURES);

      var myColumns = [apidata.CCY1,apidata.FIXED, apidata.FLOATING, apidata.REFERENCE_RATE, apidata.ISSUER, apidata.SECURITY_TYPE, apidata.MAX_TENOR,
         apidata.OPEN_RISK, apidata.OPEN_RISK_MAX_TENOR, apidata.BANKING_BOOK, apidata.TRADING_BOOK, apidata.TRADE_SETTLEMENT_CASH, apidata.TRADE_SETTLEMENT_PHYSICAL, apidata.OTC,
         apidata.EXCHANGE, apidata.EXCHANGE_PLATFORM, apidata.EXCHANGE_SYMBOL, apidata.CLEARING_AGENT, apidata.TRI_PARTY_REPO, apidata.PRE_TRADE_RESTRICTION,
         apidata.NOTICE_PERIOD_DAYS, apidata.CALLABLE_ALLOWED, apidata.CONVERTIBLE_ALLOWED, apidata.BALANCE_SHEET, apidata.UNDERLYING_STATUS, apidata.UNDERLYING_STATUS_CHANGE_DATE
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
                  featuresList={apidata.MM_FEATURES}
               />
            </div>
         </div>
      );
   }
});

export default MMAndRepoFeatures;

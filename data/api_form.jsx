export const jsonData = [
  {"value": "Change Details"},
  {"value": "Product Details"},
  {"value": "Valuation Details"},
  {"value": "Trade Booking System"},
  {"value": "Business Area Risk Assessment"},
  {"value": "Governance Details"},
  {"value": "Regulatory Classification"},
  {"value": "Add Trading Desk"}
];

export const boolean = [
  {"id": "Y", "value":"Yes"},
   {"id": "N", "value":"No"}
];

export const searchByKeys = [
   {"sid":"searchBy", "id": "apdid", "value": "Product Id"},
   {"sid":"searchBy", "id": "productname","value": "Product Name"},
   {"sid":"searchBy", "id": "qlproductname","value": "QL Product Name"},
   {"sid":"searchBy", "id": "tradingdesk","value": "Trading Desk Name"}
];

export const searchTypeKeys = [
   {"sid":"searchType", "id": "contains", "value": "contains"},
   {"sid":"searchType", "id": "startswith", "value": "starts with"},
   {"sid":"searchType", "id": "exactmatch", "value": "exactly matches"}
];

/********* Currencies feature name constants *********/
export const RATES = "Rates";
export const FX = "FX";
export const COMMODITIES = "Commodities";
export const MONEY_MARKETS = "Money Markets";
export const REPO = "Repo";
export const CREDITS = "Credit";
export const CREDIT_TRADING = "Credit Trading";

/********* end of currencies feature name constants *********/

export const HOME_HEADER = "In Progress Products";
export const SEARCH_HEADER = "Products Search Result";
export const CONFIRMATION_MODAL_HEADING = "Confirm Changes";
export const INITIATION_MODAL_HEADING = "Return Changes to Initiation";
export const MANDATORY_FIELD_VALIDATION_MESSAGE = "Mandatory fields are incomplete!";
export const PRIMARY_DESK_VALIDATION_MESSAGE = "A Product must have only one desk as a Primary Desk";
export const CLIENT_SEGMENT_VALIDATION_MESSAGE = "Please select either Internal / External Trades for ";
export const TRADE_ECONOMIC_DATA_ROW_VALIDATION_MESSAGE = "At least one row of Trade Economic data must be entered for the  ";
export const TRADING_DESK_VALIDATION_MESSAGE = "Product has not be assigned a Trading Desk";
export const PRODUCT_NAME_TYPE_VALIDATION_MESSAGE = "Product Name and Prouct Type must be provided to save a Product";
export const ONLY_ONE_INSTANCE_OF_TRADING_DESK_ALLOWED = "The product must only be assigned one instance of the Trading Desk. The same desk cannot be assigned to the Product more than one.";
export const INTERNAL_EXTERNAL_TOGGLE_MESSAGE = "Data within the Distribution Channels section will be lost. Are you sure you want to select Internal Only?";
export const BANK_ENTITY_VALIDATION_MESSAGE = "At least one Bank Entity must be selected for ";
export const ONLY_ONE_INSTANCE_OF_ENTITY_AND_REGION_ALLOWED_FOR_A_TRADING_DESK = "A trading Desk must only be assigned one instance of the bank entity and region. The same entity and region cannot be assigned to the desk more than one";
export const STATUS_CONFIRM_MESSAGE = "Do you want to change the status of ";
export const OPERATION_CREATE = "Create";
export const OPERATION_UPDATE = "Update";
export const AUDIT_STATUS_APPROVED = "Approved";
export const AUDIT_STATUS_INITIATED = "Initiated";
export const AUDIT_STATUS_DISCARDED = "Discarded";
export const AUDIT_STATUS_PEND_CONFIRM = 'Pending Confirmation';
export const ACTION_CONFIRM = 'confirm';
export const ACTION_DISCARD = 'discard';
export const ACTION_EDIT = "edit";
export const ACTION_CREATE = "create";
export const ACTION_VIEW = "view";
export const ACTION_VIEW_LATEST_APPROVED = "viewLatestApproved";
export const ACTION_REJECT = "reject";
export const ACTION_CANCEL = "cancel";
export const ACTION_SUBMIT = "submit";
export const ACTION_SAVE = "save";
export const REASON_FOR_CHANGE = "Reason for change";

/********* Landing Page messages after redirection *********/
export const CONFIRM_MESSAGE = "Product has been confirmed successfully";
export const SUBMIT_MESSAGE = "The product has been updated successfully";
export const DISCARDED_MESSAGE = "The product changes has been discarded successfully";
export const REJECTED_MESSAGE = "The product has been returned to Initiation successfully";
export const SAVE_MESSAGE = "Product changes have been saved successfully";

/********* end of Landing Page messages after redirection *********/
/***** Product Details ******/
export const PRODUCT_FAMILY = "Product Family";
export const QL_PRODUCT = "QL Product";
export const PRICING_MODEL = "Pricing model";
export const BUSINESS_UNIT = "Business Unit";
export const MIFID2_CLASS = "MIFID II Classification";
export const ISDA_CLASS = "ISDA Classification";
export const PRODUCT_STATUS = "Product Status";
export const PRODUCT_REGISTER_LOCATION = "Product Register Location";
export const ONE_MI_HIERARCHY = "One MI Hierarchy Reference (Level 5)";
export const CLIENT_JURISDICTION = "Client Jurisdiction";
export const OVERALL_RISK_STATUS = "Overall Risk Status";
export const TRADE_BOOKING_SYSTEM = "Trade Booking System";
export const DISTRIBUTION_METHOD = "Distribution Method";
export const BUSINESS_CASE_IDENTIFIER = "Business Case Identifier";
export const ADVISORY_BASIS = "Advisory Basis";
export const PRODUCT_COMPLEXITY="Product Complexity";
export const RESIDUAL_RISK_RATING = 'Residual Risk Rating';
export const PRODUCT_SUB_FAMILY = 'Product Sub Family';
export const COMPOSITE_PRODUCT = 'Composite Product';
export const PRODUCT_TYPE = 'Product Type';
export const MUST_USE_MARKIT = 'Must Use Markit';
export const ASSET_CLASS = 'Asset Class';
export const PRODUCT_SUBSET = 'Product Subset';
export const BEST_EXECUTION = "Best Execution";

/***** End of Product Details ******/
//Trading Desk constants
export const TRADING_DESK = "Trading Desk";
export const SME_SEGMENT = "SME Segment";
export const MIFID_CLASS = "MIFID Classification";
export const BANK_ENTITY = "Bank Entity";
export const REGION = "Region";
export const MANUFACTURER_LEGAL_NAME = "Legal Name of Manufacturer";
export const DISTRIBUTOR_LEGAL_NAME = "Third Party Distributor Legal Name";
export const ACTIVE_INACTIVE_STATUS = "Underlying Status";

export const BALANCE_SHEET = {key:'balanceSheet',name: 'Balance Sheet', editorKey:'Balance Sheet', editable:true, width:120};
export const APD_CURRENCY = {key:'currency1',name: 'CCY1', editorKey:'CCY1', editable:true, width:60};
export const REFERENCE_RATE = {key:'referenceRate',name: "Reference Rate", editorKey:'Reference Rate', editable:true, width:120};
export const REFERENCE_RATE_2 = {key:'referenceRate2',name: "Reference Rate2", editorKey:'Reference Rate', editable:true, width:120};
export const EXCHANGE = {key:'exchange',name: 'Exchange', editorKey:'Exchange', editable:true, width:80};
export const EXCHANGE_SYMBOL = {key:'exchangeSymbol',name: 'Exchange Symbol', editorKey:'Exchange Symbol', editable:true, width:140};
export const EXCHANGE_PLATFORM = {key:'exchangePlatform',name: 'Exchange Platform', editorKey:'Exchange Platform', editable:true, width:140};
export const MAX_TENOR = {key:'maxTenor',name: 'Max Tenor', editorKey:'Max Tenor', editable:true, width:100};
export const OPEN_RISK = {key:'openRisk',name: 'Open Risk', editorKey:'Exchange', editable:true, width:100};
export const OPEN_RISK_MAX_TENOR = {key:'openRiskMaxTenor',name: 'Open Risk Max Tenor', editorKey:'Open Risk Max Tenor', editable:true, width:100};
export const TRADE_SETTLEMENT_CASH = {key:'tradeSettlementCash',name: 'Trade Settlement - Cash', editorKey:'Trade Settlement - Cash', editable:true, width:180};
export const TRADE_SETTLEMENT_PHYSICAL = {key:'tradeSettlementPhysical',name: 'Trade Settlement - Physical', editorKey:'Trade Settlement - Physical', editable:true, width:100};
export const UNDERLYING_STATUS = {key:'underlyingStatus',name: 'Underlying Status', editorKey:'Underlying Status', editable:true, width:160};
export const UNDERLYING_STATUS_CHANGE_DATE = {key:'underlyingStatusChangeDate',name: 'Underlying Status Change Date', editor: false, editorKey:'Underlying Status Change Date', editable:false, width:160};
export const FIXED = {key:'fixed',name: 'Fixed', editorKey:'Fixed', editable:true, width:80};
export const FLOATING = {key:'floating',name: 'Floating', editorKey:'Floating', editable:true, width:90};
export const CCY1 = {key:'currency1',name: 'CCY1', editorKey:'CCY1', editable:true, locked: true, width:60};
export const CCY2 = {key:'currency2',name: 'CCY2', editorKey:'CCY1', editable:true, locked: true, width:60};
export const BANKING_BOOK = {key:'bankingBook',name: 'Banking Book', editorKey:'Banking Book', editable:true, width:50};
export const CALLABLE_ALLOWED = {key:'callable',name: 'Callable - Allowed', editorKey:'Callable - Allowed', editable:true, width:120};
export const CONVERTIBLE_ALLOWED = {key:'convertible',name: 'Convertible - Allowed', editorKey:'Convertible - Allowed', editable:true, width:90};
export const OTC = {key:'oTC',name: 'OTC', editorKey:'OTC', editable:true, width:50};
export const TRADING_BOOK = {key:'tradingBook',name: 'Trading Book', editorKey:'Trading Book', editable:true, width:80};
export const ISSUER = {key:'issuer',name: 'Issuer', editorKey:'Issuer', editable:true, width:100};
//export const SECURITY_TYPE = {key:'securityType',name: 'Security Type', editorKey:'Security Type', editable:true, width:120};
export const CLEARING_AGENT = {key:'clearingAgent',name: 'Clearing Agent', editorKey:'Clearing Agent', editable:true, width:110};
export const SHORT_POSITION = {key:'shortPosition',name: 'Short Position', editorKey:'Short Position', editable:true, width:110};

export const DEFERRED_SETTLEMENT_PERIOD = {key:'deferredSettlementPeriod',name: 'Deferred Settlement Period', editorKey:'Deferred Settlement Period', editable:true, width:110};

/************* MM Features attributes **********************/
export const TRI_PARTY_REPO = {attrName: 'Tri Party Repo', attrValue: "", key:'Tri Party Repo',name: 'Tri Party Repo', editorKey:'Tri Party Repo', editable:true, width:90};
export const PRE_TRADE_RESTRICTION = {attrName: "Pre Trade Restrictions - Refer to Policy", attrValue: "",key:'Pre Trade Restrictions - Refer to Policy',name: 'Pre Trade Restrictions - Refer to Policy', editorKey:'Pre Trade Restrictions - Refer to Policy', editable:true, width:160};
export const NOTICE_PERIOD_DAYS = {attrName: "Notice Period Days", attrValue: "",key:'Notice Period Days',name: 'Notice Period Days', editor: false, editorKey:'Notice Period Days', editable:true, width:80};
export const SECURITY_TYPE = {attrName: "Security Type", attrValue: "",key:'Security Type',name: 'Security Type', editorKey:'Security Type', editable:true, width:80};

export const NEW_MM_GRID_ROW = {
   "Tri Party Repo": "",
   "Pre Trade Restrictions - Refer to Policy" : "",
   "Notice Period Days" : "",
};
/************* End of MM Features **********************/

/************* REPO Features attributes **********************/
export const NEW_REPO_GRID_ROW = {
   "Tri Party Repo": "",
   "Pre Trade Restrictions - Refer to Policy" : "",
   "Notice Period Days" : "",
   "Security Type": "",
};
/************* End of Repo Features **********************/

export const NEW_ORIGINAL_WS_ROW_ATTRIBUTES = {
   value: 0,
   bankEntityCurrencyId: null,
   currency1: null,
   currency2: null,
   maxTenor: null,
   securityType: null,
   referenceRate: null,
   referenceRate2: null,
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
   settlementDaysPermitted: null,
   tradeSettlementCash: null,
   tradeSettlementPhysical: null,
   bankingBook: null,
   tradingBook: null,
   fixed: null,
   floating: null,
   shortPosition: null,
   openRisk: null,
   exchange: null,
   oTC: null,
   balanceList: null,
   openRiskMaxTenor: null,
   exchangePlatform: null
};

/************* Commodities Features **********************/
export const CORE_ASSETS = { attrName: 'Core Assets', attrValue: "", key:'Core Assets',name: 'Core Assets', editorKey:'Core Assets', editable:true, width:100};
export const SUB_CATEGORY = {attrName: 'Sub Category', attrValue: "", key:'Sub Category',name: 'Sub Category', editorKey:'Sub Category', editable:true, width:110};
export const SUB_ASSETS = {attrName: 'Sub Assets', attrValue: "", key:'Sub Assets',name: 'Sub Assets', editorKey:'Sub Assets', editable:true, width:90};
export const COMMODITIES_REGION = {attrName: 'Commodities Region', attrValue: "", key:'Commodities Region',name: 'Commodities Region',
                                    editorKey:'Commodities Region', editable:true, width:160};
export const PRODUCT_GRADE = {attrName: 'Product Grade', attrValue: "", key:'Product Grade',name: 'Product Grade', editorKey:'Product Grade', editable:true, width:110};
export const BASIS = {attrName: 'Basis', attrValue: "", key:'Basis',name: 'Basis', editorKey:'Basis', editable:true, width:70};
export const PRICE_SOURCE = {attrName: 'Price Source', attrValue: "", key:'Price Source',name: 'Price Source', editorKey:'Price Source', editable:true, width:110};
export const BBG_PLATTS_CODE_FUTURE_TICKER = {attrName: 'BBG / Platts Code / Futures Ticker', attrValue: "", key:'BBG / Platts Code / Futures Ticker',
                                                name: 'BBG / Platts Code / Futures Ticker', editorKey:'BBG / Platts Code / Futures Ticker', editable:true, width:220};



export const NEW_COMMODITIES_GRID_ROW = {
   "Core Assets": "",
   "Sub Category" : "",
   "Sub Assets" : "",
   "Commodities Region" : "",
   "Product Grade" : "",
   "Basis" : "",
   "Price Source" : "",
   "BBG / Platts Code / Futures Ticker" : "",
};

/************* End of Commodities Features **********************/

/************* Credit Features **********************/
export const MODAL_VAL_APPROVAL_YRS = { attrName: 'Modal Val approval Yrs >', attrValue: "", key:'Modal Val approval Yrs >',name: 'Modal Val approval Yrs >', editor:false, editorKey:'Modal Val approval Yrs >', editable:true, width:100};
export const MARKET_RISK_APPROVAL_TRADES_PER_YR = {attrName: 'Market Risk approval trades > per Yr', attrValue: "", key:'Market Risk approval trades > per Yr',name: 'Market Risk approval trades > per Yr', editor:false, editorKey:'Market Risk approval trades > per Yr', editable:true, width:110};
export const CREDIT_RISK_HEDGED = {attrName: 'Credit Risk Hedged', attrValue: "", key:'Credit Risk Hedged',name: 'Credit Risk Hedged', editorKey:'Credit Risk Hedged', editable:true, width:90};
export const CREDIT = {attrName: 'Business Control', attrValue: "", key:'Credit',name: 'Pre Trade Approval from Credit', editorKey:'Credit', editable:true, width:160};
export const BUSINESS_CONTROL = {attrName: 'Business Control', attrValue: "", key:'Business Control',name: 'Pre Trade Approval from Business Control', editorKey:'Business Control', editable:true, width:110};
export const OPERATIONS = {attrName: 'Operations', attrValue: "", key:'Operations',name: 'Post Trade notification to Operations', editorKey:'Operations', editable:true, width:70};
export const RISK_PLATFORMS = {attrName: 'Risk Platforms', attrValue: "", key:'Risk Platforms',name: 'Post Trade notification to Risk Platforms', editorKey:'Risk Platforms', editable:true, width:110};
export const TWO_WAY_LETTER_REQUIRED = {attrName: '2 Way Letter Required', attrValue: "", key:'2 Way Letter Required',name: '2 Way Letter Required', editorKey:'2 Way Letter Required', editable:true, width:220};
export const LIMIT_DOLLAR_M = {attrName: 'Limit £m', attrValue: "", key:'Limit £m',name: 'Buyback - Limit (£m)', editor:false, editorKey:'Limit £m', editable:true, width:70};
export const MAX_HOLDING_PERIOD_DAY = {attrName: 'Max holding period - day', attrValue: "", key:'Max holding period - day',name: 'Max holding period - day', editor:false, editor:false,editorKey:'Max holding period - day', editable:true, width:70};
export const MAX_TRADES_PER_YR = {attrName: 'Max trades per Yr', attrValue: "", key:'Max trades per Yr',name: 'Max trades per Yr', editor:false, editorKey:'Max trades per Yr', editable:true, width:70};
export const MAX_TOTAL_EXECUTED_TRADES = {attrName: 'Max total executed trades', attrValue: "", key:'Max total executed trades',name: 'Max total executed trades', editor:false, editorKey:'Max total executed trades', editable:true, width:70};

export const NEW_CREDIT_GRID_ROW = {
   "Modal Val approval Yrs >": "",
   "Market Risk approval trades > per Yr" : "",
   "Credit Risk Hedged" : "",
   "Credit" : "",
   "Business Control" : "",
   "Operations" : "",
   "Risk Platforms" : "",
   "2 Way Letter Required" : "",
   "Limit £m" : "",
   "Max holding period - day" : "",
   "Max trades per Yr" : "",
   "Max total executed trades" : ""
};

/************* End of Credit Features **********************/

/************* RATES Features **********************/
export const NOTIFY_MARKET_RISK_TENOR_GREATER_THAN = { attrName: 'Notify Market Risk - Tenor > than', attrValue: "", key:'Notify Market Risk - Tenor > than',
                                        name: 'Notify Market Risk - Tenor > than', editor:false, editorKey:'Notify Market Risk - Tenor > than', editable:true, width:100};

export const NEW_RATES_GRID_ROW = {
   "Notify Market Risk - Tenor > than": "",};

/************* End of Rates Features **********************/

/************* FX Features **********************/
export const APPLICABLE = { attrName: 'Applicable', attrValue: "", key:'Applicable', name: 'Model Reserve Applicable', editorKey:'Applicable', editable:true, width:100};
export const TRIGGER = { attrName: 'Trigger', attrValue: "", key:'Trigger', name: 'Model Reserve Trigger', editor:false, editorKey:'Trigger', editable:true, width:100};
export const OUTRIGHT_TRADING_PERMITTED = { attrName: 'Outright Trading permitted?', attrValue: "", key:'Outright Trading permitted?', name: 'Outright Trading permitted?', editorKey:'Outright Trading permitted?', editable:true, width:100};
export const PERMITTED_UPTO_VALUE_DATE_FOR_SPOT = { attrName: 'Permitted up to value date for spot', attrValue: "", key:'Permitted up to value date for spot', name: 'Permitted up to value date for spot', editorKey:'Permitted up to value date for spot', editable:true, width:100};
export const OPTION_WINDOW = { attrName: 'Option Window', attrValue: "", key:'Option Window', name: 'Option Window', editor:false, editorKey:'Option Window', editable:true, width:100};
export const EXTENDED_OPTION_WINDOW = { attrName: 'Extended Option Window', attrValue: "", key:'Extended Option Window', name: 'Extended Option Window', editor:false, editorKey:'Extended Option Window', editable:true, width:100};
export const MAX_TENOR_INCL_OPTION_WINDOW = { attrName: 'Max Tenor incl. option window', attrValue: "", key:'Max Tenor incl. option window', name: 'Max Tenor incl. option window', editor:false, editorKey:'Max Tenor incl. option window', editable:true, width:100};
export const OPTIONS_WINDOW_TRADE_DATE_MONTHS = { attrName: 'Options Window Trade Date - Months', attrValue: "", key:'Options Window Trade Date - Months', name: 'Options Window Trade Date - Months', editor:false, editorKey:'Options Window Trade Date - Months', editable:true, width:100};
export const ALLOWED = { attrName: 'Allowed', attrValue: "", key:'Allowed', name: 'Partial Exercise Allowed', editorKey:'Allowed', editable:true, width:100};
export const APPROVAL_BY_BUSINESS_CONTROL_AND_MODAL_VAL = { attrName: 'Approval by Business Control and Model Val', attrValue: "", key:'Approval by Business Control and Model Val', name: 'Partial Exercise Case by Case approval by Business control and Model Validation', editorKey:'Approval by Business Control and Model Val', editable:true, width:100};
export const MAX_MONTHS = { attrName: 'Max. Months', attrValue: "", key:'Max. Months', name: 'Max. Months', editor:false, editorKey:'Max. Months', editable:true, width:100};

export const IF_DEFERRED_SETTLEMENT_APPROVED = { attrName: 'If deferred settlement approved', attrValue: "", key:'If deferred settlement approved', name: 'If deferred settlement approved', editor:false, editorKey:'If deferred settlement approved', editable:true, width:100};
export const TARN_FIXING_DATE_ONLY = { attrName: 'TARN fixing date only', attrValue: "", key:'TARN fixing date only', name: 'TARN fixing date only', editorKey:'TARN fixing date only', editable:true, width:100};
export const MAX_GAP_BETWEEN_FIXING_DATES = { attrName: 'Max gap between fixing dates', attrValue: "", key:'Max gap between fixing dates', name: 'Max gap between fixing dates', editor:false, editorKey:'Max gap between fixing dates', editable:true, width:100};
export const APPROVAL_FOR_TENOR_GREATER_YRS = { attrName: 'Approval For Tenor > Yrs', attrValue: "", key:'Approval For Tenor > Yrs', name: 'Case by Case Approval For Tenor Greater than (Years)', editor:false, editorKey:'Approval For Tenor > Yrs', editable:true, width:100};
export const MAX_SIZE_PER_TRADE = { attrName: 'Max Size per Trade', attrValue: "", key:'Max Size per Trade', name: 'Max Size per Trade', editorKey:'Max Size per Trade', editor:false, editable:true, width:100};
export const MAX_TRADES_PER_YR_FX = { attrName: 'Max trades per Yr', attrValue: "", key:'Max trades per Yr', name: 'Max trades per Yr', editorKey:'Max trades per Yr', editor:false, editable:true, width:100};
export const MARKET_RISK_WHEN_TRADE_SIZE_GREATER_THAN = { attrName: 'Market Risk when trade size > than', attrValue: "", key:'Market Risk when trade size > than', name: 'Market Risk when trade size > than', editor:false, editorKey:'Market Risk when trade size > than', editable:true, width:100};
export const MODEL_RISK_WHEN_TRADE_GREATER_THAN = { attrName: 'Model Risk when trades size > than', attrValue: "", key:'Model Risk when trades size > than', name: 'Model Risk when trades size > than', editor:false, editorKey:'Model Risk when trades size > than', editable:true, width:100};

export const NEW_FX_GRID_ROW = {
   "Applicable": "",
   "Trigger": "",
   "Outright Trading permitted?": "",
   "Permitted up to value date for spot": "",
   "Option Window": "",
   "Extended Option Window": "",
   "Max Tenor incl. option window": "",
   "Options Window Trade Date - Months": "",
   "Allowed": "",
   "Approval by Business Control and Model Val": "",
   "Max. Months": "",
   "If deferred settlement approved": "",
   "TARN fixing date only": "",
   "Max gap between fixing dates": "",
   "Approval For Tenor > Yrs": "",
   "Max Size per Trade": "",
   "Max trades per Yr": "",
   "Market Risk when trade size > than": "",
   "Model Risk when trades size > than": "",
};

/************* End of FX Features **********************/

export const ACTION_DISPLAY_MAP = new Map();
ACTION_DISPLAY_MAP.set(ACTION_CONFIRM, "confirmed");
ACTION_DISPLAY_MAP.set(ACTION_DISCARD, "discarded");
ACTION_DISPLAY_MAP.set(ACTION_REJECT, "rejected");
ACTION_DISPLAY_MAP.set(ACTION_SUBMIT, "submitted");
ACTION_DISPLAY_MAP.set(ACTION_SAVE, "saved");

export const apiKeys = {
   "id" : "id",
  "value": "value",
  "refDataKeyGroups": "refDataKeyGroups",
  "refDataId": "refDataId",
  "refDataValue": "refDataValue"
};

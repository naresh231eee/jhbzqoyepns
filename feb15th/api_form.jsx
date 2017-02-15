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

export const CONFIRMATION_MODAL_HEADING = "Confirm Changes";
export const INITIATION_MODAL_HEADING = "Return Changes to Initiation";
export const MANDATORY_FIELD_VALIDATION_MESSAGE = "Mandatory fields are incomplete!";
export const PRIMARY_DESK_VALIDATION_MESSAGE = "A Product must have one desk as Primary Desk";
export const CLIENT_SEGMENT_VALIDATION_MESSAGE = "Please select atleast one Client Segment for ";
export const TRADE_ECONOMIC_DATA_ROW_VALIDATION_MESSAGE = "At least one row of Trade Economic data must be entered for the  ";
export const TRADING_DESK_VALIDATION_MESSAGE = "Product has not be assigned a Trading Desk";


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

/***** End of Product Details ******/
//Trading Desk constants
export const TRADING_DESK = "Trading Desk";
export const SME_SEGMENT = "SME Segment";
export const MIFID_CLASS = "MIFID Classification";
export const BANK_ENTITY = "Bank Entity";
export const REGION = "Region";
export const MANUFACTURER_LEGAL_NAME = "Legal Name of Manufacturer";
export const DISTRIBUTOR_LEGAL_NAME = "Third Party Distributor Legal Name";

export const BALANCE_SHEET = "Balance Sheet";
export const APD_CURRENCY = "CCY1";
export const REFERENCE_RATE = "Reference Rate";
export const EXCHANGE = "Exchange";
export const EXCHANGE_SYMBOL = "Exchange Symbol";
export const EXCHANGE_PLATFORM = "Exchange Platform";
export const MAX_TENOR = "Max Tenor";
export const OPEN_RISK = "Open Risk";
export const OPEN_RISK_MAX_TENOR = "Open Risk Max Tenor";
export const TRADE_SETTLEMENT_CASH = "Trade Settlement - Cash";
export const TRADE_SETTLEMENT_PHYSICAL = "Trade Settlement - Physical";
export const UNDERLYING_STATUS = "Underlying Status";
export const FIXED = "Fixed";
export const FLOATING = "Floating";

/************* Commodities Features **********************/
export const CORE_ASSETS = "Core Assets";
export const SUB_CATEGORY = "Sub Category";
export const SUB_ASSETS = "Sub Assets";
export const COMMODITIES_REGION = "Commodities Region";
export const PRODUCT_GRADE = "Product Grade";
export const BASIS = "Basis";
export const PRICE_SOURCE = "Price Source";
export const BBG_PLATTS_CODE_FUTURE_TICKER = "BBG / Platts Code / Futures Ticker";

/************* End of Commodities Features **********************/

/************* MM & Repo Features **********************/
export const ISSUER = "Issuer";
export const SECURITY_TYPE = "Security Type";
export const CLEARING_AGENT = "Clearing Agent";
/************* End of MM & Repo Features **********************/



export const ACTION_DISPLAY_MAP = new Map();
ACTION_DISPLAY_MAP.set(ACTION_CONFIRM, "confirmed");
ACTION_DISPLAY_MAP.set(ACTION_DISCARD, "discarded");
ACTION_DISPLAY_MAP.set(ACTION_REJECT, "rejected");
ACTION_DISPLAY_MAP.set(ACTION_SUBMIT, "submitted");
ACTION_DISPLAY_MAP.set(ACTION_SAVE, "saved");

export const GUI_SECTIONS_REFDATA = {
   "CHANGE_DETAILS": [REASON_FOR_CHANGE],
   "PRODUCT_DETAILS":[PRODUCT_REGISTER_LOCATION, BUSINESS_CASE_IDENTIFIER, BUSINESS_UNIT, ONE_MI_HIERARCHY,
                      PRODUCT_STATUS, CLIENT_JURISDICTION, OVERALL_RISK_STATUS, PRODUCT_FAMILY],
   "VALUATION_DETAILS":[QL_PRODUCT, PRICING_MODEL],
   "EXECUTION_DETAILS":[TRADE_BOOKING_SYSTEM, ADVISORY_BASIS, DISTRIBUTION_METHOD],
   "GOVERNANCE_DETAILS":[],
   "REGULATORY_DETAILS":[MIFID_CLASS, MIFID2_CLASS, ISDA_CLASS],
   "TRADING_DESKS":[TRADING_DESK, BANK_ENTITY, SME_SEGMENT, BALANCE_SHEET, REFERENCE_RATE, EXCHANGE,
                    EXCHANGE_SYMBOL, EXCHANGE_PLATFORM, OPEN_RISK, OPEN_RISK_MAX_TENOR, TRADE_SETTLEMENT_CASH,
                    TRADE_SETTLEMENT_PHYSICAL, FIXED, FLOATING, CORE_ASSETS, SUB_CATEGORY, SUB_ASSETS, COMMODITIES_REGION,
                    PRODUCT_GRADE, BASIS, PRICE_SOURCE, BBG_PLATTS_CODE_FUTURE_TICKER, CLEARING_AGENT,
                     UNDERLYING_STATUS, APD_CURRENCY, MAX_TENOR, ISSUER, SECURITY_TYPE, REFERENCE_RATE,
                     MANUFACTURER_LEGAL_NAME, DISTRIBUTOR_LEGAL_NAME]
};

export const apiKeys = {
   "id" : "id",
  "value": "value",
  "refDataKeyGroups": "refDataKeyGroups",
  "refDataId": "refDataId",
  "refDataValue": "refDataValue"
};

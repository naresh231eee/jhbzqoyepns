import delay from './delay';
/**
 * Created by 8773465 on 27/01/17.
 */


let PREFIX = '/apd';
const REFDATA = PREFIX + '/refdata?cb={cb}';
/**
 * In progress Products list
 * @type {array}
 */
const productDetails = {
  "user": null,
  "success": true,
  "data": {
    "id": 1,
    "apdId": "A001",
    "productName": "Puts",
    "productDescription": null,
    "productCode": null,
    "oneOffTrading": "N",
    "productStatus": null,
    "productVersion": 0,
    "productFamily": null,
    "productComplexity": null,
    "productReason": null,
    "productComment": null,
    "confirmationComment": null,
    "advisoryBasis": null,
    "inscopeForPRIPPS": null,
    "pRIPPSSecMarketImpact": null,
    "clientJurisdiction": null,
    "residualRiskRating": "Medium",
    "policyReference": null,
    "mustUseMarkit": null,
    "compositeProduct": null,
    "productType": "Commodities",
    "oneMIHierarchy": null,
    "auditStatus": "Approved",
    "auditAction": "confirm",
    "auditUser": "Initial Data Setup",
    "auditDateTime": 1485970146700,
    "productGovernance": null,
    "productExecutions": [],
    "productRegs": [],
    "productValuations": [],
    "productCoreAttributes": [],
    "productHierarchy": [],
    "productTradingDesks": [
      {
        "tradingDeskId": 1,
        "deskName": "Commodities",
        "deskStatus": "Active",
        "deskHead": null,
        "primaryDesk": "Y",
        "secondaryDesk": "N",
        "internalTradesOnly": "N",
        "backToBackOnly": null,
        "interbankMarketHedging": "Y",
        "financialInstitutions": "Y",
        "globalCorporates": "Y",
        "midMarkets": "Y",
        "sME": "Y",
        "sMESegment": null,
        "wealth": "N",
        "retailBusinessBanking": "N",
        "retail": "Y",
        "externalGCT": "N",
        "externalClient": "Y",
        "moneyMarketLA": null,
        "deskAttributes": [
          {
            "bankEntityId": 1,
            "bankEntityName": "BOS",
            "bankEntityStatus": "Active",
            "anyCcyPairAllowed": null,
            "bankEntityCurrencies": [
              {
                "bankEntityCurrencyId": 1,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Primary Aluminium - LME Futures (LOAHDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 2,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 3,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 4,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 5,
                    "attrName": "Product Grade",
                    "attrValue": "Primary Aluminium"
                  },
                  {
                    "id": 6,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 7,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 8,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAHDY"
                  },
                  {
                    "id": 9,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 2,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Aluminium Alloy - LME Futures (LOAADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 10,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 11,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 12,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 13,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 14,
                    "attrName": "Product Grade",
                    "attrValue": "Aluminium Alloy"
                  },
                  {
                    "id": 15,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 16,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 17,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAADY"
                  },
                  {
                    "id": 18,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 3,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME NASAAC (LONADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 19,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 20,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 21,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 22,
                    "attrName": "Region",
                    "attrValue": "Global/US"
                  },
                  {
                    "id": 23,
                    "attrName": "Product Grade",
                    "attrValue": "NASAAC"
                  },
                  {
                    "id": 24,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 25,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 26,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONADY"
                  },
                  {
                    "id": 27,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 4,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade 1 Copper (HG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 28,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 29,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 30,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 31,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 32,
                    "attrName": "Product Grade",
                    "attrValue": "Grade 1 Copper"
                  },
                  {
                    "id": 33,
                    "attrName": "Basis",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 34,
                    "attrName": "Price Source",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 35,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HG"
                  },
                  {
                    "id": 36,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 5,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade A Copper - LME (LOCADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 37,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 38,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 39,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 40,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 41,
                    "attrName": "Product Grade",
                    "attrValue": "Hi-grade Copper"
                  },
                  {
                    "id": 42,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 43,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 44,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOCADY"
                  },
                  {
                    "id": 45,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 6,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Lead (LOPBDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 46,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 47,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 48,
                    "attrName": "Sub Assets",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 49,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 50,
                    "attrName": "Product Grade",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 51,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 52,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 53,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOPBDY"
                  },
                  {
                    "id": 54,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 7,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Nickel (LONIDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 55,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 56,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 57,
                    "attrName": "Sub Assets",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 58,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 59,
                    "attrName": "Product Grade",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 60,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 61,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 62,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONIDY"
                  },
                  {
                    "id": 63,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 8,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Tin (LOSNDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 64,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 65,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 66,
                    "attrName": "Sub Assets",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 67,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 68,
                    "attrName": "Product Grade",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 69,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 70,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 71,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOSNDY"
                  },
                  {
                    "id": 72,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 9,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Zinc (LOZSDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 73,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 74,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 75,
                    "attrName": "Sub Assets",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 76,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 77,
                    "attrName": "Product Grade",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 78,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 79,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 80,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOZSDY"
                  },
                  {
                    "id": 81,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 10,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Gold Price (XAU)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 82,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 83,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 84,
                    "attrName": "Sub Assets",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 85,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 86,
                    "attrName": "Product Grade",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 87,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 88,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 89,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAU"
                  },
                  {
                    "id": 90,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 11,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Silver Price (XAG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 91,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 92,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 93,
                    "attrName": "Sub Assets",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 94,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 95,
                    "attrName": "Product Grade",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 96,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 97,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 98,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAG"
                  },
                  {
                    "id": 99,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 12,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE Brent Crude Futures (CO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 100,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 101,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 102,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 103,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 104,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 105,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 106,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 107,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CO"
                  },
                  {
                    "id": 108,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 13,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Brent Platts Dated (PCAAS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 109,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 110,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 111,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 112,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 113,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 114,
                    "attrName": "Basis",
                    "attrValue": "Platts Dated"
                  },
                  {
                    "id": 115,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 116,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PCAAS00"
                  },
                  {
                    "id": 117,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 14,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Daily WTI Financial Futures Quotes (CL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 118,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 119,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 120,
                    "attrName": "Sub Assets",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 121,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 122,
                    "attrName": "Product Grade",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 123,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 124,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 125,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CL"
                  },
                  {
                    "id": 126,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 15,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Naphtha CIF NWE Cargo (PAAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 127,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 128,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 129,
                    "attrName": "Sub Assets",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 130,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 131,
                    "attrName": "Product Grade",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 132,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 133,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 134,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PAAAL00"
                  },
                  {
                    "id": 135,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 16,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "RBOB Gasoline Physical Futures Contract Specs (RB)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 136,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 137,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 138,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoline"
                  },
                  {
                    "id": 139,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 140,
                    "attrName": "Product Grade",
                    "attrValue": "RBOB"
                  },
                  {
                    "id": 141,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 142,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 143,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "RB"
                  },
                  {
                    "id": 144,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 17,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet CIF NWE Cargo (PJAAU00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 145,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 146,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 147,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 148,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 149,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 150,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 151,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 152,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJAAU00"
                  },
                  {
                    "id": 153,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 18,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet FOB Rdam Barge (PJABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 154,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 155,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 156,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 157,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 158,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 159,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 160,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 161,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABA00"
                  },
                  {
                    "id": 162,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 19,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet Kero FOB Spore Cargo (PJABF00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 163,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 164,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 165,
                    "attrName": "Sub Assets",
                    "attrValue": "Kerosene"
                  },
                  {
                    "id": 166,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 167,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 168,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 169,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 170,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABF00"
                  },
                  {
                    "id": 171,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 20,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Basis UK Cargo (AAVBH00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 172,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 173,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 174,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 175,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 176,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 177,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (UK)"
                  },
                  {
                    "id": 178,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 179,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBH00"
                  },
                  {
                    "id": 180,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 21,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Cargo (AAVBG00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 181,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 182,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 183,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 184,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 185,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 186,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (EU)"
                  },
                  {
                    "id": 187,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 188,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBG00"
                  },
                  {
                    "id": 189,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 22,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS FOB Rdam Barge (AAJUS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 190,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 191,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 192,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 193,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 194,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 195,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 196,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 197,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAJUS00"
                  },
                  {
                    "id": 198,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 23,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF MED Cargo (AAWYZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 199,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 200,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 201,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 202,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 203,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 204,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF MED"
                  },
                  {
                    "id": 205,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 206,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAWYZ00"
                  },
                  {
                    "id": 207,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 24,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD USGC Prompt Pipeline (AATGY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 208,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 209,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 210,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 211,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 212,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 213,
                    "attrName": "Basis",
                    "attrValue": "USGP"
                  },
                  {
                    "id": 214,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 215,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGY00"
                  },
                  {
                    "id": 216,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 25,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD NEW YORK HARBOUR BARGES (AATGX00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 217,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 218,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 219,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 220,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 221,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 222,
                    "attrName": "Basis",
                    "attrValue": "Barges NYH"
                  },
                  {
                    "id": 223,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 224,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGX00"
                  },
                  {
                    "id": 225,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 26,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NY Harbor ULSD Futures Contract Specs (HO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 226,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 227,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 228,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 229,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 230,
                    "attrName": "Product Grade",
                    "attrValue": "#2 Heating Oil"
                  },
                  {
                    "id": 231,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 232,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 233,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HO"
                  },
                  {
                    "id": 234,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 27,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Diesel ULSD On-Road All Regions (HWYDUSTL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 235,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 236,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 237,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 238,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 239,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD"
                  },
                  {
                    "id": 240,
                    "attrName": "Basis",
                    "attrValue": "On-Road All Regions"
                  },
                  {
                    "id": 241,
                    "attrName": "Price Source",
                    "attrValue": "US DOE"
                  },
                  {
                    "id": 242,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HWYDUSTL"
                  },
                  {
                    "id": 243,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 28,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Low Sulphur Gasoil Futures (QSA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 244,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 245,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 246,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 247,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 248,
                    "attrName": "Product Grade",
                    "attrValue": "10ppmS"
                  },
                  {
                    "id": 249,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 250,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 251,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "QS"
                  },
                  {
                    "id": 252,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 29,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S CIF NWE Cargo (AAYWS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 253,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 254,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 255,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 256,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 257,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 258,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 259,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 260,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWS00"
                  },
                  {
                    "id": 261,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 30,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S (1000ppm) FOB ARA Barge  (AAYWT00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 262,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 263,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 264,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 265,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 266,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 267,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 268,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 269,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWT00"
                  },
                  {
                    "id": 270,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 31,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Rdam Barge (PUABC00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 271,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 272,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 273,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 274,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 275,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 276,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 277,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 278,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABC00"
                  },
                  {
                    "id": 279,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 32,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF Med Cargo (PUAAY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 280,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 281,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 282,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 283,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 284,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 285,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 286,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 287,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAY00"
                  },
                  {
                    "id": 288,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 33,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Med Cargo (PUAAZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 289,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 290,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 291,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 292,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 293,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 294,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Med"
                  },
                  {
                    "id": 295,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 296,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAZ00"
                  },
                  {
                    "id": 297,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 34,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 298,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 299,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 300,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 301,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 302,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (1%S)"
                  },
                  {
                    "id": 303,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 304,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 305,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAJ00"
                  },
                  {
                    "id": 306,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 35,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF NWE Cargo (PUABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 307,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 308,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 309,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 310,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 311,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 312,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 313,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 314,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABA00"
                  },
                  {
                    "id": 315,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 36,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB NWE Cargo (PUABB00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 316,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 317,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 318,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 319,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 320,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 321,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB NWE"
                  },
                  {
                    "id": 322,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 323,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABB00"
                  },
                  {
                    "id": 324,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 37,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 325,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 326,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 327,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 328,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 329,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 330,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 331,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 332,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAL00"
                  },
                  {
                    "id": 333,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 38,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S FOB NWE Cargo (PUAAM00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 334,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 335,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 336,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 337,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 338,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 339,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB N W E"
                  },
                  {
                    "id": 340,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 341,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAM00"
                  },
                  {
                    "id": 342,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 39,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil No.6 3%S (PUAFZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 343,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 344,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 345,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 346,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 347,
                    "attrName": "Product Grade",
                    "attrValue": "#6 FO 3%S"
                  },
                  {
                    "id": 348,
                    "attrName": "Basis",
                    "attrValue": "USGW"
                  },
                  {
                    "id": 349,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 350,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAFZ00"
                  },
                  {
                    "id": 351,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 40,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 380 CST 3.5% S FOB Spore Cargo (PPXDK00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 352,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 353,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 354,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 355,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 356,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 380cSt"
                  },
                  {
                    "id": 357,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 358,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 359,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PPXDK00"
                  },
                  {
                    "id": 360,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 41,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 180 CST 3.5% S FOB Spore Cargo (PUADV00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 361,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 362,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 363,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 364,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 365,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 180cSt"
                  },
                  {
                    "id": 366,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 367,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 368,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUADV00"
                  },
                  {
                    "id": 369,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 42,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE NBP Natural Gas Futures (FN",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 370,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 371,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 372,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 373,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 374,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 375,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 376,
                    "attrName": "Price Source",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 377,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "FN"
                  },
                  {
                    "id": 378,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 43,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 379,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 380,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 381,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 382,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 383,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 384,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 385,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 386,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 387,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 44,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Month Ahead ",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 388,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 389,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 390,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 391,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 392,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 393,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 394,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 395,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 396,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 45,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 397,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 398,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 399,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 400,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 401,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 402,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 403,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 404,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 405,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 46,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 406,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 407,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 408,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 409,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 410,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 411,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 412,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 413,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 414,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 47,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 415,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 416,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 417,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 418,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 419,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 420,
                    "attrName": "Basis",
                    "attrValue": "Monthly index"
                  },
                  {
                    "id": 421,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 422,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 423,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 48,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 424,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 425,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 426,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 427,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 428,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 429,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 430,
                    "attrName": "Price Source",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 431,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "NG"
                  },
                  {
                    "id": 432,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 49,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 433,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 434,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 435,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 436,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 437,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 438,
                    "attrName": "Basis",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 439,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 440,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBL03"
                  },
                  {
                    "id": 441,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 50,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "El Paso Natural Gas Co.",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 442,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 443,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 444,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 445,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 446,
                    "attrName": "Product Grade",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 447,
                    "attrName": "Basis",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 448,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 449,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAB03"
                  },
                  {
                    "id": 450,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 51,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Houston Ship Channel",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 451,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 452,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 453,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 454,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 455,
                    "attrName": "Product Grade",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 456,
                    "attrName": "Basis",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 457,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 458,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAP03"
                  },
                  {
                    "id": 459,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 52,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Natural Gas Pipeline Co. of America - Midcontinent zone",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 460,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 461,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 462,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 463,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 464,
                    "attrName": "Product Grade",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 465,
                    "attrName": "Basis",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 466,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 467,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBZ03"
                  },
                  {
                    "id": 468,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 53,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "WAHA",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 469,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 470,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 471,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 472,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 473,
                    "attrName": "Product Grade",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 474,
                    "attrName": "Basis",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 475,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 476,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAD03"
                  },
                  {
                    "id": 477,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 54,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (LEBA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 478,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 479,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 480,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 481,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 482,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 483,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 484,
                    "attrName": "Price Source",
                    "attrValue": "LEBA"
                  },
                  {
                    "id": 485,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 486,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 55,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (N2EX)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 487,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 488,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 489,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 490,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 491,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 492,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 493,
                    "attrName": "Price Source",
                    "attrValue": "N2EX"
                  },
                  {
                    "id": 494,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 495,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 56,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "API 2 (Coal)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 496,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 497,
                    "attrName": "Sub Category",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 498,
                    "attrName": "Sub Assets",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 499,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 500,
                    "attrName": "Product Grade",
                    "attrValue": "Thermal Coal"
                  },
                  {
                    "id": 501,
                    "attrName": "Basis",
                    "attrValue": "API 2 (Coal)"
                  },
                  {
                    "id": 502,
                    "attrName": "Price Source",
                    "attrValue": "Argus-McCloskey"
                  },
                  {
                    "id": 503,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 504,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 57,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Cotton No. 2 Futures",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 505,
                    "attrName": "Core Assets",
                    "attrValue": "Agriculture"
                  },
                  {
                    "id": 506,
                    "attrName": "Sub Category",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 507,
                    "attrName": "Sub Assets",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 508,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 509,
                    "attrName": "Product Grade",
                    "attrValue": "Cotton # 2"
                  },
                  {
                    "id": 510,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 511,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 512,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CT"
                  },
                  {
                    "id": 513,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              }
            ]
          },
          {
            "bankEntityId": 2,
            "bankEntityName": "Lloyds",
            "bankEntityStatus": "Active",
            "anyCcyPairAllowed": null,
            "bankEntityCurrencies": [
              {
                "bankEntityCurrencyId": 58,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Primary Aluminium - LME Futures (LOAHDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 514,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 515,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 516,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 517,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 518,
                    "attrName": "Product Grade",
                    "attrValue": "Primary Aluminium"
                  },
                  {
                    "id": 519,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 520,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 521,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAHDY"
                  },
                  {
                    "id": 522,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 59,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Aluminium Alloy - LME Futures (LOAADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 523,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 524,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 525,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 526,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 527,
                    "attrName": "Product Grade",
                    "attrValue": "Aluminium Alloy"
                  },
                  {
                    "id": 528,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 529,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 530,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAADY"
                  },
                  {
                    "id": 531,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 60,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME NASAAC (LONADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 532,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 533,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 534,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 535,
                    "attrName": "Region",
                    "attrValue": "Global/US"
                  },
                  {
                    "id": 536,
                    "attrName": "Product Grade",
                    "attrValue": "NASAAC"
                  },
                  {
                    "id": 537,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 538,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 539,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONADY"
                  },
                  {
                    "id": 540,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 61,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade 1 Copper (HG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 541,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 542,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 543,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 544,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 545,
                    "attrName": "Product Grade",
                    "attrValue": "Grade 1 Copper"
                  },
                  {
                    "id": 546,
                    "attrName": "Basis",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 547,
                    "attrName": "Price Source",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 548,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HG"
                  },
                  {
                    "id": 549,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 62,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade A Copper - LME (LOCADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 550,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 551,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 552,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 553,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 554,
                    "attrName": "Product Grade",
                    "attrValue": "Hi-grade Copper"
                  },
                  {
                    "id": 555,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 556,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 557,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOCADY"
                  },
                  {
                    "id": 558,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 63,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Lead (LOPBDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 559,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 560,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 561,
                    "attrName": "Sub Assets",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 562,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 563,
                    "attrName": "Product Grade",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 564,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 565,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 566,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOPBDY"
                  },
                  {
                    "id": 567,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 64,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Nickel (LONIDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 568,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 569,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 570,
                    "attrName": "Sub Assets",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 571,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 572,
                    "attrName": "Product Grade",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 573,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 574,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 575,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONIDY"
                  },
                  {
                    "id": 576,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 65,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Tin (LOSNDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 577,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 578,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 579,
                    "attrName": "Sub Assets",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 580,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 581,
                    "attrName": "Product Grade",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 582,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 583,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 584,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOSNDY"
                  },
                  {
                    "id": 585,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 66,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Zinc (LOZSDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 586,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 587,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 588,
                    "attrName": "Sub Assets",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 589,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 590,
                    "attrName": "Product Grade",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 591,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 592,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 593,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOZSDY"
                  },
                  {
                    "id": 594,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 67,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Gold Price (XAU)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 595,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 596,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 597,
                    "attrName": "Sub Assets",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 598,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 599,
                    "attrName": "Product Grade",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 600,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 601,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 602,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAU"
                  },
                  {
                    "id": 603,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 68,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Silver Price (XAG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 604,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 605,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 606,
                    "attrName": "Sub Assets",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 607,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 608,
                    "attrName": "Product Grade",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 609,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 610,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 611,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAG"
                  },
                  {
                    "id": 612,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 69,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE Brent Crude Futures (CO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 613,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 614,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 615,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 616,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 617,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 618,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 619,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 620,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CO"
                  },
                  {
                    "id": 621,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 70,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Brent Platts Dated (PCAAS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 622,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 623,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 624,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 625,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 626,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 627,
                    "attrName": "Basis",
                    "attrValue": "Platts Dated"
                  },
                  {
                    "id": 628,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 629,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PCAAS00"
                  },
                  {
                    "id": 630,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 71,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Daily WTI Financial Futures Quotes (CL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 631,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 632,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 633,
                    "attrName": "Sub Assets",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 634,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 635,
                    "attrName": "Product Grade",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 636,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 637,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 638,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CL"
                  },
                  {
                    "id": 639,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 72,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Naphtha CIF NWE Cargo (PAAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 640,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 641,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 642,
                    "attrName": "Sub Assets",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 643,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 644,
                    "attrName": "Product Grade",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 645,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 646,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 647,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PAAAL00"
                  },
                  {
                    "id": 648,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 73,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "RBOB Gasoline Physical Futures Contract Specs (RB)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 649,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 650,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 651,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoline"
                  },
                  {
                    "id": 652,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 653,
                    "attrName": "Product Grade",
                    "attrValue": "RBOB"
                  },
                  {
                    "id": 654,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 655,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 656,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "RB"
                  },
                  {
                    "id": 657,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 74,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet CIF NWE Cargo (PJAAU00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 658,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 659,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 660,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 661,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 662,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 663,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 664,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 665,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJAAU00"
                  },
                  {
                    "id": 666,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 75,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet FOB Rdam Barge (PJABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 667,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 668,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 669,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 670,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 671,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 672,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 673,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 674,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABA00"
                  },
                  {
                    "id": 675,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 76,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet Kero FOB Spore Cargo (PJABF00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 676,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 677,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 678,
                    "attrName": "Sub Assets",
                    "attrValue": "Kerosene"
                  },
                  {
                    "id": 679,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 680,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 681,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 682,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 683,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABF00"
                  },
                  {
                    "id": 684,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 77,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Basis UK Cargo (AAVBH00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 685,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 686,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 687,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 688,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 689,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 690,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (UK)"
                  },
                  {
                    "id": 691,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 692,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBH00"
                  },
                  {
                    "id": 693,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 78,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Cargo (AAVBG00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 694,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 695,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 696,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 697,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 698,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 699,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (EU)"
                  },
                  {
                    "id": 700,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 701,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBG00"
                  },
                  {
                    "id": 702,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 79,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS FOB Rdam Barge (AAJUS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 703,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 704,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 705,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 706,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 707,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 708,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 709,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 710,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAJUS00"
                  },
                  {
                    "id": 711,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 80,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF MED Cargo (AAWYZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 712,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 713,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 714,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 715,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 716,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 717,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF MED"
                  },
                  {
                    "id": 718,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 719,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAWYZ00"
                  },
                  {
                    "id": 720,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 81,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD USGC Prompt Pipeline (AATGY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 721,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 722,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 723,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 724,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 725,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 726,
                    "attrName": "Basis",
                    "attrValue": "USGP"
                  },
                  {
                    "id": 727,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 728,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGY00"
                  },
                  {
                    "id": 729,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 82,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD NEW YORK HARBOUR BARGES (AATGX00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 730,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 731,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 732,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 733,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 734,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 735,
                    "attrName": "Basis",
                    "attrValue": "Barges NYH"
                  },
                  {
                    "id": 736,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 737,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGX00"
                  },
                  {
                    "id": 738,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 83,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NY Harbor ULSD Futures Contract Specs (HO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 739,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 740,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 741,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 742,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 743,
                    "attrName": "Product Grade",
                    "attrValue": "#2 Heating Oil"
                  },
                  {
                    "id": 744,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 745,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 746,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HO"
                  },
                  {
                    "id": 747,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 84,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Diesel ULSD On-Road All Regions (HWYDUSTL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 748,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 749,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 750,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 751,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 752,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD"
                  },
                  {
                    "id": 753,
                    "attrName": "Basis",
                    "attrValue": "On-Road All Regions"
                  },
                  {
                    "id": 754,
                    "attrName": "Price Source",
                    "attrValue": "US DOE"
                  },
                  {
                    "id": 755,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HWYDUSTL"
                  },
                  {
                    "id": 756,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 85,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Low Sulphur Gasoil Futures (QSA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 757,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 758,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 759,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 760,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 761,
                    "attrName": "Product Grade",
                    "attrValue": "10ppmS"
                  },
                  {
                    "id": 762,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 763,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 764,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "QS"
                  },
                  {
                    "id": 765,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 86,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S CIF NWE Cargo (AAYWS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 766,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 767,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 768,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 769,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 770,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 771,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 772,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 773,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWS00"
                  },
                  {
                    "id": 774,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 87,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S (1000ppm) FOB ARA Barge  (AAYWT00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 775,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 776,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 777,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 778,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 779,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 780,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 781,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 782,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWT00"
                  },
                  {
                    "id": 783,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 88,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Rdam Barge (PUABC00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 784,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 785,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 786,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 787,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 788,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 789,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 790,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 791,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABC00"
                  },
                  {
                    "id": 792,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 89,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF Med Cargo (PUAAY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 793,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 794,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 795,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 796,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 797,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 798,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 799,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 800,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAY00"
                  },
                  {
                    "id": 801,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 90,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Med Cargo (PUAAZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 802,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 803,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 804,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 805,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 806,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 807,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Med"
                  },
                  {
                    "id": 808,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 809,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAZ00"
                  },
                  {
                    "id": 810,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 91,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 811,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 812,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 813,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 814,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 815,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (1%S)"
                  },
                  {
                    "id": 816,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 817,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 818,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAJ00"
                  },
                  {
                    "id": 819,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 92,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF NWE Cargo (PUABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 820,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 821,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 822,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 823,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 824,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 825,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 826,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 827,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABA00"
                  },
                  {
                    "id": 828,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 93,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB NWE Cargo (PUABB00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 829,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 830,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 831,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 832,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 833,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 834,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB NWE"
                  },
                  {
                    "id": 835,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 836,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABB00"
                  },
                  {
                    "id": 837,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 94,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 838,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 839,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 840,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 841,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 842,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 843,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 844,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 845,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAL00"
                  },
                  {
                    "id": 846,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 95,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S FOB NWE Cargo (PUAAM00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 847,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 848,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 849,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 850,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 851,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 852,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB N W E"
                  },
                  {
                    "id": 853,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 854,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAM00"
                  },
                  {
                    "id": 855,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 96,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil No.6 3%S (PUAFZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 856,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 857,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 858,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 859,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 860,
                    "attrName": "Product Grade",
                    "attrValue": "#6 FO 3%S"
                  },
                  {
                    "id": 861,
                    "attrName": "Basis",
                    "attrValue": "USGW"
                  },
                  {
                    "id": 862,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 863,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAFZ00"
                  },
                  {
                    "id": 864,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 97,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 380 CST 3.5% S FOB Spore Cargo (PPXDK00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 865,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 866,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 867,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 868,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 869,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 380cSt"
                  },
                  {
                    "id": 870,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 871,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 872,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PPXDK00"
                  },
                  {
                    "id": 873,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 98,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 180 CST 3.5% S FOB Spore Cargo (PUADV00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 874,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 875,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 876,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 877,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 878,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 180cSt"
                  },
                  {
                    "id": 879,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 880,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 881,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUADV00"
                  },
                  {
                    "id": 882,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 99,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE NBP Natural Gas Futures (FN",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 883,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 884,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 885,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 886,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 887,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 888,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 889,
                    "attrName": "Price Source",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 890,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "FN"
                  },
                  {
                    "id": 891,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 100,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 892,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 893,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 894,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 895,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 896,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 897,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 898,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 899,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 900,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 101,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Month Ahead ",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 901,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 902,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 903,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 904,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 905,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 906,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 907,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 908,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 909,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 102,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 910,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 911,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 912,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 913,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 914,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 915,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 916,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 917,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 918,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 103,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 919,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 920,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 921,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 922,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 923,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 924,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 925,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 926,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 927,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 104,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 928,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 929,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 930,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 931,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 932,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 933,
                    "attrName": "Basis",
                    "attrValue": "Monthly index"
                  },
                  {
                    "id": 934,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 935,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 936,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 105,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 937,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 938,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 939,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 940,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 941,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 942,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 943,
                    "attrName": "Price Source",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 944,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "NG"
                  },
                  {
                    "id": 945,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 106,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 946,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 947,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 948,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 949,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 950,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 951,
                    "attrName": "Basis",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 952,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 953,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBL03"
                  },
                  {
                    "id": 954,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 107,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "El Paso Natural Gas Co.",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 955,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 956,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 957,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 958,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 959,
                    "attrName": "Product Grade",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 960,
                    "attrName": "Basis",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 961,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 962,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAB03"
                  },
                  {
                    "id": 963,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 108,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Houston Ship Channel",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 964,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 965,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 966,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 967,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 968,
                    "attrName": "Product Grade",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 969,
                    "attrName": "Basis",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 970,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 971,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAP03"
                  },
                  {
                    "id": 972,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 109,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Natural Gas Pipeline Co. of America - Midcontinent zone",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 973,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 974,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 975,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 976,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 977,
                    "attrName": "Product Grade",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 978,
                    "attrName": "Basis",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 979,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 980,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBZ03"
                  },
                  {
                    "id": 981,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 110,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "WAHA",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 982,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 983,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 984,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 985,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 986,
                    "attrName": "Product Grade",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 987,
                    "attrName": "Basis",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 988,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 989,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAD03"
                  },
                  {
                    "id": 990,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 111,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (LEBA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 991,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 992,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 993,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 994,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 995,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 996,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 997,
                    "attrName": "Price Source",
                    "attrValue": "LEBA"
                  },
                  {
                    "id": 998,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 999,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 112,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (N2EX)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1000,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1001,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1002,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1003,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1004,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 1005,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 1006,
                    "attrName": "Price Source",
                    "attrValue": "N2EX"
                  },
                  {
                    "id": 1007,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1008,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 113,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "API 2 (Coal)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1009,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1010,
                    "attrName": "Sub Category",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1011,
                    "attrName": "Sub Assets",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1012,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1013,
                    "attrName": "Product Grade",
                    "attrValue": "Thermal Coal"
                  },
                  {
                    "id": 1014,
                    "attrName": "Basis",
                    "attrValue": "API 2 (Coal)"
                  },
                  {
                    "id": 1015,
                    "attrName": "Price Source",
                    "attrValue": "Argus-McCloskey"
                  },
                  {
                    "id": 1016,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1017,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 114,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Cotton No. 2 Futures",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1018,
                    "attrName": "Core Assets",
                    "attrValue": "Agriculture"
                  },
                  {
                    "id": 1019,
                    "attrName": "Sub Category",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1020,
                    "attrName": "Sub Assets",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1021,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1022,
                    "attrName": "Product Grade",
                    "attrValue": "Cotton # 2"
                  },
                  {
                    "id": 1023,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1024,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1025,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CT"
                  },
                  {
                    "id": 1026,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 115,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Primary Aluminium - LME Futures (LOAHDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1027,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1028,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1029,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 1030,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1031,
                    "attrName": "Product Grade",
                    "attrValue": "Primary Aluminium"
                  },
                  {
                    "id": 1032,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1033,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1034,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAHDY"
                  },
                  {
                    "id": 1035,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 116,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Aluminium Alloy - LME Futures (LOAADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1036,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1037,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1038,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 1039,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1040,
                    "attrName": "Product Grade",
                    "attrValue": "Aluminium Alloy"
                  },
                  {
                    "id": 1041,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1042,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1043,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAADY"
                  },
                  {
                    "id": 1044,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 117,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME NASAAC (LONADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1045,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1046,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1047,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 1048,
                    "attrName": "Region",
                    "attrValue": "Global/US"
                  },
                  {
                    "id": 1049,
                    "attrName": "Product Grade",
                    "attrValue": "NASAAC"
                  },
                  {
                    "id": 1050,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1051,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1052,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONADY"
                  },
                  {
                    "id": 1053,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 118,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade 1 Copper (HG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1054,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1055,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1056,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 1057,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1058,
                    "attrName": "Product Grade",
                    "attrValue": "Grade 1 Copper"
                  },
                  {
                    "id": 1059,
                    "attrName": "Basis",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 1060,
                    "attrName": "Price Source",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 1061,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HG"
                  },
                  {
                    "id": 1062,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 119,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade A Copper - LME (LOCADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1063,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1064,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1065,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 1066,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1067,
                    "attrName": "Product Grade",
                    "attrValue": "Hi-grade Copper"
                  },
                  {
                    "id": 1068,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1069,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1070,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOCADY"
                  },
                  {
                    "id": 1071,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 120,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Lead (LOPBDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1072,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1073,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1074,
                    "attrName": "Sub Assets",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 1075,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1076,
                    "attrName": "Product Grade",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 1077,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1078,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1079,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOPBDY"
                  },
                  {
                    "id": 1080,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 121,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Nickel (LONIDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1081,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1082,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1083,
                    "attrName": "Sub Assets",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 1084,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1085,
                    "attrName": "Product Grade",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 1086,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1087,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1088,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONIDY"
                  },
                  {
                    "id": 1089,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 122,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Tin (LOSNDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1090,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1091,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1092,
                    "attrName": "Sub Assets",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 1093,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1094,
                    "attrName": "Product Grade",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 1095,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1096,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1097,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOSNDY"
                  },
                  {
                    "id": 1098,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 123,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Zinc (LOZSDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1099,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1100,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1101,
                    "attrName": "Sub Assets",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 1102,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1103,
                    "attrName": "Product Grade",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 1104,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1105,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1106,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOZSDY"
                  },
                  {
                    "id": 1107,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 124,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Gold Price (XAU)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1108,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1109,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 1110,
                    "attrName": "Sub Assets",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 1111,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1112,
                    "attrName": "Product Grade",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 1113,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 1114,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 1115,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAU"
                  },
                  {
                    "id": 1116,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 125,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Silver Price (XAG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1117,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1118,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 1119,
                    "attrName": "Sub Assets",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 1120,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1121,
                    "attrName": "Product Grade",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 1122,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 1123,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 1124,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAG"
                  },
                  {
                    "id": 1125,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 126,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE Brent Crude Futures (CO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1126,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1127,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 1128,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 1129,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1130,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 1131,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1132,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1133,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CO"
                  },
                  {
                    "id": 1134,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 127,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Brent Platts Dated (PCAAS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1135,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1136,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 1137,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 1138,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1139,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 1140,
                    "attrName": "Basis",
                    "attrValue": "Platts Dated"
                  },
                  {
                    "id": 1141,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1142,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PCAAS00"
                  },
                  {
                    "id": 1143,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 128,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Daily WTI Financial Futures Quotes (CL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1144,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1145,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 1146,
                    "attrName": "Sub Assets",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 1147,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1148,
                    "attrName": "Product Grade",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 1149,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1150,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 1151,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CL"
                  },
                  {
                    "id": 1152,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 129,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Naphtha CIF NWE Cargo (PAAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1153,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1154,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1155,
                    "attrName": "Sub Assets",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 1156,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1157,
                    "attrName": "Product Grade",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 1158,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1159,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1160,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PAAAL00"
                  },
                  {
                    "id": 1161,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 130,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "RBOB Gasoline Physical Futures Contract Specs (RB)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1162,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1163,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1164,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoline"
                  },
                  {
                    "id": 1165,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1166,
                    "attrName": "Product Grade",
                    "attrValue": "RBOB"
                  },
                  {
                    "id": 1167,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1168,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 1169,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "RB"
                  },
                  {
                    "id": 1170,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 131,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet CIF NWE Cargo (PJAAU00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1171,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1172,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1173,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 1174,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1175,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 1176,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1177,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1178,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJAAU00"
                  },
                  {
                    "id": 1179,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 132,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet FOB Rdam Barge (PJABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1180,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1181,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1182,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 1183,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1184,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 1185,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1186,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1187,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABA00"
                  },
                  {
                    "id": 1188,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 133,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet Kero FOB Spore Cargo (PJABF00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1189,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1190,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1191,
                    "attrName": "Sub Assets",
                    "attrValue": "Kerosene"
                  },
                  {
                    "id": 1192,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 1193,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 1194,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 1195,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 1196,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABF00"
                  },
                  {
                    "id": 1197,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 134,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Basis UK Cargo (AAVBH00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1198,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1199,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1200,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1201,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1202,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1203,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (UK)"
                  },
                  {
                    "id": 1204,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1205,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBH00"
                  },
                  {
                    "id": 1206,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 135,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Cargo (AAVBG00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1207,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1208,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1209,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1210,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1211,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1212,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (EU)"
                  },
                  {
                    "id": 1213,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1214,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBG00"
                  },
                  {
                    "id": 1215,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 136,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS FOB Rdam Barge (AAJUS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1216,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1217,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1218,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1219,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1220,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1221,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1222,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1223,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAJUS00"
                  },
                  {
                    "id": 1224,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 137,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF MED Cargo (AAWYZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1225,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1226,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1227,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1228,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1229,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1230,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF MED"
                  },
                  {
                    "id": 1231,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1232,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAWYZ00"
                  },
                  {
                    "id": 1233,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 138,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD USGC Prompt Pipeline (AATGY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1234,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1235,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1236,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1237,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1238,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 1239,
                    "attrName": "Basis",
                    "attrValue": "USGP"
                  },
                  {
                    "id": 1240,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 1241,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGY00"
                  },
                  {
                    "id": 1242,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 139,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD NEW YORK HARBOUR BARGES (AATGX00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1243,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1244,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1245,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1246,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1247,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 1248,
                    "attrName": "Basis",
                    "attrValue": "Barges NYH"
                  },
                  {
                    "id": 1249,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 1250,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGX00"
                  },
                  {
                    "id": 1251,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 140,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NY Harbor ULSD Futures Contract Specs (HO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1252,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1253,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1254,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1255,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1256,
                    "attrName": "Product Grade",
                    "attrValue": "#2 Heating Oil"
                  },
                  {
                    "id": 1257,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1258,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 1259,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HO"
                  },
                  {
                    "id": 1260,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 141,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Diesel ULSD On-Road All Regions (HWYDUSTL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1261,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1262,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1263,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1264,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1265,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD"
                  },
                  {
                    "id": 1266,
                    "attrName": "Basis",
                    "attrValue": "On-Road All Regions"
                  },
                  {
                    "id": 1267,
                    "attrName": "Price Source",
                    "attrValue": "US DOE"
                  },
                  {
                    "id": 1268,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HWYDUSTL"
                  },
                  {
                    "id": 1269,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 142,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Low Sulphur Gasoil Futures (QSA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1270,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1271,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1272,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 1273,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1274,
                    "attrName": "Product Grade",
                    "attrValue": "10ppmS"
                  },
                  {
                    "id": 1275,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1276,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1277,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "QS"
                  },
                  {
                    "id": 1278,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 143,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S CIF NWE Cargo (AAYWS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1279,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1280,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1281,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 1282,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1283,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 1284,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1285,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1286,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWS00"
                  },
                  {
                    "id": 1287,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 144,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S (1000ppm) FOB ARA Barge  (AAYWT00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1288,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1289,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1290,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 1291,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1292,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 1293,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1294,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1295,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWT00"
                  },
                  {
                    "id": 1296,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 145,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Rdam Barge (PUABC00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1297,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1298,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1299,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1300,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1301,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1302,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1303,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1304,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABC00"
                  },
                  {
                    "id": 1305,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 146,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF Med Cargo (PUAAY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1306,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1307,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1308,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1309,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1310,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1311,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 1312,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1313,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAY00"
                  },
                  {
                    "id": 1314,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 147,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Med Cargo (PUAAZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1315,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1316,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1317,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1318,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1319,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1320,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Med"
                  },
                  {
                    "id": 1321,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1322,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAZ00"
                  },
                  {
                    "id": 1323,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 148,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1324,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1325,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1326,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1327,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1328,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (1%S)"
                  },
                  {
                    "id": 1329,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 1330,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1331,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAJ00"
                  },
                  {
                    "id": 1332,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 149,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF NWE Cargo (PUABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1333,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1334,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1335,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1336,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1337,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1338,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1339,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1340,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABA00"
                  },
                  {
                    "id": 1341,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 150,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB NWE Cargo (PUABB00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1342,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1343,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1344,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1345,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1346,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1347,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB NWE"
                  },
                  {
                    "id": 1348,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1349,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABB00"
                  },
                  {
                    "id": 1350,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 151,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1351,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1352,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1353,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1354,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1355,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 1356,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1357,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1358,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAL00"
                  },
                  {
                    "id": 1359,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 152,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S FOB NWE Cargo (PUAAM00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1360,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1361,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1362,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1363,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1364,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 1365,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB N W E"
                  },
                  {
                    "id": 1366,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1367,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAM00"
                  },
                  {
                    "id": 1368,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 153,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil No.6 3%S (PUAFZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1369,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1370,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1371,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1372,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1373,
                    "attrName": "Product Grade",
                    "attrValue": "#6 FO 3%S"
                  },
                  {
                    "id": 1374,
                    "attrName": "Basis",
                    "attrValue": "USGW"
                  },
                  {
                    "id": 1375,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1376,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAFZ00"
                  },
                  {
                    "id": 1377,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 154,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 380 CST 3.5% S FOB Spore Cargo (PPXDK00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1378,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1379,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1380,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1381,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 1382,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 380cSt"
                  },
                  {
                    "id": 1383,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 1384,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 1385,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PPXDK00"
                  },
                  {
                    "id": 1386,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 155,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 180 CST 3.5% S FOB Spore Cargo (PUADV00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1387,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1388,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1389,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1390,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 1391,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 180cSt"
                  },
                  {
                    "id": 1392,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 1393,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 1394,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUADV00"
                  },
                  {
                    "id": 1395,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 156,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE NBP Natural Gas Futures (FN",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1396,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1397,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1398,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1399,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1400,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 1401,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 1402,
                    "attrName": "Price Source",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1403,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "FN"
                  },
                  {
                    "id": 1404,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 157,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1405,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1406,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1407,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1408,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1409,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 1410,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 1411,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1412,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1413,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 158,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Month Ahead ",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1414,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1415,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1416,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1417,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1418,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 1419,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 1420,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1421,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1422,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 159,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1423,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1424,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1425,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1426,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 1427,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 1428,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 1429,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1430,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1431,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 160,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1432,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1433,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1434,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1435,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 1436,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 1437,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 1438,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1439,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1440,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 161,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1441,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1442,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1443,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1444,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 1445,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 1446,
                    "attrName": "Basis",
                    "attrValue": "Monthly index"
                  },
                  {
                    "id": 1447,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1448,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1449,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 162,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1450,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1451,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1452,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1453,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1454,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 1455,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1456,
                    "attrName": "Price Source",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1457,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "NG"
                  },
                  {
                    "id": 1458,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 163,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1459,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1460,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1461,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1462,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1463,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 1464,
                    "attrName": "Basis",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 1465,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1466,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBL03"
                  },
                  {
                    "id": 1467,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 164,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "El Paso Natural Gas Co.",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1468,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1469,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1470,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1471,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1472,
                    "attrName": "Product Grade",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 1473,
                    "attrName": "Basis",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 1474,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1475,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAB03"
                  },
                  {
                    "id": 1476,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 165,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Houston Ship Channel",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1477,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1478,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1479,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1480,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1481,
                    "attrName": "Product Grade",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 1482,
                    "attrName": "Basis",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 1483,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1484,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAP03"
                  },
                  {
                    "id": 1485,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 166,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Natural Gas Pipeline Co. of America - Midcontinent zone",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1486,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1487,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1488,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1489,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1490,
                    "attrName": "Product Grade",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 1491,
                    "attrName": "Basis",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 1492,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1493,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBZ03"
                  },
                  {
                    "id": 1494,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 167,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "WAHA",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1495,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1496,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1497,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1498,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1499,
                    "attrName": "Product Grade",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 1500,
                    "attrName": "Basis",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 1501,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1502,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAD03"
                  },
                  {
                    "id": 1503,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 168,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (LEBA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1504,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1505,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1506,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1507,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1508,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 1509,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 1510,
                    "attrName": "Price Source",
                    "attrValue": "LEBA"
                  },
                  {
                    "id": 1511,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1512,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 169,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (N2EX)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1513,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1514,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1515,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1516,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1517,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 1518,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 1519,
                    "attrName": "Price Source",
                    "attrValue": "N2EX"
                  },
                  {
                    "id": 1520,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1521,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 170,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "API 2 (Coal)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1522,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1523,
                    "attrName": "Sub Category",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1524,
                    "attrName": "Sub Assets",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1525,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1526,
                    "attrName": "Product Grade",
                    "attrValue": "Thermal Coal"
                  },
                  {
                    "id": 1527,
                    "attrName": "Basis",
                    "attrValue": "API 2 (Coal)"
                  },
                  {
                    "id": 1528,
                    "attrName": "Price Source",
                    "attrValue": "Argus-McCloskey"
                  },
                  {
                    "id": 1529,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1530,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 171,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Cotton No. 2 Futures",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1531,
                    "attrName": "Core Assets",
                    "attrValue": "Agriculture"
                  },
                  {
                    "id": 1532,
                    "attrName": "Sub Category",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1533,
                    "attrName": "Sub Assets",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1534,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1535,
                    "attrName": "Product Grade",
                    "attrValue": "Cotton # 2"
                  },
                  {
                    "id": 1536,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1537,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1538,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CT"
                  },
                  {
                    "id": 1539,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              }
            ]
          }
        ],
        "bankEntities": [
          {
            "bankEntityId": 1,
            "bankEntityName": "BOS",
            "bankEntityStatus": "Active",
            "anyCcyPairAllowed": null,
            "bankEntityCurrencies": [
              {
                "bankEntityCurrencyId": 1,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Primary Aluminium - LME Futures (LOAHDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 2,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 3,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 4,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 5,
                    "attrName": "Product Grade",
                    "attrValue": "Primary Aluminium"
                  },
                  {
                    "id": 6,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 7,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 8,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAHDY"
                  },
                  {
                    "id": 9,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 2,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Aluminium Alloy - LME Futures (LOAADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 10,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 11,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 12,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 13,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 14,
                    "attrName": "Product Grade",
                    "attrValue": "Aluminium Alloy"
                  },
                  {
                    "id": 15,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 16,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 17,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAADY"
                  },
                  {
                    "id": 18,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 3,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME NASAAC (LONADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 19,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 20,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 21,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 22,
                    "attrName": "Region",
                    "attrValue": "Global/US"
                  },
                  {
                    "id": 23,
                    "attrName": "Product Grade",
                    "attrValue": "NASAAC"
                  },
                  {
                    "id": 24,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 25,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 26,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONADY"
                  },
                  {
                    "id": 27,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 4,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade 1 Copper (HG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 28,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 29,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 30,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 31,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 32,
                    "attrName": "Product Grade",
                    "attrValue": "Grade 1 Copper"
                  },
                  {
                    "id": 33,
                    "attrName": "Basis",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 34,
                    "attrName": "Price Source",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 35,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HG"
                  },
                  {
                    "id": 36,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 5,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade A Copper - LME (LOCADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 37,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 38,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 39,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 40,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 41,
                    "attrName": "Product Grade",
                    "attrValue": "Hi-grade Copper"
                  },
                  {
                    "id": 42,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 43,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 44,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOCADY"
                  },
                  {
                    "id": 45,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 6,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Lead (LOPBDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 46,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 47,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 48,
                    "attrName": "Sub Assets",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 49,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 50,
                    "attrName": "Product Grade",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 51,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 52,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 53,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOPBDY"
                  },
                  {
                    "id": 54,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 7,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Nickel (LONIDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 55,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 56,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 57,
                    "attrName": "Sub Assets",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 58,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 59,
                    "attrName": "Product Grade",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 60,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 61,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 62,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONIDY"
                  },
                  {
                    "id": 63,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 8,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Tin (LOSNDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 64,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 65,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 66,
                    "attrName": "Sub Assets",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 67,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 68,
                    "attrName": "Product Grade",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 69,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 70,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 71,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOSNDY"
                  },
                  {
                    "id": 72,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 9,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Zinc (LOZSDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 73,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 74,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 75,
                    "attrName": "Sub Assets",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 76,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 77,
                    "attrName": "Product Grade",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 78,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 79,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 80,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOZSDY"
                  },
                  {
                    "id": 81,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 10,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Gold Price (XAU)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 82,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 83,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 84,
                    "attrName": "Sub Assets",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 85,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 86,
                    "attrName": "Product Grade",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 87,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 88,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 89,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAU"
                  },
                  {
                    "id": 90,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 11,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Silver Price (XAG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 91,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 92,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 93,
                    "attrName": "Sub Assets",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 94,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 95,
                    "attrName": "Product Grade",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 96,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 97,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 98,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAG"
                  },
                  {
                    "id": 99,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 12,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE Brent Crude Futures (CO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 100,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 101,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 102,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 103,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 104,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 105,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 106,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 107,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CO"
                  },
                  {
                    "id": 108,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 13,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Brent Platts Dated (PCAAS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 109,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 110,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 111,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 112,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 113,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 114,
                    "attrName": "Basis",
                    "attrValue": "Platts Dated"
                  },
                  {
                    "id": 115,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 116,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PCAAS00"
                  },
                  {
                    "id": 117,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 14,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Daily WTI Financial Futures Quotes (CL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 118,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 119,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 120,
                    "attrName": "Sub Assets",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 121,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 122,
                    "attrName": "Product Grade",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 123,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 124,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 125,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CL"
                  },
                  {
                    "id": 126,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 15,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Naphtha CIF NWE Cargo (PAAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 127,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 128,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 129,
                    "attrName": "Sub Assets",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 130,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 131,
                    "attrName": "Product Grade",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 132,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 133,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 134,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PAAAL00"
                  },
                  {
                    "id": 135,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 16,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "RBOB Gasoline Physical Futures Contract Specs (RB)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 136,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 137,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 138,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoline"
                  },
                  {
                    "id": 139,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 140,
                    "attrName": "Product Grade",
                    "attrValue": "RBOB"
                  },
                  {
                    "id": 141,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 142,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 143,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "RB"
                  },
                  {
                    "id": 144,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 17,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet CIF NWE Cargo (PJAAU00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 145,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 146,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 147,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 148,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 149,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 150,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 151,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 152,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJAAU00"
                  },
                  {
                    "id": 153,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 18,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet FOB Rdam Barge (PJABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 154,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 155,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 156,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 157,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 158,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 159,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 160,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 161,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABA00"
                  },
                  {
                    "id": 162,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 19,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet Kero FOB Spore Cargo (PJABF00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 163,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 164,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 165,
                    "attrName": "Sub Assets",
                    "attrValue": "Kerosene"
                  },
                  {
                    "id": 166,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 167,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 168,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 169,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 170,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABF00"
                  },
                  {
                    "id": 171,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 20,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Basis UK Cargo (AAVBH00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 172,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 173,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 174,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 175,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 176,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 177,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (UK)"
                  },
                  {
                    "id": 178,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 179,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBH00"
                  },
                  {
                    "id": 180,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 21,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Cargo (AAVBG00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 181,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 182,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 183,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 184,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 185,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 186,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (EU)"
                  },
                  {
                    "id": 187,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 188,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBG00"
                  },
                  {
                    "id": 189,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 22,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS FOB Rdam Barge (AAJUS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 190,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 191,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 192,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 193,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 194,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 195,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 196,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 197,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAJUS00"
                  },
                  {
                    "id": 198,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 23,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF MED Cargo (AAWYZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 199,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 200,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 201,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 202,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 203,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 204,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF MED"
                  },
                  {
                    "id": 205,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 206,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAWYZ00"
                  },
                  {
                    "id": 207,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 24,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD USGC Prompt Pipeline (AATGY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 208,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 209,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 210,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 211,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 212,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 213,
                    "attrName": "Basis",
                    "attrValue": "USGP"
                  },
                  {
                    "id": 214,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 215,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGY00"
                  },
                  {
                    "id": 216,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 25,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD NEW YORK HARBOUR BARGES (AATGX00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 217,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 218,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 219,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 220,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 221,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 222,
                    "attrName": "Basis",
                    "attrValue": "Barges NYH"
                  },
                  {
                    "id": 223,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 224,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGX00"
                  },
                  {
                    "id": 225,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 26,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NY Harbor ULSD Futures Contract Specs (HO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 226,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 227,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 228,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 229,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 230,
                    "attrName": "Product Grade",
                    "attrValue": "#2 Heating Oil"
                  },
                  {
                    "id": 231,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 232,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 233,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HO"
                  },
                  {
                    "id": 234,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 27,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Diesel ULSD On-Road All Regions (HWYDUSTL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 235,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 236,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 237,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 238,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 239,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD"
                  },
                  {
                    "id": 240,
                    "attrName": "Basis",
                    "attrValue": "On-Road All Regions"
                  },
                  {
                    "id": 241,
                    "attrName": "Price Source",
                    "attrValue": "US DOE"
                  },
                  {
                    "id": 242,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HWYDUSTL"
                  },
                  {
                    "id": 243,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 28,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Low Sulphur Gasoil Futures (QSA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 244,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 245,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 246,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 247,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 248,
                    "attrName": "Product Grade",
                    "attrValue": "10ppmS"
                  },
                  {
                    "id": 249,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 250,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 251,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "QS"
                  },
                  {
                    "id": 252,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 29,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S CIF NWE Cargo (AAYWS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 253,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 254,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 255,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 256,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 257,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 258,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 259,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 260,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWS00"
                  },
                  {
                    "id": 261,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 30,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S (1000ppm) FOB ARA Barge  (AAYWT00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 262,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 263,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 264,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 265,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 266,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 267,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 268,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 269,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWT00"
                  },
                  {
                    "id": 270,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 31,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Rdam Barge (PUABC00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 271,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 272,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 273,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 274,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 275,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 276,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 277,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 278,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABC00"
                  },
                  {
                    "id": 279,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 32,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF Med Cargo (PUAAY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 280,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 281,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 282,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 283,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 284,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 285,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 286,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 287,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAY00"
                  },
                  {
                    "id": 288,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 33,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Med Cargo (PUAAZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 289,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 290,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 291,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 292,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 293,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 294,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Med"
                  },
                  {
                    "id": 295,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 296,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAZ00"
                  },
                  {
                    "id": 297,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 34,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 298,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 299,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 300,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 301,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 302,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (1%S)"
                  },
                  {
                    "id": 303,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 304,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 305,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAJ00"
                  },
                  {
                    "id": 306,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 35,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF NWE Cargo (PUABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 307,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 308,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 309,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 310,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 311,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 312,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 313,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 314,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABA00"
                  },
                  {
                    "id": 315,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 36,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB NWE Cargo (PUABB00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 316,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 317,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 318,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 319,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 320,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 321,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB NWE"
                  },
                  {
                    "id": 322,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 323,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABB00"
                  },
                  {
                    "id": 324,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 37,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 325,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 326,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 327,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 328,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 329,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 330,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 331,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 332,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAL00"
                  },
                  {
                    "id": 333,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 38,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S FOB NWE Cargo (PUAAM00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 334,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 335,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 336,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 337,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 338,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 339,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB N W E"
                  },
                  {
                    "id": 340,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 341,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAM00"
                  },
                  {
                    "id": 342,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 39,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil No.6 3%S (PUAFZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 343,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 344,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 345,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 346,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 347,
                    "attrName": "Product Grade",
                    "attrValue": "#6 FO 3%S"
                  },
                  {
                    "id": 348,
                    "attrName": "Basis",
                    "attrValue": "USGW"
                  },
                  {
                    "id": 349,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 350,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAFZ00"
                  },
                  {
                    "id": 351,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 40,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 380 CST 3.5% S FOB Spore Cargo (PPXDK00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 352,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 353,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 354,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 355,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 356,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 380cSt"
                  },
                  {
                    "id": 357,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 358,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 359,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PPXDK00"
                  },
                  {
                    "id": 360,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 41,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 180 CST 3.5% S FOB Spore Cargo (PUADV00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 361,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 362,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 363,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 364,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 365,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 180cSt"
                  },
                  {
                    "id": 366,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 367,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 368,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUADV00"
                  },
                  {
                    "id": 369,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 42,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE NBP Natural Gas Futures (FN",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 370,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 371,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 372,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 373,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 374,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 375,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 376,
                    "attrName": "Price Source",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 377,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "FN"
                  },
                  {
                    "id": 378,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 43,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 379,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 380,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 381,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 382,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 383,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 384,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 385,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 386,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 387,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 44,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Month Ahead ",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 388,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 389,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 390,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 391,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 392,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 393,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 394,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 395,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 396,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 45,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 397,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 398,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 399,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 400,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 401,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 402,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 403,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 404,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 405,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 46,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 406,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 407,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 408,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 409,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 410,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 411,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 412,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 413,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 414,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 47,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 415,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 416,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 417,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 418,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 419,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 420,
                    "attrName": "Basis",
                    "attrValue": "Monthly index"
                  },
                  {
                    "id": 421,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 422,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 423,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 48,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 424,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 425,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 426,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 427,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 428,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 429,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 430,
                    "attrName": "Price Source",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 431,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "NG"
                  },
                  {
                    "id": 432,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 49,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 433,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 434,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 435,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 436,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 437,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 438,
                    "attrName": "Basis",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 439,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 440,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBL03"
                  },
                  {
                    "id": 441,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 50,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "El Paso Natural Gas Co.",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 442,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 443,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 444,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 445,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 446,
                    "attrName": "Product Grade",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 447,
                    "attrName": "Basis",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 448,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 449,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAB03"
                  },
                  {
                    "id": 450,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 51,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Houston Ship Channel",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 451,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 452,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 453,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 454,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 455,
                    "attrName": "Product Grade",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 456,
                    "attrName": "Basis",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 457,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 458,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAP03"
                  },
                  {
                    "id": 459,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 52,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Natural Gas Pipeline Co. of America - Midcontinent zone",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 460,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 461,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 462,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 463,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 464,
                    "attrName": "Product Grade",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 465,
                    "attrName": "Basis",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 466,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 467,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBZ03"
                  },
                  {
                    "id": 468,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 53,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "WAHA",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 469,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 470,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 471,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 472,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 473,
                    "attrName": "Product Grade",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 474,
                    "attrName": "Basis",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 475,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 476,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAD03"
                  },
                  {
                    "id": 477,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 54,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (LEBA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 478,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 479,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 480,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 481,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 482,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 483,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 484,
                    "attrName": "Price Source",
                    "attrValue": "LEBA"
                  },
                  {
                    "id": 485,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 486,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 55,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (N2EX)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 487,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 488,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 489,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 490,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 491,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 492,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 493,
                    "attrName": "Price Source",
                    "attrValue": "N2EX"
                  },
                  {
                    "id": 494,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 495,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 56,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "API 2 (Coal)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 496,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 497,
                    "attrName": "Sub Category",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 498,
                    "attrName": "Sub Assets",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 499,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 500,
                    "attrName": "Product Grade",
                    "attrValue": "Thermal Coal"
                  },
                  {
                    "id": 501,
                    "attrName": "Basis",
                    "attrValue": "API 2 (Coal)"
                  },
                  {
                    "id": 502,
                    "attrName": "Price Source",
                    "attrValue": "Argus-McCloskey"
                  },
                  {
                    "id": 503,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 504,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 57,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Cotton No. 2 Futures",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 505,
                    "attrName": "Core Assets",
                    "attrValue": "Agriculture"
                  },
                  {
                    "id": 506,
                    "attrName": "Sub Category",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 507,
                    "attrName": "Sub Assets",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 508,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 509,
                    "attrName": "Product Grade",
                    "attrValue": "Cotton # 2"
                  },
                  {
                    "id": 510,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 511,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 512,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CT"
                  },
                  {
                    "id": 513,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              }
            ]
          },
          {
            "bankEntityId": 2,
            "bankEntityName": "Lloyds",
            "bankEntityStatus": "Active",
            "anyCcyPairAllowed": null,
            "bankEntityCurrencies": [
              {
                "bankEntityCurrencyId": 58,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Primary Aluminium - LME Futures (LOAHDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 514,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 515,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 516,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 517,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 518,
                    "attrName": "Product Grade",
                    "attrValue": "Primary Aluminium"
                  },
                  {
                    "id": 519,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 520,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 521,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAHDY"
                  },
                  {
                    "id": 522,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 59,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Aluminium Alloy - LME Futures (LOAADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 523,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 524,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 525,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 526,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 527,
                    "attrName": "Product Grade",
                    "attrValue": "Aluminium Alloy"
                  },
                  {
                    "id": 528,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 529,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 530,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAADY"
                  },
                  {
                    "id": 531,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 60,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME NASAAC (LONADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 532,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 533,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 534,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 535,
                    "attrName": "Region",
                    "attrValue": "Global/US"
                  },
                  {
                    "id": 536,
                    "attrName": "Product Grade",
                    "attrValue": "NASAAC"
                  },
                  {
                    "id": 537,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 538,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 539,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONADY"
                  },
                  {
                    "id": 540,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 61,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade 1 Copper (HG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 541,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 542,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 543,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 544,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 545,
                    "attrName": "Product Grade",
                    "attrValue": "Grade 1 Copper"
                  },
                  {
                    "id": 546,
                    "attrName": "Basis",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 547,
                    "attrName": "Price Source",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 548,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HG"
                  },
                  {
                    "id": 549,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 62,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade A Copper - LME (LOCADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 550,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 551,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 552,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 553,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 554,
                    "attrName": "Product Grade",
                    "attrValue": "Hi-grade Copper"
                  },
                  {
                    "id": 555,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 556,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 557,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOCADY"
                  },
                  {
                    "id": 558,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 63,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Lead (LOPBDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 559,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 560,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 561,
                    "attrName": "Sub Assets",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 562,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 563,
                    "attrName": "Product Grade",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 564,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 565,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 566,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOPBDY"
                  },
                  {
                    "id": 567,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 64,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Nickel (LONIDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 568,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 569,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 570,
                    "attrName": "Sub Assets",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 571,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 572,
                    "attrName": "Product Grade",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 573,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 574,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 575,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONIDY"
                  },
                  {
                    "id": 576,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 65,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Tin (LOSNDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 577,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 578,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 579,
                    "attrName": "Sub Assets",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 580,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 581,
                    "attrName": "Product Grade",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 582,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 583,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 584,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOSNDY"
                  },
                  {
                    "id": 585,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 66,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Zinc (LOZSDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 586,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 587,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 588,
                    "attrName": "Sub Assets",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 589,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 590,
                    "attrName": "Product Grade",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 591,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 592,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 593,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOZSDY"
                  },
                  {
                    "id": 594,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 67,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Gold Price (XAU)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 595,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 596,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 597,
                    "attrName": "Sub Assets",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 598,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 599,
                    "attrName": "Product Grade",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 600,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 601,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 602,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAU"
                  },
                  {
                    "id": 603,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 68,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Silver Price (XAG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 604,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 605,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 606,
                    "attrName": "Sub Assets",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 607,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 608,
                    "attrName": "Product Grade",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 609,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 610,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 611,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAG"
                  },
                  {
                    "id": 612,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 69,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE Brent Crude Futures (CO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 613,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 614,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 615,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 616,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 617,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 618,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 619,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 620,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CO"
                  },
                  {
                    "id": 621,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 70,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Brent Platts Dated (PCAAS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 622,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 623,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 624,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 625,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 626,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 627,
                    "attrName": "Basis",
                    "attrValue": "Platts Dated"
                  },
                  {
                    "id": 628,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 629,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PCAAS00"
                  },
                  {
                    "id": 630,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 71,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Daily WTI Financial Futures Quotes (CL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 631,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 632,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 633,
                    "attrName": "Sub Assets",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 634,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 635,
                    "attrName": "Product Grade",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 636,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 637,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 638,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CL"
                  },
                  {
                    "id": 639,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 72,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Naphtha CIF NWE Cargo (PAAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 640,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 641,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 642,
                    "attrName": "Sub Assets",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 643,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 644,
                    "attrName": "Product Grade",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 645,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 646,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 647,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PAAAL00"
                  },
                  {
                    "id": 648,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 73,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "RBOB Gasoline Physical Futures Contract Specs (RB)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 649,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 650,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 651,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoline"
                  },
                  {
                    "id": 652,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 653,
                    "attrName": "Product Grade",
                    "attrValue": "RBOB"
                  },
                  {
                    "id": 654,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 655,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 656,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "RB"
                  },
                  {
                    "id": 657,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 74,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet CIF NWE Cargo (PJAAU00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 658,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 659,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 660,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 661,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 662,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 663,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 664,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 665,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJAAU00"
                  },
                  {
                    "id": 666,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 75,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet FOB Rdam Barge (PJABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 667,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 668,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 669,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 670,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 671,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 672,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 673,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 674,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABA00"
                  },
                  {
                    "id": 675,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 76,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet Kero FOB Spore Cargo (PJABF00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 676,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 677,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 678,
                    "attrName": "Sub Assets",
                    "attrValue": "Kerosene"
                  },
                  {
                    "id": 679,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 680,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 681,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 682,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 683,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABF00"
                  },
                  {
                    "id": 684,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 77,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Basis UK Cargo (AAVBH00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 685,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 686,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 687,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 688,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 689,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 690,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (UK)"
                  },
                  {
                    "id": 691,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 692,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBH00"
                  },
                  {
                    "id": 693,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 78,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Cargo (AAVBG00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 694,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 695,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 696,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 697,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 698,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 699,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (EU)"
                  },
                  {
                    "id": 700,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 701,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBG00"
                  },
                  {
                    "id": 702,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 79,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS FOB Rdam Barge (AAJUS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 703,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 704,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 705,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 706,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 707,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 708,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 709,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 710,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAJUS00"
                  },
                  {
                    "id": 711,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 80,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF MED Cargo (AAWYZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 712,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 713,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 714,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 715,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 716,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 717,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF MED"
                  },
                  {
                    "id": 718,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 719,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAWYZ00"
                  },
                  {
                    "id": 720,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 81,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD USGC Prompt Pipeline (AATGY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 721,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 722,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 723,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 724,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 725,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 726,
                    "attrName": "Basis",
                    "attrValue": "USGP"
                  },
                  {
                    "id": 727,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 728,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGY00"
                  },
                  {
                    "id": 729,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 82,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD NEW YORK HARBOUR BARGES (AATGX00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 730,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 731,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 732,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 733,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 734,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 735,
                    "attrName": "Basis",
                    "attrValue": "Barges NYH"
                  },
                  {
                    "id": 736,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 737,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGX00"
                  },
                  {
                    "id": 738,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 83,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NY Harbor ULSD Futures Contract Specs (HO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 739,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 740,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 741,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 742,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 743,
                    "attrName": "Product Grade",
                    "attrValue": "#2 Heating Oil"
                  },
                  {
                    "id": 744,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 745,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 746,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HO"
                  },
                  {
                    "id": 747,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 84,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Diesel ULSD On-Road All Regions (HWYDUSTL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 748,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 749,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 750,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 751,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 752,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD"
                  },
                  {
                    "id": 753,
                    "attrName": "Basis",
                    "attrValue": "On-Road All Regions"
                  },
                  {
                    "id": 754,
                    "attrName": "Price Source",
                    "attrValue": "US DOE"
                  },
                  {
                    "id": 755,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HWYDUSTL"
                  },
                  {
                    "id": 756,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 85,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Low Sulphur Gasoil Futures (QSA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 757,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 758,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 759,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 760,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 761,
                    "attrName": "Product Grade",
                    "attrValue": "10ppmS"
                  },
                  {
                    "id": 762,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 763,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 764,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "QS"
                  },
                  {
                    "id": 765,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 86,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S CIF NWE Cargo (AAYWS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 766,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 767,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 768,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 769,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 770,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 771,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 772,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 773,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWS00"
                  },
                  {
                    "id": 774,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 87,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S (1000ppm) FOB ARA Barge  (AAYWT00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 775,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 776,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 777,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 778,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 779,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 780,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 781,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 782,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWT00"
                  },
                  {
                    "id": 783,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 88,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Rdam Barge (PUABC00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 784,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 785,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 786,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 787,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 788,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 789,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 790,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 791,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABC00"
                  },
                  {
                    "id": 792,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 89,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF Med Cargo (PUAAY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 793,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 794,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 795,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 796,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 797,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 798,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 799,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 800,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAY00"
                  },
                  {
                    "id": 801,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 90,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Med Cargo (PUAAZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 802,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 803,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 804,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 805,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 806,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 807,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Med"
                  },
                  {
                    "id": 808,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 809,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAZ00"
                  },
                  {
                    "id": 810,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 91,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 811,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 812,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 813,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 814,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 815,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (1%S)"
                  },
                  {
                    "id": 816,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 817,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 818,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAJ00"
                  },
                  {
                    "id": 819,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 92,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF NWE Cargo (PUABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 820,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 821,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 822,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 823,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 824,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 825,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 826,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 827,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABA00"
                  },
                  {
                    "id": 828,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 93,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB NWE Cargo (PUABB00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 829,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 830,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 831,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 832,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 833,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 834,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB NWE"
                  },
                  {
                    "id": 835,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 836,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABB00"
                  },
                  {
                    "id": 837,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 94,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 838,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 839,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 840,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 841,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 842,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 843,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 844,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 845,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAL00"
                  },
                  {
                    "id": 846,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 95,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S FOB NWE Cargo (PUAAM00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 847,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 848,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 849,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 850,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 851,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 852,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB N W E"
                  },
                  {
                    "id": 853,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 854,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAM00"
                  },
                  {
                    "id": 855,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 96,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil No.6 3%S (PUAFZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 856,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 857,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 858,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 859,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 860,
                    "attrName": "Product Grade",
                    "attrValue": "#6 FO 3%S"
                  },
                  {
                    "id": 861,
                    "attrName": "Basis",
                    "attrValue": "USGW"
                  },
                  {
                    "id": 862,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 863,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAFZ00"
                  },
                  {
                    "id": 864,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 97,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 380 CST 3.5% S FOB Spore Cargo (PPXDK00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 865,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 866,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 867,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 868,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 869,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 380cSt"
                  },
                  {
                    "id": 870,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 871,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 872,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PPXDK00"
                  },
                  {
                    "id": 873,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 98,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 180 CST 3.5% S FOB Spore Cargo (PUADV00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 874,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 875,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 876,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 877,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 878,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 180cSt"
                  },
                  {
                    "id": 879,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 880,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 881,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUADV00"
                  },
                  {
                    "id": 882,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 99,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE NBP Natural Gas Futures (FN",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 883,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 884,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 885,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 886,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 887,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 888,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 889,
                    "attrName": "Price Source",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 890,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "FN"
                  },
                  {
                    "id": 891,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 100,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 892,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 893,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 894,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 895,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 896,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 897,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 898,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 899,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 900,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 101,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Month Ahead ",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 901,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 902,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 903,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 904,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 905,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 906,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 907,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 908,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 909,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 102,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 910,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 911,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 912,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 913,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 914,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 915,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 916,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 917,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 918,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 103,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 919,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 920,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 921,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 922,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 923,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 924,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 925,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 926,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 927,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 104,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 928,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 929,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 930,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 931,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 932,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 933,
                    "attrName": "Basis",
                    "attrValue": "Monthly index"
                  },
                  {
                    "id": 934,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 935,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 936,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 105,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 937,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 938,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 939,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 940,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 941,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 942,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 943,
                    "attrName": "Price Source",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 944,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "NG"
                  },
                  {
                    "id": 945,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 106,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 946,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 947,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 948,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 949,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 950,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 951,
                    "attrName": "Basis",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 952,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 953,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBL03"
                  },
                  {
                    "id": 954,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 107,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "El Paso Natural Gas Co.",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 955,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 956,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 957,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 958,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 959,
                    "attrName": "Product Grade",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 960,
                    "attrName": "Basis",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 961,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 962,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAB03"
                  },
                  {
                    "id": 963,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 108,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Houston Ship Channel",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 964,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 965,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 966,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 967,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 968,
                    "attrName": "Product Grade",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 969,
                    "attrName": "Basis",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 970,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 971,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAP03"
                  },
                  {
                    "id": 972,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 109,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Natural Gas Pipeline Co. of America - Midcontinent zone",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 973,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 974,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 975,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 976,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 977,
                    "attrName": "Product Grade",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 978,
                    "attrName": "Basis",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 979,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 980,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBZ03"
                  },
                  {
                    "id": 981,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 110,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "WAHA",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 982,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 983,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 984,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 985,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 986,
                    "attrName": "Product Grade",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 987,
                    "attrName": "Basis",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 988,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 989,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAD03"
                  },
                  {
                    "id": 990,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 111,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (LEBA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 991,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 992,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 993,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 994,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 995,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 996,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 997,
                    "attrName": "Price Source",
                    "attrValue": "LEBA"
                  },
                  {
                    "id": 998,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 999,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 112,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (N2EX)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1000,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1001,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1002,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1003,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1004,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 1005,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 1006,
                    "attrName": "Price Source",
                    "attrValue": "N2EX"
                  },
                  {
                    "id": 1007,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1008,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 113,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "API 2 (Coal)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1009,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1010,
                    "attrName": "Sub Category",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1011,
                    "attrName": "Sub Assets",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1012,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1013,
                    "attrName": "Product Grade",
                    "attrValue": "Thermal Coal"
                  },
                  {
                    "id": 1014,
                    "attrName": "Basis",
                    "attrValue": "API 2 (Coal)"
                  },
                  {
                    "id": 1015,
                    "attrName": "Price Source",
                    "attrValue": "Argus-McCloskey"
                  },
                  {
                    "id": 1016,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1017,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 114,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Cotton No. 2 Futures",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "London",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1018,
                    "attrName": "Core Assets",
                    "attrValue": "Agriculture"
                  },
                  {
                    "id": 1019,
                    "attrName": "Sub Category",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1020,
                    "attrName": "Sub Assets",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1021,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1022,
                    "attrName": "Product Grade",
                    "attrValue": "Cotton # 2"
                  },
                  {
                    "id": 1023,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1024,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1025,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CT"
                  },
                  {
                    "id": 1026,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 115,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Primary Aluminium - LME Futures (LOAHDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1027,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1028,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1029,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 1030,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1031,
                    "attrName": "Product Grade",
                    "attrValue": "Primary Aluminium"
                  },
                  {
                    "id": 1032,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1033,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1034,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAHDY"
                  },
                  {
                    "id": 1035,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 116,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Aluminium Alloy - LME Futures (LOAADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1036,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1037,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1038,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 1039,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1040,
                    "attrName": "Product Grade",
                    "attrValue": "Aluminium Alloy"
                  },
                  {
                    "id": 1041,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1042,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1043,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOAADY"
                  },
                  {
                    "id": 1044,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 117,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME NASAAC (LONADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1045,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1046,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1047,
                    "attrName": "Sub Assets",
                    "attrValue": "Aluminium"
                  },
                  {
                    "id": 1048,
                    "attrName": "Region",
                    "attrValue": "Global/US"
                  },
                  {
                    "id": 1049,
                    "attrName": "Product Grade",
                    "attrValue": "NASAAC"
                  },
                  {
                    "id": 1050,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1051,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1052,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONADY"
                  },
                  {
                    "id": 1053,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 118,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade 1 Copper (HG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1054,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1055,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1056,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 1057,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1058,
                    "attrName": "Product Grade",
                    "attrValue": "Grade 1 Copper"
                  },
                  {
                    "id": 1059,
                    "attrName": "Basis",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 1060,
                    "attrName": "Price Source",
                    "attrValue": "Comex"
                  },
                  {
                    "id": 1061,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HG"
                  },
                  {
                    "id": 1062,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 119,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Grade A Copper - LME (LOCADY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1063,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1064,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1065,
                    "attrName": "Sub Assets",
                    "attrValue": "Copper"
                  },
                  {
                    "id": 1066,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1067,
                    "attrName": "Product Grade",
                    "attrValue": "Hi-grade Copper"
                  },
                  {
                    "id": 1068,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1069,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1070,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOCADY"
                  },
                  {
                    "id": 1071,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 120,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Lead (LOPBDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1072,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1073,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1074,
                    "attrName": "Sub Assets",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 1075,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1076,
                    "attrName": "Product Grade",
                    "attrValue": "Lead"
                  },
                  {
                    "id": 1077,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1078,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1079,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOPBDY"
                  },
                  {
                    "id": 1080,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 121,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Nickel (LONIDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1081,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1082,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1083,
                    "attrName": "Sub Assets",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 1084,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1085,
                    "attrName": "Product Grade",
                    "attrValue": "Nickel"
                  },
                  {
                    "id": 1086,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1087,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1088,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LONIDY"
                  },
                  {
                    "id": 1089,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 122,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Tin (LOSNDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1090,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1091,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1092,
                    "attrName": "Sub Assets",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 1093,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1094,
                    "attrName": "Product Grade",
                    "attrValue": "Tin"
                  },
                  {
                    "id": 1095,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1096,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1097,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOSNDY"
                  },
                  {
                    "id": 1098,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 123,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LME Zinc (LOZSDY)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1099,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1100,
                    "attrName": "Sub Category",
                    "attrValue": "Base Metals"
                  },
                  {
                    "id": 1101,
                    "attrName": "Sub Assets",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 1102,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1103,
                    "attrName": "Product Grade",
                    "attrValue": "Zinc"
                  },
                  {
                    "id": 1104,
                    "attrName": "Basis",
                    "attrValue": "LME Futures"
                  },
                  {
                    "id": 1105,
                    "attrName": "Price Source",
                    "attrValue": "LME"
                  },
                  {
                    "id": 1106,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "LOZSDY"
                  },
                  {
                    "id": 1107,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 124,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Gold Price (XAU)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1108,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1109,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 1110,
                    "attrName": "Sub Assets",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 1111,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1112,
                    "attrName": "Product Grade",
                    "attrValue": "Gold"
                  },
                  {
                    "id": 1113,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 1114,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 1115,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAU"
                  },
                  {
                    "id": 1116,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 125,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "LBMA Silver Price (XAG)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1117,
                    "attrName": "Core Assets",
                    "attrValue": "Metals"
                  },
                  {
                    "id": 1118,
                    "attrName": "Sub Category",
                    "attrValue": "Precious Metals"
                  },
                  {
                    "id": 1119,
                    "attrName": "Sub Assets",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 1120,
                    "attrName": "Region",
                    "attrValue": "Global"
                  },
                  {
                    "id": 1121,
                    "attrName": "Product Grade",
                    "attrValue": "Silver"
                  },
                  {
                    "id": 1122,
                    "attrName": "Basis",
                    "attrValue": "LBMA Fix"
                  },
                  {
                    "id": 1123,
                    "attrName": "Price Source",
                    "attrValue": "LBMA"
                  },
                  {
                    "id": 1124,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "XAG"
                  },
                  {
                    "id": 1125,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 126,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE Brent Crude Futures (CO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1126,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1127,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 1128,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 1129,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1130,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 1131,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1132,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1133,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CO"
                  },
                  {
                    "id": 1134,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 127,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Brent Platts Dated (PCAAS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1135,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1136,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 1137,
                    "attrName": "Sub Assets",
                    "attrValue": "Brent "
                  },
                  {
                    "id": 1138,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1139,
                    "attrName": "Product Grade",
                    "attrValue": "Brent"
                  },
                  {
                    "id": 1140,
                    "attrName": "Basis",
                    "attrValue": "Platts Dated"
                  },
                  {
                    "id": 1141,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1142,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PCAAS00"
                  },
                  {
                    "id": 1143,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 128,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Daily WTI Financial Futures Quotes (CL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1144,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1145,
                    "attrName": "Sub Category",
                    "attrValue": "Crude Oil"
                  },
                  {
                    "id": 1146,
                    "attrName": "Sub Assets",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 1147,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1148,
                    "attrName": "Product Grade",
                    "attrValue": "WTI"
                  },
                  {
                    "id": 1149,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1150,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 1151,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CL"
                  },
                  {
                    "id": 1152,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 129,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Naphtha CIF NWE Cargo (PAAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1153,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1154,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1155,
                    "attrName": "Sub Assets",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 1156,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1157,
                    "attrName": "Product Grade",
                    "attrValue": "Naphtha"
                  },
                  {
                    "id": 1158,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1159,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1160,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PAAAL00"
                  },
                  {
                    "id": 1161,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 130,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "RBOB Gasoline Physical Futures Contract Specs (RB)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1162,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1163,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1164,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoline"
                  },
                  {
                    "id": 1165,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1166,
                    "attrName": "Product Grade",
                    "attrValue": "RBOB"
                  },
                  {
                    "id": 1167,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1168,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 1169,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "RB"
                  },
                  {
                    "id": 1170,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 131,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet CIF NWE Cargo (PJAAU00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1171,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1172,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1173,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 1174,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1175,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 1176,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1177,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1178,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJAAU00"
                  },
                  {
                    "id": 1179,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 132,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet FOB Rdam Barge (PJABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1180,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1181,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1182,
                    "attrName": "Sub Assets",
                    "attrValue": "Jet"
                  },
                  {
                    "id": 1183,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1184,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 1185,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1186,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1187,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABA00"
                  },
                  {
                    "id": 1188,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 133,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Jet Kero FOB Spore Cargo (PJABF00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1189,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1190,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1191,
                    "attrName": "Sub Assets",
                    "attrValue": "Kerosene"
                  },
                  {
                    "id": 1192,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 1193,
                    "attrName": "Product Grade",
                    "attrValue": "Jet A1"
                  },
                  {
                    "id": 1194,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 1195,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 1196,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PJABF00"
                  },
                  {
                    "id": 1197,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 134,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Basis UK Cargo (AAVBH00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1198,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1199,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1200,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1201,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1202,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1203,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (UK)"
                  },
                  {
                    "id": 1204,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1205,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBH00"
                  },
                  {
                    "id": 1206,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 135,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF NWE Cargo (AAVBG00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1207,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1208,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1209,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1210,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1211,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1212,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE (EU)"
                  },
                  {
                    "id": 1213,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1214,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAVBG00"
                  },
                  {
                    "id": 1215,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 136,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS FOB Rdam Barge (AAJUS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1216,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1217,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1218,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1219,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1220,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1221,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1222,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1223,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAJUS00"
                  },
                  {
                    "id": 1224,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 137,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD 10ppmS CIF MED Cargo (AAWYZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1225,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1226,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1227,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1228,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1229,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 10ppm"
                  },
                  {
                    "id": 1230,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF MED"
                  },
                  {
                    "id": 1231,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1232,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAWYZ00"
                  },
                  {
                    "id": 1233,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 138,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD USGC Prompt Pipeline (AATGY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1234,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1235,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1236,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1237,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1238,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 1239,
                    "attrName": "Basis",
                    "attrValue": "USGP"
                  },
                  {
                    "id": 1240,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 1241,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGY00"
                  },
                  {
                    "id": 1242,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 139,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ULSD NEW YORK HARBOUR BARGES (AATGX00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1243,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1244,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1245,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1246,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1247,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD 15ppm"
                  },
                  {
                    "id": 1248,
                    "attrName": "Basis",
                    "attrValue": "Barges NYH"
                  },
                  {
                    "id": 1249,
                    "attrName": "Price Source",
                    "attrValue": "Platts US Scan"
                  },
                  {
                    "id": 1250,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AATGX00"
                  },
                  {
                    "id": 1251,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 140,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NY Harbor ULSD Futures Contract Specs (HO)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1252,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1253,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1254,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1255,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1256,
                    "attrName": "Product Grade",
                    "attrValue": "#2 Heating Oil"
                  },
                  {
                    "id": 1257,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1258,
                    "attrName": "Price Source",
                    "attrValue": "Nymex"
                  },
                  {
                    "id": 1259,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HO"
                  },
                  {
                    "id": 1260,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 141,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Diesel ULSD On-Road All Regions (HWYDUSTL)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1261,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1262,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1263,
                    "attrName": "Sub Assets",
                    "attrValue": "Diesel"
                  },
                  {
                    "id": 1264,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1265,
                    "attrName": "Product Grade",
                    "attrValue": "ULSD"
                  },
                  {
                    "id": 1266,
                    "attrName": "Basis",
                    "attrValue": "On-Road All Regions"
                  },
                  {
                    "id": 1267,
                    "attrName": "Price Source",
                    "attrValue": "US DOE"
                  },
                  {
                    "id": 1268,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "HWYDUSTL"
                  },
                  {
                    "id": 1269,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 142,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Low Sulphur Gasoil Futures (QSA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1270,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1271,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1272,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 1273,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1274,
                    "attrName": "Product Grade",
                    "attrValue": "10ppmS"
                  },
                  {
                    "id": 1275,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1276,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1277,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "QS"
                  },
                  {
                    "id": 1278,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 143,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S CIF NWE Cargo (AAYWS00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1279,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1280,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1281,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 1282,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1283,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 1284,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1285,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1286,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWS00"
                  },
                  {
                    "id": 1287,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 144,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Gasoil 0.1%S (1000ppm) FOB ARA Barge  (AAYWT00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1288,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1289,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1290,
                    "attrName": "Sub Assets",
                    "attrValue": "Gasoil/Heating Oil"
                  },
                  {
                    "id": 1291,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1292,
                    "attrName": "Product Grade",
                    "attrValue": "0.1%S"
                  },
                  {
                    "id": 1293,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1294,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1295,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "AAYWT00"
                  },
                  {
                    "id": 1296,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 145,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Rdam Barge (PUABC00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1297,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1298,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1299,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1300,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1301,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1302,
                    "attrName": "Basis",
                    "attrValue": "Barges FOB Rotterdam"
                  },
                  {
                    "id": 1303,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1304,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABC00"
                  },
                  {
                    "id": 1305,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 146,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF Med Cargo (PUAAY00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1306,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1307,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1308,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1309,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1310,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1311,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 1312,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1313,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAY00"
                  },
                  {
                    "id": 1314,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 147,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB Med Cargo (PUAAZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1315,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1316,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1317,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1318,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1319,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1320,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Med"
                  },
                  {
                    "id": 1321,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1322,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAZ00"
                  },
                  {
                    "id": 1323,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 148,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1324,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1325,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1326,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1327,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1328,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (1%S)"
                  },
                  {
                    "id": 1329,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF Med"
                  },
                  {
                    "id": 1330,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1331,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAJ00"
                  },
                  {
                    "id": 1332,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 149,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S CIF NWE Cargo (PUABA00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1333,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1334,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1335,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1336,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1337,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1338,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1339,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1340,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABA00"
                  },
                  {
                    "id": 1341,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 150,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 3.5%S FOB NWE Cargo (PUABB00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1342,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1343,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1344,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1345,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1346,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO (3.5%S)"
                  },
                  {
                    "id": 1347,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB NWE"
                  },
                  {
                    "id": 1348,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1349,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUABB00"
                  },
                  {
                    "id": 1350,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 151,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S CIF NWE Cargo (PUAAL00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1351,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1352,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1353,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1354,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1355,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 1356,
                    "attrName": "Basis",
                    "attrValue": "Cargoes CIF NWE"
                  },
                  {
                    "id": 1357,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1358,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAL00"
                  },
                  {
                    "id": 1359,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 152,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 1%S FOB NWE Cargo (PUAAM00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1360,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1361,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1362,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1363,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1364,
                    "attrName": "Product Grade",
                    "attrValue": "LSFO (1%S)"
                  },
                  {
                    "id": 1365,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB N W E"
                  },
                  {
                    "id": 1366,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1367,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAAM00"
                  },
                  {
                    "id": 1368,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 153,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil No.6 3%S (PUAFZ00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1369,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1370,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1371,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1372,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1373,
                    "attrName": "Product Grade",
                    "attrValue": "#6 FO 3%S"
                  },
                  {
                    "id": 1374,
                    "attrName": "Basis",
                    "attrValue": "USGW"
                  },
                  {
                    "id": 1375,
                    "attrName": "Price Source",
                    "attrValue": "Platts"
                  },
                  {
                    "id": 1376,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUAFZ00"
                  },
                  {
                    "id": 1377,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 154,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 380 CST 3.5% S FOB Spore Cargo (PPXDK00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1378,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1379,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1380,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1381,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 1382,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 380cSt"
                  },
                  {
                    "id": 1383,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 1384,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 1385,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PPXDK00"
                  },
                  {
                    "id": 1386,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 155,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Fuel Oil 180 CST 3.5% S FOB Spore Cargo (PUADV00)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1387,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1388,
                    "attrName": "Sub Category",
                    "attrValue": "Oil Products"
                  },
                  {
                    "id": 1389,
                    "attrName": "Sub Assets",
                    "attrValue": "Fuel Oil"
                  },
                  {
                    "id": 1390,
                    "attrName": "Region",
                    "attrValue": "Singapore"
                  },
                  {
                    "id": 1391,
                    "attrName": "Product Grade",
                    "attrValue": "HSFO 180cSt"
                  },
                  {
                    "id": 1392,
                    "attrName": "Basis",
                    "attrValue": "Cargoes FOB Singapore"
                  },
                  {
                    "id": 1393,
                    "attrName": "Price Source",
                    "attrValue": "Platts AP Scan"
                  },
                  {
                    "id": 1394,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "PUADV00"
                  },
                  {
                    "id": 1395,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 156,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "ICE NBP Natural Gas Futures (FN",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1396,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1397,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1398,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1399,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1400,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 1401,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 1402,
                    "attrName": "Price Source",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1403,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "FN"
                  },
                  {
                    "id": 1404,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 157,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1405,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1406,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1407,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1408,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1409,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 1410,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 1411,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1412,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1413,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 158,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "NBP Heren Month Ahead ",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1414,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1415,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1416,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1417,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1418,
                    "attrName": "Product Grade",
                    "attrValue": "NBP"
                  },
                  {
                    "id": 1419,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 1420,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1421,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1422,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 159,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Day Ahead",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1423,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1424,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1425,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1426,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 1427,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 1428,
                    "attrName": "Basis",
                    "attrValue": "Day-Ahead"
                  },
                  {
                    "id": 1429,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1430,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1431,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 160,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1432,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1433,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1434,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1435,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 1436,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 1437,
                    "attrName": "Basis",
                    "attrValue": "Month-Ahead"
                  },
                  {
                    "id": 1438,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1439,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1440,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 161,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "TTF Heren Monthly Index",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1441,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1442,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1443,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1444,
                    "attrName": "Region",
                    "attrValue": "Netherlands"
                  },
                  {
                    "id": 1445,
                    "attrName": "Product Grade",
                    "attrValue": "TTF"
                  },
                  {
                    "id": 1446,
                    "attrName": "Basis",
                    "attrValue": "Monthly index"
                  },
                  {
                    "id": 1447,
                    "attrName": "Price Source",
                    "attrValue": "ICIS Heren"
                  },
                  {
                    "id": 1448,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1449,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 162,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1450,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1451,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1452,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1453,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1454,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 1455,
                    "attrName": "Basis",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1456,
                    "attrName": "Price Source",
                    "attrValue": "NYMEX Futures"
                  },
                  {
                    "id": 1457,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "NG"
                  },
                  {
                    "id": 1458,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 163,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Henry Hub Natural Gas Futures Control Specs",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1459,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1460,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1461,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1462,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1463,
                    "attrName": "Product Grade",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 1464,
                    "attrName": "Basis",
                    "attrValue": "Henry Hub"
                  },
                  {
                    "id": 1465,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1466,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBL03"
                  },
                  {
                    "id": 1467,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 164,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "El Paso Natural Gas Co.",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1468,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1469,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1470,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1471,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1472,
                    "attrName": "Product Grade",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 1473,
                    "attrName": "Basis",
                    "attrValue": "El Paso"
                  },
                  {
                    "id": 1474,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1475,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAB03"
                  },
                  {
                    "id": 1476,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 165,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Houston Ship Channel",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1477,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1478,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1479,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1480,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1481,
                    "attrName": "Product Grade",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 1482,
                    "attrName": "Basis",
                    "attrValue": "Houston Ship Channel"
                  },
                  {
                    "id": 1483,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1484,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAP03"
                  },
                  {
                    "id": 1485,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 166,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Natural Gas Pipeline Co. of America - Midcontinent zone",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1486,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1487,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1488,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1489,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1490,
                    "attrName": "Product Grade",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 1491,
                    "attrName": "Basis",
                    "attrValue": "PL Midco IF"
                  },
                  {
                    "id": 1492,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1493,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBBZ03"
                  },
                  {
                    "id": 1494,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 167,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "WAHA",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1495,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1496,
                    "attrName": "Sub Category",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1497,
                    "attrName": "Sub Assets",
                    "attrValue": "Natural Gas"
                  },
                  {
                    "id": 1498,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1499,
                    "attrName": "Product Grade",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 1500,
                    "attrName": "Basis",
                    "attrValue": "WAHA"
                  },
                  {
                    "id": 1501,
                    "attrName": "Price Source",
                    "attrValue": "Platts Inside-FERC"
                  },
                  {
                    "id": 1502,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "IGBAD03"
                  },
                  {
                    "id": 1503,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 168,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (LEBA)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1504,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1505,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1506,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1507,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1508,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 1509,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 1510,
                    "attrName": "Price Source",
                    "attrValue": "LEBA"
                  },
                  {
                    "id": 1511,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1512,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 169,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "UK Electricity - Base Load & Peak Load (N2EX)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1513,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1514,
                    "attrName": "Sub Category",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1515,
                    "attrName": "Sub Assets",
                    "attrValue": "UK Electricity"
                  },
                  {
                    "id": 1516,
                    "attrName": "Region",
                    "attrValue": "UK"
                  },
                  {
                    "id": 1517,
                    "attrName": "Product Grade",
                    "attrValue": null
                  },
                  {
                    "id": 1518,
                    "attrName": "Basis",
                    "attrValue": "Base Load & Peak Load"
                  },
                  {
                    "id": 1519,
                    "attrName": "Price Source",
                    "attrValue": "N2EX"
                  },
                  {
                    "id": 1520,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1521,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 170,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "API 2 (Coal)",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1522,
                    "attrName": "Core Assets",
                    "attrValue": "Energy"
                  },
                  {
                    "id": 1523,
                    "attrName": "Sub Category",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1524,
                    "attrName": "Sub Assets",
                    "attrValue": "Coal"
                  },
                  {
                    "id": 1525,
                    "attrName": "Region",
                    "attrValue": "Europe"
                  },
                  {
                    "id": 1526,
                    "attrName": "Product Grade",
                    "attrValue": "Thermal Coal"
                  },
                  {
                    "id": 1527,
                    "attrName": "Basis",
                    "attrValue": "API 2 (Coal)"
                  },
                  {
                    "id": 1528,
                    "attrName": "Price Source",
                    "attrValue": "Argus-McCloskey"
                  },
                  {
                    "id": 1529,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "n/a"
                  },
                  {
                    "id": 1530,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              },
              {
                "bankEntityCurrencyId": 171,
                "currency1": "N/A",
                "currency2": "N/A",
                "maxTenor": "5.0",
                "securityType": null,
                "referenceRate": "Cotton No. 2 Futures",
                "settlementSystem": null,
                "underlyingStatus": null,
                "underlyingStatusChangeDate": null,
                "issuer": null,
                "clearingAgent": null,
                "cCPOnly": null,
                "minAmount": null,
                "maxTime": null,
                "escalationCondition": null,
                "deferredSettlementPeriod": null,
                "daysPermitted": null,
                "tradeSettlementCash": "Y",
                "tradeSettlementPhysical": null,
                "bankingBook": null,
                "tradingBook": null,
                "fixed": null,
                "floating": null,
                "shortPosition": null,
                "openRisk": "N",
                "exchange": null,
                "oTC": "Y",
                "balanceList": "UK B/S",
                "openRiskMaxTenor": null,
                "exchangePlatform": null,
                "region": "New York",
                "bankEntityCurrencyFeatures": [
                  {
                    "id": 1531,
                    "attrName": "Core Assets",
                    "attrValue": "Agriculture"
                  },
                  {
                    "id": 1532,
                    "attrName": "Sub Category",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1533,
                    "attrName": "Sub Assets",
                    "attrValue": "Cotton"
                  },
                  {
                    "id": 1534,
                    "attrName": "Region",
                    "attrValue": "US"
                  },
                  {
                    "id": 1535,
                    "attrName": "Product Grade",
                    "attrValue": "Cotton # 2"
                  },
                  {
                    "id": 1536,
                    "attrName": "Basis",
                    "attrValue": "ICE Futures"
                  },
                  {
                    "id": 1537,
                    "attrName": "Price Source",
                    "attrValue": "ICE"
                  },
                  {
                    "id": 1538,
                    "attrName": "BBG / Platts Code / Futures Ticker",
                    "attrValue": "CT"
                  },
                  {
                    "id": 1539,
                    "attrName": "EMIR - Dodd-Frank",
                    "attrValue": "Y"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "approvedVersionExists": false
  },
  "errorMessages": []
};

class ProductsPageApi {
  static getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], productDetails));
      }, delay);
    });
  }
}



export default ProductsPageApi;

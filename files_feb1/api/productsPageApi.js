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
	"id": 13,
	"apdId": "C123",
	"productName": "Cross Currency",
	"productDescription": "Cross Currency Swap",
	"productCode": "IRS",
	"oneOffTrading": "N",
	"overallRisKStatus": "High",
	"clientJurisdiction": "",
    "internalTradesOnly":"",
     "clientSegment":{
                'internalTradesOnly' : "N",
                'interbankMarket' : "N",
                'financialInstitutions' : "N",
                'globalCorporates' : "N",
                'midmarketers' : "N",
                'sme' : "N",
                'smeSegment' : "N",
                'wealth' : "N",
                'retailBusinessBank' : "N",
                'retail' : "N",
            },
	"productCoreAttributes": [
		{
			"id": 18,
	        "apdId": "Business Unit",
	        "productName": "Active"
		},
		{
			"id": 19,
	        "apdId": "Business Unit",
	        "productName": "Withdrawn"
		},
		{
			"id": 28,
	        "apdId": "Product Registration",
	        "productName": "Xyz"
		}
	],
	"productTradingDesks": [
		{
			"tradingDeskId": 1,
	        "deskName": "Rates Desk",
	        "deskHead": "Priya s",
	        "primaryDesk": "Y",
	        "secondaryDesk": "Y",
	        "internalTradesOnly": "Y",
	        "overallRisKStatus": "High",
	        "clientJurisdiction": "",
            "showHide": false,
	        "approvalRestrictions": [
	        	{
	        		"approvalRescriptionId": 28,
			        "description": "uegfhegfhegf egfhegfhglfygf rgfygyleggyrhgfh",
			        "type": ""
	        	}
	        ],
            "internalTradesOnly":"",
     "clientSegment":{
                'internalTradesOnly' : "N",
                'interbankMarket' : "N",
                'financialInstitutions' : "N",
                'globalCorporates' : "N",
                'midmarketers' : "N",
                'sme' : "N",
                'smeSegment' : "N",
                'wealth' : "N",
                'retailBusinessBank' : "N",
                'retail' : "N",
            },
	        "bankEntities": [
	        	{
	        		"bankEntityId": 123,
			        "bankEntityName": "LB",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 2025,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2026,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2027,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	}
			        ]
	        	},
	        	{
	        		"bankEntityId": 1234,
			        "bankEntityName": "BOS",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 2035,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2033,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2037,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2038,
					        "currency1": "INR",
					        "currency2": "AUD",
					        "tenor": "15",
					        "backToBack":"N"
			        	}
			        ]
	        	},
	        	{
	        		"bankEntityId": 12345,
			        "bankEntityName": "Halifax",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 2045,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2046,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2047,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2048,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2049,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2050,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	}

			        ]
	        	}

	        ],
	        "deskTradeConditions": []
		},

		{
			"tradingDeskId": 1,
	        "deskName": "Rates Desk",
	        "deskHead": "Priya $234",
	        "primaryDesk": "Y",
	        "secondaryDesk": "Y",
	        "internalTradesOnly": "Y",
	        "overallRisKStatus": "High",
	        "clientJurisdiction": "",
            "clientSegment":{
                'internalTradesOnly' : "N",
                'interbankMarket' : "N",
                'financialInstitutions' : "N",
                'globalCorporates' : "N",
                'midmarketers' : "N",
                'sme' : "N",
                'smeSegment' : "N",
                'wealth' : "N",
                'retailBusinessBank' : "N",
                'retail' : "N",
            },
	        "approvalRescriptions": [
	        	{
	        		"approvalRescriptionId": 28,
			        "description": "uegfhegfhegf egfhegfhglfygf rgfygyleggyrhgfh",
			        "type": ""
	        	}
	        ],
	        "bankEntities": [
	        	{
	        		"bankEntityId": 123,
			        "bankEntityName": "LB",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 2025,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2026,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2027,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	}
			        ]
	        	},
	        	{
	        		"bankEntityId": 1234,
			        "bankEntityName": "BOS",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 2035,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2033,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2037,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2038,
					        "currency1": "INR",
					        "currency2": "AUD",
					        "tenor": "15",
					        "backToBack":"N"
			        	}
			        ]
	        	},
	        	{
	        		"bankEntityId": 12345,
			        "bankEntityName": "Halifax",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 2045,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2046,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2047,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2048,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2049,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 2050,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	}

			        ]
	        	}

	        ],
	        "deskTradeConditions": []
		},{
			"tradingDeskId": 2,
	        "deskName": "SIP",
	        "deskHead": "Pavan er",
	        "primaryDesk": "N",
	        "secondaryDesk": "N",
	        "internalTradesOnly": "N",
	        "overallRisKStatus": "High",
	        "clientJurisdiction": "",
	        "approvalRescriptions": [
	        	{
	        		"approvalRescriptionId": 29,
			        "description": "uegfhegfhegf egfhegfhglfygf rgfygyleggyrhgfh",
			        "type": ""
	        	}
	        ],
            "clientSegment":{
                'internalTradesOnly' : "N",
                'interbankMarket' : "N",
                'financialInstitutions' : "N",
                'globalCorporates' : "N",
                'midmarketers' : "N",
                'sme' : "N",
                'smeSegment' : "N",
                'wealth' : "N",
                'retailBusinessBank' : "N",
                'retail' : "N",
            },
	        "bankEntities": [
	        	{
	        		"bankEntityId": 1121,
			        "bankEntityName": "BOS",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 201,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 202,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 203,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	}
			        ]
	        	},
	        	{
	        		"bankEntityId": 1122,
			        "bankEntityName": "Halifax",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 301,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 302,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 304,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 305,
					        "currency1": "INR",
					        "currency2": "AUD",
					        "tenor": "15",
					        "backToBack":"N"
			        	}
			        ]
	        	},
	        	{
	        		"bankEntityId": 1123,
			        "bankEntityName": "LB",
			        "bankEntityStatus": "Active",
			        "anyCcyPairAllowed": "",
			        "bankEntityCurrencies": [
			        	{
			        		"bankEntityCurrencyId": 401,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "50",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 402,
					        "currency1": "AUD",
					        "currency2": "N/A",
					        "tenor": "15",
					        "backToBack":"Y"
			        	},
			        	{
			        		"bankEntityCurrencyId": 403,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 404,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 405,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	},
			        	{
			        		"bankEntityCurrencyId": 406,
					        "currency1": "GBP",
					        "currency2": "AUD",
					        "tenor": "75",
					        "backToBack":"N"
			        	}

			        ]
	        	}

	        ],
	        "deskTradeConditions": []
		}
	]
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

export const products =[{
    "id": 1,
    "appId": "a132",
    "qLProductName": "fx Sprint",
    "primaryDesk" : "Primary Desk",
    "productStatus": "Active",
    "auditStatus": "Identifier",
    "auditUser": "Rat3",
    "grouping1": null,
    "grouping2": null
}]

export const boolean = [
        {"label": "Y"},
        {"label": "N"}
];
export const landingPage = [
	{
		"id": 13,
        "apdId": "A123",
        "productName": "FX Spot1",
        "qLProductName": "FX Spot",
        "primarkDesk": "FX Spot Desk",
        "productStatus": "Active",
        "auditStatus": "Initiated",
        "auditUser": "Katy",
        "grouping1": null,
        "grouping2": null,
	},
	{
		"id": 13,
        "apdId": "B123",
        "productName": "Rates Swap",
        "qLProductName": "Interest Rate",
        "primarkDesk": "Rates Desk",
        "productStatus": "Active",
        "auditStatus": "Pending Confirmation",
        "auditUser": "Priya",
        "grouping1": null,
        "grouping2": null,
	},
	{
		"id": 13,
        "apdId": "C123",
        "productName": "Cross Currency",
        "qLProductName": "Cross Currency Swap",
        "primarkDesk": "SIP",
        "productStatus": "Active",
        "auditStatus": "Initiated",
        "auditUser": "Pammi",
        "grouping1": null,
        "grouping2": null,
	}
];
export const productDetails = {
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

export const refData = {
    "refDataKeyGroups": [
    {
        "refDataKeyName": "Application MiFID Client Classification",
        "idValues": [
            {
                "refDataId": 104,
                 "refDataValue": "Professional",
            },
            {
                "refDataId": 105,
                 "refDataValue": "Eligible Counterparty (ECP)",
            },
            {
                "refDataId": 106,
                 "refDataValue": "Retail",
            }
        ]
    },
    {
        "refDataKeyName": "Product Status",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Product Family",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Product Register Location",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Business Unit",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "One MI Hierarchy Reference (Level 5)",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "QL Product",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Pricing model",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Trade Booking System",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Advisory Basis",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Distribution Method",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "MIFID Classification",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "MIFID II Classification",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "ISDA Classification",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Overall Risk Status",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Risk Status",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Business Area",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "APD Currency",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Tenor",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Client Segments - Back Book Only",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Issuer Type Of Security",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Security Type",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Benchmark",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Approval Restriction Type",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "LB",
            },
            {
                "refDataId": 809,
                 "refDataValue": "BOS",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Lloyds Banking Group",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Halifax",
            }
        ]
    },
    {
        "refDataKeyName": "Exchange name",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },

    {
        "refDataKeyName": "Exchange Product Symbol",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Approved Heritage",
        "idValues": [
            {
                "refDataId": 123,
                 "refDataValue": "LB",
            },
            {
                "refDataId": 1234,
                 "refDataValue": "BOS",
            },
            {
                "refDataId": 12345,
                 "refDataValue": "Halifax",
            }
        ]
    },
    {
        "refDataKeyName": "Risk Status",
        "idValues": [
            {
                "refDataId": 808,
                 "refDataValue": "Active",
            },
            {
                "refDataId": 809,
                 "refDataValue": "Suspended",
            },
            {
                "refDataId": 810,
                 "refDataValue": "Withdrawn",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    },
    {
        "refDataKeyName": "Approval Restriction Type",
        "idValues": [
            {
                "refDataId": 107,
                 "refDataValue": "Adjustment Factors",
            },
            {
                "refDataId": 108,
                 "refDataValue": "Approval",
            },
            {
                "refDataId": 109,
                 "refDataValue": "Back Book Restriction",
            },
            {
                "refDataId": 110,
                 "refDataValue": "Back to Back Only",
            },
            {
                "refDataId": 111,
                 "refDataValue": "Benchmark",
            },
            {
                "refDataId": 112,
                 "refDataValue": "Clearing",
            },
            {
                "refDataId": 113,
                 "refDataValue": "Client Type",
            }
        ]
    },
    {
        "refDataKeyName": "Trading Desk",
        "idValues": [
            {
                "refDataId": 1,
                 "refDataValue": "Rates Desk",
            },
            {
                "refDataId": 19,
                 "refDataValue": "SIP",
            },
            {
                "refDataId": 28,
                 "refDataValue": "Product Registration",
            },
            {
                "refDataId": 811,
                 "refDataValue": "Closed",
            }
        ]
    }
    
    ],

    "refDataRelationships": [
        {
            "relationshipId": 1,
            "refDataParentId": "111",
            "refDataChildId": "234",
        },
        {
            "relationshipId": 1,
            "refDataParentId": "111",
            "refDataChildId": "544",
        },

        {
            "relationshipId": 1,
            "refDataParentId": "111",
            "refDataChildId": "565",
        }
    ]

}

export const jsonData = [
        {"value": "Change Details"},
        {"value": "Product Details"},
        {"value": "Valuation Details"},
        {"value": "Trade Booking System"},
        {"value": "Business Area Risk Assesment"},
        {"value": "Governance Details"},      
        {"value": "Regulatory Classification"},
        {"value": "Add Trading Desk"}
    ];
export const apiKeys = {
        "value": "value",
        "refDataId" : "refDataId",
        "refDataKeyGroups" : "refDataKeyGroups",
        "refDataValue" : "refDataValue",


 };

 export const TRADING_DESK = 'Trading Desk';
 export const APPROVED_HERITAGE = 'Approved Heritage';
 export const APPROVAL_RESTRICTION_TYPE = 'Approval Restriction Type';
 export const EXCHANGE_NAME = 'Exchange name';
 export const EXCHANGE_PRODUCT_SYMBOL = 'Exchange Product Symbol';
 export const UNDERLYING_STATUS = 'Underlying Status';
 export const APD_CURRENCY = 'APD Currency';
 export const TENOR = 'Tenor';
 export const ISSUER_TYPE_OF_SECURITY = 'Issuer Type of Security';
 export const SECURITY_TYPE = 'Security Type';
 export const BENCHMARK = 'Benchmark'; 
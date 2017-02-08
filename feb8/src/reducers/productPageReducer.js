import * as types from '../actions/actionTypes';
import initialState from './initialState';
import ProductsPageApi from '../api/productsPageApi';

 let products = []
export default function productPageReducer(state = {
  refData : {
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
    }],

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
    ],
  },
  demo: false, products: []}, action) {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS:
    console.log("welcome")
    state.products = action.productDetails;
    return Object.assign({}, state,{});
    //   return action.products;
   
    case types.GET_PRODUCTS:
    console.log("welcome")
    state.products = action.productDetails;

    let f = ProductsPageApi.getProducts().then(products => {
      dispatch(productsSuccess(products));
    }).catch(error => {
      throw(error);
    });
    console.log("-------------------------------");
    console.log(f);
    state.products = f;
    return Object.assign({}, state,{});
    //   return action.products;

    default:
      return Object.assign({}, state,{});
  }
}

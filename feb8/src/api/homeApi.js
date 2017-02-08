import delay from './delay';
import fetch from 'react-fetch';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const home = [
  {
      "id": 1,
      "apdId": "A127",
      "productName": "FX Forward",
      "qLProductName": "FX Outright",
      "primaryDesk": "FX Option Desk",
      "productStatus": "Active",
      "auditStatus": "approved",
      "grouping1": null,
      "grouping2": null,
      "modifiedBy": "Priyanka"
    },
    {
      "id": 3,
      "apdId": "A140",
      "productName": "Government Bond",
      "qLProductName": "Bond",
      "primaryDesk": "Rates Desk",
      "productStatus": "Active",
      "auditStatus": "confirm",
      "grouping1": null,
      "grouping2": null,
      "modifiedBy": "Rohit"
    },
    {
      "id": 4,
      "apdId": "A261",
      "productName": "Single Currency Interest Rate Swap",
      "qLProductName": "Interest Rate Swap",
      "primaryDesk": "Rates Desk",
      "productStatus": "Active",
      "auditStatus": "initiated",
      "grouping1": null,
      "grouping2": null,
      "modifiedBy": "Mo"
    }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (home) => {
  return replaceAll(home.title, ' ', '-');
};

class HomeApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], home));
      }, delay);
    });
  }
  // static getAllProducts() {
  //   return dispatch => {
  //     dispatch(this.requestPosts(home))
  //     return fetch(`http://localhost/nit/app/index.php/llyods`)
  //       .then(response => response.json())
  //       .then(json => dispatch(this.receivePosts(home, json)))
  //   }
  // }

  static requestPosts(home)  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], home));
      }, delay);
    });
  }
  
  static receivePosts(home)  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], home));
      }, delay);
    });
  }

  /* return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(subreddit, json))
      )
*/
   
}

export default HomeApi;

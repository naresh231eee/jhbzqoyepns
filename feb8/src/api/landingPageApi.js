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
const inProgressProducts = [
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
class LandingPageApi {
  static getAllInProgressProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], inProgressProducts));
      }, delay);
    });
  }
}



export default LandingPageApi;

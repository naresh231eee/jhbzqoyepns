import * as _ from "lodash";
import * as apidata from "./../api/landingPage.jsx";

export const getKeyByValues = (value) => {
    console.log(value)
    let filteredDropDowns = _.find(apidata.refData.data.refDataKeyGroups, {
        refDataKeyName: value
    });
    return filteredDropDowns.idValues.length > 0 ? filteredDropDowns.idValues : [];
};

export const getRefDataValueForKey = (value) => {
    let filteredDropDowns = _.find(apidata.refData.data.refDataKeyGroups, {
        refDataKeyName: value
    });
    return filteredDropDowns.idValues.length > 0 ? filteredDropDowns.idValues : [];
};
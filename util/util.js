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

export const showHideDiv = (divName, divId) => {
    var id = divName + '_' + divId;
    let divClassName = document.getElementById(id).className;
    if (divClassName.indexOf("maxHeight") === -1) {
        document.getElementById(divName + '-' + divId).className = "list-group-item product-containers heigherExpandable maxHeight";
        document.getElementById(id).className = "list-group-item product-containers expandable maxHeight"
    } else {
        document.getElementById(id).className = "list-group-item product-containers minHeight"
        document.getElementById(divName + '-' + divId).className = "innerExpandable";
    }
}
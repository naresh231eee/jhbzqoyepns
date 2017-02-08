

export const getKeyByValues = (value, dataGroup) => {
       console.log(value)
       console.log(dataGroup)
      if(dataGroup){
         var i,
            len = dataGroup.length;
         for (i = 0; i < len; i++) {
            if (dataGroup[i].refDataKeyName == value){
               return dataGroup[i].idValues;
            }
         }
      }
   };
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(a) {
  //throw new CustomError('Not implemented');
  let i =0;  
  let result= a.reduce(function(previousValue, item, index, array) {
      a[index].forEach(function(item, index, array) {
             if(item == '^^'){
                i++;
             }
    });
  }, 0);
return i;

};

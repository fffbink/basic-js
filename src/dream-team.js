const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
   // убираем не строки
  let arr = members.filter((item, i, arr)=> typeof(item) == "string");

  // удаляем пробелы/ преобразовываем в верхни регистр.
let tmp = arr.map(function (el) {
  return el.trim().toUpperCase();
});
        //сортируем
       tmp.sort();

  let result =  tmp.map((item, i, arr) => {
  return item[0]});
  return result.join("").toUpperCase();
            };
//npm run test test/dream-team.test.js

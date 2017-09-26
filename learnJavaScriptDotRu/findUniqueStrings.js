/*Write the function unique (arr), that returns 
  an array containing only the unique elements of arr.*/

let strings = ["кришна", "кришна", "харе", "харе",
               "харе", "харе", "кришна", "кришна", "8-()"];

findUniqueStrings(strings)

function findUniqueStrings(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  let uniqueStrings = [];

  for (str in obj) {
    uniqueStrings.push(str);
  } 

return uniqueStrings;
}
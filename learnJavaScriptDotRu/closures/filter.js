let arr = [1, 2, 3, 4, 5, 6, 7];

filter(arr, function(a) {
  return a % 2 == 0
}); // 2,4,6

filter(arr, inBetween(3, 6)) // 3,4,5,6

filter(arr, inArray([1, 2, 10])) // 1,2

function filter(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (func(value)) {
      result.push(value)
    }
  }

  return result;
}

function inBetween (a, b) {
  return function(n) {
    return n >=a && n <=b;
  }
}

function inArray(arr) {
  return function(n) {
    return arr.includes(n);
  }
}
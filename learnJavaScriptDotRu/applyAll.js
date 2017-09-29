applyAll(Math.max, 2, -2, 3); // 3
applyAll(Math.min, 2, -2, 3); // -2

applyAll(sum, 1, 2, 3); // -> sum(1, 2, 3) = 6
applyAll(mul, 2, 3, 4); // -> mul(2, 3, 4) = 24

function applyAll() {
  let func = [].shift.call(arguments);

  return func.apply(null, arguments);
}

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}
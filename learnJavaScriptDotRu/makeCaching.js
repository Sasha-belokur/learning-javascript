function f(x) {
  return Math.random() * x; 
}

function makeCaching(f) {
  let cache = {};

  return function(x) {
    if (!(x in cache)) {
      cache[x] = f.call(this, x);
    }
    return cache[x];
  }
}

f = makeCaching(f);

let a = f(1);
let b = f(1);
console.log(a == b) //true

b = f(2);
console.log(a == b); // false
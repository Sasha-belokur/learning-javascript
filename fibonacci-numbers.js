/*  In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:[1][2]
  1, 1, 2, 3, 5, 8, 13, 21...

Need to write function fib(n) that returns n Fibonacci number. */

/*Solution via recursion:*/ 

fibRecursion(3) // 2
fibRecursion(7) // 13
fibRecursion(20) // 6765

fibLoop(4) // 3
fibLoop(54) // 86267571272
fibLoop(74) // 1304969544928657

function fibRecursion(n) {
  if (n > 2) return fibRecursion(n-1) + fibRecursion(n-2)

  return 1;
}

/*Solution via loop:*/

function fibLoop(n) {
  let a = 1;
  let b = 1;

  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}




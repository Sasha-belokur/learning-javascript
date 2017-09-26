/*Write the function that implements string buffer*/

let buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

buffer(); // Замыкания Использовать Нужно!

function makeBuffer() {
  let stringBuffer = "";

  return function(str) {
    if (!arguments.length) return stringBuffer;

    stringBuffer += str;
  }

}
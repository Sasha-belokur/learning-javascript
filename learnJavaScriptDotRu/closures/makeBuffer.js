/*Write the function that implements string buffer
 and has method clear()*/

let buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

buffer(); // Замыкания Использовать Нужно!

buffer.clear();

buffer() // ""

function makeBuffer() {
  let stringBuffer = "";

  function buffer(str) {
    if (!arguments.length) return stringBuffer;

    stringBuffer += str;
  }

  buffer.clear = function() {
    stringBuffer = "";
  }

  return buffer;

}
/*Write a function camelize(str), that converts string 'my-short-string' into 'myShortString'*/

camelize("background-color") // 'backgroundColor';
camelize("list-style-image") // 'listStyleImage';
camelize("-webkit-transition") // 'WebkitTransition';

function camelize(str) {
  let arr = str.split('-');

  for(let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}
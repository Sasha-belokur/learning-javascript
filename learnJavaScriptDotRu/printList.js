/*A linked list is a data structure that consists of elements, each of which stores a reference to the next.
Write a function prinList(list) that returns linked list elements by order*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListLoop(list); // 1, 2, 3, 4
printListRecusion(list); // 1, 2, 3, 4

/**Solution via loop*/

function printListLoop(list) {
  let tmp = list;

  while (tmp) {
    console.log( tmp.value );
    tmp = tmp.next;
  }

}

/*Solution via recustion*/

function printListRecusion(list) {

  console.log(list.value); 

  if (list.next) {
    printListRecusion(list.next); 
  }
}
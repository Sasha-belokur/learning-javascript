let users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users.sort(byField('name')); // Вася, Маша, Петя
users.sort(byField('age')); // Маша, Вася, Петя

function byField(field) {

  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }

}
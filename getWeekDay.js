/*Write a function that returns current week day*/

let date = new Date(2017, 8, 26); 

getWeekDay(date);

function getWeekDay(date) {
  let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return weekDays[date.getDay()];
}
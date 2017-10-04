let fridge = new Fridge(200);
fridge.addFood("banana"); // Error, the fridge is turned off

fridge = new Fridge(500);
fridge.enable();
fridge.addFood("banana");
fridge.addFood("apple", "orange");
fridge.addFood("tomato", "pie", "cake"); // Error, there is now enough space'


ridge = new Fridge(500);
fridge.enable();
fridge.addFood("banana");
fridge.addFood("apple", "orange");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // banana, apple, orange

// adding new items doesn't inluence on food in the fridge 
fridgeFood.push("fork", "spoon");

alert( fridge.getFood() ); // banana, apple, orange


/*We can filter a food and remove a food from the fridge*/
fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "banana",
  calories: 100
});
fridge.addFood({
  title: "apple",
  calories: 30
});
fridge.addFood({
  title: "juice",
  calories: 10
});
fridge.addFood({
  title: "cake",
  calories: 150
});

fridge.removeFood("random item"); // nothing happens
alert( fridge.getFood().length ); // 4

let dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // appple, juice
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2


/*It's imposible to turn off the fridge with food*/
fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // Errorm there is food in the fridge


function Machine(power) {
  this._power = power;
  this._enabled = false;

  let self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge() {
  Machine.apply(this, arguments)

  let food = [];
  const maxAmount = this._power / 100;

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Fridge is turned off");
    };

    if (maxAmount < food.length + arguments.length) {
      throw new Error("There is now enough space");
    };

    for(let i = 0; i < arguments.length; i++) {
      food.push(arguments[i]);
    }
  };

  this.getFood = function() {
    return food.slice();
  };

  this.filterFood =function(func) {
    return food.filter(func);
  };

  this.removeFood = function(item) {
    if(food.includes(item)) {
      food.splice(food.indexOf(item), 1)
    }
  }

  let parentDisable = this.disable;
  this.disable = function() {
    if (food.length) {
      throw new Error('There is food in fridge')
    }
    parentDisable();
  }
}
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

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
  let maxAmount = this._power / 100;

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error('Fridge is turned off');
    };

    if (maxAmount < food.length + arguments.length) {
      throw new Error('There is now enough space');
    };

    for(let i = 0; i < arguments.length; i++) {
      food.push(arguments[i]);
    }
  };

  this.getFood = function() {
    return food.slice();
  };
}
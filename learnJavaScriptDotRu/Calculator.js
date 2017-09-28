let calculator = new Calculator();
calculator.read();

"Sum=" + calculator.sum();
"Mul=" + calculator.mul();

function Calculator() {
  this.read = function() {
    this.x = +prompt('kek?')
    this.y = +prompt('kek2?')
  }

  this.sum = function() {
    return this.x + this.y;
  }

  this.mul = function() {
    return this.x * this.y;
  }
}
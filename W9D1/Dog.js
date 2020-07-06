const Animal = require("./animal.js");

function Dog(name) {
    this.name = name;
}

Dog.prototype.wood = function() {
    console.log(`${this.name} barks at you...`);  
};

const Surrogate = function() {};

Surrogate.prototype = Animal.prototype;

module.exports = Dog;
// export default Dog;
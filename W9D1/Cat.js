const Animal = require("./animal.js");

function Cat(name) {
    this.name = name;
}

Cat.prototype.meow = function(){
    console.log(`Meooooww, this is ${this.name}`);
};

module.exports = Cat;
// export default Cat;
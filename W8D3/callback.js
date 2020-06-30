let callback = function () {
    console.log("It has been 5 seconds!");
}

let timeToWait = 5000;

// // Regular way
// global.setTimeout(callback, timeToWait);


// // Anonymous Function
// global.setTimeout(function () {
//     console.log("It has been 5 seconds!")
// }, timeToWait)
// // Arrow Function
// global.setTimeout(() => {
//     console.log("It has been 5 seconds!")
// }, timeToWait);
// const _5SecondTimeOut = global.setTimeout(() => console.log("Even smaller arrow function!"), timeToWait);
// global.setTimeout(() => console.log("Even smaller arrow function!"), timeToWait);


// Object

cat = {
    name: "Milo",
    age: 9,
    purr: () => console.log("meow!!!")
};
// Accessing as Key -> Value
// console.log(cat["name"]);
// console.log(cat["age"]);

// // Accessing as a method name
// console.log(cat.name);
// console.log(cat.age);

cat.purr();

// console.log(cat.age + 1);
// Reassigning properties
cat.age += 1
cat.name = "Chilo"
console.log(cat.age);
console.log(cat.name);

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

global.setTimeout(()=> console.log("Even smaller arrow function!"), timeToWait);

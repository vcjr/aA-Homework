function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  // Will work since we are just reassigning
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
//   function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//       var x = 'in block';  // Since var has a bigger scope than let and const this will throw an error
//       console.log(x);
//     }
//     console.log(x);
//   }
  
  function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
//   function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     let x = 'out of block again'; // This has been defined in the outer scope to begin with
//     console.log(x);
//   }

// madLib
// Write a function that takes three strings - a verb, an adjective, and 
// a noun - uppercases and interpolates them into the sentence "We shall 
// VERB the ADJECTIVE NOUN". Use ES6 template literals.

// For example,
function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
}
 madLib('make', 'best', 'guac'); //"We shall MAKE the BEST GUAC."


// isSubstring
// Input

// 1) A String, called searchString.
// 2) A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.
function isSubstring(searchString, subString) {
    if (searchString.indexOf(subString) > -1) {
        return true
    } else {
        return false
    }
}


console.log(isSubstring("time to program", "time")); // true

console.log(isSubstring("Jump for joy", "joys")); // false
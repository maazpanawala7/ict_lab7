// Task 3: scope and hoisting

// ---------- PART A: block scope inside a function ----------
function checkScope() {
  if (true) {
    var x = 10; // var is function scoped
    let y = 20; // let is block scoped
  }

  // Prediction: x prints 10 (var ignores the if block, it is function scoped)
  // Actual output: 10
  console.log("x =", x);

  // Prediction: y causes ReferenceError: y is not defined (let is block scoped)
  // Actual output: ReferenceError: y is not defined
  try {
    console.log("y =", y);
  } catch (error) {
    console.log(error.name + ": " + error.message);
  }
}
checkScope();

// ---------- PART B: hoisting with var ----------
// Prediction: undefined (the declaration is hoisted, the value is not)
// Actual output: undefined
console.log("a =", a);
var a = 5;

// ---------- PART C: hoisting with let ----------
// Prediction: ReferenceError: Cannot access 'b' before initialization
// Actual output: ReferenceError: Cannot access 'b' before initialization
try {
  console.log("b =", b);
} catch (error) {
  console.log(error.name + ": " + error.message);
}
let b = 5;

// ---------- EXPLANATION ----------
// var has function scope, so a var declared inside the if block is still visible
// anywhere in the function, while let has block scope and only exists inside the
// { } where it was written. With hoisting, var declarations are moved to the top
// and set to undefined, so using them early gives undefined. let is also hoisted
// but stays uninitialized (temporal dead zone) so using it early throws an error.

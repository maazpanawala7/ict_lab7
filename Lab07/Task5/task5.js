// Task 5: primitive vs reference

// Reference type experiment
let cart = ["Shirt", "Shoes", "Watch"];
let backup = cart;
backup.push("Bag");
console.log("cart:", cart);     // [ 'Shirt', 'Shoes', 'Watch', 'Bag' ]  (changed too!)
console.log("backup:", backup); // [ 'Shirt', 'Shoes', 'Watch', 'Bag' ]

// Primitive experiment
let a = 10;
let b = a;
b = 50;
console.log("a:", a); // 10 (unchanged)
console.log("b:", b); // 50

// EXPLANATION:
// Numbers are a primitive type, so let b = a copies the actual value into a new
// memory location. Changing b only changes that separate copy and a stays 10.
// An array is a reference type. cart holds a reference (the address of where the
// array lives), so let backup = cart copies only that address. Both variables
// point to the same memory location, so pushing into backup changes the one
// shared array and cart shows the change too.

// Real independent copy using the spread operator
let cart2 = ["Shirt", "Shoes", "Watch"];
let backup2 = [...cart2];
backup2.push("Bag");
console.log("cart2:", cart2);     // [ 'Shirt', 'Shoes', 'Watch' ]
console.log("backup2:", backup2); // [ 'Shirt', 'Shoes', 'Watch', 'Bag' ]

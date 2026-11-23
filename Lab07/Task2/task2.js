// Task 2: the seven primitive data types

let city = "Karachi";                         // String
let age = 19;                                 // Number
let bigPopulation = 9007199254740993n;        // BigInt (note the n at the end)
let isHosteller = false;                      // Boolean
let emptyValue;                               // Undefined (declared, never assigned)
let nothing = null;                           // Null
let uniqueId = Symbol("id");                  // Symbol

console.log("city = " + city + " | type = " + typeof city);
console.log("age = " + age + " | type = " + typeof age);
console.log("bigPopulation = " + bigPopulation + " | type = " + typeof bigPopulation);
console.log("isHosteller = " + isHosteller + " | type = " + typeof isHosteller);
console.log("emptyValue = " + emptyValue + " | type = " + typeof emptyValue);
console.log("nothing = " + nothing + " | type = " + typeof nothing);
// Symbol cannot be joined to a string with +, so convert it with toString()
console.log("uniqueId = " + uniqueId.toString() + " | type = " + typeof uniqueId);

// OBSERVATION:
// typeof nothing prints "object", not "null". This is a famous, long-standing
// bug in JavaScript from its very first version. null is actually a primitive
// type, but typeof null returns "object" and it was never fixed because
// fixing it would break a huge amount of existing websites.

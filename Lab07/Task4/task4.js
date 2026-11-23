// Task 4: objects with const

const student = {
  name: "Ali Khan",
  rollNo: "25K-1234",
  marks: [78, 85, 90]
};

// Dot notation
console.log("Name (dot):", student.name);

// Bracket notation
console.log("Roll No (bracket):", student["rollNo"]);

// Variable as key
const key = "rollNo";
console.log("Roll No (variable key):", student[key]);

// Change marks of the second subject
student.marks[1] = 95;

// Add a new property
student.grade = "A";

// Print the complete object
console.log(student);

// Try to reassign the whole object
try {
  student = { name: "Someone Else" };
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// ERROR OBTAINED:
// TypeError: Assignment to constant variable.
//
// EXPLANATION:
// const stops the variable from being pointed at a different value. The variable
// student holds a reference (memory address) to the object. Changing properties
// modifies the object at that address, so the reference stays the same and it is
// allowed. Assigning a new object would change the reference itself, which const
// does not permit.

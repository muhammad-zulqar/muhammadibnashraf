// Variables: Used to store data
let name = "John"; // Can be reassigned
const age = 25; // Cannot be reassigned
var city = "New York"; // Old way, avoid using

// Data Types: String, Number, Boolean, Object, Array, etc.
let isStudent = true; // Boolean
let score = 95.5; // Number
let colors = ["red", "green", "blue"]; // Array
let person = { firstName: "Jane", lastName: "Doe" }; // Object

// Functions: Block of code to perform a task
function greet() {
    console.log("Hello, World!");
}
greet(); // Call the function

// Arrow Functions: Shorter syntax for functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// Conditionals: if-else statements
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Loops: Repeat actions
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// Events: Respond to user actions (in a browser environment)
document.addEventListener("click", () => {
    console.log("Document clicked!");
});
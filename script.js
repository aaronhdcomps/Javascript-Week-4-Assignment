// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

function min(num1, num2) {
    if (num1 < num2) {
        result = num1;
    }
    else if (num1 > num2){
        result = num2;
    }
    else {
        result = "Both numbers are equal.";
    }
    return result;
}
console.log(min(43, 43))

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function calculateCircumference(radius) {
    result = 2 * Math.PI * radius;
    return result;
}
console.log(calculateCircumference(8))

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function searchString
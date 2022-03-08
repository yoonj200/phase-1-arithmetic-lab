// Write your code here

// Number.isInteger() => checks if provided argument is an integer
// Number.isFinite() => checks if provided argument is finite
// Number.isNaN() => checks if provided argument is NaN (not a number)
// Number.parseInt() => parses a string as an integer for first argument
    // second argument is base that should be used in parsing (2 for binary, 10 for decimal)
    // Number.parseInt('100', 10) => 100 ----- (10 for decimal)
    // Number.parseInt('100', 2) => 4 ----- (2 for binary)
// Number.parseFloat() => parses string (single argument) as a floating-point number
    // Number.parseFloat('3.14159') => 3.14159
// Math.ceil() => rounds number up
// Math.floor() => rounds number down
// Math.round() => rounds number up/down, whichever is nearest
// Math.max() => accepts number of arguments and returns highest constituent
// Math.min() => accepts number of arguments and returns lowest constituent
// Math.random() => generates random number between 0 (inclusive) and 1 (exclusive)


let num1=2
let num2=31
let multiply = num1*num2 // => 62

let random = Math.floor(Math.random() * 10) + 1

let num3=5
let num4=4
let mod = num4%num3 // => 4

let max = Math.max(20, 10, 1) // => 20
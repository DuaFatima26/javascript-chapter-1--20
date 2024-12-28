// question 6 

let greeting;
let hour = 13;
if (hour > 18) {
    alert(greeting = "Good Morning")
} else {
    alert(greeting = "Good Evening")
}

// question 1 

let character = prompt("Wrtie any number or single letter of your choice")
if (character >= 0) {
    console.log("The character you entered is positive number")
} else if (character <= 0) {
    console.log("The character you entered is negative number")
} else if (character == "a" || character == "b" || character === "c" || character === "d" || character === "e" || character === "f" || character === "g" || character === "h" || character === "i" || character === "j" || character === "k" || character === "l" || character === "m" || character === "n" || character === "o" || character === "p" || character === "q" || character === "r" || character === "s" || character === "t" || character === "u" || character === "v" || character === "w" || character === "x" || character === "y" || character === "z") {
    console.log("The character you entered is a lower case letter")
} else if (character == "A" || character == "B" || character === "C" || character === "D" || character === "E" || character === "F" || character === "G" || character === "H" || character === "I" || character === "J" || character === "K" || character === "L" || character === "M" || character === "N" || character === "O" || character === "P" || character === "Q" || character === "R" || character === "S" || character === "T" || character === "U" || character === "V" || character === "W" || character === "X" || character === "Y" || character === "Z") {
    console.log("The character you entered is a upper case letter")
}  else if (character === 0){
    console.log("The integar you entered is zero")
}
else {
    console.log("kindly enter a valid number or single letter")
}


// question 1 

// let character2 = prompt("Enter a single character (number or letter):");


// let ascii = character2.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     console.log("The given input is a number.");
// }

// else if (ascii >= 65 && ascii <= 90) {
//     console.log("The given input is an uppercase letter.");
// }

// else if (ascii >= 97 && ascii <= 122) {
//     console.log("The given input is a lowercase letter.");
// }

// else {
//     console.log("The given input is neither a number nor a letter.");
// }


// question 2 

let number1 = +prompt("Enter a number?");
let number2 = +prompt("Enter a number?");

if (number1 > number2){
    console.log(`The larger number is ${number1}`);
}else if  (number2 > number1){
    console.log(`The larger number is ${number2}`);
} else {
    console.log("Both numbers are equal");
}

// question 3 (already done in question 1)

// question 4 

let character3 = prompt("Enter a single character:").toLowerCase();

if (character3 === "a" || character3 === "e" || character3 === "i" || character3 === "o" || character3 === "u") {
    console.log("the character you entered is vowel"); 
} else {
    console.log("the character you entered is consonant"); 
}

// question 5 


let correctPassword = "duafatim26";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}



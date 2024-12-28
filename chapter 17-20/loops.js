// question 3

for ( let i = 0 ; i <= 10 ; i++){
 console.log(i);
}

// question 4 

let tableNumber = parseInt(prompt("Enter the number for which you want the multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

if (isNaN(tableNumber) || isNaN(tableLength)) {
    console.log("Please enter valid numbers.");
} else {
    let result = "";  
    for (let i = 1; i <= tableLength; i++) {
        result += tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>";  
    }
   document.write(result); 
}


/// question 5 

 let fruits = ["apple", "banana" ,"mango", "orange" , "strawberry"] ;

 for( let i = 0 ; i < fruits.length ; i++){
   console.log(fruits[i]);
 }

// question 10

for (let i = 5; i <= 100; i += 5) {
    console.log(i); 
}

// question 7

let snacks = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search for:");

if (snacks.includes(userInput.toLowerCase())) {
    alert(userInput + " is found in the list.");
} else {
    alert(userInput + " is not found in the list.");
}


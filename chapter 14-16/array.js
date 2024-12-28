
let studetnsName = [];
let studentNames = new Array(); 
let fruits = ["Apple", "Banana", "Cherry"]; 
let numbers = [10, 20, 30, 40, 50]; 
let boolean = [true, false, true, false]; 
let mixedArray = ["Ali", 25, true, "Student"]; 

// question 7 
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("Available Education Qualifications in Pakistan:");
for (let i = 0; i < qualifications.length; i++) {
    console.log(`${i + 1}. ${qualifications[i]}`);
}

// question 8

let students = ["Dua Fatima" , "Jane Aizuk" , "Tuba Jan"]
let studentsScore = [ 480 , 460 , 400]

for(let i = 0 ; i < studentsScore.length ; i++){
    var percentage = studentsScore[i] / 500 * 100;
    // for ( j = 0 ; j < students.length ; j++){
     console.log( `Score of ${students[i]} is ${studentsScore[i]} and percentage is ${percentage}`)
    // }
}

//question 9

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];


let colorToAddAtStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorToAddAtStart);
document.write(`<b>Updated Array after adding a color at the beginning:</b> ${colors.join(", ")} <br>`);

let colorToAddAtEnd = prompt("Enter a color to add at the end:");
colors.push(colorToAddAtEnd);
document.write("<b>Updated Array after adding a color at the end:</b> " + colors.join(", ") + "<br>");

colors.unshift("Pink", "Orange");
document.write("<b>Updated Array after adding two colors at the beginning:</b> " + colors.join(", ") + "<br>");

colors.shift();
document.write("<b>Updated Array after deleting the first color:</b> " + colors.join(", ") + "<br>");

colors.pop();
document.write("<b>Updated Array after deleting the last color:</b> " + colors.join(", ") + "<br>");

let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<b>Updated Array after adding a color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");

let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<b>Updated Array after deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br>");


// question 10 


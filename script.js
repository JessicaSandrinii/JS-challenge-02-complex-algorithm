// Prompt the user to insert the numbers
var num1 = Number(prompt("Insert the first number:"));
var num2 = Number(prompt("Insert the second number:"));

// Function to check if two numbers are multiples of each other
var multipleNum = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers. Try again.");
  } else if (num1 % num2 === 0 || num2 % num1 === 0) {
    alert(`${num1} and ${num2} are multiples of each other.`);
  } else {
    alert(`${num1} and ${num2} are not multiples of each other.`);
  }
};

// Main function to execute the process
multipleNum(num1, num2);

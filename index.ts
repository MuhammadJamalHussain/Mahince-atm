#! /usr/bin/env node

// Import the Inquirer library
import inquirer from "inquirer";


// Initial account balance in dollars
let myBalance = 500000;

// Correct PIN number for account access
let myPin = 1288;

// Display the current balance to the user
console.log(`Your current balance is ${myBalance}`);

// Prompt the user to enter their PIN
let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      type: "number",
      message: "Enter you pin: ",
    },
  ]);

// Check if the entered PIN matches the correct PIN
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
// Prompt the user to select an operation (withdraw or check balance)
    let operationAns = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "check balance"],
      },
    ]);

// Handle the user's chosen operation

if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter your amount: ",
      },
    ]);
// Check if sufficient funds exist for withdrawal
      if (amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
        console.log(`Your remaining balances is ${myBalance}`);
      } else {
        console.log("Insufficient Balance")
      }

  } else if (operationAns.operation === "check balance") {
    console.log(`Your balance is ${myBalance}`);
  }
} else {
  console.log("Incorrect pin number!");
}


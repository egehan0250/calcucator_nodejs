//Calcucator App
const readline = require('readline-sync');
const chalk = require('chalk');

/*
stop | Terminates the terminal and you cannot process.
restart | Restarts the terminal and you can process.
help | Shows the help page.
+ | Addition operation.
- | Subtraction operation.
* | Multiplication operation.
/ | Division operation.
% | Modulo operation.
*/

//Welcome Message
console.log(chalk.bold.greenBright("Welcome to the Calculator App!"));
console.log(chalk.bold.gray("Enter 'stop' to exit the program"));
console.log(chalk.bold.gray("Enter 'restart' to restart the program"));

//User Input
const operation = readline.question(chalk.bold.yellowBright("Please enter the operation to perform: +, -, *, /, % "));

//User Input

let result;
let again = "y";

//Yardım sayfası
if (operation === "help") {
    console.log(chalk.bold.yellowBright("Please enter the operation to perform: +, -, *, /, % "));
    console.log(chalk.bold.gray("Enter 'stop' to exit the program"));
    console.log(chalk.bold.gray("Enter 'restart' to restart the program"));
    process.exit();
} else if (operation === "stop") {
    console.clear();
    console.log(chalk.bold.blue("Goodbye!"));
    return process.exit();
} else if (operation === "restart") {
    console.clear();
    console.log(chalk.bold.greenBright("Welcome to the Calculator App!"));
    console.log(chalk.bold.gray("Enter 'stop' to exit the program"));
    console.log(chalk.bold.gray("Enter 'restart' to restart the program"));
    const operation = readline.question(chalk.bold.yellowBright("Please enter the operation to perform: +, -, *, /, % "));
    return operation;
} 

const num1 = readline.question(chalk.bold.green("Please enter your first number: "));
const num2 = readline.question(chalk.bold.green("Please enter your second number: "));

if (operation === "+") { // Toplama işlemi
    result = Number(num1) + Number(num2);
    console.log(chalk.bold.blueBright("The result is: " + result));
    const again = readline.question(chalk.bold.bgYellow("Do you want to continue? (y/n) "));
} else if (operation === "-") { // Çıkarma işlemi
    result = Number(num1) - Number(num2);
    console.log(chalk.bold.blueBright("The result is: " + result));
    const again = readline.question(chalk.bold.bgYellow("Do you want to continue? (y/n) "));
} else if (operation === "*") { // Çarpma işlemi
    result = Number(num1) * Number(num2);
    console.log(chalk.bold.blueBright("The result is: " + result));
    const again = readline.question(chalk.bold.bgYellow("Do you want to continue? (y/n) "));
} else if (operation === "/") { // Bölme işlemi
    result = Number(num1) / Number(num2);
    console.log(chalk.bold.blueBright("The result is: " + result));
    const again = readline.question(chalk.bold.bgYellow("Do you want to continue? (y/n) "));
} else if (operation === "%") { // Mod alma işlemi
    result = Number(num1) % Number(num2);
    console.log(chalk.bold.blueBright("The result is: " + result));
    const again = readline.question(chalk.bold.bgYellow("Do you want to continue? (y/n) "));
} else {
    console.log(chalk.bold.blueBright("Invalid operation!"));
    const operation = readline.question(chalk.bold.yellowBright("Please enter the operation to perform: +, -, *, /, % "));
}

while (again.toLowerCase() === "y" || again.toLowerCase() === "yes") {
    console.clear();
    console.log(chalk.bold.gray("Welcome to the Calculator App!"));

    // Kullanıcı girişi
    const operation = readline.question(chalk.bold.yellowBright("Please enter the operation to perform: +, -, *, /, % "));
    const num1 = readline.question(chalk.bold.green("Please enter your first number: "));
    const num2 = readline.question(chalk.bold.green("Please enter your second number: "));

    // İşlemi gerçekleştir
    if (operation === "+") {
        result = Number(num1) + Number(num2);
    } else if (operation === "-") {
        result = Number(num1) - Number(num2);
    } else if (operation === "*") {
        result = Number(num1) * Number(num2);
    } else if (operation === "/") {
        result = Number(num1) / Number(num2);
    } else if (operation === "%") {
        result = Number(num1) % Number(num2);
    } else {
        console.log(chalk.bold.red("Invalid operation!"));
        const operation = readline.question(chalk.bold.yellowBright("Please enter the operation to perform: +, -, *, /, % "));
    }

    console.log(chalk.bold.blue("The result is: " + result));

    again = readline.question(chalk.bold.bgYellow("Do you want to continue? (y/n) "));
}  

while (again.toLowerCase() !== "y" || again.toLowerCase() !== "yes") {
    console.log(chalk.bold.blue("Goodbye!"));
    process.exit();
}
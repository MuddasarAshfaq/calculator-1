import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "enter the first number",
    },
    {
        type: "number",
        name: "num2",
        message: "enter the second number",
    },
    {
        type: "list",
        name: "operations",
        message: "enter the operations",
        choices: ["add", "subtract", "multiply", "division", "modulus"],
    }
]);
let result;
switch (answers.operations) {
    case "add":
        result = answers.num1 + answers.num2;
        console.log(`The answer of addition of your number is,${result}`);
        break;
    case "subtract":
        result = answers.num1 - answers.num2;
        console.log(`The answer of subtraction of your number is,${result}`);
        break;
    case "multiply":
        result = answers.num1 * answers.num2;
        console.log(`The answer of multiplication of your number is,${result}`);
        break;
    case "division":
        result = answers.num1 / answers.num2;
        console.log(`The answer of division of your number is,${result}`);
        break;
    case "modulus":
        result = answers.num1 % answers.num2;
        console.log(`The answer of modulus of your number is,${result}`);
        break;
    default:
        break;
}

import inquirer from "inquirer";
import chalk from "chalk";

const currency:any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt(
    [
        {
    name:"from",
    message: "Enter From Currency:",
    type: "list",
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
},
{
    name:"to",
    message: "Enter To Currency:",
    type: "list",
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
},
{
    name: "amount",
    message: "Enter Your Amount",
    type: "number"
}
]
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
//calculating converted amount
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount;

console.log(chalk.green(`${user_answer.amount} ${user_answer.from} = ${convertedAmount} ${user_answer.to}`));
console.log (chalk.blue(`Thank you for experiencing curreny convertor made by Wariha Khan`));
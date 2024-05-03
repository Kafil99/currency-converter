#! /usr/bin/env node
// Object 
// let students_data: any = {
//     name:"kafil",
//     age:15,
//     rollNo: "0044",
//     address:"Karachi",
// }
// let property: any = "age"
// console.log(students_data[property]);

import inquirer from "inquirer";

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
}

let user_answer = await inquirer.prompt([{
    name:"from",
    type:'list',
    message:"Enter from currency",
    choices: ['USD' , 'EUR' , 'GBP' , 'INR' , 'PKR']
},
{   name:"TO",
    type:'list',
    message:"Enter from currency",
    choices: ['USD' , 'EUR' , 'GBP' , 'INR' , 'PKR']
},
{
    name:"amount",
    message:"Enter your Ammount",
    type:"number",
}
])

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.To]
console.log(fromAmount);
console.log(toAmount);
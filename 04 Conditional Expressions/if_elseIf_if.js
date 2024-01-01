const prompt = require("prompt-sync")();
let age=prompt("Enter your age: ");
age=Number.parseInt(age);

if (age<0)
{
    console.log("Pls enter valid age.");
}
else if(age<18)
{
    console.log("You can't vote.");
}
else
{
    console.log("You can vote.");
}
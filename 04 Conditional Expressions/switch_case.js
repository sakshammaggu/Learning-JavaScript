const prompt=require("prompt-sync")();
let a=prompt("Enter a: ");
a=Number.parseInt(a);

switch(a)
{
    case 1:
        console.log("Value of a is 1.");
        break;
    case 2:
        console.log("Value of a is 2.");
        break;
    default:
        console.log("Value of a is none of the above.");
        break;
}
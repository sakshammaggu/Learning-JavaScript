// while loop
const prompt=require("prompt-sync")();
let n=prompt("Enter n: ");
let i=0;
while (i<n)
{
    console.log(i);
    i++;
}

console.log("\n");

// do while loop
i=0;
do
{
    console.log(i);
    i++;
}while (i<n)
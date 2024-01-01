// for loop
const prompt=require("prompt-sync")();
let n=prompt("Enter n: ");
for (let i=0; i<n; i++)
{
    console.log(i);
}

console.log("\n");

// for in loop
const obj={
    a:1,
    b:2,
    c:3
};
for (let j in obj)
{
    console.log(j+"->"+obj[j]);
}

console.log("\n");

// for of loop
let str="saksham";
for (let k of str)
{
    console.log(k);
}
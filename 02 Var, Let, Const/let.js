// var can't be redeclared
let a="saksham";
// let a=4;    // ---> will throw an error
console.log(a);

// var can be updated, the updated value will be latest assigned value
let b="Saksham";
b=5;
console.log(b);

// var is globally scoped
let c="Saksham";
{
    let c="This";
    console.log(c);
}
console.log(c);
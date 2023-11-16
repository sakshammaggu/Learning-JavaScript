// var can be redeclared, the output will be latest declared variable
var a="saksham";
var a=4;
console.log(a);

// var can be updated, the updated value will be latest assigned value
var b=5;
var b="Saksham";
console.log(b);

// var is globally scoped
var c="Saksham";
{
    var c="This";
    console.log(c);
}
console.log(c);
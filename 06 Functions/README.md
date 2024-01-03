Functions in JavaScript play a crucial role in code organization, reusability, and modularity. 
They allow you to encapsulate a block of code, give it a name, and then invoke it whenever needed. 
Whether you're working on a small project or a large-scale application, understanding and utilizing functions effectively is key to writing clean and maintainable code.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In JavaScript, you can define a function using the function keyword, followed by the function name and a pair of parentheses. 
Parameters can be specified inside the parentheses, and the function body is enclosed within curly braces.

function add(a, b) {
  return a + b;
}

Functions are invoked or called using the function name followed by parentheses. The actual values passed during the invocation are called arguments.

let result = add(3, 5); // result will be 8


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Anonymous Functions
-------------------

Functions without a name are called anonymous functions. 
They are often used in situations where a function is used as an argument to another function or assigned to a variable.

let multiply = function(x, y) {
  return x * y;
};

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Arrow Functions
----------------

ES6 introduced arrow functions, a concise syntax for writing functions. They are especially handy for short, one-line functions.

const square = (num) => num * num;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Function Scope
----------------

Variables declared inside a function are typically scoped to that function, meaning they are not accessible outside of it. 
This helps in preventing naming conflicts and maintaining a clean code structure.

function exampleScope() {
  let localVar = 'I am a local variable';
  console.log(localVar);
}

// Accessing localVar outside the function will result in an error.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

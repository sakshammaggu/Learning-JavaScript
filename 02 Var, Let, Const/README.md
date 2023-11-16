In this, var, let and const has been briefly discussed.

1) var: Variables declared with var are function-scoped, meaning they are only visible within the function where they are declared.
        var variables are hoisted to the top of their scope, which means they can be used before the declaration in the code.
        var allows for variable redeclaration within the same scope.

2) let: Variables declared with let are block-scoped, meaning they are only visible within the block (a pair of curly braces) where they are declared.
        let variables are hoisted to the top of their block but are not initialized until the declaration statement is encountered. This is known as the "temporal dead zone."
        let does not allow variable redeclaration within the same scope.

3) const: Variables declared with const are also block-scoped.
          const is used to declare constants, meaning their values cannot be reassigned after initialization.
          Like let, const is hoisted but, similar to let, it's not initialized until the declaration statement is reached.

In modern JavaScript development, it's generally recommended to use let and const over var due to their more predictable scoping behavior and the ability to catch certain types of programming errors. 
const is particularly useful when you want to ensure that a variable's value remains constant throughout its scope.

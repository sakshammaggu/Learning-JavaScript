In JavaScript, loops are structures that allow you to repeatedly execute a block of code as long as a specified condition is true. 
There are several types of loops in JavaScript, including "for," "while," and "do-while" loops.

1) For Loop:
The for loop is used when you know in advance how many times you want to execute a block of code. It consists of three parts: initialization, condition, and iteration.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

---------------------------------

3) While Loop:
The while loop is used when you don't know in advance how many times you want to execute the code.
It continues to execute the block of code as long as the specified condition is true.

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

---------------------------------

3) Do-While Loop:
Similar to the while loop, the do-while loop executes the block of code at least once before checking the condition.

let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);

---------------------------------

4) For-In Loop (Iterating over Object Properties):
The for-in loop is used to iterate over the properties of an object.

const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

---------------------------------

5) For-Of Loop (Iterating over Iterables):
The for-of loop is used to iterate over values of an iterable object, such as an array.

const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

---------------------------------


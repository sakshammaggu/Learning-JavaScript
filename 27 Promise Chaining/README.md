Promise chaining in JavaScript is a technique used to execute asynchronous operations sequentially or in a specific order. This is especially useful when dealing with multiple asynchronous tasks that depend on each other's results. Promise chaining allows you to attach multiple `.then()` methods to a promise, where each `.then()` handles the result of the previous promise or performs further asynchronous operations.

Here's an example of promise chaining:

```javascript
function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First result');
    }, 1000);
  });
}

function asyncOperation2(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previousResult + ' - Second result');
    }, 1000);
  });
}

asyncOperation1()
  .then(result1 => {
    console.log(result1); // Output: First result
    return asyncOperation2(result1);
  })
  .then(result2 => {
    console.log(result2); // Output: First result - Second result
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example:

1. `asyncOperation1()` is called, which returns a promise. Inside this promise, there's a `setTimeout` function that resolves the promise after 1 second.
2. Once the promise returned by `asyncOperation1()` is resolved, the `.then()` method is invoked, and it receives the result of the first asynchronous operation (`result1`).
3. Inside the `.then()` block, `asyncOperation2()` is called, passing `result1` as an argument. This starts the second asynchronous operation.
4. After `asyncOperation2()` finishes and resolves its promise, the second `.then()` method is invoked, receiving the result of the second operation (`result2`).
5. Finally, the result of the second operation is logged to the console.

If any of the promises reject (encounter an error), the `.catch()` method will catch the error, allowing you to handle it appropriately.

This chaining pattern allows for cleaner and more readable asynchronous code, avoiding the callback hell problem.

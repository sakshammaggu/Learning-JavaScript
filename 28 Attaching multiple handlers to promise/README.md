In JavaScript, you can attach multiple handlers to a promise using the `.then()` method. Each `.then()` call returns a new promise, allowing you to chain multiple handlers together. Here's an example:

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    // Resolving the promise with a value
    resolve("Success!");
  }, 2000);
});

// Attaching multiple handlers to the promise
myPromise
  .then((result) => {
    console.log("First handler:", result);
    // Returning a new value to be passed to the next handler
    return result.toUpperCase();
  })
  .then((modifiedResult) => {
    console.log("Second handler:", modifiedResult);
    // Returning a new value to be passed to the next handler
    return modifiedResult.split("").reverse().join("");
  })
  .then((reversedResult) => {
    console.log("Third handler:", reversedResult);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

In this example:

- We create a promise (`myPromise`) that resolves after 2 seconds.
- We attach multiple handlers using `.then()`. Each handler performs a specific action on the resolved value and returns a new value or a promise.
- The handlers are executed sequentially in the order they are chained.
- If any of the handlers encounter an error (or if the promise is rejected), the `.catch()` method is called to handle the error.

This chaining of `.then()` calls allows for a more organized and readable way of handling asynchronous operations and their results.

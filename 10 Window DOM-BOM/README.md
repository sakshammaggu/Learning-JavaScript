In JavaScript, the Document Object Model (DOM) and the Browser Object Model (BOM) are two essential components that enable interaction with web pages and the browser environment.

### Document Object Model (DOM):

The DOM represents the structure of a document as a tree of objects. Each node in the tree corresponds to an element in the document, such as HTML elements. The DOM provides a way to interact with and manipulate the content, structure, and style of a document dynamically.

- **Accessing Elements:**
  ```javascript
  // Get an element by its ID
  let elementById = document.getElementById("myElementId");

  // Get elements by tag name
  let elementsByTagName = document.getElementsByTagName("p");

  // Get elements by class name
  let elementsByClassName = document.getElementsByClassName("myClass");
  ```

- **Manipulating Elements:**
  ```javascript
  // Change the text content of an element
  elementById.textContent = "New text content";

  // Add a new element
  let newElement = document.createElement("div");
  document.body.appendChild(newElement);
  ```

- **Event Handling:**
  ```javascript
  // Add an event listener to an element
  elementById.addEventListener("click", function() {
    alert("Element clicked!");
  });
  ```

### Browser Object Model (BOM):

The BOM represents the browser as an object, providing methods and properties to interact with the browser itself rather than the document. The global `window` object is a part of the BOM.

- **Window Object:**
  ```javascript
  // Open a new browser window
  window.open("https://www.example.com", "_blank");

  // Redirect to a new URL
  window.location.href = "https://www.newurl.com";
  ```

- **Timers:**
  ```javascript
  // Execute a function after a specified delay
  setTimeout(function() {
    console.log("Delayed function executed");
  }, 2000);
  ```

- **Alert, Prompt, Confirm:**
  ```javascript
  // Display an alert
  window.alert("This is an alert!");

  // Display a prompt
  let userInput = window.prompt("Enter something:", "Default value");

  // Display a confirmation dialog
  let userConfirmed = window.confirm("Do you want to proceed?");
  ```

- **Screen Information:**
  ```javascript
  // Get screen width and height
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  ```

It's important to note that while the DOM is a standardized part of JavaScript for working with web documents, the BOM is not standardized, and its features may vary between browsers. In practice, developers often use libraries and frameworks to abstract away some of the differences in browser implementations.

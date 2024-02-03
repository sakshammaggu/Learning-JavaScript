In HTML, attributes provide additional information about HTML elements and can be manipulated using JavaScript. Here are some common HTML attributes and corresponding methods in JavaScript to access or modify them:

1. **Element Content:**
   - **Attribute: `innerHTML`**
   - **JavaScript Method: `element.innerHTML`**
     ```html
     <div id="example">Hello, World!</div>
     ```

     ```javascript
     var element = document.getElementById("example");
     console.log(element.innerHTML); // Output: Hello, World!
     ```

2. **Element Value (for input elements):**
   - **Attribute: `value`**
   - **JavaScript Method: `element.value`**
     ```html
     <input type="text" id="username" value="JohnDoe">
     ```

     ```javascript
     var usernameInput = document.getElementById("username");
     console.log(usernameInput.value); // Output: JohnDoe
     ```

3. **CSS Class:**
   - **Attribute: `class`**
   - **JavaScript Methods: `element.classList.add()`, `element.classList.remove()`, `element.classList.toggle()`, `element.classList.contains()`**
     ```html
     <div id="example" class="highlight">This is a div</div>
     ```

     ```javascript
     var element = document.getElementById("example");
     element.classList.add("newClass"); // Add a new class
     element.classList.remove("highlight"); // Remove a class
     console.log(element.classList.contains("newClass")); // Check if a class is present
     ```

4. **Source URL (for images, scripts, etc.):**
   - **Attribute: `src`**
   - **JavaScript Method: `element.src`**
     ```html
     <img id="image" src="example.jpg" alt="Example Image">
     ```

     ```javascript
     var imageElement = document.getElementById("image");
     console.log(imageElement.src); // Output: full URL of the image
     ```

5. **Hyperlink Href:**
   - **Attribute: `href`**
   - **JavaScript Method: `element.href`**
     ```html
     <a id="link" href="https://www.example.com">Visit Example</a>
     ```

     ```javascript
     var linkElement = document.getElementById("link");
     console.log(linkElement.href); // Output: https://www.example.com
     ```

These are just a few examples, and there are many other HTML attributes that you can interact with using JavaScript, depending on the type of HTML element you are working with. Additionally, some attributes may have specific properties or methods associated with them. Always refer to the specific documentation for the HTML element and the DOM manipulation in JavaScript for detailed information.

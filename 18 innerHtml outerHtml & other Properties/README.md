In JavaScript, the `innerHTML` and `outerHTML` properties are used to manipulate the content of HTML elements. These properties are primarily used to get or set the HTML content of an element.

1. **innerHTML:**
   - The `innerHTML` property represents the HTML content inside an element, excluding the element itself.
   - It can be used to retrieve the HTML content of an element or set new HTML content.

   ```javascript
   // Get the HTML content of an element with id "example"
   var content = document.getElementById("example").innerHTML;

   // Set new HTML content to an element with id "example"
   document.getElementById("example").innerHTML = "<p>New content</p>";
   ```

   Keep in mind that using `innerHTML` to set content may introduce security risks such as Cross-Site Scripting (XSS) if the content is not properly sanitized.

2. **outerHTML:**
   - The `outerHTML` property represents the entire HTML content of an element, including the element itself.
   - It can be used to retrieve the HTML content of an element along with its opening and closing tags or set new HTML content for an entire element.

   ```javascript
   // Get the HTML content, including the element, of an element with id "example"
   var fullContent = document.getElementById("example").outerHTML;

   // Set new HTML content, including the element, to an element with id "example"
   document.getElementById("example").outerHTML = "<div>New content</div>";
   ```

   Similar to `innerHTML`, caution should be exercised when using `outerHTML` to set content, as it also may have security implications.

It's important to note that while these properties are powerful for manipulating HTML content, they can also be prone to security vulnerabilities if not used carefully. Always ensure that any dynamic content being inserted is properly sanitized to prevent malicious attacks like XSS.

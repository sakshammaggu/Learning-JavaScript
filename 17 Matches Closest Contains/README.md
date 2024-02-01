1. **Matches:**
   - The `matches` method is used to check if an element matches a specific CSS selector. It returns a Boolean value. Here's an example:
   ```javascript
   var element = document.getElementById("myElementId");
   if (element.matches(".myClassName")) {
       // Do something if the element matches the selector
   }
   ```

2. **Closest:**
   - The `closest` method is used to find the closest ancestor of an element that matches a given CSS selector. It traverses up the DOM hierarchy. Here's an example:
   ```javascript
   var element = document.getElementById("myElementId");
   var closestContainer = element.closest(".container");
   ```

3. **Contains:**
   - The `contains` method is used to check if a particular element is a descendant of another element. It returns a Boolean value. Here's an example:
   ```javascript
   var parentElement = document.getElementById("parentElementId");
   var childElement = document.getElementById("childElementId");
   
   if (parentElement.contains(childElement)) {
       // Do something if the parent contains the child
   }
   ```

Each of these methods serves a different purpose:

- `matches` checks if the element itself matches a selector.
- `closest` finds the closest ancestor that matches a selector.
- `contains` checks if an element is a descendant of another element.

Make sure to use the appropriate method based on your specific use case.

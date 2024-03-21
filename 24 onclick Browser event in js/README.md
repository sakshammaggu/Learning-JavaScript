The `onclick` event is a commonly used event handler in JavaScript that executes a specified function when an HTML element is clicked. It is part of the Document Object Model (DOM) Events API. Here's how you can use it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>onclick Event Example</title>
</head>
<body>

<button id="myButton">Click Me</button>

<script>
  // Get a reference to the button element
  var button = document.getElementById('myButton');

  // Define a function to be executed when the button is clicked
  function handleClick() {
    alert('Button clicked!');
  }

  // Add an onclick event listener to the button, specifying the function to execute
  button.onclick = handleClick;
</script>

</body>
</html>
```

In this example:

- We have an HTML button element with the id `myButton`.
- We select this button using `document.getElementById('myButton')` and assign it to the variable `button`.
- We define a function `handleClick()` that will display an alert when called.
- We assign the `handleClick` function to the `onclick` event of the button using `button.onclick = handleClick;`.

When the button is clicked, the `handleClick()` function is executed, and an alert saying "Button clicked!" will appear.

To change HTML classes using JavaScript, you can utilize the `classList` property of the DOM element. This property provides methods to add, remove, or toggle classes. Here's how you can do it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Change HTML Classes in JavaScript</title>
<style>
  .highlight {
    background-color: yellow;
  }
</style>
</head>
<body>

<div id="myElement">This is a div.</div>
<button onclick="highlightElement()">Highlight</button>
<button onclick="removeHighlight()">Remove Highlight</button>

<script>
function highlightElement() {
  var element = document.getElementById("myElement");
  element.classList.add("highlight");
}

function removeHighlight() {
  var element = document.getElementById("myElement");
  element.classList.remove("highlight");
}
</script>

</body>
</html>
```

In this example:

- We have a `<div>` element with the id "myElement".
- There are two buttons: "Highlight" and "Remove Highlight".
- Clicking the "Highlight" button will add the "highlight" class to the `<div>`, thus changing its background color to yellow.
- Clicking the "Remove Highlight" button will remove the "highlight" class from the `<div>`, reverting its background color to default.

This is a basic example. You can modify it according to your requirements and add more complex logic as needed.

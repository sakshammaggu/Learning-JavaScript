let b=document.body;

console.log("First child node:", b.firstChild);  // returns any type of child node whether its a text or comment node
console.log("First Element child node:", b.firstElementChild);   // returns only that child which is the element

let firstChild=b.firstChild;

console.log("Previous sibling:", firstChild.previousSibling);    // returns the previous sibling 
console.log("Previous Element sibling:", b.previousElementSibling);    // returns the previous element sibling 

console.log("Next sibling:", firstChild.nextSibling);    // returns the previous sibling 
console.log("Next Element sibling:", b.nextElementSibling);    // returns the previous element sibling 
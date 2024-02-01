// searching the element through id
let elementById=document.getElementById("1");
console.log(elementById);
elementById.style.color="red";

// searching the elements through class name
let elementsByClass=document.getElementsByClassName("lorem");
console.log(elementsByClass);
elementsByClass[0].style.color="blue";
elementsByClass[1].style.color="purple";

// searching the elements through tag name
let elementsByTagName=document.getElementsByTagName("p");
console.log(elementsByTagName);

// searching and returns all the elements through class selector
let querySelectorAll=document.querySelectorAll(".lorem");
console.log(querySelectorAll);

// searching and returns first element through class selector
let querySelector=document.querySelector(".lorem");
console.log(querySelector);
// console.dir
let elem=document.getElementsByClassName("p");
console.log(elem[0]);   // returns the element
console.dir(elem[0]);   // returns the element as an object with its properties

// nodeName
let firstChild=document.body.firstChild;
console.log(firstChild, firstChild.nodeName);

// tagName
let firstElementChild=document.body.firstElementChild;
console.log(firstElementChild, firstElementChild.nodeName);

// innerHTML
let item1=document.getElementById("3").innerHTML;
console.log(item1);
let item2=document.getElementById("4");
item2.innerHTML="Hello World 4";
console.log(item2.innerHTML);

// outerHTML
let item3=document.getElementById("5").outerHTML;
console.log(item3);

// hidden attribute
let item4=document.getElementById("6");
item4.hidden=false;
let item5=document.getElementById("7");
item5.hidden=true;

// textContent
console.log(document.body.textContent);
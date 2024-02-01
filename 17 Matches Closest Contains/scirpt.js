let divId=document.getElementById("div-id");
let pId=document.getElementById("p-id");

// elem.matches(CSS selector) -> returns bool after checking if element matches the given css selector
let isMatch1=divId.matches("#div-id");
console.log(isMatch1);
let isMatch2=divId.matches("#div-id1");
console.log(isMatch2);
let isMatch3=pId.matches("#p-id");
console.log(isMatch3);
let isMatch4=pId.matches("#div-id1");
console.log(isMatch4);

// elem.closest(CSS selector) -> to look for nearest ancestor that matches the css selector, element itself is also checked
console.log(divId.closest("#div-id"));

// elemA.contains(elemB) -> return bool after checking is elemB is contained inside the elemA
let isContained=divId.contains(pId);
console.log(isContained);
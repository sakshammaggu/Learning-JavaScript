// elem.hasAttribute -> check whether the attribute is in the element
let elem1=document.getElementById("1");
console.log(elem1.hasAttribute("id"));
console.log(elem1.hasAttribute("class"));

// elem.getAttribute -> returns the value of attribute in the element
let elem2=document.getElementById("2");
let attributeValue1=elem2.getAttribute("class");
console.log(attributeValue1);

// elem.setAttribute -> sets the value of attribute in the element
let elem3=document.getElementById("3");
elem3.setAttribute("class", "class3");
let attributeValue2=elem3.getAttribute("class");
console.log(attributeValue2);

// elem.removeAttribute -> removes the attribute in the element
let elem4=document.getElementById("4");
elem4.removeAttribute("class");
console.log(elem4);

// elem.attributes -> return the collection of all attribute present in the element
let elem5=document.getElementById("5");
console.log(elem5, elem5.attributes);

// data- attributes -> custom made attributes made by user, accessed by .dataset
let elem6=document.getElementById("6");
console.log(elem6);
console.log(elem6.dataset);
console.log(elem6.dataset.newid);
console.log(elem6.dataset.newclass);
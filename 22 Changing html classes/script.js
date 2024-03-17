// elem.classList.add("class") -> adds a class
let id1=document.getElementById("first");
id1.classList.add("1st");

// elem.classList.remove("class") -> removes a class
let id2=document.getElementById("second");
id2.classList.remove("2");

// elem.classList.toggle("class") -> adds a class if not present and removes it if present
let id3=document.getElementById("third");
id3.classList.toggle("3");
id3.classList.toggle("3rd");

// elem.classList.contains("class") -> checks a class whether it is there in the element
let id4=document.getElementById("fourth");
console.log(id4.classList.contains("4"));
console.log(id4.classList.contains("4th"));
let list=document.getElementsByTagName("p");
for (let i in list)
{
    console.log(i);
}
list[0].style.color="red";
list[1].style.color="yellow";

// accessing document.body and type of it (object)
let tag1=(document.body.tagName) + " " + (typeof document.body);
document.getElementById("3").innerHTML=tag1;

// accessing document.head and type of it (object)
let tag2=(document.head.tagName) + " " + (typeof document.head);
document.getElementById("4").innerHTML=tag2;

// accessing document.title and type of it (string)
let tag3=(document.title) + " " + (typeof document.title);
document.getElementById("5").innerHTML=tag3;

// accessing document.title and type of it (string)
let tag4=(document.documentElement.tagName) + " " + (typeof document.documentElement);
document.getElementById("6").innerHTML=tag4;
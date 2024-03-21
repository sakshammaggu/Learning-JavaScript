// updating js when button is clicked
let id=document.getElementById("button");
id.onclick=function(){
    let paraId=document.getElementById("para");
    paraId.innerHTML="Hello World";
    alert("onclick");
};
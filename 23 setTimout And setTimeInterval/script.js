// setTimout -> displays the content of function after specified seconds
let a=setTimeout(function(){
    alert("This is a setTimout.");
}, 3000);
console.log(a);

const sum1=(a, b)=>{
    console.log(a+b);
}
let b=setTimeout(sum1, 3000, 1, 2);
console.log(b);

clearTimeout(a);
clearTimeout(b);

// setTimout -> displays the content of function again and again after specified interval of time
/*
    let c=setInterval(function(){
        alert("This is a setInterval.");
    }, 3000);
*/
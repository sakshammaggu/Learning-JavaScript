// promise chaining removes the problem of pyramid of doom or callback hell
console.log("2nd promise chaining.");
let p1=new Promise((resolve, reject)=>{
    console.log("Promise 1 Pending.");

    setTimeout(()=>{
        console.log("Promise 1 resolved after 1s.");
        resolve("Promise 1 resolved.");
    }, 1000)
})

p1.then((value)=>{
    console.log(value);

    let p2=new Promise((resolve, reject)=>{
        console.log("Promise 2 Pending.");

        setTimeout(()=>{
            console.log("Promise 2 rejected after 1s.");
            reject(new Error("Error occured in Promise 2."));
        }, 1000)
    })

    return p2;
}).then((value)=>{
    console.log("We are done with both promises.");

    console.log(value);

    return true;
}).catch((error)=>{
    console.log(error);
})
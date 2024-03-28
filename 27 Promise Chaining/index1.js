// promise chaining removes the problem of pyramid of doom or callback hell
console.log("1st promise chaining.");

let p1=new Promise((resolve, reject)=>{
    console.log("Promise 1 Pending.");

    setTimeout(()=>{
        console.log("Promise 1 resolved after 3s.");
        resolve("Promise 1 resolved.");
    }, 3000)
})

p1.then((value)=>{
    console.log(value);

    let p2=new Promise((resolve, reject)=>{
        console.log("Promise 2 Pending.");

        setTimeout(()=>{
            console.log("Promise 2 resolved after 3s.");
            resolve("Promise 2 resolved.")
        }, 3000)
    })

    return p2;
}).then((value)=>{
    console.log(value);

    console.log("We are done with both promises.");

    return true;
}).catch((error)=>{
    console.log(error);
})
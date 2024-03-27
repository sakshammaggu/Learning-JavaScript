// promise with resolve(value)
let p1=new Promise((resolve, reject)=>{
    console.log("Promise Pending.");

    setTimeout(()=>{
        console.log("Promise is fulfilled.");
        resolve(true);
    }, 2000);
});

// promise with reject(error)
let p2=new Promise((resolve, reject)=>{
    console.log("Promise Pending.");

    setTimeout(()=>{
        console.log("Promise is rejected.");
        reject(new Error("Some error occured."));
    }, 2000);
});

p1.then((value)=>{
    console.log(value);
});

p2.catch((error)=>{
    console.log(error);
})

console.log(p1, p2);
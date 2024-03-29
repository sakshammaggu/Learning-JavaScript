let p1=new Promise((resolve, reject)=>{
    console.log("Promise has not resolved.");

    setTimeout(()=>{
        resolve(1);
    }, 2000)
})

// multiple handlers to same promise
p1.then(()=>{
    console.log("Promise has been resolved.");
})
p1.then(()=>{
    console.log("Promise has been resolved after 2s.");
})
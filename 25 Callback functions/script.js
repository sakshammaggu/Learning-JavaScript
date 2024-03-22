// simply adding a script file
/*
    function loadScript(src)
    {
        var script=document.createElement('script');
        script.src=src;
        script.onload=function(){
            console.log("Loaded Script: "+src);
        }

        document.body.appendChild(script);
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
*/
const loadScript1=(src)=>{
    let script1=document.createElement('script');
    script1.src=src;
    script1.onload=()=>{
        console.log("Loaded Script: "+src);
    }
    document.body.appendChild(script1);
}

loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");


// ---------------------------------------------------------------------------------------------------------------------------------------


// adding a script file using callback function (a function that is passed as an argument and is invoked to complete an action)
/*
    function hello()
    {
        alert("Hello World");
        console.log("Hello World");
    }

    function loadScript(src, callback)
    {
        var script=document.createElement('script');
        script.src=src;
        script.onload=function(){
            console.log("Loaded Script: "+src);
            callback();
        }

        document.body.appendChild(script);
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
*/
const hello=()=>{
    alert("Hello World");
    console.log("Hello World");
}

const loadScript2=(src, callback)=>{
    let script2=document.createElement('script');
    script2.src=src;
    script2.onload=()=>{
        console.log("Loaded Script: "+src);
        hello();
    }
    document.body.appendChild(script2);
}

loadScript2("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
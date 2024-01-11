alert("Enter the value of a!"); // alert

// prompt
let a=prompt("Enter a: ");
a=Number.parseInt(a);

// confirm
let write=confirm("Do you want to write the no. in the document: ");    
if (write)
{
    document.write(a);
}
else
{
    document.write("Pls allow the browser to write in the document.")
}
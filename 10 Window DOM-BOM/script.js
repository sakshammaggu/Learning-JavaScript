alert("Enter a number!");
let choice=prompt("Enter choice:");
choice=Number.parseInt(choice);
switch(choice)
{
    case 1:
        document.body.style.background="red";
        break;
    case 2:
        document.body.style.background="yellow";
        break;
    case 3:
        location.href="https://www.google.com/";
    default:
        break;
}
console.log("Question 3")
let name = prompt("Enter the name");
document.write(`Welcome to this Webpage <h1><i>${name}</i></h1>`);

let currtime = document.getElementById('t');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    currtime.innerText = time;
}
setInterval(clock,3000);

let change = document.getElementById('mode');
change.onclick = function changeColor()
{
   document.body.classList.toggle('black');
   document.body.classList.toggle('white');
}
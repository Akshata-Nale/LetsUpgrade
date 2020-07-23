console.log("Question 1");
let arr = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];
let i = 0;
function change()
{
    let color = arr[i++];
    document.body.style.backgroundColor = color;
}
setInterval(change,5000);
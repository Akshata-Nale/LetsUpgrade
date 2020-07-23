console.log("Question 2")
let num = prompt("Enter tthe number");
document.write(`Entered number is ${num}`);
let i;
for(i = 0; i < 11; i++)
{
    document.write("<ul>")
    document.write(`${num} * ${i} = ${num*i}`);
    document.write("</ul>")
}
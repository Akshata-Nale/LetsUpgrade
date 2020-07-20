console.log("Question 5");
var sales = Number(prompt("Enter amount of sales:"));
document.write("Amount of sales:"+sales);
var commision = 0;
if (sales > 0 && sales <= 5000) 
{
  commision = sales * 0.02 + sales;
} 
else if (sales > 5000 && sales <= 10000) 
{
  commision = sales * 0.05 + sales;
} 
else if (sales > 10000 && sales <= 20000) 
{
  commision = sales * 0.07 + sales;
} 
else if (sales > 20000) 
{
  commision = sales * 0.1 + sales;
} 
else 
{
  console.log("You need to have better sale");
}
document.write("<br/>Commision is " + commision);
console.log("Total comission is " + commision);
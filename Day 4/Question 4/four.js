console.log("Question 4")
let a = Number(prompt("Enter first number:"));
console.log(`First number is ${a}`);
document.write(`<br/>First number is ${a}`);
let b = Number(prompt("Enter second number:"));
console.log(`Second number is ${b}`);
document.write(`<br/>Second number is ${b}`);
let choice = Number(prompt("Enter your choice:"+"\n"+"1.Addition"+"\n"+"2.Subtraction"+"\n"+"3.Multiplication"+"\n"+"4.Division"+"\n"+"5.Square root"+"\n"+"6.Percentage"));
console.log(`Your choice is ${choice}`);
document.write(`<br/>Your choice is ${choice}`);
let c;
do
{
    switch(choice)
    {
    case 1:
        c = a + b;
        console.log(`Addition is ${c}`);
        document.write(`<br/>Addition is ${c}`);
        break;
    case 2:
        c = a - b;
        console.log(`Substraction is ${c}`);
        document.write(`<br/>Substraction is ${c}`);
        break;
    case 3:
        c = a * b; 
        console.log(`Multiplication is ${c}`);
        document.write(`<br/>Multiplication is ${c}`);
        break;
    case 4:
        c = a / b;
        console.log(`Division is ${c}`);
        document.write(`<br/>Division is ${c}`);
        break;
    case 5:
        c = Math.sqrt(a);
        console.log(`Square root is ${c}`);
        document.write(`<br/>Square root is ${c}`);
        break;
    case 6:
        c = (100*b)/a;
        console.log(`Percentage is ${c}`);
        document.write(`<br/>Percentage is ${c}`);
        break;
    default:
        console.log("Please enter valid choice.");
        document.write("<br/>Please enter valid choice.");
        break;
    }
}while(choice == 9 )
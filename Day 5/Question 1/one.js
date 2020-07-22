console.log("Question 1");

let a = Number(prompt("Enter a positive number till which you want you array to be:"));
var arr = [];
for(i = 1;i < a; i++)
{
    arr.push(i);
}
console.log(`The list is ${arr}`);

let oddNum = arr.filter((el) => el % 2 == 1 );
console.log(`Filtered odd numbers are ${oddNum}`);

 let cube = oddNum.map((num) => num**3);
 console.log(`Cube of Filtered odd numbers are ${cube}`);
console.log("Question 7");
let num = prompt("Enter a number till which you want to find prime numbers:");
document.write("Prime numbers till"+"\n"+num+"\n"+"are:");
let i;
let j;
let count;
for(i = 2;i <= num; i++)
{
    count=0;
    for(j = 1;j <= i; j++)
    {
        if(i % j == 0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        console.log("The prime numbers are",+i);
        // document.write("<br/>The prime numbers are:");
        document.write("<br/>"+i);
    }
}
console.log("Question 1")
let i = 1
for(i=1;i<=100;i++)
{
    if(i % 3 == 0 && i % 5 != 0)
    {
        document.write("\nfizz",+i);
        console.log("fizz",+i);
    }
    if(i % 5 == 0 && i % 3 != 0)
    {
        document.write("\nbuzz",+i);
        console.log("buzz",+i);
    }
    if(i % 5 == 0 && i % 3 == 0)
    {
        document.write("\nfizzbuzz",+i);
        console.log("fizzbuzz",+i);
    }

}
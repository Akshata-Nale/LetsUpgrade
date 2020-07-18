//var:

var a1 ={Name:"Tony Stark", Avenger:"Iron Man"};
console.log(a1);

function trial()
{
    var a2 =10;
    console.log(a2);
}

// Here we can see that the scope of variable was global when it was defined outside a function. And when the variable is  defined in a function, its scope gets limited to the function within which it was defined. It means "var" is "Function scoped".


//let: 
{
    let name='Akshata';
    name= 'LetsUpgrade';
    console.log(name);
}

//The scope of a variable defined with the keyword “let” is limited to the “block” defined by curly braces i.e. {} .


//const:
 
const country='India';
console.log(country);


//The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. It cannot be reassigned.However it CAN be mutated.

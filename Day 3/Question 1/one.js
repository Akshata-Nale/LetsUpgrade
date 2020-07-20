console.log("Question 1");
let num=prompt("Enter any number:")
console.log(num)
function check(){
    let checked
    if (num % 2 == 0){
        checked="even";
    }
    else{
        checked="odd";
    }
    return checked;


}
let res = check();
console.log(`The enterd number is ${num} and it is ${res}`);
console.log("Question 3")
let marks = prompt("Enter the marks:")
console.log(marks)
let grade
switch(true)
{
    case (marks > "90"):
        grade = "A";
        console.log(`Marks are ${marks} and grade is ${grade}`)
        break;
    
    case (marks > 80):
        grade = "B";
        console.log(`Marks are ${marks} and grade is ${grade}`)
        break;
    
    case (marks > 70):
        grade = "C";
        console.log(`Marks are ${marks} and grade is ${grade}`)
        break;

    case (marks > 60):
        grade = "D";
        console.log(`Marks are ${marks} and grade is ${grade}`)
        break;

    case (marks > 36):
        grade = "E";
        console.log(`Marks are ${marks} and grade is ${grade}`)
        break;
    
    default: 
        grade = "fail"
        console.log(`Marks are ${marks} and grade is ${grade}`)
        break;

}
console.log("Question 2")
//Without destructuring:
const student={
    name: "Helsink",
    age : 24 ,
    projects:{
        diceGame:" Two player dice game using JavaScript",
    },
}
/*let name = console.log(student.name)
let age = console.log(student.age)
let project = console.log(student.projects.diceGame)*/

//With Destructure
let {name,age,projects:{diceGame}}=student;
        console.log(name);
        console.log(age);
        console.log(diceGame);
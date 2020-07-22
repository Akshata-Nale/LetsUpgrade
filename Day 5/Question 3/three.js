console.log("Question 3");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json)
.then(data => console.log(data));


async function fetchJokes(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json();

    console.log(data);
}
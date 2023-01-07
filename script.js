// set a comstant varaible 
//used to store a refrence to an element on the web page where the joke will be displayed 
//This will find the element in the DOM (Document Object Model) with an id of "joke".
const jokeContainer = document.getElementById("joke")


//used to store a reference to a button on the web page that the user can click to get a new joke.
const btn = document.getElementById("btn")


//stores the address of the joke API that the code will use to retrieve jokes.
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

//Let is a function called getJoke

let getJoke = () => {

    jokeContainer.classList.remove("fade");

    //This function uses the fetch function to send a request to the joke API and retrieve a joke.
    fetch(url)

    //the result of the fetch function and passing in a callback function as an argument.
    //The callback function takes the argument data and returns the result of calling json() on data.
    .then(data => data.json())

    //the result of the previous then() and passing in a callback function as an argument.
    //The callback function takes the argument item and sets the textContent property of jokeContainer to the value of item.
    //joke, which is the joke that was retrieved from the API.
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade")
});
}
btn.addEventListener("click", getJoke);
getJoke();
// Your code here
const API =   "http://localhost:3000/films"

let movieId;


function fetchIt(movieId){
    movieId = 1;
    fetch(`http://localhost:3000/films/${movieId}`)
    .then((resp) => resp.json())
    .then(renderMovie)
}

function renderMovie(movie){
    //getelements

    console.log(movie)
    const imgEl = document.getElementById("poster")
    const title = document.getElementById("title")
    const runtime = document.getElementById("runtime")
    const desc = document.getElementById("film-info")
    const showTime = document.getElementById("showtime")
    const span = document.getElementById("ticket-num")

    //populate
    title.textContent = movie.title
    runtime.textContent = movie.runtime
    desc.textContent = movie.description
    showTime.textContent = movie.showtime
    imgEl.src = movie.poster
    span.textContent = movie.capacity - movie.tickets_sold


    //eventlistener
    const button = document.getElementById("buy-ticket")
    console.log(button)
    button.addEventListener("click", decreaseTickets)
    function decreaseTickets(){
        if(span.textContent >= 1){
            span.textContent --}
        else{
            button.textContent = "Sold Out"
            alert("No More tickets")
        }
    }

}

function showMovies(){
    fetch(API)
    .then((resp) => resp.json())
    .then(renderTitles)
}

function renderTitles(titles){
    titles.forEach(rendertitle)
}

function rendertitle(title){
   
    const createList = document.createElement("li")
    const container = document.getElementById("films")
    const deleteBtn = document.createElement("button")
    

    //populate
    createList.textContent = title.title
    deleteBtn.textContent = "Delete"


    //append
    createList.append(deleteBtn)
    container.append(createList)

    deleteBtn.addEventListener("click", deleteIt)
    function deleteIt(){
        createList.remove()
    }
    //clickList    

}



fetchIt()
showMovies()
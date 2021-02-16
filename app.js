const container = document.querySelector(".main-content");
const clearChildren = function (element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
};
const displayHomeView = function(movies) {
    clearChildren(container);
    let main = movieElement(movies); 
    container.prepend(main)
}


fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	}
})
.then((response) => response.json())
.then((movies) => displayHomeView(movies))
.catch(err => {
	console.error(err);
});


const movieElement = function(movies){
    
    
    const mainElement = document.createElement("section");
    container.appendChild(mainElement) 

    movies.movie_results.forEach(movie => {
    const title = document.createElement("section");
    title.innerText = "movie"
    title.innerText = movie.title
    container.appendChild(title)
    });
    return movieElement
} 



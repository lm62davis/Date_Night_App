const movieElement = function(movies){
    

    const mainElement = document.createElement("main");

  // const test = document.createElement("section")
    movies.movie_results.forEach(movie => {
    const title = document.createElement("section");
    title.innerText = movie.title
    mainElement.appendChild(title)
    });
    return mainElement
} 
export {movieElement};
const movieElement = function(movies){
    

    const mainElement = document.createElement("div");
    mainElement.classList.add("movie-container")

    const movieDropdownLabel = document.createElement("select")
    movieDropdownLabel.classList.add("movie-dropdown-label")
    mainElement.appendChild(movieDropdownLabel)
    
    const defaultGenreDropdown = document.createElement("option")
    defaultGenreDropdown.selected = true
    defaultGenreDropdown.innerText = "Select a genre"
    movieDropdownLabel.appendChild(defaultGenreDropdown)

    const musicGenreDropdown = document.createElement("option")
    musicGenreDropdown.innerText = "Music"
    const horrorGenreDropdown = document.createElement("option")
    horrorGenreDropdown.innerText = "Horror"
    const thrillerGenreDropdown = document.createElement("option")
    thrillerGenreDropdown.innerText = "Thriller"
    const mysteryGenreDropdown = document.createElement("option")
    mysteryGenreDropdown.innerText = "Mystery"
    
    movieDropdownLabel.appendChild(musicGenreDropdown)
    movieDropdownLabel.appendChild(horrorGenreDropdown)
    movieDropdownLabel.appendChild(thrillerGenreDropdown)
    movieDropdownLabel.appendChild(mysteryGenreDropdown)


    //horror, thriller, mystery, music


    

    
    const movieButton = document.createElement("button")
    movieButton.innerText = "Generate"
    mainElement.appendChild(movieButton)

    
    return mainElement
} 
export {movieElement};

// movies.movie_results.forEach(movie => {
    // const title = document.createElement("section");
    // title.innerText = movie.title
    // mainElement.appendChild(title)
    // });
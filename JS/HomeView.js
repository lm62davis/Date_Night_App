const homeElement = function(movies, food){
 
    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

    //Movies
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-container")
    mainElement.appendChild(movieElement)

    const movieDropdownLabel = document.createElement("select")
    movieDropdownLabel.classList.add("movie-dropdown-label")
    movieElement.appendChild(movieDropdownLabel)
    
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
    
    // const genreSelector = function () {
    // horrorGenreDropdown.addEventListener("click", () => {

    // }    
    // }

    movieDropdownLabel.appendChild(musicGenreDropdown)
    movieDropdownLabel.appendChild(horrorGenreDropdown)
    movieDropdownLabel.appendChild(thrillerGenreDropdown)
    movieDropdownLabel.appendChild(mysteryGenreDropdown)

    const movieButton = document.createElement("button")
    movieButton.innerText = "Generate"
    movieElement.appendChild(movieButton)



    //Restaurants
    const foodElement = document.createElement("div");
    foodElement.classList.add("food-container")
    mainElement.appendChild(foodElement)

    const foodDropdownLabel = document.createElement("select")
    foodDropdownLabel.classList.add("food-dropdown")
    foodElement.appendChild(foodDropdownLabel)
    
    const defaultCuisineDropdown = document.createElement("option")
    defaultCuisineDropdown.selected = true
    defaultCuisineDropdown.innerText = "Select a Cuisine"
    foodDropdownLabel.appendChild(defaultCuisineDropdown)

    const sandwichesCuisineDropdown = document.createElement("option")
    sandwichesCuisineDropdown.innerText = "Sandwiches"
    const coffeeAndTeaCuisineDropdown = document.createElement("option")
    coffeeAndTeaCuisineDropdown.innerText = "Coffee and Tea"
    // const foodCuisineDropdown = document.createElement("option")
    // Dropdown.innerText = ""
    // const mysteryGenreDropdown = document.createElement("option")
    // mysteryGenreDropdown.innerText = ""
    
    foodDropdownLabel.appendChild(sandwichesCuisineDropdown)
    foodDropdownLabel.appendChild(coffeeAndTeaCuisineDropdown)
  
 
    const foodButton = document.createElement("button")
    foodButton.innerText = "Generate"
    foodElement.appendChild(foodButton)

    
  

    return mainElement
} 
export {homeElement};

// movies.movie_results.forEach(movie => {
    // const title = document.createElement("section");
    // title.innerText = movie.title
    // movieElement.appendChild(title)
    // });
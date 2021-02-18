import { clearChildren } from "./app.js"
const randomize = function(list) {
    //console.log(list)
    //console.log(list.length + " list lngth")
    let randomNumber = Math.floor(Math.random() * list.length)
    //console.log(randomNumber)
    let generatedMovie = list[randomNumber]
    return generatedMovie

}

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

    let genre = []
    
    movies.movie_results.forEach(movie => {
        genre.push(movie.genres);
       console.log(genre)
       
    });
   
    let newGenre = [];
  
    for (let i in genre) {          //change to forEach
        for (let j in genre[i]) {
            newGenre.push(genre[i][j]);
            
        }
    }

    console.log(newGenre)
    let finalGenreList = Array.from(new Set(newGenre))   //removes duplicates
    console.log(finalGenreList);
    

    //create dropdown options
    for (let i = 0; i < finalGenreList.length; i++) {
        const option = finalGenreList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        movieDropdownLabel.appendChild(dropdown)        
    }

    let moviesByCategory = []
  

    document.addEventListener("input", () => {
       
          
          movies.movie_results.forEach(movie => {
            movie.genres.forEach(genre => {
                if(genre === event.target.value) {      //find alternative to event.target.value
                    moviesByCategory.push(movie.title)
                    //moviesByYoutube.push(movie.)
                }
            })
          })
        console.log(moviesByCategory)
    
        //alert("You chose " + event.target.value)
    });

    let movieName;
    const movieButton = document.createElement("button")
    movieButton.innerText = "Generate"
    movieElement.appendChild(movieButton)
    movieButton.addEventListener("click", () => {       //test to make sure selected is not default value. if to diff just switch back to label & input
       movieName = randomize(moviesByCategory);

       const movieNameElement = document.createElement("section");
       
       movieNameElement.innerText = movieName;
       movieElement.appendChild(movieNameElement)
       
    })
    

    



    // const musicGenreDropdown = document.createElement("option")
    // musicGenreDropdown.innerText = "Music"
    // const horrorGenreDropdown = document.createElement("option")
    // horrorGenreDropdown.innerText = "Horror"
    // const thrillerGenreDropdown = document.createElement("option")
    // thrillerGenreDropdown.innerText = "Thriller"
    // const mysteryGenreDropdown = document.createElement("option")
    // mysteryGenreDropdown.innerText = "Mystery"

    // movieDropdownLabel.appendChild(musicGenreDropdown)
    // movieDropdownLabel.appendChild(horrorGenreDropdown)
    // movieDropdownLabel.appendChild(thrillerGenreDropdown)
    // movieDropdownLabel.appendChild(mysteryGenreDropdown)

  

    
    //     }
        
    // })

    // const genreSelector = []
    
    // movies.movie_results.forEach(movie => {
    //     //const title = document.createElement("section");
    //     genreSelector.push(movie.genre)
    //     console.log(genreSelector)
    //     //movieElement.appendChild(title)
    // });
    
    // console.log(genreSelector)

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
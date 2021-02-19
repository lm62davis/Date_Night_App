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
    //    console.log(genre)
       
    });
   
    let newGenre = [];
  
    for (let i in genre) {          //change to forEach
        for (let j in genre[i]) {
            newGenre.push(genre[i][j]);
            
        }
    }

    console.log(newGenre)
    let finalGenreList = Array.from(new Set(newGenre))   //removes duplicates
    // console.log(finalGenreList);
    

    //create dropdown options
    for (let i = 0; i < finalGenreList.length; i++) {
        const option = finalGenreList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        movieDropdownLabel.appendChild(dropdown)        
    }

    let moviesByCategory = []
  

    movieDropdownLabel.addEventListener("change", () => {
       
        moviesByCategory = []
          movies.movie_results.forEach(movie => {
            movie.genres.forEach(genre => {
                if(genre === movieDropdownLabel.value) {      //find alternative to event.target.value
                    moviesByCategory.push(movie.title)
                    //moviesByYoutube.push(movie.)
                }
            })
          })
        // console.log(moviesByCategory)
    
        //alert("You chose " + event.target.value)
    });

    let movieName;
    const movieButton = document.createElement("button")
    movieButton.innerText = "Generate"
    movieElement.appendChild(movieButton)
    const movieNameElement = document.createElement("section");
    movieButton.addEventListener("click", () => {       //test to make sure selected is not default value. if to diff just switch back to label & input
       movieName = randomize(moviesByCategory);
        movieNameElement.innerText = movieName;
       movieElement.appendChild(movieNameElement)
       
    })
    
    
  

    return mainElement
} 
export {homeElement};

// movies.movie_results.forEach(movie => {
    // const title = document.createElement("section");
    // title.innerText = movie.title
    // movieElement.appendChild(title)
    // });
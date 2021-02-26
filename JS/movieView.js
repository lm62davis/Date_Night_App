import { clearChildren } from "./app.js"

const randomize = function(title, id){
    // console.log(list)
    //console.log(list.length + " list lngth")
    
    if (title.length ==0) {
        possibleMovieNum.push("");
        return "";
    }
    else {
    let randomNumber = Math.floor(Math.random() * title.length)
        //console.log(randomNumber)

    let generatedName = title[randomNumber]
        possibleMovieNum.push(generatedName) 
        possibleIDNum.push(id[randomNumber])
        title.splice(randomNumber, 1)
        id.splice(randomNumber, 1)
        return generatedName
    }
}

let possibleMovieNum = []
let possibleIDNum = []
let activityByCategory = [] 
let activityName;
let spokeName = function () {
    activityName = randomize(activityByCategory);
    // activityNameElement.innerText = activityName; 
    return activityName;
    }

const homeElement = function(movies, food){
 
    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

    //Movies
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-container")
    mainElement.appendChild(movieElement)

    const movieHeader = document.createElement("p")
    movieHeader.classList.add("dropdown-header")
    movieHeader.innerText="Movie"
    movieElement.appendChild(movieHeader)

    const movieDropdownLabel = document.createElement("select")
    movieDropdownLabel.classList.add("movie-dropdown-label")
    movieElement.appendChild(movieDropdownLabel)
    
    
    const defaultGenreDropdown = document.createElement("option")
    defaultGenreDropdown.selected = true
    defaultGenreDropdown.innerText = "Select a genre"
    movieDropdownLabel.appendChild(defaultGenreDropdown)

    const mainSpinnerContainer = document.createElement("div")
    mainSpinnerContainer.setAttribute("id","main-spinner-container-movie")
    mainSpinnerContainer.classList.add("main-spinner-container") 
    movieElement.appendChild(mainSpinnerContainer);
    const secondarySpinnerContainer = document.createElement("div")
    secondarySpinnerContainer.classList.add("secondary-spinner-container") 
    mainSpinnerContainer.appendChild(secondarySpinnerContainer);
    const spinnerSection1 = document.createElement("span")
    spinnerSection1.classList.add("spinner-section-1")
    secondarySpinnerContainer.appendChild(spinnerSection1);  
    const spinnerSection1Text = document.createElement("p")
    spinnerSection1Text.classList.add("spin-labels")
    spinnerSection1.appendChild(spinnerSection1Text);
    const spinnerSection2 = document.createElement("span")
    spinnerSection2.classList.add("spinner-section-2") 
    secondarySpinnerContainer.appendChild(spinnerSection2);
    const spinnerSection2Text = document.createElement("p")
    spinnerSection2Text.classList.add("spin-labels")
    spinnerSection2.appendChild(spinnerSection2Text);
    const spinnerSection3 = document.createElement("span")
    spinnerSection3.classList.add("spinner-section-3") 
    secondarySpinnerContainer.appendChild(spinnerSection3);
    const spinnerSection3Text = document.createElement("p")
    spinnerSection3Text.classList.add("spin-labels")
    spinnerSection3.appendChild(spinnerSection3Text);
    const spinnerSection4 = document.createElement("span")
    spinnerSection4.classList.add("spinner-section-4") 
    secondarySpinnerContainer.appendChild(spinnerSection4);
    const spinnerSection4Text = document.createElement("p")
    spinnerSection4Text.classList.add("spin-labels")
    spinnerSection4.appendChild(spinnerSection4Text);

    const movieButton = document.createElement("button")
    movieButton.classList.add("generate-button")
    movieButton.innerText = "SPIN"
    mainSpinnerContainer.appendChild(movieButton)

        //Pop-up box functionality
        const selectionPopUp = document.createElement("div")
        selectionPopUp.classList.add("selection-pop-up-movie")
        selectionPopUp.setAttribute("id", "selection-pop-up-movie")
        mainSpinnerContainer.appendChild(selectionPopUp);
    
        const selectionPopUpOverlay = document.createElement("div")
        selectionPopUpOverlay.classList.add("selection-pop-up-overlay-movie")
        selectionPopUp.appendChild(selectionPopUpOverlay);
    
        const selectionPopUpContentDiv = document.createElement("div")
        selectionPopUpContentDiv.classList.add("selection-pop-up-content-div-movie")
        selectionPopUpOverlay.appendChild(selectionPopUpContentDiv);
    
        const selectionPopUpCloseButton = document.createElement("button")
        selectionPopUpCloseButton.classList.add("selection-pop-up-close-button-movie")
        selectionPopUpCloseButton.innerText = "x"
        selectionPopUpContentDiv.appendChild(selectionPopUpCloseButton);
    
        const selectionPopUpContent = document.createElement("div")
        selectionPopUpContent.classList.add("selection-pop-up-content-movie")

        const movieImage = document.createElement("img")

        const togglePopUp = function () {
            // let selectionPopUpContent = document.createElement("div")
            // selectionPopUpContent.classList.add("selection-pop-up-content-movie")
            console.log(possibleIDNum)
            console.log(possibleMovieNum)
            console.log(possibleIDNum[choice])
            console.log(possibleMovieNum[choice])

            fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${possibleIDNum[choice]}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
        })
        .then(response => response.json())
        .then((moviePoster) => {
            console.log(moviePoster)
            movieImage.src = moviePoster.poster;
        })
        .catch(err => {
        console.error(err);
        });
        
            selectionPopUpContent.innerText = possibleMovieNum[choice];
            selectionPopUpContentDiv.appendChild(selectionPopUpContent);

            movieImage.src = "";
            selectionPopUpContentDiv.appendChild(movieImage)
            
            
    
            selectionPopUp.classList.toggle("active") 
            console.log(possibleMovieNum[choice])
        } 
    
        selectionPopUpCloseButton.addEventListener("click", () => {
            togglePopUp()
            clearChildren(selectionPopUpContent)
        
            
        });


    let genre = []
    let movieIdPair = new Map();
    
    movies.movie_results.forEach(movie => {
        genre.push(movie.genres);
        movieIdPair.set(movie.imdb_id, movie.title)
        
    //    console.log(genre)
    });

    let newGenre = [];
  
    for (let i in genre) {          //change to forEach
        for (let j in genre[i]) {
            newGenre.push(genre[i][j]);
            
        }
    }

    // console.log(newGenre)
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
    let movieIDsByCategory = []

    let movieName;
    
    movieDropdownLabel.addEventListener("change", () => {
            // wheelAnimation();
            moviesByCategory = [] 
            movieIDsByCategory = []
            movies.movie_results.forEach(movie => {
                console.log(movie)
                if(movie.genres != null){
                    movie.genres.forEach(genre => {
                        if(genre === movieDropdownLabel.value) {      //find alternative to event.target.value
                            moviesByCategory.push(movie.title)
                            movieIDsByCategory.push(movie.imdb_id)
                            //moviesByYoutube.push(movie.)
                        }
                    })
                }
              })
            //let moviesByCategoryWithoutDuplicates= Array.from(new Set(moviesByCategory))
            possibleMovieNum = [];
            possibleIDNum = []
            //console.log(moviesByCategory)
            movieName = randomize(moviesByCategory, movieIDsByCategory);
            spinnerSection1Text.innerText = movieName;
            movieName = randomize(moviesByCategory, movieIDsByCategory); 
            spinnerSection2Text.innerText = movieName; 
            movieName = randomize(moviesByCategory, movieIDsByCategory);
            spinnerSection3Text.innerText = movieName; 
            movieName = randomize(moviesByCategory, movieIDsByCategory);
            spinnerSection4Text.innerText = movieName; 
          });
        //console.log(moviesByCategory)
        // alert("You chose " + event.target.value)
    
    var choice = Math.floor(Math.random() * 4);
    movieButton.addEventListener("click", () => { 
        //.log(movieName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        spinFunction(choice);
       
        //console.log(possibleMovieNum[choice]);
        // activityElement.appendChild(activityNameElement)    
        
        
    }); 
    const spinFunction = function () {
        // let x = 1024; 
        // let y = 9999; 
        // var deg = Math.floor(Math.random() * (x-y)) + y;
        var deg = 1215 + Math.floor(Math.random() * 10) * 360 + choice * 90 + Math.random() * 88 - 44;
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"

        const element = document.getElementById("main-spinner-container-movie");
        element.classList.remove('animate')
        setTimeout(function() {
            element.classList.add('animate')
            togglePopUp()
        }, 5000)

    }

    
    
  

    return mainElement
}
export {homeElement};
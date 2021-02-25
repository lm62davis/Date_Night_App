import { clearChildren } from "./app.js"

const randomize = function(list) {
    //console.log(list)
    //console.log(list.length + " list length")
    let randomNumber = Math.floor(Math.random() * list.length)
    //console.log(randomNumber)
    let generatedMovie = list[randomNumber]
    possibleMovieNum.push(generatedMovie);
    return generatedMovie

}
let randomNumber;

let possibleMovieNum = []

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
    
    
        const togglePopUp = function () {
            const selectionPopUpContent = document.createElement("div")
            selectionPopUpContent.classList.add("selection-pop-up-content-movie")
            selectionPopUpContent.innerText = possibleMovieNum[choice];
            selectionPopUpContentDiv.appendChild(selectionPopUpContent);
    
            selectionPopUp.classList.toggle("active") 
            console.log(possibleMovieNum[choice])
        } 
    
        selectionPopUpCloseButton.addEventListener("click", () => {
            togglePopUp()
        });


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
   

    let movieName;
    
    movieDropdownLabel.addEventListener("change", () => {
            // wheelAnimation();
            moviesByCategory = [] 
            movies.movie_results.forEach(movie => {
                console.log(movie)
                if(movie.genres != null){
                    movie.genres.forEach(genre => {
                        if(genre === movieDropdownLabel.value) {      //find alternative to event.target.value
                            moviesByCategory.push(movie.title)
                            //moviesByYoutube.push(movie.)
                        }
                    })
                }
              })

            possibleMovieNum = [];
            //console.log(moviesByCategory)
            movieName = randomize(moviesByCategory);
            spinnerSection1Text.innerText = movieName;
            movieName = randomize(moviesByCategory); 
            spinnerSection2Text.innerText = movieName; 
            movieName = randomize(moviesByCategory);
            spinnerSection3Text.innerText = movieName; 
            movieName = randomize(moviesByCategory);
            spinnerSection4Text.innerText = movieName; 
          });
        console.log(moviesByCategory)
        // alert("You chose " + event.target.value)
    
    var choice = Math.floor(Math.random() * 4);
    movieButton.addEventListener("click", () => { 
        console.log(movieName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        spinFunction(choice);
       
        console.log(possibleMovieNum[choice]);
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
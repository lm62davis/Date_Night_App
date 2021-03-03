import {displayHomeView } from "./app.js";

const displaySplashPage = function() {
    const container = document.querySelector(".main-content");   

    const mainElement = document.createElement("main");
    mainElement.classList.add("display-content");
    container.prepend(mainElement)


    
    const firstAnimation = document.createElement("h2")
    firstAnimation.innerText = "Team Date Night"
    firstAnimation.classList.add("animate", "backwards", "animate-span")
    const secondAnimation = document.createElement("h2")
    secondAnimation.innerText = "Proudly Presents..."
    secondAnimation.classList.add("animate", "forwards", "animate-span")
    const thirdAnimation = document.createElement("h2")
    thirdAnimation.innerText = "The Date Night App"
    thirdAnimation.classList.add("animate", "mixed", "animate-span")

    const centerDiv = document.createElement("div")
    centerDiv.classList.add("center")

    mainElement.appendChild(firstAnimation)
    mainElement.appendChild(secondAnimation)
    mainElement.appendChild(thirdAnimation)
    mainElement.appendChild(centerDiv)

    const ticketImage = document.createElement("img")
    ticketImage.classList.add("ticket-image")
    ticketImage.src = "images/Ticket.jpg"
    centerDiv.appendChild(ticketImage)

    let movieJson = "";
    let movieJson2 = "";
    let movieJson3 = "";
    let allMovies = [];
    let foodJson = "";
    let foodJson2 = "";
    let foodJson3 = "";
    let allFoods = "";

    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
        
    })
    .then((response) => response.json())
    .then((movies) => {
        movieJson= movies
        checkIfAllLoaded()
    })
    .catch(err => {
        console.error(err);
    });

    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=2",  {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((movies) => {
        movieJson2= movies
        checkIfAllLoaded()
    })
    .catch(err => {
        console.error(err);
    });

    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=3",  {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
        
    })
    .then((response) => response.json())
    .then((movies) => {
        movieJson3= movies
        checkIfAllLoaded()
    })
    .catch(err => {
        console.error(err);
    });

    fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/state/OH?page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
            "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
        }
    })
    .then(response => response.json()) 
    .then((food) => {
        foodJson=food
        checkIfAllLoaded()
    })	
    .catch(err => {
        console.error(err);
    });

    fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/state/OH?page=2", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
            "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
        }
    })
    .then(response => response.json()) 
    .then((food) => {
        foodJson2=food
        checkIfAllLoaded()
    })	
    .catch(err => {
        console.error(err);
    });

    fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/state/OH?page=3", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
            "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
        }
    })
    .then(response => response.json()) 
    .then((food) => {
        foodJson3=food
        checkIfAllLoaded()
    })	
    .catch(err => {
        console.error(err);
    });

    const checkIfAllLoaded = function() {
        if(movieJson != "" && foodJson != "" && movieJson2 != "" && movieJson3 != "" && foodJson2 != "" && foodJson3 != "") {
            allMovies = movieJson;
            allFoods = foodJson;
            movieJson2.movie_results.forEach(movie => {
                allMovies.movie_results.push(movie)
            });
            movieJson3.movie_results.forEach(movie => {
                allMovies.movie_results.push(movie)
            });
            foodJson2.result.data.forEach(cuisine => {
                allFoods.result.data.push(cuisine)
            });
            foodJson3.result.data.forEach(cuisine => {
                allFoods.result.data.push(cuisine)
            });
            
            console.log(movieJson);
            console.log(movieJson2)
            console.log(movieJson3)
            console.log(allMovies)
            console.log(foodJson);
            console.log(foodJson2)
            console.log(foodJson3)
            console.log(allFoods);

        }
    }
        ticketImage.addEventListener("click", ()=> {
            displayHomeView (allMovies, allFoods)
        })

    return mainElement;
}
displaySplashPage();

//export {displaySplashPage};
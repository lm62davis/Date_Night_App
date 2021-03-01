import {homeElement} from "./movieView.js"
import {createHeader} from "./header.js"
import {createFooter} from "./footer.js"
import {foodSection} from "./foodView.js"
import {activitySection} from "./activityView.js"
import { activityJSON } from "./activityJson.js"

const clearChildren = function (element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
}

{/*   <!-- <div class="page-header"> -->
    <!-- <h2 class="title">Date Night App</h2>
	
	<header class="page-header">
        <nav class="navbar"> 
            <button class="reset-button">Reset</button>
            <button class="contact">Contact Us</button>
        </nav>

        
        <h1 class="page-title">Date Nights</h1>
        <h2 class="app-instructions">1. Choose your genre and food type from the dropdowns </br>
             2. Click the 'Generate' buttons to get your movie and dinner suggestions!</h2>                
    </header>  */}

// let movieJson = "";
// let movieJson2 = "";
// let movieJson3 = "";
// let allMovies = [];
// let foodJson = "";
// let foodJson2 = "";
// let foodJson3 = "";
// let allFoods = "";
// let moviePosterJson = "";



// const checkIfAllLoaded = function() {
// 	if(movieJson != "" && foodJson != "" && movieJson2 != "" && movieJson3 != "" && foodJson2 != "" && foodJson3 != "" ) {
// 		allMovies = movieJson;
// 		allFoods = foodJson;
// 		movieJson2.movie_results.forEach(movie => {
// 			allMovies.movie_results.push(movie)
// 		});
// 		movieJson3.movie_results.forEach(movie => {
// 			allMovies.movie_results.push(movie)
// 		});
// 		foodJson2.result.data.forEach(cuisine => {
// 			allFoods.result.data.push(cuisine)
// 		});
// 		foodJson3.result.data.forEach(cuisine => {
// 			allFoods.result.data.push(cuisine)
// 		});
// 		// allMovies.movie_results.forEach(movie => {
		
// 		// });
// 		displayHomeView (allMovies, allFoods)
// 		// console.log(movieJson);
// 		// console.log(movieJson2)
// 		// console.log(movieJson3)
// 		console.log(allMovies)
// 		// console.log(foodJson);
// 		// console.log(foodJson2)
// 		// console.log(foodJson3)
// 		console.log(allFoods);
// 		// console.log(moviePosterJson);

// 	}
// }


const displayHomeView = function(movies, food) {
	const container = document.querySelector(".main-content");
    clearChildren(container);
    let header = createHeader();
    container.prepend(header);
    let mainElement = homeElement(movies);   
    container.appendChild(mainElement);
	let main2Element = foodSection(food);
	container.appendChild(main2Element)
	let main3Element = activitySection(activityJSON);
	container.appendChild(main3Element);
    let footer = createFooter();
    container.appendChild(footer);
}

// let multipleMovieLists = []; 


// fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=${Math.floor(Math.random() * 1000)}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
// 		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
// 	}
	
// })

// .then((response) => response.json())
// .then((movies) => {
// 	movieJson= movies
// 	checkIfAllLoaded()
// })
// .catch(err => {
// 	console.error(err);
// });
// // multipleMovieLists.push(movies.value)
// // console.log(multipleMovieLists)



// fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=${Math.floor(Math.random() * 1000)}`,  {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
// 		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
// 	}
	
// })

// .then((response) => response.json())
// .then((movies) => {
// 	movieJson2= movies
// 	checkIfAllLoaded()
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=${Math.floor(Math.random() * 1000)}`,  {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "603d5c585dmsh8a5028e09f6a248p1a9c3bjsn8df290ecfe4f",
// 		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
// 	}
	
// })

// .then((response) => response.json())
// .then((movies) => {
// 	movieJson3= movies
// 	checkIfAllLoaded();
// })
// .catch(err => {
// 	console.error(err);
// });



// fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/90210?page=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
// 		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
// 	}
// })
// .then(response => response.json()) 
// .then((food) => displayHomeView(food))	
// .catch(err => {
// 	console.error(err);
// });


// fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/state/OH?page=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
// 		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
// 	}
// })
// .then(response => response.json()) 
// .then((food) => {
// 	foodJson=food
// 	checkIfAllLoaded()
// })	
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/state/OH?page=2", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
// 		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
// 	}
// })
// .then(response => response.json()) 
// .then((food) => {
// 	foodJson2=food
// 	checkIfAllLoaded()
// })	
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/state/OH?page=3", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
// 		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
// 	}
// })
// .then(response => response.json()) 
// .then((food) => {
// 	foodJson3=food
// 	checkIfAllLoaded()
// })	
// .catch(err => {
// 	console.error(err);
// });

//movie poster api
// fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${posterId}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c03c7ea319mshe450b817bc71590p1d6478jsn9e3847b68620",
// 		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then((moviePosters) => {
// 	moviePosterJson=moviePosters
// 	// checkIfAllLoaded()
// })
// .catch(err => {
// 	console.error(err);
// });


export { clearChildren }
export { displayHomeView }














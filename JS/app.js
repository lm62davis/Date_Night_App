import {homeElement} from "./HomeView.js"
import {createHeader} from "./header.js"
import {createFooter} from "./footer.js"
import {foodSection} from "./food-section.js"

const clearChildren = function (element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
}

const container = document.querySelector(".main-content");

let movieJson = "";
let movieJson2 = "";
let movieJson3 = "";
let foodJson = "";

const checkIfAllLoaded = function() {
	if(movieJson != "" && foodJson != "" && movieJson2 != "" && movieJson3 != "" ) {
		displayHomeView (movieJson,foodJson, movieJson2)
		console.log(movieJson);
		console.log(movieJson2)
		console.log(movieJson3)
		console.log(foodJson);

	}
}

const displayHomeView = function(movies, food) {
    clearChildren(container);
    let header = createHeader();
    container.prepend(header);
    let mainElement = homeElement(movies, food);   
    container.appendChild(mainElement);
	let main2Element = foodSection(food);
	container.appendChild(main2Element)
    let footer = createFooter();
    container.appendChild(footer);
}





fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1",  {
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


fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/90210?page=1", {
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

export { clearChildren}











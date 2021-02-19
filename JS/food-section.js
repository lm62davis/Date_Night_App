import { clearChildren } from "./app.js"

const randomize = function(list) {
    //console.log(list)
    //console.log(list.length + " list lngth")
    let randomNumber = Math.floor(Math.random() * list.length)
    //console.log(randomNumber)
    let generatedCuisine = list[randomNumber]
    return generatedCuisine

}
const foodSection = function(food) {

    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

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
    
    let cuisine = []
    // console.log(restaurant_name)
    food.result.data.forEach(foods => {
        cuisine.push(foods.cuisines);
    //    console.log(cuisine)
       
    });
   
    let newCuisine = [];
  
    for (let i in cuisine) {          //change to forEach
        for (let j in cuisine[i]) {
            newCuisine.push(cuisine[i][j]);
            
        }
    }

    // console.log(newCuisine)
    let finalCuisineList = Array.from(new Set(newCuisine))   //removes duplicates
    console.log(finalCuisineList);
    

    //create dropdown options
    for (let i = 0; i < finalCuisineList.length; i++) {
        const option = finalCuisineList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        foodDropdownLabel.appendChild(dropdown)        
    }

    let foodByCategory = []
  

    document.addEventListener("input", () => {
       
          
          food.result.data.forEach(foods => {
            foods.cuisines.forEach(cuisine => {
                if(cuisine === event.target.value) {      //find alternative to event.target.value
                    foodByCategory.push(foods.restaurant_name)
                    //moviesByYoutube.push(movie.)
                }
            })
          })
        // console.log(foodByCategory)
    
        //alert("You chose " + event.target.value)
    });

    let restaurantName;
    const restaurantButton = document.createElement("button")
    restaurantButton.innerText = "Generate"
    foodElement.appendChild(restaurantButton)
    const restaurantNameElement = document.createElement("section")
    restaurantButton.addEventListener("click", () => { 
        // restaurantName.value = "";
        console.log(restaurantName)      //test to make sure selected is not default value. if to diff just switch back to label & input
       
        restaurantName = randomize(foodByCategory);
       
       restaurantNameElement.innerText = restaurantName;
    //    clearChildren(restaurantNameElement.innerText)
       foodElement.appendChild(restaurantNameElement)
      
       
    })
    
    
  

    return mainElement
    
    // const defaultCuisineDropdown = document.createElement("option")
    // defaultCuisineDropdown.selected = true
    // defaultCuisineDropdown.innerText = "Select a Cuisine"
    // foodDropdownLabel.appendChild(defaultCuisineDropdown)

    // const sandwichesCuisineDropdown = document.createElement("option")
    // sandwichesCuisineDropdown.innerText = "Sandwiches"
    // const coffeeAndTeaCuisineDropdown = document.createElement("option")
    // coffeeAndTeaCuisineDropdown.innerText = "Coffee and Tea"
    // // const foodCuisineDropdown = document.createElement("option")
    // // Dropdown.innerText = ""
    // // const mysteryGenreDropdown = document.createElement("option")
    // // mysteryGenreDropdown.innerText = ""
    
    // foodDropdownLabel.appendChild(sandwichesCuisineDropdown)
    // foodDropdownLabel.appendChild(coffeeAndTeaCuisineDropdown)
  
 
    // const foodButton = document.createElement("button")
    // foodButton.innerText = "Generate"
    // foodElement.appendChild(foodButton)


    
    //return foodElement;

}



export {foodSection}
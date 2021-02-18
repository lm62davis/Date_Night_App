
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
    
    return foodElement;

}



export {foodSection}
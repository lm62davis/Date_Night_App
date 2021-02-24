
import { clearChildren } from "./app.js"

const randomize = function(list) {
    //console.log(list)
    //console.log(list.length + " list lngth")
    let randomNumber = Math.floor(Math.random() * list.length)
    //console.log(randomNumber)
    let generatedCuisine = list[randomNumber]
    return generatedCuisine

}
let possibleCuisineNum = [] /////////////////// 
let foodByCategory = [] 
let foodName;
let spokeName = function () {
    foodName = randomize(foodByCategory);
    // activityNameElement.innerText = activityName; 
    return foodName;
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
    defaultCuisineDropdown.innerText = "Select a cuisine"
    foodDropdownLabel.appendChild(defaultCuisineDropdown)

    const mainSpinnerContainer = document.createElement("div")
    mainSpinnerContainer.setAttribute("id","main-spinner-container")
    mainSpinnerContainer.classList.add("main-spinner-container") 
    mainElement.appendChild(mainSpinnerContainer);
    const secondarySpinnerContainer = document.createElement("div")
    secondarySpinnerContainer.classList.add("secondary-spinner-container") 
    mainSpinnerContainer.appendChild(secondarySpinnerContainer);
    const spinnerSection1 = document.createElement("span")
    spinnerSection1.classList.add("spinner-section-1")
    secondarySpinnerContainer.appendChild(spinnerSection1);  
    const spinnerSection1Text = document.createElement("p")
    spinnerSection1Text.classList.add("spin-labels")
    spinnerSection1Text.innerText = spokeName(); 
    spinnerSection1.appendChild(spinnerSection1Text);
    const spinnerSection2 = document.createElement("span")
    spinnerSection2.classList.add("spinner-section-2") 
    secondarySpinnerContainer.appendChild(spinnerSection2);
    const spinnerSection2Text = document.createElement("p")
    spinnerSection2Text.classList.add("spin-labels")
    spinnerSection2Text.innerText = spokeName(); 
    spinnerSection2.appendChild(spinnerSection2Text);
    const spinnerSection3 = document.createElement("span")
    spinnerSection3.classList.add("spinner-section-3") 
    secondarySpinnerContainer.appendChild(spinnerSection3);
    const spinnerSection3Text = document.createElement("p")
    spinnerSection3Text.classList.add("spin-labels")
    spinnerSection3Text.innerText = spokeName(); 
    spinnerSection3.appendChild(spinnerSection3Text);
    const spinnerSection4 = document.createElement("span")
    spinnerSection4.classList.add("spinner-section-4") 
    secondarySpinnerContainer.appendChild(spinnerSection4);
    const spinnerSection4Text = document.createElement("p")
    spinnerSection4Text.classList.add("spin-labels")
    spinnerSection4Text.innerText = spokeName(); 
    spinnerSection4.appendChild(spinnerSection4Text);


    const foodButton = document.createElement("button")
    foodButton.classList.add("generate-button")
    foodButton.innerText = "SPIN"
    mainSpinnerContainer.appendChild(foodButton)
    
    let cuisine = []
    // console.log(restaurant_name)
    food.result.data.forEach(foods => {
        cuisine.push(foods.cuisines);

    });
   
    let newCuisine = [];
  
    for (let i in cuisine) {          //change to forEach
        for (let j in cuisine[i]) {
            newCuisine.push(cuisine[i][j]);
  
        }
    }

    // console.log(newCuisine)
    let finalCuisineList = Array.from(new Set(newCuisine))   //removes duplicates
    removeSpecialChar(finalCuisineList);
    console.log(finalCuisineList);
    

    //create dropdown options
    for (let i = 0; i < finalCuisineList.length; i++) {
        const option = finalCuisineList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        foodDropdownLabel.appendChild(dropdown) 
       
    }
    
    
     /////////////////////////////////////////////

    let foodByCategory = []
  

    let foodName;
    
    foodDropdownLabel.addEventListener("change", () => {
            // wheelAnimation();
            foodByCategory = [] 
            food.result.data.forEach(foods => {
                foods.cuisines.forEach(cuisine => {
                    if(cuisine === foodDropdownLabel.value) {      //find alternative to event.target.value
                        foodByCategory.push(foods.restaurant_name)
                        //moviesByYoutube.push(movie.)
                    }
                })
              })
            foodName = randomize(foodByCategory);
            spinnerSection1Text.innerText = foodName;
            foodName = randomize(foodByCategory); 
            spinnerSection2Text.innerText = foodName; 
            foodName = randomize(foodByCategory);
            spinnerSection3Text.innerText = foodName; 
            foodName = randomize(foodByCategory);
            spinnerSection4Text.innerText = foodName; 
          });
        console.log(foodByCategory)
        // alert("You chose " + event.target.value)
    
    
    foodButton.addEventListener("click", () => { 
        console.log(foodName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
          var choice = Math.floor(Math.random() * 4);  //////////////////////
          spinFunction();
       
          console.log(possibleCuisineNum[choice]); ////////////// 
        // activityElement.appendChild(activityNameElement)    
        
        
    }); 

 
    const spinFunction = function () {
        var deg = 1215 + Math.floor(Math.random() * 10) * 360 + choice * 90 + Math.random() * 88 - 44; /////////////
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"
    }

      
       
    
    
    
  

    return mainElement
    
    

}

export {foodSection}
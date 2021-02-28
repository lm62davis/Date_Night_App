import { clearChildren } from "./app.js"

//Choice selection/randomization
let possibleFoodNum = []
let possibleLatNum = []
let possibleLongNum = []
const randomize = function(list, lat, long) {
    if (list.length ==0) {
        possibleFoodNum.push("");
        return "";
    }
    else {
    let randomNumber = Math.floor(Math.random() * list.length)
    let generatedCuisine = list[randomNumber]
        possibleFoodNum.push(generatedCuisine);
        possibleLatNum.push(lat[randomNumber]);
        possibleLongNum.push(long[randomNumber])

        list.splice(randomNumber, 1)
        lat.splice(randomNumber, 1)
        long.splice(randomNumber, 1)
        return generatedCuisine
    }
}

    const removeSpecialChar = function (finalCuisineList) {
                  
        for (let i = 0; i < finalCuisineList.length; i++) {
            finalCuisineList[i] = finalCuisineList[i].replaceAll('&amp;' , 'and'); 
            // console.log(finalCuisineList[i])
        }
    }

const foodSection = function(food) {

    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

    const foodElement = document.createElement("div");
    foodElement.classList.add("food-container")
    mainElement.appendChild(foodElement)

    const foodHeader = document.createElement("p")
    foodHeader.classList.add("dropdown-header")
    foodHeader.innerText="Restaurant"
    foodElement.appendChild(foodHeader)

    const foodDropdownLabel = document.createElement("select")
    foodDropdownLabel.classList.add("food-dropdown")
    foodElement.appendChild(foodDropdownLabel)

    const defaultCuisineDropdown = document.createElement("option")
    defaultCuisineDropdown.selected = true
    defaultCuisineDropdown.innerText = "Select a cuisine"
    foodDropdownLabel.appendChild(defaultCuisineDropdown)

    const mainSpinnerContainer = document.createElement("div")
    mainSpinnerContainer.setAttribute("id","main-spinner-container-food")
    mainSpinnerContainer.classList.add("main-spinner-container") 
    foodElement.appendChild(mainSpinnerContainer);
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


    const foodButton = document.createElement("button")
    foodButton.classList.add("generate-button")
    foodButton.innerText = "SPIN"
    mainSpinnerContainer.appendChild(foodButton)

            //Pop-up box functionality
            const selectionPopUp = document.createElement("div")
            selectionPopUp.classList.add("selection-pop-up-food")
            selectionPopUp.setAttribute("id", "selection-pop-up-food")
            mainSpinnerContainer.appendChild(selectionPopUp);
        
            const selectionPopUpOverlay = document.createElement("div")
            selectionPopUpOverlay.classList.add("selection-pop-up-overlay-food")
            selectionPopUp.appendChild(selectionPopUpOverlay);
        
            const selectionPopUpContentDiv = document.createElement("div")
            selectionPopUpContentDiv.classList.add("selection-pop-up-content-div-food")
            selectionPopUpOverlay.appendChild(selectionPopUpContentDiv);
        
            const selectionPopUpCloseButton = document.createElement("button")
            selectionPopUpCloseButton.classList.add("selection-pop-up-close-button-food")
            selectionPopUpCloseButton.innerText = "x"
            selectionPopUpContentDiv.appendChild(selectionPopUpCloseButton);
        


            const selectionPopUpContent = document.createElement("div")
                selectionPopUpContent.classList.add("selection-pop-up-content-food")

                const googleMapDiv = document.createElement("div")
                googleMapDiv.id = "map"
               
            const togglePopUp = function () {
                selectionPopUpContent.innerText = possibleFoodNum[choice];
                selectionPopUpContentDiv.appendChild(selectionPopUpContent);
                selectionPopUpContentDiv.appendChild(googleMapDiv);

                selectionPopUp.classList.toggle("active") 
                let map;


                    let s = document.createElement("script");
                    googleMapDiv.appendChild(s);
                    s.addEventListener("load", () => {
                        map = new google.maps.Map(document.getElementById("map"), {
                            center: {
                                lat: possibleLatNum[choice],
                                lng: possibleLongNum[choice]
                            },
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        });
                    });
                    s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCuZaxOlzTpiaWjRsma9xsO4_OvP29mWKM';
                    console.log(map);

                console.log(possibleFoodNum[choice])
            } 

            selectionPopUpCloseButton.addEventListener("click", () => {
                togglePopUp()
                clearChildren(selectionPopUpContent)
            });
    
    let cuisine = []

    food.result.data.forEach(foods => {
        cuisine.push(foods.cuisines);

    });
   
    let newCuisine = [];
  
    for (let i in cuisine) {          //change to forEach
        for (let j in cuisine[i]) {
            newCuisine.push(cuisine[i][j]);
  
        }
    }
    let finalCuisineList = Array.from(new Set(newCuisine))   //removes duplicates
    removeSpecialChar(finalCuisineList);

    

    //create dropdown options
    for (let i = 0; i < finalCuisineList.length; i++) {
        const option = finalCuisineList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        foodDropdownLabel.appendChild(dropdown)        
    }
   

    let foodByCategory = []
    let latByCategory = []
    let longByCategory = []

    let foodName;
    
    foodDropdownLabel.addEventListener("change", () => {
            // wheelAnimation();
            foodByCategory = [] 
            latByCategory = []
            longByCategory = []
        
            food.result.data.forEach(foods => {
                if(foods.cuisines != null) {
                    foods.cuisines.forEach(cuisine => {
                        if(cuisine === foodDropdownLabel.value) {      
                            foodByCategory.push(foods.restaurant_name)
                            latByCategory.push(foods.geo.lat)
                            longByCategory.push(foods.geo.lon)
                        }
                    })
                }
              })



            possibleFoodNum = [];
            possibleLatNum = [];
            possibleLongNum = [];
            foodName = randomize(foodByCategory, latByCategory, longByCategory);
            spinnerSection1Text.innerText = foodName;
            // foodByCategory = foodByCategory.splice(foodName,randomNumber);
            foodName = randomize(foodByCategory, latByCategory, longByCategory); 
            spinnerSection2Text.innerText = foodName;
            // foodByCategory = foodByCategory.splice(foodName,randomNumber);
            foodName = randomize(foodByCategory, latByCategory, longByCategory);
            spinnerSection3Text.innerText = foodName; 
            // foodByCategory = foodByCategory.splice(foodName,randomNumber);
            foodName = randomize(foodByCategory, latByCategory, longByCategory);
            spinnerSection4Text.innerText = foodName; 

          });


        var choice = Math.floor(Math.random() * 4);
    foodButton.addEventListener("click", () => { 
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        spinFunction(choice); 
             
        // activityElement.appendChild(activityNameElement)    
    
        
    }); 
    // let selectionPopUp;
    // const toggleSelection = function () {
    //     selectionPopUp = document.createElement("div")
    //     selectionPopUp.classList.add("selection-pop-up")
    //     selectionPopUp.innerText = possibleFoodNum[choice];
    //     mainSpinnerContainer.appendChild(selectionPopUp);


    //     selectionPopUp.classList.toggle("generate-button");
     
    //     // selectionPopUp.addEventListener("click", () => {
    //     // setTimeout(selectionPopUp.remove(),5000);
            
    //     // });
     
    // }

    const spinFunction = function () {
        // let x = 1024; 
        // let y = 9999; 
        // var deg = Math.floor(Math.random() * (x-y)) + y;
        var deg = 1215 + Math.floor(Math.random() * 10) * 360 + choice * 90 + Math.random() * 88 - 44;
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"

        const element = document.getElementById("main-spinner-container-food");
        element.classList.remove('animate')
        setTimeout(function() {
            element.classList.add('animate')
            togglePopUp()
            // toggleSelection();

        }, 5000)
    }

    return mainElement    

}

export {foodSection};


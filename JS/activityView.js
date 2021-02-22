import { clearChildren } from "./app.js"
import {activityJSON} from "./activityJson.js"
const randomize = function(list) {
    //console.log(list)
    //console.log(list.length + " list lngth")
    let randomNumber = Math.floor(Math.random() * list.length)
    //console.log(randomNumber)
    let generatedActivity = list[randomNumber]
    return generatedActivity
}
let activityByCategory = [] 
let activityName;
let spokeName = function () {
    activityName = randomize(activityByCategory);
    // activityNameElement.innerText = activityName; 
    return activityName;
    }
    

const activitySection = function(activityJSON) {
    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")
    const activityElement = document.createElement("div");
    activityElement.classList.add("activity-container")
    mainElement.appendChild(activityElement)
    const activityDropdownLabel = document.createElement("select")
    activityDropdownLabel.classList.add("activity-dropdown")
    activityElement.appendChild(activityDropdownLabel)
    const defaultActivityDropdown = document.createElement("option")
    defaultActivityDropdown.selected = true
    defaultActivityDropdown.innerText = "Select an activity type"
    activityDropdownLabel.appendChild(defaultActivityDropdown) 
    //spinner functionality section
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

    const activityButton = document.createElement("button")
    activityButton.classList.add("generate-button")
    activityButton.innerText = "SPIN"
    mainSpinnerContainer.appendChild(activityButton)

    let activityType = []
    // console.log(restaurant_name)
    activityJSON.forEach(activity => {
        activityType.push(activity.type);
       console.log(activityType)
    });
    let finalActivityList = Array.from(new Set(activityType))   //removes duplicates
    console.log(finalActivityList);
    //create dropdown options
    for (let i = 0; i < finalActivityList.length; i++) {
        const option = finalActivityList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        activityDropdownLabel.appendChild(dropdown)        
    }
    activityByCategory = [] 
    activityDropdownLabel.addEventListener("change", () => {
            // wheelAnimation();
            activityByCategory = [] 
            activityJSON.forEach(activity => {
                if(activity.type === activityDropdownLabel.value) {      
                    activityByCategory.push(activity.name)
                }
            })
            activityName = randomize(activityByCategory);
            spinnerSection1Text.innerText = activityName;
            activityName = randomize(activityByCategory); 
            spinnerSection2Text.innerText = activityName; 
            activityName = randomize(activityByCategory);
            spinnerSection3Text.innerText = activityName; 
            activityName = randomize(activityByCategory);
            spinnerSection4Text.innerText = activityName; 
          });
        console.log(activityByCategory)
        // alert("You chose " + event.target.value)
    
    const activityNameElement = document.createElement("section")
    activityButton.addEventListener("click", () => { 
        console.log(activityName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        spinFunction();
       
       
        activityElement.appendChild(activityNameElement)    
        
        
    }); 
    const spinFunction = function () {
        let x = 1024; 
        let y = 9999; 
        var deg = Math.floor(Math.random() * (x-y)) + y;
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"
    }
    
    return mainElement
}
   
export {activitySection}
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
const activitySection = function(activityJSON) {

    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

    const activityElement = document.createElement("div");
    activityElement.classList.add("food-container")
    mainElement.appendChild(activityElement)

    const activityDropdownLabel = document.createElement("select")
    activityDropdownLabel.classList.add("food-dropdown")
    activityElement.appendChild(activityDropdownLabel)

    const defaultActivityDropdown = document.createElement("option")
    defaultActivityDropdown.selected = true
    defaultActivityDropdown.innerText = "Select an activity type"
    activityDropdownLabel.appendChild(defaultActivityDropdown)
    

   
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

    let activityByCategory = []  

    document.addEventListener("input", () => { 
            activityJSON.forEach(activity => {
                if(activity.type === event.target.value) {      //find alternative to event.target.value
                    activityByCategory.push(activity.name)
                }
            })
          });
        console.log(activityByCategory)
    
        // alert("You chose " + event.target.value)


    let activityName;
    const activityButton = document.createElement("button")
    activityButton.innerText = "Generate"
    activityElement.appendChild(activityButton)
    const activityNameElement = document.createElement("section")
    activityButton.addEventListener("click", () => { 
        console.log(activityName)      //test to make sure selected is not default value. if to diff just switch back to label & input
        activityName = randomize(activityByCategory);
        activityNameElement.innerText = activityName;
        activityElement.appendChild(activityNameElement)       
    })
    

    return mainElement
}



export {activitySection}
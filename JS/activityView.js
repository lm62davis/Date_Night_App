import { clearChildren } from "./app.js"
import {activityJSON} from "./activityJson.js"

const randomize = function(list) {
    // console.log(list)
    //console.log(list.length + " list lngth")
    
    if (list.length ==0) {
        possibleActivityNum.push("");
        return "";
    }
    else {
    let randomNumber = Math.floor(Math.random() * list.length)
        //console.log(randomNumber)

    let generatedActivity = list[randomNumber]
        possibleActivityNum.push(generatedActivity);
        list.splice(randomNumber, 1)
        return generatedActivity
    }
}

let possibleActivityNum = []             //////////////////
let activityByCategory = [] 
let activityName;
// let spokeName = function () {
//     activityName = randomize(activityByCategory);
//     // activityNameElement.innerText = activityName; 
//     return activityName;
//     }
    

const activitySection = function(activityJSON) {
    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")
    const activityElement = document.createElement("div");
    activityElement.classList.add("activity-container")
    mainElement.appendChild(activityElement)
    const activityHeader = document.createElement("p")
    activityHeader.classList.add("dropdown-header")
    activityHeader.innerText="Activity"
    activityElement.appendChild(activityHeader)

    const activityDropdownLabel = document.createElement("select")
    activityDropdownLabel.classList.add("activity-dropdown")
    activityElement.appendChild(activityDropdownLabel)
    const defaultActivityDropdown = document.createElement("option")
    defaultActivityDropdown.selected = true
    defaultActivityDropdown.innerText = "Select an activity type"
    activityDropdownLabel.appendChild(defaultActivityDropdown) 
    //spinner functionality section
    const mainSpinnerContainer = document.createElement("div")
    mainSpinnerContainer.setAttribute("id","main-spinner-container-activity")
    mainSpinnerContainer.classList.add("main-spinner-container") 
    activityElement.appendChild(mainSpinnerContainer);
    const secondarySpinnerContainer = document.createElement("div")
    secondarySpinnerContainer.classList.add("secondary-spinner-container") 
    mainSpinnerContainer.appendChild(secondarySpinnerContainer);
    const spinnerSection1 = document.createElement("span")
    spinnerSection1.classList.add("spinner-section-1")
    secondarySpinnerContainer.appendChild(spinnerSection1);  
    const spinnerSection1Text = document.createElement("p")
    spinnerSection1Text.classList.add("spin-labels")
    spinnerSection1Text.setAttribute("id","spinner-label-1")
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

    const activityButton = document.createElement("button")
    activityButton.classList.add("generate-button")
    activityButton.innerText = "SPIN"
    mainSpinnerContainer.appendChild(activityButton)

    //Pop-up box functionality
    const selectionPopUp = document.createElement("div")
    selectionPopUp.classList.add("selection-pop-up-activity")
    selectionPopUp.setAttribute("id", "selection-pop-up-activity")
    mainSpinnerContainer.appendChild(selectionPopUp);

    const selectionPopUpOverlay = document.createElement("div")
    selectionPopUpOverlay.classList.add("selection-pop-up-overlay-activity")
    selectionPopUp.appendChild(selectionPopUpOverlay);

    const selectionPopUpContentDiv = document.createElement("div")
    selectionPopUpContentDiv.classList.add("selection-pop-up-content-div-activity")
    selectionPopUpOverlay.appendChild(selectionPopUpContentDiv);

    const selectionPopUpCloseButton = document.createElement("button")
    selectionPopUpCloseButton.classList.add("selection-pop-up-close-button-activity")
    selectionPopUpCloseButton.innerText = "x"
    selectionPopUpContentDiv.appendChild(selectionPopUpCloseButton);

    const selectionPopUpContent = document.createElement("div")
        selectionPopUpContent.classList.add("selection-pop-up-content-activity")
    const togglePopUp = function () {
        selectionPopUpContent.innerText = possibleActivityNum[choice];
        selectionPopUpContentDiv.appendChild(selectionPopUpContent);

        selectionPopUp.classList.toggle("active") 
        console.log(possibleActivityNum[choice])
    } 

    selectionPopUpCloseButton.addEventListener("click", () => {
        togglePopUp()
        clearChildren(selectionPopUpContent)
    });


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
            let activityByCategoryWithoutDuplicates= Array.from(new Set(activityByCategory))
            possibleActivityNum = [];
            activityName = randomize(activityByCategoryWithoutDuplicates);
            spinnerSection1Text.innerText = activityName;
            activityName = randomize(activityByCategoryWithoutDuplicates); 
            spinnerSection2Text.innerText = activityName; 
            activityName = randomize(activityByCategoryWithoutDuplicates);
            spinnerSection3Text.innerText = activityName; 
            activityName = randomize(activityByCategoryWithoutDuplicates);
            spinnerSection4Text.innerText = activityName; 


          });
        console.log(activityByCategory)
        // alert("You chose " + event.target.value)
    
    const activityNameElement = document.createElement("section")

    var choice = Math.floor(Math.random() * 4);
    activityButton.addEventListener("click", () => { 
        console.log(activityName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        // var choice = Math.floor(Math.random() * 4);
        // choice.classList.add("spinner-choice"); 
          spinFunction(choice);
          console.log(possibleActivityNum);
            console.log(choice);
       console.log(possibleActivityNum[choice]);

       
        activityElement.appendChild(activityNameElement)    
        
        
    }); 


    const spinFunction = function (choice) {

        var deg = 1215 + Math.floor(Math.random() * 10) * 360 + choice * 90 + Math.random() * 88 - 44; /////////////
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"
        
        const element = document.getElementById("main-spinner-container-activity");
        element.classList.remove('animate')
        setTimeout(function() {
            element.classList.add('animate') 
            togglePopUp()
        }, 5000)
    }
    
    return mainElement
}
   
export {activitySection}
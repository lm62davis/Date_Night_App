import { clearChildren } from "./app.js"
import {activityJSON} from "./activityJson.js"

const randomize = function(list, image) {
    
    if (list.length ==0) {
        possibleActivityNum.push("");
        return "";
    }
    else {
    let randomNumber = Math.floor(Math.random() * list.length)

    let generatedActivity = list[randomNumber]
        possibleActivityNum.push(generatedActivity);
        possibleImageNum.push(image[randomNumber]);
        list.splice(randomNumber, 1)
        image.splice(randomNumber, 1)
        return generatedActivity
    }
}

let possibleActivityNum = [] 
let possibleImageNum = []            

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

    const spinnerSection1 = document.createElement("section")
    spinnerSection1.classList.add("spinner-section-1")
    secondarySpinnerContainer.appendChild(spinnerSection1); 

    const spinnerSection1Text = document.createElement("p")
    spinnerSection1Text.classList.add("spin-labels")
    spinnerSection1Text.setAttribute("id","spinner-label-1")
    spinnerSection1.appendChild(spinnerSection1Text);

    const spinnerSection2 = document.createElement("section")
    spinnerSection2.classList.add("spinner-section-2") 
    secondarySpinnerContainer.appendChild(spinnerSection2);

    const spinnerSection2Text = document.createElement("p")
    spinnerSection2Text.classList.add("spin-labels")
    spinnerSection2.appendChild(spinnerSection2Text);

    const spinnerSection3 = document.createElement("section")
    spinnerSection3.classList.add("spinner-section-3") 
    secondarySpinnerContainer.appendChild(spinnerSection3);

    const spinnerSection3Text = document.createElement("p")
    spinnerSection3Text.classList.add("spin-labels")
    spinnerSection3.appendChild(spinnerSection3Text);

    const spinnerSection4 = document.createElement("section")
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
       
        const activityImage = document.createElement("img")
        activityImage.classList.add("activity-image")
        selectionPopUpContentDiv.appendChild(activityImage)

        const togglePopUp = function () {
        selectionPopUpContent.innerText = possibleActivityNum[choice];
        activityImage.src = possibleImageNum[choice];
        selectionPopUpContentDiv.appendChild(selectionPopUpContent);

        selectionPopUp.classList.toggle("active") 
      
    } 

    selectionPopUpCloseButton.addEventListener("click", () => {
        togglePopUp()
        clearChildren(selectionPopUpContent)
        clearChildren(spinnerSection1Text)
        clearChildren(spinnerSection2Text)
        clearChildren(spinnerSection3Text)
        clearChildren(spinnerSection4Text)
        defaultActivityDropdown.selected = true;
  
    });


    let activityType = []

    activityJSON.forEach(activity => {
        activityType.push(activity.type);
       console.log(activityType)
    });
    let finalActivityList = Array.from(new Set(activityType))   //removes duplicates
  
    //create dropdown options
    for (let i = 0; i < finalActivityList.length; i++) {
        const option = finalActivityList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        activityDropdownLabel.appendChild(dropdown)        
    }
    
    let activityByCategory = [] 
    let activityImageByCategory = []
    let activityName;
    
            // wheelAnimation();
    const dropDownPick = function (randomActivity) {
            activityByCategory = [] 
            activityImageByCategory = []
            activityJSON.forEach(activity => {
                if(activity.type === randomActivity) {   
                    console.log(activityByCategory)   
                    activityByCategory.push(activity.name)
                    activityImageByCategory.push(activity.image)
                 }
            }) 
          
            possibleActivityNum = [];            
            possibleImageNum = [];

            activityName = randomize(activityByCategory, activityImageByCategory);
            spinnerSection1Text.innerText = activityName;
            activityName = randomize(activityByCategory, activityImageByCategory); 
            spinnerSection2Text.innerText = activityName; 
            activityName = randomize(activityByCategory, activityImageByCategory);
            spinnerSection3Text.innerText = activityName; 
            activityName = randomize(activityByCategory, activityImageByCategory);
            spinnerSection4Text.innerText = activityName; 
        }

        activityDropdownLabel.addEventListener("change", ()=> {
            dropDownPick(activityDropdownLabel.value) 
           
           });
   
  
    activityDropdownLabel.addEventListener("change", () => {
        dropDownPick(activityDropdownLabel.value)    
    });
    
    const activityNameElement = document.createElement("section")

    var choice = Math.floor(Math.random() * 4);
    activityButton.addEventListener("click", () => { 

     spinFunction(choice);

    activityElement.appendChild(activityNameElement)    
             
    }); 

    const spinFunction = function (choice) {

        var deg = 1215 + Math.floor(Math.random() * 10) * 360 + choice * 90 + Math.random() * 88 - 44; 
        secondarySpinnerContainer.style.transform = "rotate("+deg+"deg)"
        
        const element = document.getElementById("main-spinner-container-activity");
        element.classList.remove('animate')
        setTimeout(function() {
            element.classList.add('animate') 
            togglePopUp()
        }, 5000)
    }
    const surpriseButton = document.createElement("button")
    surpriseButton.classList.add("surprise")
    surpriseButton.innerText = "Surprise Us!"
    mainSpinnerContainer.appendChild(surpriseButton)

    surpriseButton.addEventListener("click", () => {    
        let randomActivityNum = Math.floor(Math.random() * finalActivityList.length)
        let randomActivity = finalActivityList[randomActivityNum]
        dropDownPick(randomActivity);
        spinFunction(choice);
    })
    
    return mainElement
}   
export {activitySection}
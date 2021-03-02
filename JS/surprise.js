
import {foodSection} from "./foodView.js"
import {activitySection} from "./activityView.js"
import {homeElement, dropDownPick, spinFunction, finalGenreList} from "./movieView.js"

const surpriseButtonView = function () {
const surpriseButtonDiv = document.createElement("div")    
surpriseButtonDiv.classList.add("surpriseDiv")
const surpriseButton = document.createElement("button")
surpriseButton.classList.add("surprise")
surpriseButton.innerText = "Surprise Us!"
surpriseButtonDiv.appendChild(surpriseButton)


   surpriseButton.addEventListener("click", () => {    
        let randomGenreNum = Math.floor(Math.random() * finalGenreList.length)
        let randomGenre = finalGenreList[randomGenreNum]
        dropDownPick(randomGenre);
        spinFunction(choice);   
     })
    return surpriseButtonDiv;
}
export {surpriseButtonView}
import {homeElement} from "./movieView.js"
import {createHeader} from "./header.js"
import {createFooter} from "./footer.js"
import {foodSection} from "./foodView.js"
import {activitySection} from "./activityView.js"
import { activityJSON } from "./activityJson.js"
// import {surpriseButtonView} from "./surprise.js"

const clearChildren = function (element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
}

const displayHomeView = function(movies, food) {
	const container = document.querySelector(".main-content");
    clearChildren(container);
    let header = createHeader();
    container.prepend(header);
    let mainElement = homeElement(movies);   
    container.appendChild(mainElement);
	let main2Element = foodSection(food);
	container.appendChild(main2Element)
	let main3Element = activitySection(activityJSON);
	container.appendChild(main3Element);
    // let surpriseElement = surpriseButtonView();
    // container.appendChild(surpriseElement);
    let footer = createFooter();
    container.appendChild(footer);
}



export { clearChildren }
export { displayHomeView }















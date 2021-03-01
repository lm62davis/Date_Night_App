const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("page-header");
    
    const nav = document.createElement("nav")
    nav.classList.add("navbar")
    header.appendChild(nav)

    const contact =document.createElement("button")
    contact.classList.add("contact")
    contact.innerText = "Contact Us" 
    nav.appendChild(contact)
  
    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-button")
    resetButton.innerText = "reset"
    nav.appendChild(resetButton)

    resetButton.addEventListener("click", () => {
          location.reload();
    })

    const title = document.createElement("div")
    title.classList.add("page-title")
    header.appendChild(title)

    const titleText = document.createElement('h2')
    titleText.classList.add("title")
    titleText.innerText = "Date Night App"
    title.appendChild(titleText)

    const banner = document.createElement("div")
    banner.classList.add("app-banner")
    header.appendChild(banner)

    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    banner.appendChild(wrapper)

    const choose = document.createElement("h3")
    choose.classList.add("t-text")
    wrapper.appendChild(choose)
    choose.innerText = "Choose a"

    const scrollingContentDiv = document.createElement("div")
    scrollingContentDiv.classList.add("header-content")
    wrapper.appendChild(scrollingContentDiv)

    const scrollingContentUL = document.createElement("ul")
    scrollingContentUL.classList.add("animated-text")
    scrollingContentDiv.appendChild(scrollingContentUL)

    const movieScroll = document.createElement("li")
    movieScroll.classList.add("single-text")
    scrollingContentUL.appendChild(movieScroll)
    movieScroll.innerText = "movie"

    const restaurantScroll = document.createElement("li")
    restaurantScroll.classList.add("single-text")
    scrollingContentUL.appendChild(restaurantScroll)
    restaurantScroll.innerText ="restaurant"

    const activityScroll = document.createElement("li")
    activityScroll.classList.add("single-text")
    scrollingContentUL.appendChild(activityScroll)
    activityScroll.innerText = "activity"

  

    return header;
}      
export { createHeader }
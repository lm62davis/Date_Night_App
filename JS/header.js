const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("page-header");
    
    const nav = document.createElement("nav")
    nav.classList.add("navbar")
    header.appendChild(nav)

    const contact = document.createElement("button")
    contact.classList.add("contact")
    contact.innerText = "Contact Us" 
    nav.appendChild(contact)

    const contactUl = function ()  {
    const contactUs = document.createElement("ul")
    contactUs.classList.add("contact-ul")
    nav.appendChild(contactUs)
      
    const brenaElement = document.createElement("li")
    brenaElement.classList.add("dropdown-content")
    const brenaNameElement = document.createElement("h4")
    brenaNameElement.innerText="Brena Bishop"
    const brenaPortfolio = document.createElement("a")
    brenaPortfolio.href = "https://brenabishop.github.io/"
    brenaElement.appendChild(brenaNameElement)
    brenaElement.appendChild(brenaPortfolio)
    contactUs.appendChild(brenaElement)

    const brandonElement = document.createElement("li")
    brandonElement.classList.add("dropdownn-content")
    const brandonNameElement = document.createElement("h4")
    brandonNameElement.innerText = "Brandon Terry"
    const brandonPortfolio = document.createElement("a")
    brandonPortfolio.href = "https://brandonterry.github.io/"
    brandonElement.appendChild(brandonNameElement)
    brenaElement.appendChild(brandonPortfolio)
    contactUs.appendChild(brandonElement)

    const sonyaElement = document.createElement("li")
    sonyaElement.classList.add("dropdown-content")
    const sonyaNameElement = document.createElement("h4")
    sonyaNameElement.innerText = "Sonya Stewart"
    const sonyaPortfolio = document.createElement("a")
    sonyaPortfolio.href = "https://sonyastewart.github.io/"
    sonyaElement.appendChild(sonyaNameElement)
    sonyaElement.appendChild(sonyaPortfolio)
    contactUs.appendChild(sonyaElement)

    const lindaElement = document.createElement("li")
    lindaElement.classList.add("dropdown-content")
    const lindaNameElement = document.createElement("h4")
    lindaNameElement.innerText = "Linda Martinez Davis"
    const lindaPortfolio = document.createElement("a")
    lindaPortfolio.href = "https://lindamdavis.github.io/"
    lindaElement.appendChild(lindaNameElement)  
    lindaElement.appendChild(lindaPortfolio)
    contactUs.appendChild(lindaElement)

    const mandyElement = document.createElement("li")
    mandyElement.classList.add("dropdown-content")
    const mandyNameElement = document.createElement("h4")
    mandyNameElement.innerText = "Mandy Johnston"
    const mandyPortfolio = document.createElement("a")
    mandyPortfolio.href = "https://mandyjohnston.github.io/"
    mandyElement.appendChild(mandyNameElement)
    mandyElement.appendChild(mandyPortfolio)
    contactUs.appendChild(mandyElement)

    contactUs.classList.toggle("active")
    }

    contact.addEventListener("click", () => {
    contactUl();
    })
  
    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-button")
    resetButton.innerText = "Reset"
    nav.appendChild(resetButton)

    resetButton.addEventListener("click", () => { 
          location.reload();
    })

    const quizButton = document.createElement("button");
    quizButton.classList.add("quiz-button")
    quizButton.innerText = "Love Language Quiz"
    nav.appendChild(quizButton)
    
    quizButton.addEventListener("click", () => { 
        window.open( 
          "https://www.5lovelanguages.com/quizzes/couples-quiz/", "_blank"); 
    });
    

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

    const loveLanguageScroll = document.createElement("li")
    loveLanguageScroll.classList.add("single-text")
    scrollingContentUL.appendChild(loveLanguageScroll)
    loveLanguageScroll.innerText = "love languages"

    

    return header;
}      
export { createHeader }
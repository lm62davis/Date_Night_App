const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("page-header");
    
    const nav = document.createElement("nav")
    nav.classList.add("navbar")
    header.appendChild(nav)

    const dropDown = document.createElement("div")
    dropDown.classList.add("contact")
    nav.appendChild(dropDown)

    const contact = document.createElement("button")
    contact.classList.add("contact-button")
    contact.innerText = "Contact Us" 
    dropDown.appendChild(contact)

    // const contactUl = function ()  {
    const contactUs = document.createElement("div")
    contactUs.classList.add("contact-content")
    dropDown.appendChild(contactUs)
      
   
    const brenaPortfolio = document.createElement("a")
    brenaPortfolio.innerText="Brena Bishop"
    brenaPortfolio.href = "https://brenabishop.github.io/"
    brenaPortfolio.target = "_blank"
    contactUs.appendChild(brenaPortfolio)
   
    const brandonPortfolio = document.createElement("a")
    brandonPortfolio.innerText = "Brandon Terry"
    brandonPortfolio.href = "https://brandon-terry.github.io/"
    brandonPortfolio.target = "_blank"
    contactUs.appendChild(brandonPortfolio)
    
    const sonyaPortfolio = document.createElement("a")
    sonyaPortfolio.innerText = "Sonya Stewart"
    sonyaPortfolio.href = "https://sonyastewart.github.io/"
    sonyaPortfolio.target = "_blank"
    contactUs.appendChild(sonyaPortfolio)

   
    const lindaPortfolio = document.createElement("a")
    lindaPortfolio.innerText = "Linda Martinez Davis"
    lindaPortfolio.href = "https://lm62davis.github.io"
    lindaPortfolio.target = "_blank"
    contactUs.appendChild(lindaPortfolio)

    const mandyPortfolio = document.createElement("a")
    mandyPortfolio.innerText = "Mandy Johnston"
    mandyPortfolio.href = "https://mandyjohnston.github.io/"
    mandyPortfolio.target = "_blank"
    contactUs.appendChild(mandyPortfolio)

    // contactUs.classList.toggle("active")
    // }

    // contact.addEventListener("click", () => {
    // contactUl();
    // })
  
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
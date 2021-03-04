  
const createFooter = function () {
    const footer = document.createElement("footer");
    footer.classList.add("main-footer");
    footer.innerHTML = `
            <img src="images/DNA2.png" alt="Team DNA" height="50px" width="75px">
          <small class="main-footer__copyright">We Can Code IT &copy;2021</small>
        `;
    return footer;
  };
  

    
  export { createFooter };
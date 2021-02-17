  
const createFooter = function () {
    const footer = document.createElement("footer");
    footer.classList.add("main-footer");
    footer.innerHTML = `
            <p>*TBD Team Name</p>
          <small class="main-footer__copyright">We Can Code IT &copy;2021</small>
        `;
    return footer;
  };
  
  export { createFooter };
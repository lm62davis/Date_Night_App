const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("page-header");
    header.innerHTML = `
        <nav class="navBar">
        <button class="reset-button">Reset</button>
        <button class="contact">Contact Us</button>
        <h1 class="main-header__title">Date Night</h1>
        </nav>`
    return header;
};

export { createHeader };
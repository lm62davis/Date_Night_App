const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("page-header");
    header.innerHTML = `
        <nav class="navbar">
        <button class="reset-button">Reset</button>
        <button class="contact">Contact Us</button>
        <h1 class="page-title"> </h1>
        </nav>`
    return header;
};


export { createHeader };
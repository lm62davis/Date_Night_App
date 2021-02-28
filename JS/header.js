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

// const resetButton = document.createElement("button");
// resetButton.classList.add("reset-button")
// createHeader.appendChild(resetButton)

// resetButton.addEventListener("click", () => {
    
//       resetButton.onclick = function resetSelections(movies, food, activities) {
//         location.reload();
//         clearChildren(container)
//         }
    };
export { createHeader }
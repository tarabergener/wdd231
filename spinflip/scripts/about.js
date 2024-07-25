const button = document.querySelector(".hamburger-button");

function hamburger() {

    let nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";
    } else {

        nav.style.display = "flex";
    }
}

const openButton = document.querySelector("#privacyPolicy");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");



openButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <p><strong>Privacy Policy</strong></p>
    <p>This is not a real gaming website, therefore we do not currently have any form of protection of your information.</p>`
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})
const openButton = document.querySelector("#memberBenefits");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");



openButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <p><strong>Non-Profit Cost:</strong> FREE<br>Block out dates apply.</p>
    <p><strong>Bronze Cost:</strong> $100<br>Block out dates apply.</p>
    <p><strong>Silver Cost:</strong> $500<br>No block out dates.<br>Addmission to all trainings.</p>
    <p><strong>Gold Cost:</strong> $1000<br>No block out dates.<br>Addmission to all special events and trainings.</p>`
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})
const lastModified = document.querySelector("#lastModified");
const currentYear = document.querySelector("#currentYear");

const time = new Date()

//currentYear.innerHTML = time.getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
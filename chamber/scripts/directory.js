const button = document.querySelector(".hamburger-button");

function hamburger() {

    let nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";
    } else {

        nav.style.display = "flex";
    }
}

const url = `data/members.json`;
const cards = document.querySelector("#tile");

async function getBusinessData() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayBusinesses(data.businesses);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

getBusinessData();

const displayBusinesses = (businesses) => {

    businesses.forEach((business) => {

        let tile = document.createElement("section");
		let businessName = document.createElement("h3");
		let address = document.createElement("p");
		let phone = document.createElement("p");
		let website = document.createElement("p");
		let image = document.createElement("img");

		businessName.textContent = business.businessName;
		address.innerHTML = `<p id="location">${business.address}</p>`;
		phone.innerHTML = `<p id="phone">${business.phone}</p>`;
		website.innerHTML = `<p id="size">${business.url}</p>`;
		image.setAttribute("src", business.icon);
		image.setAttribute("alt", `${business.businessName}`);
		image.setAttribute("loading", "lazy");
		

		tile.appendChild(businessName);
		tile.appendChild(address);
		tile.appendChild(phone);
		tile.appendChild(website);
		tile.appendChild(image);

		document.querySelector("#container").appendChild(tile);

    })
};
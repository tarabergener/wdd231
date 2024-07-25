const button = document.querySelector(".hamburger-button");

function hamburger() {

    let nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";
    } else {

        nav.style.display = "flex";
    }
}

const events = [
    {
        eventName: "COD Modern Warfare Community Tournament",
        eventDate: "July 17, 2024",
        eventStatus: "Virtually",
        eventLocation: "Remote",
        eventPrize: "Up to $180",
    },
    {
        eventName: "Super Smash Bros Casual Tournament",
        eventDate: "July 22, 2024",
        eventStatus: "In Person",
        eventLocation: "The Detour, 2200 Market Street, Carlsbad, CA", 
        eventPrize: "No Prize",
    },
    {
        eventName: "Spawn Camp Coaching & Skirmish",
        eventDate: "July 23, 2024",
        eventStatus: "In Person",
        eventLocation: "7025 County Road 46A, Lake Mary, FL 32746",
        eventPrize: "No Prize",
    },
];

displayEvent(events)

function displayEvent(eventInfo) {

    document.querySelector(".events").innerHTML = "";
    eventInfo.forEach(event => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let date = document.createElement("p");
        let status = document.createElement("p");
        let location = document.createElement("p");
        let prize = document.createElement("P");

        name.textContent = event.eventName;
        date.innerHTML = `<p id="date"><strong>Date:</strong> ${event.eventDate}</p>`;
        status.innerHTML = `<p id="status"><strong>Attend This Event:</strong> ${event.eventStatus}</p>`;
        location.innerHTML = `<p id="location"><strong>Location:</strong> ${event.eventLocation}</p>`;
        prize.innerHTML = `<p id="prize"><strong>Prize:</strong> ${event.eventPrize}</p>`;

        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(status);
        card.appendChild(location);
        card.appendChild(prize);

        document.querySelector(".events").appendChild(card);
    })
}


const url = `data/games.json`;
//const cards = document.querySelector("#tile");

async function getGameData() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayGames(data.games);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
};

getGameData();

const link = `data/events.json`;
//const card = document.querySelector("#tile");

async function getEventData() {
    try {
        const response = await fetch(link);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayEvents(data.events);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
};

getEventData();

//const shuffleList = getGameData().sort(() => Math.random() - 0.5); // Shuffle the array
//const numRandomElements = 4; // Change this to the desired number of elements
//const randomElements = shuffleList.slice(0, numRandomElements);
//console.log(randomElements);

const displayGames = (games) => {

    games.forEach((game) => {

        let tile = document.createElement("section");
        let productName = document.createElement("h3");
        let releaseDate = document.createElement("p");
        let image = document.createElement("img");

        image.setAttribute("src", game.imageUrl);
        image.setAttribute("alt", `${game.productName}`);
        image.setAttribute("loading", "lazy");
        productName.textContent = game.productName;
        releaseDate.innerHTML = `<p>Year of Release: ${game.releaseDate}</p>`

        tile.appendChild(image);
        tile.appendChild(productName);
        tile.appendChild(releaseDate);


        document.querySelector(".featured-games").appendChild(tile);
    })
};

const displayEvents = (events) => {

    events.forEach((event) => {

        let tile = document.createElement("section");
        let eventName = document.createElement("h3");
        let eventDate = document.createElement("p");
        let eventLocation = document.createElement("p");

        eventName.innerHTML = `<p>${event.eventName}</p>`;
        eventDate.innerHTML = `<p>Event Date: ${event.eventDate}</p>`;
        eventLocation = `<p>Location: ${event.eventLocation}</p>`;

        tile.appendChild(eventName);
        tile.appendChild(eventDate);
        tile.appendChild(eventLocation);


        document.querySelector(".events").appendChild(tile);
    })
};
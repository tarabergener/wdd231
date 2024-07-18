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
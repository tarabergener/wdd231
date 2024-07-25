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

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".description");

const myKey = "876b7d3aca21c18c22af5215c487e6c0";
const myLat = "28.039465";
const myLong = "-81.949806";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

apiFetch()

function displayResults(data) {

    tempElement.innerHTML = `${data.main.temp}&deg;F`
    descElement.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconElement.setAttribute("SRC", iconsrc);
    iconElement.setAttribute("alt", data.weather[0].description);
}
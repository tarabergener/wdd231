const events = [
    {
        eventName: "Community Samples Give Away",
        eventDate: "July 3, 2024",
        eventDetails: "Come sample all of your favorite places newest inventory!",
        admissionFee: 5
    },
    {
        eventName: "Weekly Farmers Market",
        eventDate: "July 6, 2024",
        eventDetails: "Enjoy shopping products and foods from your very own communtiy.",
        admissionFee: 0
    },
    {
        eventName: "All About Lakeland",
        eventDate: "July 7, 2024",
        eventDetails: "Take pride for where you live. Join us for service projects all over the city you love.",
        admissionFee: 0
    },
    {
        eventName: "Weekly Farmers Market",
        eventDate: "July 13, 2024",
        eventDetails: "Enjoy shopping products and foods from your very own communtiy.",
        admissionFee: 0
    },
    {
        eventName: "Weekly Farmers Market",
        eventDate: "July 13, 2024",
        eventDetails: "Enjoy shopping products and foods from your very own communtiy.",
        admissionFee: 0,
    },

];

displayEvent(events)

function displayEvent(eventInfo) {

    document.querySelector(".container").innerHTML = "";
    eventInfo.forEach(event => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let date = document.createElement("p");
        let details = document.createElement("p");
        let admission = document.createElement("p");

        name.textContent = event.eventName;
        date.innerHTML = `<p id="date">Date: ${event.eventDate}</p>`;
        details.innerHTML = `<p id="details">Details: ${event.eventDetails}</p>`;
        admission.innerHTML = `<p id="admission">Admission: $${event.admissionFee}</p>`;

        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(details);
        card.appendChild(admission);

        document.querySelector(".container").appendChild(card);
    })
}

const button = document.querySelector(".hamburger-button");

function hamburger() {

    let nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";
    } else {

        nav.style.display = "flex";
    }
}

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (response.ok) {
            const data = await response.json();
            getBusinessCards(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

getMembers();

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

apiFetch();

const todayTemp = document.querySelector(".today");
const tomorrowTemp = document.querySelector(".tomorrow");
const nextDayTemp = document.querySelector(".next-day");

const threeDayForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function forecastFetch() {
    try {
        const response = await fetch(threeDayForecast);
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

forecastFetch();

function displayResults(data) {

    tempElement.innerHTML = `${data.main.temp}&deg;F`
    descElement.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconElement.setAttribute("SRC", iconsrc);
    iconElement.setAttribute("alt", data.weather[0].description);
}

function displayForecast(data) {
    let day = new Date();
    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let tomorrowDay = daysName[day.getDay()+1];
    let nextDayName = daysName[day.getDay()+2];
    todayTemp.innerHTML = `Today: ${data.list[4].main.temp}&deg;F`;
    tomorrowTemp.innerHTML = `${tomorrowDay}: ${data.list[8].main.temp}&deg;F`;
    nextDayTemp.innerHTML = `${nextDayName}: ${data.list[12].main.temp}&deg;F`;
}

const businessName = document.querySelector(".business-name");
const businessAddress = document.querySelector(".email");
const businessPhone = document.querySelector(".phone");
const businessUrl = document.querySelector(".url");
const businessIcon = document.querySelector(".bus-icon");

function getBusinessCards(data) {

    businessName.innerHTML = data.businessName;
    businessAddress.innerHTML = data.address;
    businessPhone.innerHTML = data.businesses.phone;
    businessUrl.innerHTML = data.businesses.url;
    const imgsrc = data.businesses.icon;
    businessIcon.setAttribute("SRC", imgsrc);
    businessIcon.setAttribute("alt", data.businesses.icon);
}
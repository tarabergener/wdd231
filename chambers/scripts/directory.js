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
        eventName: "All About Anicity",
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
        let title = document.createElement("h3")
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

const temp = 75
const wind = 7

let velocity = wind * 0.7;
let windChill = temp - velocity;

document.querySelector("#windChill").innerHTML = windChill.toFixed(2) + '&deg;F';

document.querySelector("#temp").innerHTML = temp + "&degF";
document.querySelector("#wind").innerHTML = wind + "km/h";

displayWeather(temp, wind)

function displayWeather()
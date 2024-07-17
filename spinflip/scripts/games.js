const filterMenu = document.querySelector('.filter-list');
const filterButton = document.querySelector('#filter-button');

filterButton.addEventListener('click', () => {
	filterMenu.classList.toggle('open');
	filterButton.classList.toggle('open');
});

const games = [
	{
	  imageUrl: "images/goat-simulator.jpg",
      productName: "Goat Simulator 3",
      players: "Single player",
      onlinePlay: "No",
      console: "PlayStation",
      gameRating: "T",
    },
    {
      imageUrl: "images/Indiana-Jones-and-the-Great-Circle.jpg",
      productName: "Indiana Jones and the Great Circle",
      players: "Single player",
      onlinePlay: "No",
      console: "Xbox",
      gameRating: "T",
    },
    {
      imageUrl: "images/just-dance-2024.jpg",
      productName: "Just Dance 2024 Edition",
      players: "2-4 players",
      onlinePlay: "Yes",
      console: "PlayStation",
      gameRating: "E",
    },
    {
      imageUrl: "images/Luigis-Mansion-2.jpg",
      productName: "Luigi's Mansion 2HD",
      players: "Single player",
      onlinePlay: "No",
      console: "Nintendo Switch",
      gameRating: "E",
    },
    {
      imageUrl: "images/mario-party.jpg",
      productName: "Super Mario Party",
      players: "Up to 4 players",
      onlinePlay: "No",
      console: "Nintendo Switch",
      gameRating: "E",
    },
    {
      imageUrl: "images/mlb-the-show.jpg",
      productName: "MLB The Show '24",
      players: "Single player",
      onlinePlay: "Yes",
      console: "PlayStation",
      gameRating: "E",
    },
    {
      imageUrl: "images/paper-mario.jpg",
      productName: "Paper Mario Origami King",
      players: "Single player",
      onlinePlay: "No",
      console: "Nintendo Switch",
      gameRating: "E",
    },
    {
      imageUrl: "images/pikmin4.jpg",
      productName: "Pikmin 4",
      players: "Up to 2 players",
      onlinePlay: "No",
      console: "Nintendo Switch",
      gameRating: "E10+",
    },
    {
      imageUrl: "images/pokemon-arceus.jpg",
      productName: "Pokemon Legends of Arceus",
      players: "Up to 2 players",
      onlinePlay: "No",
      console: "Nintendo Switch",
      gameRating: "E",
    },
    {
      imageUrl: "images/Star-Wars-Jedi-Fallen-Order.jpg",
      productName: "Star Wars Jedi Fallen Order",
      players: "Single player",
      onlinePlay: "No",
      console: "Xbox",
      gameRating: "T",
    },
    {
      imageUrl: "images/super-smash.jpg",
      productName: "Super Smash Bros. Ultimate",
      players: "Up to 4 players",
      onlinePlay: "Yes",
      console: "Nintendo Switch",
      gameRating: "E10+",
    },
    {
      imageUrl: "images/zelda-tears-of-kingdom.jpg",
      productName: "Zelda Tears of the Kingdom",
      players: "Single player",
      onlinePlay: "No",
      console: "Nintendo Switch",
      gameRating: "E10+",
    },
];

displayInventory(games);


const nintendoPage = document.querySelector('#nintendo');
nintendoPage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.console == "Nintendo Switch")
)));

const xboxPage = document.querySelector('#xbox');
xboxPage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.console == "Xbox"))
));

const playstationPage = document.querySelector('#playstation');
playstationPage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.console == "PlayStation"))
));

const singlePlayerPage = document.querySelector('#single');
singlePlayerPage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.players == "Single player"))
));

const multiplayerPage = document.querySelector('#multi');
multiplayerPage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.players != "Single player"))
));

const everyonePage = document.querySelector('#everyone');
everyonePage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.gameRating == "E"))
));

const everyone10Page = document.querySelector('#e10');
everyone10Page.addEventListener("click", () => (
	displayInventory(games.filter(game => game.gameRating == "E10+"))
));

const teenPage = document.querySelector('#teen');
teenPage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.gameRating == "T"))
));

const onlinePage = document.querySelector('#online');
onlinePage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.onlinePlay == "Yes"))
));

const noOnlinePage = document.querySelector('#noOnline');
noOnlinePage.addEventListener("click", () => (
	displayInventory(games.filter(game => game.onlinePlay == "No"))
));

const allPage = document.querySelector('#all');
allPage.addEventListener("click", () => (
	displayInventory(games)	
));

function displayInventory(gameInfo) {

	document.querySelector(".games-list").innerHTML = "";
	gameInfo.forEach(game => {

		let tile = document.createElement("section");
        let image = document.createElement("img");
		let name = document.createElement("h3");
        let console = document.createElement("p");

        image.setAttribute("src", game.imageUrl);
		image.setAttribute("alt", `${game.productName}`);
		image.setAttribute("loading", "lazy");
		name.textContent = game.productName;
		console.innerHTML = `<p id="console">${game.console}</p>`;
		
        tile.appendChild(image);
		tile.appendChild(name);
		tile.appendChild(console);

		document.querySelector(".games-list").appendChild(tile)
	});
}
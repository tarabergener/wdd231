const displayBusinesses = (businesses) => {

    businesses.forEach((business) => {

        let tile = document.createElement("div");
        let image = document.createElement("img");

        image.setAttribute("src", business.icon);
        image.setAttribute("alt", `${business.businessName}`);
        image.setAttribute("loading", "lazy");
    })
}
const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=1000&apikey=bcc7138dea229de08ecb6d7ef8f327f8&hash=286799866b3a046302f6a597dac79ed9";

var response;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function ejecuteFetch(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        response = data.data.results[getRandomInt(0, 20)];
        addLogo();
        createElements(response);
        console.log(response);
        
    })
    .catch(error => console.log(error))
}

ejecuteFetch();

function addLogo(){
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("container");
    
    const logoRow = document.createElement("div");
    logoRow.classList.add("row");
    
    const LogoCol = document.createElement("div");
    LogoCol.classList.add("col","logo");
    
    const logo = document.createElement("img");
    logo.setAttribute("src", "images/marvel_logo.png");
    logo.setAttribute("width", "145");

    LogoCol.appendChild(logo);
    logoRow.appendChild(LogoCol);
    logoContainer.appendChild(logoRow);
    
    document.getElementById("body").appendChild(logoContainer);
}

function createElements(response){
    const placeholder = response.thumbnail.path + "." + response.thumbnail.extension;
    const titleText = response.name;
    const bodyText = response.description;
    const footer = "Powered by Marvel Api";
    const alt = response.name;
    
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("id", "container")
    
    const row = document.createElement("div");
    row.classList.add("row");
    
    const col = document.createElement("div");
    col.classList.add("col");
    
    const card = document.createElement("div");
    card.classList.add("card","h-100");
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    cardFooter.textContent = footer;
    
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src", placeholder);
    image.setAttribute("alt", alt);
    
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = titleText;
    
    const body = document.createElement("p");
    body.classList.add("card-text");
    body.textContent = bodyText;
    
    cardBody.appendChild(title);
    cardBody.appendChild(body);

    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);
    document.getElementById("body").appendChild(container);
}

/*function printElements(response){
    const entries = Object.entries(response);
    entries.forEach(element => console.log(element));
}*/




const beerContainer = document.querySelector(".beer-container");
const button = document.querySelector(".generate_button");
const url = "https://api.punkapi.com/v2/beers/random";

async function apiCall(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json[0]);

  generateHtml(json);
}
apiCall(url);

button.addEventListener("click", () => {
  apiCall(url);
});

function generateHtml(beerArray) {
  if (beerArray[0].image_url) {
    beerContainer.innerHTML = `
    <div class ="align-items-center row" >
    <h3>${beerArray[0].name}</h3>
    <p>${beerArray[0].tagline}</p>
    <a href="beer.html?id=${beerArray[0].id}" class="img_container">
    <img class="beer_img" src="${beerArray[0].image_url}" alt="">
    </a>
    <p>${beerArray[0].description}</p>
    <ul class="list-group">
    <li class="list-group-item">${beerArray[0].ph}</li>
    <li class="list-group-item">${beerArray[0].volume.value} ${beerArray[0].volume.unit}</li>
    <li class="list-group-item">${beerArray[0].first_brewed}</li>
    </ul>
    `;
  } else {
    beerContainer.innerHTML = `
    <h3>${beerArray[0].name}</h3>
    <p>${beerArray[0].tagline}</p>
    <a href="beer.html?id=${beerArray[0].id}" class="img_container">
    <img class="beer_img" src="https://static.specsonline.com/wp-content/themes/Specs%20Theme/images/default_beer.png" alt="" />

    </a>
    <p>${beerArray[0].description}</p>
    <ul class="list-group">
    <li class="list-group-item">${beerArray[0].ph}</li>
    <li class="list-group-item">${beerArray[0].volume.value} ${beerArray[0].volume.unit}</li>
    <li class="list-group-item">${beerArray[0].first_brewed}</li>
    </ul>
    </div>

    `;
  }
}

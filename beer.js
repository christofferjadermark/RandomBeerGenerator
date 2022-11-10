const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const beerInfo = document.querySelector(".info-container");

// console.log(id);

const url = `https://api.punkapi.com/v2/beers/${id}`;

const ingredientsHtml = document.querySelector(".ingredients");

async function apiCall(url) {
  const response = await fetch(url);
  const json = await response.json();

  generateHtml(json);
  createsIngredientsList(json);
}

apiCall(url);

function generateHtml(x) {
  if (x[0].image_url) {
    beerInfo.innerHTML = `
    <h1 class="main-title">${x[0].name}</h1>
    <p class="tagline-text">${x[0].tagline}</p>
    <div class="img_container">
    <img class="beer_img" src="${x[0].image_url}" alt="">
    </div>
    <p>${x[0].food_pairing}</p>
    <p>${x[0].brewers_tips}</p>
    `;
  } else {
    beerInfo.innerHTML = `
    <h1 class="main-title">${x[0].name}</h1>
    <p class="tagline-text">${x[0].tagline}</p>
    <div class="img_container">
    <img class="beer_img" src="https://static.specsonline.com/wp-content/themes/Specs%20Theme/images/default_beer.png" alt="">
    </div>
    <p>${x[0].food_pairing}</p>
    <p>${x[0].brewers_tips}</p>
    `;
  }
}

function createsIngredientsList(x) {
  let ingredientsArray = [];
  ingredientsArray = x[0].ingredients.malt;

  for (let i = 0; i < ingredientsArray.length; i++) {
    ingredientsHtml.innerHTML += `
    <li>${ingredientsArray[i].name}, ${ingredientsArray[i].amount.value} ${ingredientsArray[i].amount.unit}</li>
    `;
  }
}

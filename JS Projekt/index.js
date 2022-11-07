const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

async function apiCall(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
}
apiCall(url);

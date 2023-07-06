/*

  Theoretical Question : 

  Asynchronous programming in JavaScript allows tasks to be run independently,
  without blocking the main program flow. It utilizes callbacks, promises,
   or async/await syntax to handle operations that may take time.
   It is very useful for usage of resources, and responsive user interfaces

*/

const containerDiv = document.querySelector(".document");
const button = document.querySelector("#button");

const continent = document.querySelector("#continent");
const country = document.querySelector("#country");
const region = document.querySelector("#region");
const city = document.querySelector("#city");
const district = document.querySelector("#district");

async function getInfo() {
  const response = await fetch("https://api.ipify.org/?format=json", {
    method: "GET",
  });
  const data = await response.json();
  const ip = data.ip;

  const infoResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
    method: "GET",
  });

  const infoData = await infoResponse.json();
  console.log(infoData);

  continent.textContent = infoData.timezone
    ? infoData.timezone.split("/")[0]
    : "Unknown";
  country.textContent = infoData.country_name;
  region.textContent = infoData.region;
  city.textContent = infoData.city;
  district.textContent = `Lat: ${infoData.latitude} Lon: ${infoData.longitude}`;
}

button.addEventListener("click", getInfo);

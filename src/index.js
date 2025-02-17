import "./style.css";
import getLocationData from "./api";
import Location from "./processing";

const form = document.querySelector(".location-form");
const userLocation = document.querySelector("#location");

form.addEventListener("submit", (event) => {
  getLocationData(userLocation.value).then((locationData) => {
    const currentLocation = new Location(locationData);
    console.log(currentLocation.getNow());
  });
  event.preventDefault();
});

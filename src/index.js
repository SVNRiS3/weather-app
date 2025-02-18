import "./style.css";
import getUserLocation from "./processing";

const form = document.querySelector(".location-form");
const userLocation = document.querySelector("#location");

getUserLocation(form, userLocation);

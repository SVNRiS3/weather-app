import "./style.css";
import getLocationData from "./api";
import Location from "./processing";

const locationData = await getLocationData("Reda,pl");
const currentLocation = new Location(locationData);
console.log(currentLocation.getDay(0));

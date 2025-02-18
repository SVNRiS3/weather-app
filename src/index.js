import "./style.css";
import run from "./render";

const form = document.querySelector(".location-form");
const userLocationInput = document.querySelector("#location");

run(form, userLocationInput);

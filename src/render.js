import getUserLocation from "./processing";

const createElementAdv = (type, className = null, text = null) => {
  const newElement = document.createElement(type);
  if (className) {
    newElement.classList.add(className);
  }
  if (text) {
    newElement.textContent = text;
  }
  return newElement;
};

const renderWeather = (element, weatherData) => {
  const weatherInfo = [
    createElementAdv("div", "info", weatherData.conditions),
    createElementAdv("div", "info", `Feels like: ${weatherData.feelslike}`),
    createElementAdv("div", "info", `Temperature: ${weatherData.temp}`),
  ];

  weatherInfo.map((el) => element.appendChild(el));
};

const renderError = (element, errorMessage) => {
  const errorBlock = createElementAdv("div", "error", errorMessage);
  element.appendChild(errorBlock);
};

const run = (form, userLocationInput) => {
  const weatherBlock = document.querySelector(".container");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getUserLocation(userLocationInput).then((response) => {
      weatherBlock.innerHTML = "";
      if (typeof response !== "object") renderError(weatherBlock, response);
      else renderWeather(weatherBlock, response);
    });
  });
};

export default run;

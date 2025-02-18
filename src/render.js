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
  const weatherBlock = document.querySelector(".container");
  weatherBlock.innerHTML = "";
  const weatherInfo = [
    createElementAdv("div", "info", weatherData.conditions),
    createElementAdv("div", "info", `Feels like: ${weatherData.feelslike}`),
    createElementAdv("div", "info", `Temperature: ${weatherData.temp}`),
  ];

  weatherInfo.map((el) => weatherBlock.appendChild(el));

  element.after(weatherBlock);
  // todo
};

const renderError = (element, errorMessage) => {
  const errorBlock = createElementAdv("div", "error", errorMessage);
  element.after(errorBlock);
};

const run = (form, userLocationInput) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getUserLocation(userLocationInput).then((response) => {
      console.log(response);
      if (typeof response !== "object") renderError(form, response);
      else renderWeather(form, response);
    });
  });
};

export default run;

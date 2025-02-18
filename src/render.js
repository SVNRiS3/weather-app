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
  const weatherBlock = createElementAdv("div", "container");
  element.after(weatherBlock);
  // todo
};

const renderError = (element, errorMessage) => {
  const errorBlock = createElementAdv("div", "error", errorMessage);
  element.after(errorBlock);
};

const run = (form, userLocationInput) => {
  form.addEventListener("submit", (event) => {
    getUserLocation(form, userLocationInput, event).then((response) => {
      if (typeof response !== "object") renderError(form, response);
      renderWeather(form, response);
    });
  });
};

export default run;

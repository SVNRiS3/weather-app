import getLocationData from "./api";

class Location {
  constructor(locationData) {
    this.data = locationData;
  }

  getNow() {
    const weatherNowData = this.data.currentConditions;
    const { conditions, feelslike, temp } = weatherNowData;
    const weatherDataFiltered = {
      conditions,
      feelslike,
      temp,
    };
    return weatherDataFiltered;
  }
}

const getUserLocation = (form, userLocation) => {
  form.addEventListener("submit", (event) => {
    getLocationData(userLocation.value)
      .then((locationData) => {
        const currentLocation = new Location(locationData);
        console.log(currentLocation.getNow());
        return currentLocation;
      })
      .catch((error) => console.log(error.message));
    event.preventDefault();
  });
};

export default getUserLocation;

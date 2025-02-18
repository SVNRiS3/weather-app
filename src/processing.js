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

const getUserLocation = (form, userLocation, event) => {
  event.preventDefault();
  return getLocationData(userLocation.value)
    .then((locationData) => {
      const currentLocation = new Location(locationData);
      console.log(currentLocation);
      return currentLocation;
    })
    .catch((error) => error.message);
};

export default getUserLocation;

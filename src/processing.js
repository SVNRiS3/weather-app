export default class Location {
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

export default class Location {
  constructor(locationData) {
    this.data = locationData;
  }

  getAddress() {
    return this.data.resolvedAddress;
  }

  getDescription() {
    return this.data.description;
  }

  getToday() {
    return this.data.currentConditions;
  }
}

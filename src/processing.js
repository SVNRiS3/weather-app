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

  getNow() {
    return this.data.currentConditions;
  }

  getDay(day) {
    return this.data.days[day];
  }
}

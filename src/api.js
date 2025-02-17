const SITE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "77XKVNDA3MLAW8NWMJHKF3Q2Q";
const API_KEY_URL = `?key=${API_KEY}`;

const getLocationData = async (location) => {
  try {
    const response = await fetch(SITE_URL + location + API_KEY_URL);
    return response.json();
  } catch (error) {
    return console.log("Error: ", error);
  }
};

export default getLocationData;

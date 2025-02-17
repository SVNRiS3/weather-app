const SITE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "77XKVNDA3MLAW8NWMJHKF3Q2Q";
const API_KEY_URL = `?key=${API_KEY}`;

const getLocationData = async (location) => {
  const response = await fetch(SITE_URL + location + API_KEY_URL);
  const responseJSON = await response.json();
  console.log(responseJSON);
};

export default getLocationData;

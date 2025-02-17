const SITE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "77XKVNDA3MLAW8NWMJHKF3Q2Q";
const API_KEY_URL = `?key=${API_KEY}`;

const getLocationData = async (location) => {
  try {
    const response = await fetch(SITE_URL + location + API_KEY_URL);
    if (!response.ok) {
      throw new Error("Location not found");
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default getLocationData;

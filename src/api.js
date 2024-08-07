import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: { q: city, appid: API_KEY, units: 'metric' }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      return error;
    }
  };
  
  export const getForecast = async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: { q: city, appid: API_KEY, units: 'metric' }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching forecast:', error);
      return error;
    }
  };

  export const getUserCoordinates = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };
  export const getCityFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data.name;
    } catch (error) {
      console.error('Error fetching city from coordinates:', error);
      return null;
    }
  };
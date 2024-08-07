import React, { useState,useEffect } from 'react';
import { getCityFromCoordinates, getUserCoordinates } from '../api';

const Search = ({ onSearch }) => {
    
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div class="search-bar">
        <input type="text" id="city" value={city} placeholder="Enter city name" onChange={(e)=>{setCity(e.target.value)}}/>
        <button>Search</button>
      </div>
      {/**<div class="current-weather">
        <h2 id="current-city">City Name</h2>
        <img id="current-icon" src="" alt="weather-icon"/>
        <p id="current-description">Weather Description</p>
        <p id="current-temp">Temperature</p>
      </div>
      <div class="forecast">
        <div class="forecast-item">
          <p>Date</p>
          <img src="" alt="weather-icon"/>
          <p>Description</p>
          <p>Temp</p>
        </div>
        <div class="forecast-item">
          <p>Date</p>
          <img src="" alt="weather-icon"/>
          <p>Description</p>
          <p>Temp</p>
        </div>
        <div class="forecast-item">
          <p>Date</p>
          <img src="" alt="weather-icon"/>
          <p>Description</p>
          <p>Temp</p>
        </div>
        <div class="forecast-item">
          <p>Date</p>
          <img src="" alt="weather-icon"/>
          <p>Description</p>
          <p>Temp</p>
        </div>
        <div class="forecast-item">
          <p>Date</p>
          <img src="" alt="weather-icon"/>
          <p>Description</p>
          <p>Temp</p>
        </div>
      </div> */}
    </form>
  );
};

export default Search;

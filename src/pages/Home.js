import React, { useState,useEffect } from 'react';
import Search from '../components/Search';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import Favorites from '../components/Favorites';
import { getCityFromCoordinates, getCurrentWeather, getForecast, getUserCoordinates } from '../api';
import { Grid } from '@mui/material';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (city) => {
    const forecastData = await getForecast(city);
    setForecast(forecastData);
  };

  useEffect(()=>{
    (async()=>{
        const { latitude, longitude } = await getUserCoordinates();
        const city = await getCityFromCoordinates(latitude, longitude);
        const weatherData = await getCurrentWeather(city);
        setWeather(weatherData);
    })()
  },[])

  const onAddToFavourites=(forecast)=>{
    let _favorites=[...favorites];
    _favorites=_favorites.filter(_obj=>_obj?.city.name!=forecast?.city.name);
    setFavorites([...favorites,forecast]);
  }

  const onFavSelect=(forecast)=>{
    setForecast(forecast);
  }

  return (
    <div class="app">
      <Grid container>
        <Grid item lg={4} sm={12} container sx={{padding:"66px",background:"#fafafa"}}>
        <Grid item xs={12}><Search onSearch={handleSearch} /></Grid>
        <Grid item xs={12}><CurrentWeather weather={weather} /></Grid>
        <Grid item xs={12}><Favorites favorites={favorites} onFavSelect={onFavSelect} /></Grid>
        </Grid>
        <Grid item lg={8} sm={12} sx={{paddingX:"100px"}}><Forecast forecast={forecast} favorites={favorites} onAddToFavourites={onAddToFavourites}/></Grid>
        
      </Grid>
    </div>
  );
};

export default Home;

import React from 'react';
import { Grid, Paper, Typography, Box, Button ,Alert} from '@mui/material';

const Forecast = ({ forecast, onAddToFavourites,favorites }) => {
  if(forecast?.city?.name==undefined){
    return (
      <Box mt={4}>
        <Alert severity="error">Please Provide Proper City in the Search Box.</Alert>
      </Box>
    ); 
  }
 
  // Get the forecast for the next 5 days at 12:00 PM
  const forecastItems = forecast.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 5);
  let hideFav=false;
  let _favorites=[...favorites];
    _favorites=_favorites.filter(_obj=>{if(_obj?.city.name==forecast?.city.name){
      hideFav=true;
    }});
  
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom align="center">
        5-Day Forecast for {forecast.city.name}
      </Typography>
      {!hideFav&&
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onAddToFavourites(forecast)}
        sx={{ mb: 4 }}
      >
        Add to Favourites
      </Button>}
      <Grid container spacing={2}>
        {forecastItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.dt}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1">
                {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </Typography>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather-icon" />
              <Typography variant="body1">{item.weather[0].description}</Typography>
              <Typography variant="h6">{item.main.temp.toFixed(2)}°C</Typography>
              <Typography variant="body2">Humidity: {item.main.humidity}%</Typography>
              <Typography variant="body2">Wind: {item.wind.speed} m/s</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Forecast;

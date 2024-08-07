import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 4, textAlign: 'center' }}>
      <Typography variant="h5">{weather.name}</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          style={{ marginRight: 10 }}
        />
        <Typography variant="h6">{weather.weather[0].description}</Typography>
      </Box>
      <Typography variant="h4" mt={2}>{weather.main.temp.toFixed(2)}°C</Typography>
    </Paper>
  );
};

export default CurrentWeather;

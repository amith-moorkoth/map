import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';

const Favorites = ({ favorites, onFavSelect }) => {
  if (!favorites.length) return null;

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom align="center">
        Favorite Locations
      </Typography>
      <Paper elevation={3}>
        <List>
          {favorites.map((fav) => (
            <ListItem button key={fav.city.name} onClick={() => onFavSelect(fav)}>
              <ListItemText primary={fav.city.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Favorites;

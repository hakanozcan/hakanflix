import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  console.log(user);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  const favoriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>Profilim</Typography>
        <Button color="inherit" onClick={logout}>
          Çıkış Yap &nbsp; <ExitToApp />
        </Button>
        { }
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="h5">Henüz favori filminiz yok!</Typography>
        : (
          <Box>
            Favori Filmler
          </Box>
        )}
    </Box>
  );
}

export default Profile;

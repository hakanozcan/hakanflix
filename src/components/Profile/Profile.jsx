import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '..';

function Profile() {
  const { user } = useSelector(userSelector);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  // console.log(user);

  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>Profilim</Typography>
        <Button color="inherit" onClick={logout}>
          Çıkış Yap &nbsp; <ExitToApp />
        </Button>
        { }
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length
        ? <Typography variant="h5">Henüz favori filminiz yok!</Typography>
        : (
          <Box>
            <RatedCards title="Favori Filmler" data={favoriteMovies} />
            <RatedCards title="İzleme Listesi" data={watchlistMovies} />
          </Box>
        )}
    </Box>
  );
}

export default Profile;

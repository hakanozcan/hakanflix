import React, { useEffect } from 'react';
import { Divider, ListItem, List, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const logo = 'https://iili.io/Qfbfv2.png';
const categories = [
  { label: 'Popüler', value: 'popular' },
  { label: 'En Çok Oylanan', value: 'top_rated' },
  { label: 'Yakında', value: 'upcoming' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={theme.palette.mode === 'light' ? logo : logo} alt="Hakanflix Logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Kategoriler</ListSubheader>
        {categories?.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">

            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
              <ListItemIcon>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>

          </Link>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader>Türler</ListSubheader>
        {isFetching ? (
          <Box
            display="flex"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        ) : data.genres?.map(({ name, id }) => (
          <Link key={name} className={classes.links} to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>

          </Link>
        ))}
      </List>
    </>

  );
}

export default Sidebar;

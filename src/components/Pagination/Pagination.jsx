import React from 'react';
import { Typography, Button } from '@mui/material';
import { ArrowBackIosNewTwoTone, ArrowForwardIosTwoTone } from '@mui/icons-material/';
import useStyles from './styles';

function Pagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  if (totalPages === 0) return null;
  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} endIcon={<ArrowBackIosNewTwoTone />} className={classes.button} type="button" />
      <Typography variant="h4" className={classes.pageNumber}>{currentPage}</Typography>
      <Button onClick={handleNext} endIcon={<ArrowForwardIosTwoTone />} className={classes.button} type="button" />
    </div>
  );
}

export default Pagination;

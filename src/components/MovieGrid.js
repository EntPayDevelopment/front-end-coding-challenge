import React from "react";
import { Movie } from './Movie';
import { Grid } from './hoc';

export const MovieGrid = ({ movies }) => (
  <Grid>
    {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
  </Grid>
);

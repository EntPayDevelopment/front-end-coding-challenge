import React, { useEffect } from "react";
import { MovieGrid } from "../../components";
import { Layout } from "../../components/hoc";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
const { movieActions } = actions;

export const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const isLoading = useSelector((state) => state.movies.loader);
  useEffect(() => {
    dispatch({ type: movieActions.GET_MOVIES });
  }, []);

  return (
    <div>
      <Layout isLoading={isLoading}>
        <MovieGrid movies={movies} />
      </Layout>
    </div>
  );
};

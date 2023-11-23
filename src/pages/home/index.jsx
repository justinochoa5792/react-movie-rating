import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./Column-Display";
import { fetchMovies, fetchTvShows } from "./Query";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [display, setDisplay] = useState("Movies");
  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: tvData, isLoading: isLoadingTV } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  return (
    <div style={{ marginTop: 80, height: "auto", textAlign: "center" }}>
      <Button.Group>
        <Button
          color={display === "Movies" ? "blue" : undefined}
          onClick={() => setDisplay("Movies")}
        >
          Movies
        </Button>
      </Button.Group>
      <Button.Group>
        <Button
          color={display === "TvShows" ? "blue" : undefined}
          onClick={() => setDisplay("TvShows")}
        >
          Tv Shows
        </Button>
      </Button.Group>
      {isLoadingMovies || isLoadingTV ? (
        <div>Loading...</div>
      ) : (
        <div style={{ marginTop: 20 }}>
          {display === "Movies" ? (
            <ColumnDisplay data={movieData.results} display={display} />
          ) : (
            <ColumnDisplay data={tvData.results} display={display} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
